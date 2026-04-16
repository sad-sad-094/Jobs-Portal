import { Application } from '@job-portal/shared';
import { api } from './api';
import { ApiResponse } from '../types/api.types';

export interface CreateApplicationPayload {
  jobId: string;
  userId: string;
  applicantName: string;
  applicantEmail: string;
  coverLetter?: string;
}

export const applyToJob = (
  payload: CreateApplicationPayload,
): Promise<ApiResponse<Application>> => {
  return api<ApiResponse<Application>>('/applications', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

export const getUserApplications = (userId: string): Promise<ApiResponse<Application[]>> => {
  return api<ApiResponse<Application[]>>(`/applications?userId=${userId}`);
};
