// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { loginCustomer } from '../api/authApi';

type AuthContextType = {
  login: (email: string, password: string) => Promise<boolean>;
  token: string | null;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  login: async () => false,
  token: null,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log('🔑 Logging in with', email, password);
      const response = await loginCustomer({ email, password });
      const receivedToken =
        response?.token ||
        // some endpoints nest the token inside a data object
        response?.data?.token;

      if (receivedToken) {
        setToken(receivedToken);
        console.log('✅ Login response:', response);
        return true;
      }

      return false;
    } catch (error) {
      console.log('❌ Login failed', error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
