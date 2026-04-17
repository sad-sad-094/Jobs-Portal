import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Application } from '@job-portal/shared';
import { getUserApplications } from '../../../services/application.service';
import { ApiResponse } from '../../../types/api.types';

export const useApplications = (userId: string): UseQueryResult<ApiResponse<Application[]>> => {
  return useQuery({
    queryKey: ['applications', userId],
    queryFn: () => getUserApplications(userId),
    enabled: !!userId,
  });
};
