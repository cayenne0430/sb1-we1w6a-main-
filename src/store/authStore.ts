import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  type: 'influencer' | 'company';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, type?: 'influencer' | 'company') => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string, type: 'influencer' | 'company' = 'influencer') => {
        // TODO: Implement actual API call
        // This is a mock implementation
        if (email && password) {
          const mockUser = {
            id: '1',
            email,
            name: type === 'company' ? '株式会社サンプル' : 'テストユーザー',
            type,
          };
          set({ user: mockUser, isAuthenticated: true });
        } else {
          throw new Error('Invalid credentials');
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated 
      }),
      // 10分後に自動的にログアウト
      getStorage: () => ({
        getItem: (name) => {
          const value = localStorage.getItem(name);
          if (!value) return null;

          const data = JSON.parse(value);
          const storedTime = data.timestamp;
          const currentTime = new Date().getTime();
          
          // 10分 = 600000ミリ秒
          if (currentTime - storedTime > 600000) {
            localStorage.removeItem(name);
            return null;
          }
          
          return value;
        },
        setItem: (name, value) => {
          const data = JSON.parse(value);
          data.timestamp = new Date().getTime();
          localStorage.setItem(name, JSON.stringify(data));
        },
        removeItem: (name) => localStorage.removeItem(name),
      })
    }
  )
);