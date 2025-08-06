import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { fetchProducts } from '../../api/productsApi';

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    load();
  }, []);

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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item?.base_image?.medium_image_url && (
              <Image
                source={{ uri: item.base_image.medium_image_url }}
                style={styles.image}
              />
            )}
            <Text style={styles.name}>{item.name}</Text>
            {item?.reviews?.average_rating && (
              <Text style={styles.rating}>⭐ {item.reviews.average_rating}</Text>
            )}
            <Text style={styles.price}>
              {item.formatted_special_price || item.formatted_price}
            </Text>
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
  name: { fontSize: 13, fontWeight: '600', marginTop: 4 },
  rating: { fontSize: 12, marginTop: 2 },
  price: { fontWeight: 'bold', fontSize: 14, marginTop: 2 },
});
