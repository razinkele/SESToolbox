/**
 * Common Type Definitions
 */

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
  details?: Record<string, unknown>;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// UI State Types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  organization?: string;
  createdAt: string;
}

export type UserRole = 'admin' | 'researcher' | 'viewer';

// Filter and Sort Types
export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  field: string;
  direction: SortDirection;
}

// Form Types
export interface FormField<T> {
  value: T;
  error?: string;
  touched: boolean;
}

export interface ValidationRule<T> {
  validate: (value: T) => boolean;
  message: string;
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'system';

// Export Types
export type ExportFormat = 'csv' | 'json' | 'geojson' | 'excel';

export interface ExportOptions {
  format: ExportFormat;
  filename: string;
  includeMetadata?: boolean;
}
