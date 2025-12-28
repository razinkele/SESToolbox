/**
 * Marine Biodiversity Data API Endpoints
 */

import { get } from './client';
import type {
  MarineDataQuery,
  SpeciesListResponse,
  ObservationListResponse,
  MarineDataset,
  BiodiversityMetrics,
  MarineSpecies,
} from '@/types';

const SPECIES_PATH = '/marine/species';
const OBSERVATIONS_PATH = '/marine/observations';
const DATASETS_PATH = '/marine/datasets';
const METRICS_PATH = '/marine/metrics';

/**
 * Search marine species with filters
 */
export const searchSpecies = async (query: MarineDataQuery) => {
  const response = await get<SpeciesListResponse>(SPECIES_PATH, {
    params: query,
  });
  return response.data;
};

/**
 * Get species by ID
 */
export const getSpeciesById = async (id: string) => {
  const response = await get<{ data: MarineSpecies }>(`${SPECIES_PATH}/${id}`);
  return response.data;
};

/**
 * Get species observations with filters
 */
export const getObservations = async (query: MarineDataQuery) => {
  const response = await get<ObservationListResponse>(OBSERVATIONS_PATH, {
    params: query,
  });
  return response.data;
};

/**
 * Get available marine datasets
 */
export const getDatasets = async (region?: string) => {
  const response = await get<{ data: MarineDataset[] }>(DATASETS_PATH, {
    params: { region },
  });
  return response.data;
};

/**
 * Get biodiversity metrics for a region
 */
export const getBiodiversityMetrics = async (
  region: string,
  startDate?: string,
  endDate?: string
) => {
  const response = await get<{ data: BiodiversityMetrics }>(METRICS_PATH, {
    params: { region, startDate, endDate },
  });
  return response.data;
};

/**
 * Get species distribution data for mapping
 */
export const getSpeciesDistribution = async (speciesId: string) => {
  const response = await get<{
    data: Array<{ latitude: number; longitude: number; count: number }>;
  }>(`${SPECIES_PATH}/${speciesId}/distribution`);
  return response.data;
};

/**
 * Get time series data for species observations
 */
export const getObservationTimeSeries = async (
  speciesId: string,
  interval: 'day' | 'week' | 'month' | 'year' = 'month'
) => {
  const response = await get<{
    data: Array<{ date: string; count: number }>;
  }>(`${OBSERVATIONS_PATH}/timeseries`, {
    params: { speciesId, interval },
  });
  return response.data;
};
