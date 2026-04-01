import { Job } from '@job-portal/shared';
import { api } from './api';
import { ApiResponse } from '../types/api.types';

export interface JobFilters {
  search?: string;
  modality?: string;
  experience?: string;
}

const buildQueryString = (filters: JobFilters): string => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });
  const query = params.toString();
  return query ? `?${query}` : '';
};

export const getJobs = (filters: JobFilters = {}): Promise<ApiResponse<Job[]>> => {
  return api<ApiResponse<Job[]>>(`/jobs${buildQueryString(filters)}`);
};

export const getJobById = (id: string): Promise<ApiResponse<Job>> => {
  return api<ApiResponse<Job>>(`/jobs/${id}`);
};
