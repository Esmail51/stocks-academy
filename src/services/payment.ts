import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:5000/api',
    baseURL: 'https://stripe-payment-gateway-p7wz.onrender.com/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  api.interceptors.response.use(
    response => response,
    error => {
      console.error('API Error:', error);
      return Promise.reject(error);
    }
  );
  
export const createPaymentIntent = async (payload: any) => {
    try {
      const response = await api.post('/create-payment-intent', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data; // The response should contain the clientSecret
    } catch (error) {
      console.error('Failed to create payment intent:', error);
      throw error;
    }
  };