import { Request, Response, NextFunction } from 'express';
import { ZodObject, ZodTypeAny } from 'zod';

// Schema shape expected by this middleware: always wraps { body, params?, query? }
type RequestSchema = ZodObject<{ body: ZodTypeAny; params?: ZodTypeAny; query?: ZodTypeAny }>;

/**
 * Express middleware factory that validates incoming requests against a Zod schema.
 *
 * The schema is expected to validate an object with three keys:
 *   - `body`   — req.body
 *   - `params` — req.params (URL path segments, e.g. /jobs/:id)
 *   - `query`  — req.query (URL search params, e.g. ?page=1)
 *
 * @param schema - A Zod schema that describes the shape of { body, params, query }
 * @returns An Express middleware function
 *
 * @example
 * router.post('/jobs', validate(createJobSchema), jobsController.create)
 */

export const validate = (schema: RequestSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Run a non-throwing parse so we can handle errors manually
    const result = schema.safeParse({ body: req.body, params: req.params, query: req.query });

    if (!result.success) {
      // Map each Zod issue to a { field, message } pair.
      // err.path is like ['body', 'title'] — we drop the first segment (body/params/query)
      // so the reported field is the actual field name relative to its section (e.g. 'title').
      const errors = result.error.issues.map((err: (typeof result.error.issues)[number]) => ({
        field: err.path.slice(1).join('.'), // e.g. ['body', 'title'] → 'title'
        message: err.message,
      }));

      // Respond with 400 Bad Request and the list of validation errors
      res.status(400).json({ success: false, errors });
      return;
    }

    // Validation passed — write coerced/transformed values back onto req
    // so controllers always receive the Zod-parsed output, not the raw input.
    req.body = result.data.body;
    next();
  };
};
