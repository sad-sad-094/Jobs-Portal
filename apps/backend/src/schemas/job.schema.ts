import { z } from 'zod';

const jobFiltersSchema = z.object({
  categoryId: z.string().optional(),
  experience: z.enum(['junior', 'mid', 'semi senior', 'senior']).optional(),
  modality: z.enum(['remote', 'onsite', 'hybrid']).optional(),
  search: z.string().optional(),
});

export type JobQuery = z.infer<typeof jobFiltersSchema>;

// Wrapped schema matching the shape expected by the validate middleware: { body, query }
export const jobQuerySchema = z.object({
  body: z.object({}),
  query: jobFiltersSchema,
});
