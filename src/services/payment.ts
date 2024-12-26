import api from "./api";

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