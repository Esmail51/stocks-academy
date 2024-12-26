import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '../services/payment';

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardError, setCardError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe.js has not loaded');
      return;
    }

    setLoading(true);
    setError(null);
    setCardError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setCardError('Card element not found.');
      setLoading(false);
      return;
    }

    try {
      const amount = 5000; 

      // Call your backend to create a PaymentIntent
      const response = await createPaymentIntent(amount);
      const { clientSecret } = await response.json();

      // Confirm the payment with Stripe
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (stripeError) {
        setCardError(`Payment failed: ${stripeError.message}`);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('Payment successful:', paymentIntent);
      }

    } catch (err) {
      console.error('Error:', err);
      setError('Failed to initiate payment.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">Payment Information</h2>

      {/* Card Number Field */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="cardNumber" className="text-sm font-medium text-gray-600">Card Number</label>
        <CardElement
          id="cardNumber"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {cardError && <p className="text-red-500 text-xs">{cardError}</p>}
      </div>

      {/* Expiration Date & CVC */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="expiry" className="text-sm font-medium text-gray-600">Expiration Date</label>
          <input
            type="text"
            id="expiry"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cvc" className="text-sm font-medium text-gray-600">CVC</label>
          <input
            type="text"
            id="cvc"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="CVC"
            required
          />
        </div>
      </div>

      {/* Billing Information */}
      <div className="space-y-2">
        <label htmlFor="billingZip" className="text-sm font-medium text-gray-600">Billing ZIP Code</label>
        <input
          type="text"
          id="billingZip"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter ZIP Code"
          required
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md disabled:bg-gray-400"
        disabled={!stripe || loading}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default PaymentForm;
