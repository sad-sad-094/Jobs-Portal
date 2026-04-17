import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { Application } from '@job-portal/shared';
import { applyToJob, CreateApplicationPayload } from '../../../services/application.service';
import { ApiResponse } from '../../../types/api.types';

export const useApply = (): UseMutationResult<
  ApiResponse<Application>,
  Error,
  CreateApplicationPayload
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: applyToJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
};
