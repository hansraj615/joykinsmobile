
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Navigation = ({ currentScreen, onScreenChange, cartItemCount = 0 }) => {
  const navItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'categories', icon: 'search', label: 'Search' },
    { id: 'cart', icon: 'shopping-bag', label: 'Cart', badge: cartItemCount },
    { id: 'wishlist', icon: 'heart', label: 'Wishlist' },
    { id: 'profile', icon: 'user', label: 'Profile' },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isActive = currentScreen === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => onScreenChange(item.id)}
            style={styles.button}
          >
            <View style={styles.iconWrapper}>
              <Icon name={item.icon} size={24} color={isActive ? '#FF9800' : '#888'} />
              {item.badge > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.label, { color: isActive ? '#FF9800' : '#888' }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee'
  },
  button: { alignItems: 'center' },
  iconWrapper: { position: 'relative' },
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#FF9800',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 12,
    marginTop: 4
  }
});
