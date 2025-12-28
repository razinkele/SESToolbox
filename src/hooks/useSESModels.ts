/**
 * Custom hooks for SES model data fetching
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { sesApi } from '@services/api';
import type {
  CreateSESModelRequest,
  UpdateSESModelRequest,
} from '@/types';

const QUERY_KEY = 'ses-models';

/**
 * Fetch all SES models
 */
export function useSESModels(page = 1, pageSize = 10) {
  return useQuery({
    queryKey: [QUERY_KEY, { page, pageSize }],
    queryFn: () => sesApi.getSESModels(page, pageSize),
  });
}

/**
 * Fetch a single SES model by ID
 */
export function useSESModel(id: string | undefined) {
  return useQuery({
    queryKey: [QUERY_KEY, id],
    queryFn: () => sesApi.getSESModel(id!),
    enabled: !!id,
  });
}

/**
 * Create a new SES model
 */
export function useCreateSESModel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSESModelRequest) => sesApi.createSESModel(data),
    onSuccess: () => {
      // Invalidate and refetch models list
      void queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });
}

/**
 * Update an existing SES model
 */
export function useUpdateSESModel(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateSESModelRequest) =>
      sesApi.updateSESModel(id, data),
    onSuccess: () => {
      // Invalidate specific model and list
      void queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] });
      void queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });
}

/**
 * Delete a SES model
 */
export function useDeleteSESModel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => sesApi.deleteSESModel(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });
}

/**
 * Analyze resilience of a SES model
 */
export function useAnalyzeResilience(id: string | undefined) {
  return useQuery({
    queryKey: [QUERY_KEY, id, 'resilience'],
    queryFn: () => sesApi.analyzeResilience(id!),
    enabled: !!id,
  });
}
