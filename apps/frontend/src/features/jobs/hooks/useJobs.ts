import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Job } from '@job-portal/shared';
import { getJobs, JobFilters } from '../../../services/job.service';
import { ApiResponse } from '../../../types/api.types';

export const useJobs = (filters: JobFilters = {}): UseQueryResult<ApiResponse<Job[]>> => {
  return useQuery({
    queryKey: ['jobs', filters],
    queryFn: () => getJobs(filters),
  });
};
