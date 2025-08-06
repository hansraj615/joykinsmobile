import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { JoykinsLogo } from '../JoykinsLogo';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { commonStyles, colors } from '../../styles/commonStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export const SignupScreen = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !phone || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      setIsLoading(true);
      // TODO: Call your signup API here
      setTimeout(() => {
        setIsLoading(false);
        Alert.alert('Success', 'Account created successfully');
        navigation.replace('Login');
      }, 1500);
    } catch (err) {
      setIsLoading(false);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={commonStyles.container}>
      <View style={styles.header}>
        <JoykinsLogo size="lg" />
        <Text style={styles.headerText}>Create your Joykins account</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Full Name"
          style={commonStyles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email"
          style={commonStyles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Phone Number"
          style={commonStyles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <View style={styles.passwordWrapper}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={commonStyles.input}
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

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Switch value={true} />
          <Text style={styles.optionText}> I agree to Terms & Privacy</Text>
        </View>

          <TouchableOpacity
            style={commonStyles.button}
            onPress={handleSignup}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={commonStyles.buttonText}>Create Account</Text>
            )}
          </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.replace('Login')}
          style={{ marginTop: 20 }}
        >
          <Text style={{ color: '#666' }}>
            Already have an account?{' '}
            <Text style={{ color: colors.primary }}>Sign In</Text>
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
  optionText: { fontSize: 14, color: '#666' },
});
