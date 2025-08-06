import React, { useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SplashScreen } from './src/components/screens/SplashScreen';
import { AuthProvider } from './src/contexts/AuthContext';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <AuthProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </AuthProvider>
  );
}

