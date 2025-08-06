import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useAuth } from '../contexts/AuthContext';
import { useCallback } from 'react';
import { LoginScreen } from '../components/screens/LoginScreen';
import { SignupScreen } from '../components/screens/SignupScreen';
import { HomeScreen } from '../components/screens/HomeScreen';
import { ProfileScreen } from '../components/screens/ProfileScreen';
import { ActivityIndicator, View } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { RootStackParamList, DrawerParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

const CustomDrawerContent = (
  props: DrawerContentComponentProps & { onLogout: () => void },
) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem label="Logout" onPress={props.onLogout} />
  </DrawerContentScrollView>
);

const AppDrawer = () => {
  const { logout } = useAuth();
  const renderDrawerContent = useCallback(
    (props: DrawerContentComponentProps) => (
      <CustomDrawerContent {...props} onLogout={logout} />
    ),
    [logout],
  );

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={renderDrawerContent}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export const AppNavigator = () => {
  const { token, loading } = useAuth();

  if (loading) {
    return (
      <View style={[commonStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {token ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
