// src/api/authApi.ts
import axios from 'axios';

export interface LoginPayload {
  email: string;
  password: string;
}
export const loginCustomer = async ({ email, password }: LoginPayload) => {
  const payload = {
    email,
    password,
    device_name: 'android',
  };

  console.log('📤 Payload:', payload);

  try {
    const response = await axios.post(
      'https://api.joynkins.com/api/v1/customer/login',
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json', // ✅ Ensure it's JSON
        },
      }
    );

    console.log('✅ API success:', response.data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.log('❌ Error status:', error.response.status);
      console.log('❌ Error data:', error.response.data);
    } else {
      console.log('❌ Network or other error:', error.message);
    }
    throw error;
  }
};

