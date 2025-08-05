import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const categories = [
  { id: '1', title: 'Women', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop' },
  { id: '2', title: 'Men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
  { id: '3', title: 'Kids', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=150&h=150&fit=crop' },
  { id: '4', title: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=150&fit=crop' },
  { id: '5', title: 'Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop' },
  { id: '6', title: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop' },
];

export const CategoryGrid = () => (
  <View style={{ marginHorizontal: 16 }}>
    <View style={styles.row}>
      <Text style={styles.title}>Categories</Text>
      <Text style={styles.seeAll}>See All</Text>
    </View>
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.label}>{item.title}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAll: {
    fontSize: 13,
    color: '#FF9800',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
  },
});
