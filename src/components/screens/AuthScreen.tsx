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


type AuthScreenProps = {
  onComplete: () => void;
};

export const AuthScreen = ({ onComplete }: AuthScreenProps) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

const handleLogin = async () => {
  console.log('🔑 Logging in with', email, password);

  if (!email || !password) {
    Alert.alert('Error', 'Please fill all fields');
    return;
  }

  try {
    setIsLoading(true);
    const success = await login(email, password);
    console.log(success);
    setIsLoading(false);

    if (success) {
      Alert.alert('Success', 'You are now logged in!');
      onComplete();
    } else {
       console.log('Login failed', 'Invalid credentials or network issue');
      Alert.alert('Login failed', 'Invalid credentials or network issue');
    }
  } catch (err) {
    setIsLoading(false);
    Alert.alert('Error', 'Unexpected error occurred');
  }
};





  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <JoykinsLogo size="lg" />
        <Text style={styles.headerText}>Sign in to continue shopping</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setTab('login')}
          style={[styles.tabButton, tab === 'login' && styles.activeTab]}
        >
          <Text style={[styles.tabText, tab === 'login' && styles.activeTabText]}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab('register')}
          style={[styles.tabButton, tab === 'register' && styles.activeTab]}
        >
          <Text style={[styles.tabText, tab === 'register' && styles.activeTabText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        {tab === 'login' ? (
          <>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <View style={styles.passwordWrapper}>
              <TextInput
                placeholder="Password"
                secureTextEntry={!showPassword}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
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
                <Text style={[styles.optionText, { color: '#FF9800' }]}>
                  Forgot password?
                </Text>
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
          </>
        ) : (
          <>
            <TextInput placeholder="Full Name" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Phone Number" style={styles.input} />
            <View style={styles.passwordWrapper}>
              <TextInput
                placeholder="Password"
                secureTextEntry={!showPassword}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.icon}
              >
                <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#999" />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Switch value={true} />
              <Text style={styles.optionText}> I agree to Terms & Privacy</Text>
            </View>

            <TouchableOpacity style={styles.button} disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Create Account</Text>
              )}
            </TouchableOpacity>
          </>
        )}

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: {
    backgroundColor: '#45B2E0',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerText: { color: 'white', opacity: 0.9, marginTop: 8 },
  tabContainer: { flexDirection: 'row', marginTop: 20 },
  tabButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeTab: { borderColor: '#FF9800' },
  tabText: { fontSize: 16, color: '#999' },
  activeTabText: { color: '#FF9800', fontWeight: 'bold' },
  form: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  passwordWrapper: { position: 'relative' },
  icon: { position: 'absolute', right: 12, top: 10 },
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
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: { flex: 1, height: 1, backgroundColor: '#ccc' },
  dividerText: {
    marginHorizontal: 10,
    color: '#999',
    fontSize: 13,
  },
  socialButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  socialButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 6,
    marginHorizontal: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  socialButtonText: { fontSize: 14, fontWeight: '600' },
});
