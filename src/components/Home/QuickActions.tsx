import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const QuickActions = () => {
  const actions = [
    {
      id: 'orders',
      title: 'Track Orders',
      subtitle: '2 active orders',
      icon: 'truck',
    },
    {
      id: 'wishlist',
      title: 'Wishlist',
      subtitle: '12 items saved',
      icon: 'heart',
    },
  ];

  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <TouchableOpacity key={action.id} style={styles.card}>
          <Icon name={action.icon} size={20} color="#FF9800" />
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{action.title}</Text>
            <Text style={styles.subtitle}>{action.subtitle}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 24,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  textWrapper: { marginLeft: 10 },
  title: { fontSize: 14, fontWeight: 'bold' },
  subtitle: { fontSize: 12, color: '#888' },
});
