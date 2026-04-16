import { Role } from '@job-portal/shared';
import { api } from './api';
import { ApiResponse } from '../types/api.types';

export const getRoles = (): Promise<ApiResponse<Role[]>> => {
  return api<ApiResponse<Role[]>>('/roles');
};
