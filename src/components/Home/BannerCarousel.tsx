import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const BannerCarousel = () => (
  <View style={styles.banner}>
    <Image
      source={{ uri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop' }}
      style={styles.image}
    />
    <View style={styles.overlay}>
      <Text style={styles.title}>Summer Collection</Text>
      <Text style={styles.subtitle}>Up to 50% Off</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  banner: {
    height: 180,
    borderRadius: 12,
    marginHorizontal: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,0,100,0.3)',
    padding: 16,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontWeight: '600',
  },
});
