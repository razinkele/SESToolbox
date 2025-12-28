/**
 * SES (Socio-Ecological System) API Endpoints
 */

import { get, post, put, del } from './client';
import type {
  SESModelResponse,
  SESModelListResponse,
  CreateSESModelRequest,
  UpdateSESModelRequest,
  ResilienceAnalysis,
} from '@/types';

const BASE_PATH = '/ses/models';

/**
 * Get all SES models with pagination
 */
export const getSESModels = async (page = 1, pageSize = 10) => {
  const response = await get<SESModelListResponse>(BASE_PATH, {
    params: { page, pageSize },
  });
  return response.data;
};

/**
 * Get a single SES model by ID
 */
export const getSESModel = async (id: string) => {
  const response = await get<SESModelResponse>(`${BASE_PATH}/${id}`);
  return response.data;
};

/**
 * Create a new SES model
 */
export const createSESModel = async (data: CreateSESModelRequest) => {
  const response = await post<SESModelResponse>(BASE_PATH, data);
  return response.data;
};

/**
 * Update an existing SES model
 */
export const updateSESModel = async (id: string, data: UpdateSESModelRequest) => {
  const response = await put<SESModelResponse>(`${BASE_PATH}/${id}`, data);
  return response.data;
};

/**
 * Delete a SES model
 */
export const deleteSESModel = async (id: string) => {
  const response = await del<{ message: string }>(`${BASE_PATH}/${id}`);
  return response.data;
};

/**
 * Analyze resilience of a SES model
 */
export const analyzeResilience = async (id: string) => {
  const response = await post<{ data: ResilienceAnalysis }>(
    `${BASE_PATH}/${id}/analyze`,
    {}
  );
  return response.data;
};

/**
 * Export SES model data
 */
export const exportSESModel = async (
  id: string,
  format: 'json' | 'csv' | 'excel'
) => {
  const response = await get<Blob>(`${BASE_PATH}/${id}/export`, {
    params: { format },
    responseType: 'blob',
  });
  return response.data;
};
