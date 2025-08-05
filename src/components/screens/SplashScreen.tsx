
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { JoykinsLogo } from '../JoykinsLogo';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name="shopping-bag" size={40} color="#fff" />
      </View>

      <View style={{ marginBottom: 8 }}>
        <JoykinsLogo size="xl" />
      </View>

      <Text style={styles.subtitle}>Fashion & Lifestyle</Text>

      <View style={styles.pulseContainer}>
        {[0, 1, 2].map((i) => (
          <View key={i} style={[styles.pulseDot, { opacity: 0.6 - i * 0.2 }]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45B2E0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconWrapper: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 40
  },
  pulseContainer: {
    flexDirection: 'row',
    gap: 8
  },
  pulseDot: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 3
  }
});
