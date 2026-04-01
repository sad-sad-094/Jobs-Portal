import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Job } from '@job-portal/shared';
import { getJobById } from '../../../services/job.service';
import { ApiResponse } from '../../../types/api.types';

export const useJobDetail = (id: string): UseQueryResult<ApiResponse<Job>> => {
  return useQuery({
    queryKey: ['jobs', id],
    queryFn: () => getJobById(id),
    enabled: !!id,
  });
};
