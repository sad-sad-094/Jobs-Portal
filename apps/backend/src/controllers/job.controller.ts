import { Request, Response, NextFunction } from 'express';
import { JobQuery } from '../schemas/job.schema';
import * as jobService from '../services/job.service';

/**
 * GET /jobs
 * Returns all jobs, optionally filtered by query string params cast to JobFilters
 * (e.g. ?modality=remote&experienceLevel=senior).
 * Delegates filtering logic to the service layer.
 */
export const queryJobs = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // Safe: Zod middleware already validated and wrote the parsed shape back onto req.query
    const filters = req.query as JobQuery;
    const data = jobService.getAllJobs(filters);
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error); // forward unexpected errors to the global error handler
  }
};

/**
 * GET /jobs/:id
 * Returns a single job by its ID.
 * Responds with 404 and a structured error body if no matching job is found.
 */
export const queryJobById = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { id } = req.params;

    const job = jobService.getJobById(id);

    if (!job) {
      // Return a field-level error consistent with the API's error envelope shape
      res.status(404).json({ success: false, errors: [{ field: 'id', message: 'Job not found' }] });
      return;
    }

    res.json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
};
