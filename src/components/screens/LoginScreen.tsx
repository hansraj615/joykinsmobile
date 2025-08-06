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
import { commonStyles, colors } from '../../styles/commonStyles';

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
      } else {
        Alert.alert('Login Failed', 'Invalid credentials');
      }
    } catch (err) {
      setIsLoading(false);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={commonStyles.container}>
      <View style={styles.header}>
        <JoykinsLogo size="lg" />
        <Text style={styles.headerText}>Welcome Back!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={commonStyles.input}
        />

        <View style={styles.passwordWrapper}>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={[commonStyles.input, { paddingRight: 45 }]}
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
            <Text style={[styles.optionText, { color: colors.primary }]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={commonStyles.button}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={commonStyles.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{ marginTop: 20 }}
        >
          <Text style={{ color: '#666' }}>
            Don’t have an account? <Text style={{ color: colors.primary }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.accent,
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerText: { color: 'white', fontSize: 16, marginTop: 10 },
  form: { padding: 20 },
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
});
