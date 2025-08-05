import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const SearchBar = () => (
  <View style={styles.container}>
    <Icon name="search" size={18} color="#aaa" />
    <TextInput
      placeholder="Search products..."
      style={styles.input}
      placeholderTextColor="#aaa"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    marginHorizontal: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 16,
  },
  input: {
    marginLeft: 8,
    fontSize: 14,
    flex: 1,
  },
});
