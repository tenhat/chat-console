import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      primaryColor: '#3b82f6',
      setPrimaryColor: (color) => set({ primaryColor: color }),
    }),
    { name: 'theme-storage' },
  ),
);
