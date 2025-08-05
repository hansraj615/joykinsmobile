// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { loginCustomer } from '../api/authApi';

type AuthContextType = {
  login: (email: string, password: string) => Promise<boolean>;
  token: string | null;
};

const AuthContext = createContext<AuthContextType>({
  login: async () => false,
  token: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

const login = async (email: string, password: string): Promise<boolean> => {
  try {
    console.log('🔑 Logging in with', email, password);
    const response = await loginCustomer({ email, password });

    console.log('✅ Login response:', response);
    return true;
  } catch (error) {
    console.log('❌ Login failed', error);
    return false;
  }
};

  return (
    <AuthContext.Provider value={{ login, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
