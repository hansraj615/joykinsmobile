import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Summer Dress',
    price: '$89.99',
    originalPrice: '$129.99',
    rating: '4.8',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Casual Sneakers',
    price: '$149.99',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Designer Handbag',
    price: '$299.99',
    originalPrice: '$399.99',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'Casual T-shirt',
    price: '$29.99',
    rating: '4.5',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
  },
];

export const FeaturedProducts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Featured Products</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={products}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            {item.isNew && <Text style={styles.badge}>New</Text>}
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
            <Text style={styles.price}>{item.price}</Text>
            {item.originalPrice && <Text style={styles.original}>{item.originalPrice}</Text>}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, marginTop: 24 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  title: { fontSize: 16, fontWeight: 'bold' },
  seeAll: { fontSize: 14, color: '#FF9800' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 12,
    padding: 10,
    width: 140,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: { width: '100%', height: 100, borderRadius: 6, marginBottom: 6 },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF5722',
    color: 'white',
    fontSize: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  name: { fontSize: 13, fontWeight: '600', marginTop: 4 },
  rating: { fontSize: 12, marginTop: 2 },
  price: { fontWeight: 'bold', fontSize: 14, marginTop: 2 },
  original: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
