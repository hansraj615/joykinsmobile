// src/screens/LoginTestScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';

export const LoginTestScreen = () => {
  const [email, setEmail] = useState('hansraj615@gmail.com');
  const [password, setPassword] = useState('Saggy123@');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const payload = {
      email,
      password,
      device_name: 'android',
    };

    console.log('📤 Sending login payload:', payload);

    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.joynkins.com/api/v1/customer/login',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      console.log('✅ Login successful:', response.data);
      Alert.alert('Success', 'Logged in successfully!');
    } catch (error: any) {
      console.error('❌ Login failed:', error.response?.data || error.message);
      Alert.alert('Login Failed', JSON.stringify(error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Test</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 24, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 12,
    padding: 12,
  },
  button: {
    backgroundColor: '#FF9800',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
