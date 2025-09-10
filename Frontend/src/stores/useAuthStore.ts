import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
  clearError: () => void;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          const response = await axios.post(`${API_BASE_URL}/authenticate/me`, {
            email,
            password,
          });

          if (response.data && response.data.user) {
            const user = response.data.user;
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false,
              error: null 
            });
            return true;
          } else {
            set({ 
              error: 'Invalid credentials', 
              isLoading: false 
            });
            return false;
          }
        } catch (error: any) {
          const errorMessage = error.response?.data?.message || 'Authentication failed';
          set({ 
            error: errorMessage, 
            isLoading: false,
            isAuthenticated: false,
            user: null 
          });
          return false;
        }
      },

      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false, 
          error: null 
        });
      },

      checkAuth: async () => {
        set({ isLoading: true });
        
        try {
          const response = await axios.get(`${API_BASE_URL}/authenticate/me`);
          
          if (response.data && response.data.user) {
            const user = response.data.user;
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false,
              error: null 
            });
            return true;
          } else {
            set({ 
              user: null, 
              isAuthenticated: false, 
              isLoading: false 
            });
            return false;
          }
        } catch (error) {
          set({ 
            user: null, 
            isAuthenticated: false, 
            isLoading: false,
            error: null 
          });
          return false;
        }
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);