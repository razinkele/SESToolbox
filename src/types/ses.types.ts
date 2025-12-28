/**
 * Socio-Ecological System (SES) Type Definitions
 */

// Core SES Component Types
export type SESComponentType = 'social' | 'ecological' | 'interaction';

export interface SESFactor {
  id: string;
  name: string;
  description: string;
  value: number; // 0-1 normalized value
  weight: number; // Importance weight
  category: string;
  metadata?: Record<string, unknown>;
}

export interface SocialFactor extends SESFactor {
  type: 'social';
  indicators: string[];
  stakeholders?: string[];
}

export interface EcologicalFactor extends SESFactor {
  type: 'ecological';
  species?: string[];
  habitat?: string;
  environmentalIndicators?: string[];
}

export interface Interaction {
  id: string;
  sourceId: string;
  targetId: string;
  strength: number; // -1 to 1 (negative = harmful, positive = beneficial)
  type: 'direct' | 'indirect' | 'feedback';
  description?: string;
}

export interface SESModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  socialFactors: SocialFactor[];
  ecologicalFactors: EcologicalFactor[];
  interactions: Interaction[];
  resilienceScore?: number;
  metadata?: {
    location?: string;
    region?: string;
    timeframe?: string;
    contributors?: string[];
  };
}

// Analysis Results
export interface ResilienceAnalysis {
  overallScore: number; // 0-100
  socialResilience: number;
  ecologicalResilience: number;
  interconnectedness: number;
  vulnerabilities: Vulnerability[];
  strengths: Strength[];
  recommendations: string[];
}

export interface Vulnerability {
  id: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  affectedFactors: string[];
  mitigationStrategies?: string[];
}

export interface Strength {
  id: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  reinforcementStrategies?: string[];
}

// API Request/Response Types
export interface CreateSESModelRequest {
  name: string;
  description: string;
  location?: string;
  region?: string;
}

export interface UpdateSESModelRequest {
  name?: string;
  description?: string;
  socialFactors?: SocialFactor[];
  ecologicalFactors?: EcologicalFactor[];
  interactions?: Interaction[];
}

export interface SESModelResponse {
  data: SESModel;
  message: string;
}

export interface SESModelListResponse {
  data: SESModel[];
  total: number;
  page: number;
  pageSize: number;
}
