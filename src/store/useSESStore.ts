/**
 * SES (Socio-Ecological System) State Store
 */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { SESModel, SocialFactor, EcologicalFactor, Interaction } from '@/types';

interface SESState {
  // Current working model
  currentModel: SESModel | null;
  isDirty: boolean; // Has unsaved changes

  // Actions
  setCurrentModel: (model: SESModel | null) => void;
  updateModelName: (name: string) => void;
  updateModelDescription: (description: string) => void;

  // Social factors
  addSocialFactor: (factor: SocialFactor) => void;
  updateSocialFactor: (id: string, factor: Partial<SocialFactor>) => void;
  removeSocialFactor: (id: string) => void;

  // Ecological factors
  addEcologicalFactor: (factor: EcologicalFactor) => void;
  updateEcologicalFactor: (id: string, factor: Partial<EcologicalFactor>) => void;
  removeEcologicalFactor: (id: string) => void;

  // Interactions
  addInteraction: (interaction: Interaction) => void;
  updateInteraction: (id: string, interaction: Partial<Interaction>) => void;
  removeInteraction: (id: string) => void;

  // Utility
  resetModel: () => void;
  markClean: () => void;
}

export const useSESStore = create<SESState>()(
  devtools(
    (set) => ({
      // Initial state
      currentModel: null,
      isDirty: false,

      // Actions
      setCurrentModel: (model) =>
        set({
          currentModel: model,
          isDirty: false,
        }),

      updateModelName: (name) =>
        set((state) => ({
          currentModel: state.currentModel
            ? { ...state.currentModel, name }
            : null,
          isDirty: true,
        })),

      updateModelDescription: (description) =>
        set((state) => ({
          currentModel: state.currentModel
            ? { ...state.currentModel, description }
            : null,
          isDirty: true,
        })),

      // Social factors
      addSocialFactor: (factor) =>
        set((state) => ({
          currentModel: state.currentModel
            ? {
                ...state.currentModel,
                socialFactors: [...state.currentModel.socialFactors, factor],
              }
            : null,
          isDirty: true,
        })),

      updateSocialFactor: (id, updates) =>
        set((state) => ({
          currentModel: state.currentModel
            ? {
                ...state.currentModel,
                socialFactors: state.currentModel.socialFactors.map((f) =>
                  f.id === id ? { ...f, ...updates } : f
                ),
              }
            : null,
          isDirty: true,
        })),

      removeSocialFactor: (id) =>
        set((state) => ({
          currentModel: state.currentModel
            ? {
                ...state.currentModel,
                socialFactors: state.currentModel.socialFactors.filter(
                  (f) => f.id !== id
                ),
              }
            : null,
          isDirty: true,
        })),

      // Ecological factors
      addEcologicalFactor: (factor) =>
        set((state) => ({
          currentModel: state.currentModel
            ? {
                ...state.currentModel,
                ecologicalFactors: [
                  ...state.currentModel.ecologicalFactors,
                  factor,
                ],
              }
            : null,
          isDirty: true,
        })),

      updateEcologicalFactor: (id, updates) =>
        set((state) => ({
          currentModel: state.currentModel
            ? {
                ...state.currentModel,
                ecologicalFactors: state.currentModel.ecologicalFactors.map(
                  (f) => (f.id === id ? { ...f, ...updates } : f)
                ),
              }
            : null,
          isDirty: true,
        })),

      removeEcologicalFactor: (id) =>
        set((state) => ({
          currentModel: state.currentModel
            ? {
                ...state.currentModel,
                ecologicalFactors: state.currentModel.ecologicalFactors.filter(
                  (f) => f.id !== id
                ),
              }
            : null,
          isDirty: true,
        })),

      // Interactions
      addInteraction: (interaction) =>
        set((state) => ({
          currentModel: state.currentModel
            ? {
                ...state.currentModel,
                interactions: [...state.currentModel.interactions, interaction],
              }
            : null,
          isDirty: true,
        })),

      updateInteraction: (id, updates) =>
        set((state) => ({
          currentModel: state.currentModel
            ? {
                ...state.currentModel,
                interactions: state.currentModel.interactions.map((i) =>
                  i.id === id ? { ...i, ...updates } : i
                ),
              }
            : null,
          isDirty: true,
        })),

      removeInteraction: (id) =>
        set((state) => ({
          currentModel: state.currentModel
            ? {
                ...state.currentModel,
                interactions: state.currentModel.interactions.filter(
                  (i) => i.id !== id
                ),
              }
            : null,
          isDirty: true,
        })),

      // Utility
      resetModel: () =>
        set({
          currentModel: null,
          isDirty: false,
        }),

      markClean: () => set({ isDirty: false }),
    }),
    { name: 'SESStore' }
  )
);
