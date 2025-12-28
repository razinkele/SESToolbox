/**
 * API Client Configuration
 * Base Axios instance with interceptors for authentication and error handling
 */

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import type { ApiError } from '@/types';

// Create base axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage or session
    const token = localStorage.getItem('auth_token');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const apiError: ApiError = {
      message: 'An unexpected error occurred',
      status: error.response?.status,
    };

    if (error.response) {
      // Server responded with error
      const data = error.response.data as Record<string, unknown>;

      apiError.message =
        (data['message'] as string) ||
        error.message ||
        'Server error occurred';
      apiError.code = data['code'] as string;
      apiError.details = data['details'] as Record<string, unknown>;

      // Handle specific status codes
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('auth_token');
          window.location.href = '/login';
          break;
        case 403:
          apiError.message = 'You do not have permission to perform this action';
          break;
        case 404:
          apiError.message = 'The requested resource was not found';
          break;
        case 500:
          apiError.message = 'Internal server error. Please try again later.';
          break;
      }
    } else if (error.request) {
      // Request made but no response received
      apiError.message = 'No response from server. Please check your connection.';
    } else {
      // Error in request setup
      apiError.message = error.message;
    }

    return Promise.reject(apiError);
  }
);

// Helper function for GET requests
export const get = <T>(url: string, config?: AxiosRequestConfig) => {
  return apiClient.get<T>(url, config);
};

// Helper function for POST requests
export const post = <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
  return apiClient.post<T>(url, data, config);
};

// Helper function for PUT requests
export const put = <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
  return apiClient.put<T>(url, data, config);
};

// Helper function for PATCH requests
export const patch = <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
  return apiClient.patch<T>(url, data, config);
};

// Helper function for DELETE requests
export const del = <T>(url: string, config?: AxiosRequestConfig) => {
  return apiClient.delete<T>(url, config);
};

export default apiClient;
