import { create } from 'zustand';

type ThemeState = {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  fetchTheme: () => Promise<void>;
};

type DashboardData = {
  searchData: Array<{ name: string; searches: number }>;
  userActionData: Array<{ name: string; value: number }>;
  userTrendData: Array<{ name: string; users: number }>;
};

type DashboardState = {
  data: DashboardData | null;
  isLoading: boolean;
  error: string | null;
  fetchDashboardData: () => Promise<void>;
};

export const useThemeStore = create<ThemeState>((set) => ({
  primaryColor: '#3b82f6',
  setPrimaryColor: async (color) => {
    set({ primaryColor: color });
    try {
      await fetch('/api/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ primaryColor: color }),
      });
    } catch (error) {
      console.error('Failed to update primary color', error);
    }
  },
  fetchTheme: async () => {
    try {
      const response = await fetch('/api/theme');
      const data = await response.json();
      set({ primaryColor: data.primaryColor });
    } catch (error) {
      console.error('Failed to fetch theme data', error);
    }
  },
}));

export const useDashboardStore = create<DashboardState>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchDashboardData: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch('/api/dashboard');
      const data = await response.json();
      set({ data, isLoading: false, error: null });
    } catch (error) {
      set({
        isLoading: false,
        error: `Failed to fetch dashboard data: ${error}`,
      });
    }
  },
}));
