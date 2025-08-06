import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { JoykinsLogo } from '../JoykinsLogo';
import { useAuth } from '../../contexts/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    try {
      setIsLoading(true);
      const success = await login(email, password);
 
      setIsLoading(false);

      if (success) {
        Alert.alert('Login Successful');
        navigation.replace('Home');
      } else {
        Alert.alert('Login Failed', 'Invalid credentials');
      }
    } catch (err) {
      setIsLoading(false);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <JoykinsLogo size="lg" />
        <Text style={styles.headerText}>Welcome Back!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={styles.input}
        />

        <View style={styles.passwordWrapper}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.icon}
          >
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.options}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Switch value={true} />
            <Text style={styles.optionText}> Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={[styles.optionText, { color: '#FF9800' }]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{ marginTop: 20 }}
        >
          <Text style={{ color: '#666' }}>
            Don’t have an account? <Text style={{ color: '#FF9800' }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: {
    backgroundColor: '#45B2E0',
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerText: { color: 'white', fontSize: 16, marginTop: 10 },
  form: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 14,
    backgroundColor: '#fff',
  },
  passwordWrapper: { position: 'relative' },
  icon: {
    position: 'absolute',
    right: 12,
    top: '30%',
    padding: 8,
    zIndex: 1,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionText: { fontSize: 14, color: '#666' },
  button: {
    backgroundColor: '#FF9800',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
