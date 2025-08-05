
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const JoykinsLogo = ({ size = 'md' }) => {
  const fontSizes = {
    sm: 18,
    md: 22,
    lg: 28,
    xl: 34
  };

  return (
    <View style={styles.logoContainer}>
      <Text style={[styles.letter, { color: '#2196F3', fontSize: fontSizes[size] }]}>J</Text>
      <Text style={[styles.letter, { color: '#2196F3', fontSize: fontSizes[size] }]}>o</Text>
      <Text style={[styles.letter, { color: '#FF9800', fontSize: fontSizes[size] }]}>y</Text>
      <Text style={[styles.letter, { color: '#FF9800', fontSize: fontSizes[size] }]}>k</Text>
      <Text style={[styles.letter, { color: '#4CAF50', fontSize: fontSizes[size] }]}>i</Text>
      <Text style={[styles.letter, { color: '#4CAF50', fontSize: fontSizes[size] }]}>n</Text>
      <Text style={[styles.letter, { color: '#4CAF50', fontSize: fontSizes[size] }]}>s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: { flexDirection: 'row' },
  letter: { fontWeight: 'bold', marginHorizontal: 1 }
});
