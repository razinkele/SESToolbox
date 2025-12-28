/**
 * Marine Biodiversity Data Type Definitions
 */

// Geographic and Location Types
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface GeographicBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

// Marine Species Types
export interface MarineSpecies {
  id: string;
  scientificName: string;
  commonName?: string;
  taxonomicRank: string;
  kingdom?: string;
  phylum?: string;
  class?: string;
  order?: string;
  family?: string;
  genus?: string;
  conservationStatus?: ConservationStatus;
  habitat?: string[];
  depth?: {
    min: number;
    max: number;
    unit: 'meters' | 'feet';
  };
}

export type ConservationStatus =
  | 'LC' // Least Concern
  | 'NT' // Near Threatened
  | 'VU' // Vulnerable
  | 'EN' // Endangered
  | 'CR' // Critically Endangered
  | 'EW' // Extinct in the Wild
  | 'EX' // Extinct
  | 'DD' // Data Deficient
  | 'NE'; // Not Evaluated

// Observation Types
export interface MarineObservation {
  id: string;
  speciesId: string;
  species?: MarineSpecies;
  location: Coordinates;
  observedAt: string;
  observer?: string;
  abundance?: number;
  method?: string;
  depth?: number;
  temperature?: number;
  salinity?: number;
  metadata?: Record<string, unknown>;
}

// Dataset Types
export interface MarineDataset {
  id: string;
  name: string;
  description: string;
  source: string;
  region: string;
  bounds?: GeographicBounds;
  timeRange: {
    start: string;
    end: string;
  };
  speciesCount: number;
  observationCount: number;
  lastUpdated: string;
  license?: string;
  citation?: string;
}

// Biodiversity Metrics
export interface BiodiversityMetrics {
  speciesRichness: number; // Number of unique species
  shannonIndex: number; // Shannon diversity index
  simpsonIndex: number; // Simpson diversity index
  evenness: number; // Species evenness
  endemicSpecies: number;
  threatenedSpecies: number;
  observations: number;
}

// Visualization Data
export interface TimeSeriesData {
  date: string;
  value: number;
  category?: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
  metadata?: Record<string, unknown>;
}

export interface HeatmapData {
  location: Coordinates;
  value: number;
  label?: string;
}

// API Request/Response Types
export interface MarineDataQuery {
  region?: string;
  bounds?: GeographicBounds;
  species?: string[];
  startDate?: string;
  endDate?: string;
  conservationStatus?: ConservationStatus[];
  page?: number;
  pageSize?: number;
}

export interface MarineDataResponse<T> {
  data: T;
  total?: number;
  page?: number;
  pageSize?: number;
  message?: string;
}

export interface SpeciesListResponse {
  data: MarineSpecies[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ObservationListResponse {
  data: MarineObservation[];
  total: number;
  page: number;
  pageSize: number;
}
