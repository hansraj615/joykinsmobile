// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginCustomer, logoutCustomer } from '../api/authApi';

type AuthContextType = {
  login: (email: string, password: string) => Promise<boolean>;
  token: string | null;
  logout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  login: async () => false,
  token: null,
  logout: async () => {},
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
      } finally {
        setLoading(false);
      }
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log('🔑 Logging in with', email, password);
      const response = await loginCustomer({ email, password });
      const receivedToken =
        response?.token ||
        // some endpoints nest the token inside a data object
        response?.data?.token;

      if (receivedToken) {
        await AsyncStorage.setItem('token', receivedToken);
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

  const logout = async () => {
    try {
      if (token) {
        await logoutCustomer(token);
      }
    } catch (error) {
      console.log('❌ Logout failed', error);
    } finally {
      await AsyncStorage.removeItem('token');
      setToken(null);
    }
  };

  return (
    <AuthContext.Provider value={{ login, token, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
