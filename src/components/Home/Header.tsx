import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { JoykinsLogo } from '../JoykinsLogo';
import Icon from 'react-native-vector-icons/Feather';

export const Header = () => (
  <View style={styles.container}>
    <JoykinsLogo size="md" />
    <Icon name="bell" size={20} color="#666" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
