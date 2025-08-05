import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Header } from '../Home/Header';
import { SearchBar } from '../Home/SearchBar';
import { BannerCarousel } from '../Home/BannerCarousel';
import { CategoryGrid } from '../Home/CategoryGrid';
import { FeaturedProducts } from '../Home/FeaturedProducts';
import { QuickActions } from '../Home/QuickActions';

export const HomeScreen = () => {
  const renderHeader = () => (
    <View style={styles.content}>
      <Header />
      <SearchBar />
      <BannerCarousel />
      <CategoryGrid />
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <QuickActions />
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={[1]} // dummy data to render FeaturedProducts in renderItem
      keyExtractor={(item, index) => index.toString()}
      renderItem={() => <FeaturedProducts />}
      ListFooterComponent={renderFooter}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fefefe',
  },
  footer: {
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
});
