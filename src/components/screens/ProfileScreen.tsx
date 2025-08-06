import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { commonStyles } from '../../styles/commonStyles';

export const ProfileScreen = () => {
  const { logout } = useAuth();
  return (
    <View style={[commonStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Profile</Text>
      <TouchableOpacity style={commonStyles.button} onPress={logout}>
        <Text style={commonStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
