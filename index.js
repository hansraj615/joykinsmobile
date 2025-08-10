/**
 * @format
 */
import 'react-native-gesture-handler'; // ✅ must be first import
import 'react-native-reanimated'; // ✅ reanimated import here

import React from 'react';
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';

function Root() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  );
}

AppRegistry.registerComponent(appName, () => Root);
