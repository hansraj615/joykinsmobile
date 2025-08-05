// ✅ App.tsx (wrap with AuthProvider)
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import { SplashScreen } from './src/components/screens/SplashScreen';
import { AuthScreen } from './src/components/screens/AuthScreen';
import { HomeScreen } from './src/components/screens/HomeScreen';
import { Navigation } from './src/components/Navigation';
import { AuthProvider } from './src/contexts/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [authComplete, setAuthComplete] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  if (!authComplete) {
    return <AuthScreen onComplete={() => setAuthComplete(true)} />;
  }

  const renderMainScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      default:
        return <View />;
    }
  };

  return (
    <AuthProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={renderMainScreen} />
          </Stack.Navigator>
          <Navigation
            currentScreen={currentScreen}
            onScreenChange={setCurrentScreen}
            cartItemCount={3}
          />
        </View>
      </NavigationContainer>
    </AuthProvider>
  );
}
