import { z } from 'zod';

export const createApplicationSchema = z.object({
  body: z.object({
    jobId: z.string().min(1, 'jobId is required'),
    userId: z.string().min(1, 'userId is required'),
    applicantName: z.string().min(4, 'applicantName is required'),
    applicantEmail: z.string().email({ message: 'applicantEmail must be a valid email' }),
    coverLetter: z.string().optional(),
  }),
});

export type CreateApplicationDTO = z.infer<typeof createApplicationSchema>['body'];
