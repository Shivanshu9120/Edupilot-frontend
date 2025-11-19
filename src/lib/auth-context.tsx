'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  documentId: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  is_onboarded?: boolean;
  role?: {
    id: number;
    name: string;
    type: string;
  };
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Load auth state from localStorage on mount
    const storedToken = localStorage.getItem('edupilot_jwt');
    const storedUser = localStorage.getItem('edupilot_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('edupilot_jwt', newToken);
    localStorage.setItem('edupilot_user', JSON.stringify(newUser));
  };

  const logout = () => {
    // Clear state
    setToken(null);
    setUser(null);
    
    // Clear all localStorage items related to auth
    localStorage.removeItem('edupilot_jwt');
    localStorage.removeItem('edupilot_user');
    
    // Redirect to login page (using window.location.href for full page reload)
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token && !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

