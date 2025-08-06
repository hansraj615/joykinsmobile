// src/api/authApi.ts
import axios from 'axios';

// ✅ Types for login and register payloads
export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone: string;
}

// ✅ Base URL for Bagisto customer APIs
const BASE_URL = 'https://api.joynkins.com/api/v1/customer';

/**
 * 🔐 Login customer using fetch (FormData works here, axios fails)
 */
export const loginCustomer = async ({ email, password }: LoginPayload) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('device_name', 'android');

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    const text = await res.text();
    console.log('✅ Login API response:', text);

    const json = JSON.parse(text);
    if (json?.token) {
      return json;
    } else {
      throw new Error('Login failed: Invalid response');
    }
  } catch (err) {
    console.error('❌ Login API fetch error:', err);
    throw err;
  }
};

/**
 * 📝 Register new customer using axios (FormData)
 */
export const registerCustomer = async ({ name, email, password, phone }: RegisterPayload) => {
  const formData = new FormData();
  formData.append('first_name', name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('password_confirmation', password);
  formData.append('phone', phone);

  try {
    const response = await axios.post(`${BASE_URL}/register`, formData, {
      headers: {
        Accept: 'application/json',
        // ❗ Don't set Content-Type for FormData
      },
    });

    console.log('✅ Register API success:', response.data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error('❌ Register API error:', error.response.data);
    } else {
      console.error('❌ Register API failed:', error.message);
    }
    throw error;
  }
};
