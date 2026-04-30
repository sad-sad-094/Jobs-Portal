import { ApiError } from '../types/api.types';

const BASE_URL = import.meta.env.VITE_API_URL;

export const api = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    const error: ApiError =
      typeof data?.message === 'string' ? data : { message: 'Unknown API error' };
    throw error;
  }

  // Response shape is not validated at runtime; callers are responsible for schema correctness
  return data as T;
};
