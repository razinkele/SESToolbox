/**
 * Custom hooks for marine biodiversity data fetching
 */

import { useQuery } from '@tanstack/react-query';
import { marineApi } from '@services/api';
import type { MarineDataQuery } from '@/types';

const SPECIES_KEY = 'marine-species';
const OBSERVATIONS_KEY = 'marine-observations';
const DATASETS_KEY = 'marine-datasets';
const METRICS_KEY = 'biodiversity-metrics';

/**
 * Search marine species
 */
export function useMarineSpecies(query: MarineDataQuery) {
  return useQuery({
    queryKey: [SPECIES_KEY, query],
    queryFn: () => marineApi.searchSpecies(query),
  });
}

/**
 * Get species by ID
 */
export function useSpeciesById(id: string | undefined) {
  return useQuery({
    queryKey: [SPECIES_KEY, id],
    queryFn: () => marineApi.getSpeciesById(id!),
    enabled: !!id,
  });
}

/**
 * Get marine observations
 */
export function useObservations(query: MarineDataQuery) {
  return useQuery({
    queryKey: [OBSERVATIONS_KEY, query],
    queryFn: () => marineApi.getObservations(query),
  });
}

/**
 * Get available datasets
 */
export function useDatasets(region?: string) {
  return useQuery({
    queryKey: [DATASETS_KEY, region],
    queryFn: () => marineApi.getDatasets(region),
  });
}

/**
 * Get biodiversity metrics
 */
export function useBiodiversityMetrics(
  region: string,
  startDate?: string,
  endDate?: string
) {
  return useQuery({
    queryKey: [METRICS_KEY, region, startDate, endDate],
    queryFn: () => marineApi.getBiodiversityMetrics(region, startDate, endDate),
    enabled: !!region,
  });
}

/**
 * Get species distribution for mapping
 */
export function useSpeciesDistribution(speciesId: string | undefined) {
  return useQuery({
    queryKey: [SPECIES_KEY, speciesId, 'distribution'],
    queryFn: () => marineApi.getSpeciesDistribution(speciesId!),
    enabled: !!speciesId,
  });
}

/**
 * Get observation time series
 */
export function useObservationTimeSeries(
  speciesId: string | undefined,
  interval: 'day' | 'week' | 'month' | 'year' = 'month'
) {
  return useQuery({
    queryKey: [OBSERVATIONS_KEY, speciesId, 'timeseries', interval],
    queryFn: () => marineApi.getObservationTimeSeries(speciesId!, interval),
    enabled: !!speciesId,
  });
}
