import React from 'react';
import { View, Text } from 'react-native';
import { JoykinsLogo } from '../JoykinsLogo';
import { commonStyles } from '../../styles/commonStyles';

export const HomeScreen = () => (
  <View style={[commonStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
    <JoykinsLogo size="lg" />
    <Text style={{ marginTop: 16, fontSize: 18 }}>Welcome back</Text>
  </View>
);
