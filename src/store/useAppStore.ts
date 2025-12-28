/**
 * Application Global State Store
 */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { User, ThemeMode } from '@/types';

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;

  // UI state
  theme: ThemeMode;
  sidebarOpen: boolean;
  notifications: Notification[];

  // Actions
  setUser: (user: User | null) => void;
  logout: () => void;
  setTheme: (theme: ThemeMode) => void;
  toggleSidebar: () => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      theme: 'light',
      sidebarOpen: true,
      notifications: [],

      // Actions
      setUser: (user) =>
        set({
          user,
          isAuthenticated: user !== null,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      setTheme: (theme) => set({ theme }),

      toggleSidebar: () =>
        set((state) => ({
          sidebarOpen: !state.sidebarOpen,
        })),

      addNotification: (notification) =>
        set((state) => ({
          notifications: [
            ...state.notifications,
            {
              ...notification,
              id: `${Date.now()}-${Math.random()}`,
            },
          ],
        })),

      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),

      clearNotifications: () => set({ notifications: [] }),
    }),
    { name: 'AppStore' }
  )
);
