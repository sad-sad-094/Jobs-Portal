import { Job } from '@job-portal/shared';
import { jobsMock } from '../data/jobs.mock';
import { JobQuery } from '../schemas/job.schema';

export function getAllJobs(filters: JobQuery = {}): Job[] {
  // Returns all active jobs from data, excluding by 'isActive'.
  let jobs = jobsMock.filter(job => job.isActive);

  // Returns jobs filtered by category Id.
  if (filters.roleId) {
    jobs = jobs.filter(job => job.roleId === filters.roleId);
  }

  // Returns jobs filtered by experience level.
  if (filters.experience) {
    jobs = jobs.filter(job => job.experience === filters.experience);
  }

  // Returns jobs filtered by modality.
  if (filters.modality) {
    jobs = jobs.filter(job => job.modality === filters.modality);
  }

  // Returns jobs filtered by free keyword search.
  if (filters.search) {
    const term = filters.search.toLowerCase();
    jobs = jobs.filter(
      job =>
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.technologies.some(t => t.toLowerCase().includes(term)),
    );
  }

  return jobs;
}

export function getJobById(id: string): Job | undefined {
  // Returns job filtered by its Id.
  return jobsMock.find(job => job.id === id && job.isActive);
}
