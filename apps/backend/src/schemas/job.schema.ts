import { z } from 'zod';
import type { ExperienceLevel, JobModality } from '@job-portal/shared';

const experienceLevels = [
  'junior',
  'mid',
  'semi-senior',
  'senior',
] as const satisfies readonly ExperienceLevel[];
const jobModalities = ['remote', 'onsite', 'hybrid'] as const satisfies readonly JobModality[];

const jobFiltersSchema = z.object({
  role: z.string().optional(),
  experience: z.enum(experienceLevels).optional(),
  modality: z.enum(jobModalities).optional(),
  search: z.string().optional(),
});

export type JobQuery = z.infer<typeof jobFiltersSchema>;

// Wrapped schema matching the shape expected by the validate middleware: { body, query }
export const jobQuerySchema = z.object({
  body: z.object({}),
  query: jobFiltersSchema,
});
