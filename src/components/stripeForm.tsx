import React, { useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '../services/payment';
import { createClass } from '../services/classes';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';

const PaymentForm: React.FC = () => {
  const location  = useLocation();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardError, setCardError] = useState<string | null>(null);
  const [cardBrand, setCardBrand] = useState<string | null>(null);
  const { date, courseId} = location.state;
  console.log('calendarId', date);
  console.log('courseId', courseId);


  const handleCardChange = (event: any) => {
    if (event.brand) {
      setCardBrand(event.brand);
    }
    if (event.error) {
      setCardError(event.error.message);
    } else {
      setCardError(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe.js has not loaded');
      return;
    }

    setLoading(true);
    setError(null);
    setCardError(null);

    const cardNumberElement = elements.getElement(CardNumberElement);

    if (!cardNumberElement) {
      setCardError('Card element not found.');
      setLoading(false);
      return;
    }

    try {
      const payload = {
        amount: 5000,
        currency: 'usd',
      }
      const clientSecret = await createPaymentIntent(payload);
      console.log('Client secret:', clientSecret);

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret.clientSecret, {
        payment_method: { card: cardNumberElement },
      });

      if (stripeError) {
        setCardError(`Payment failed: ${stripeError.message}`);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('Payment successful:', paymentIntent);
        console.log('Creating class...', Cookies.get('userDetails'));
        const payload = {
          email: JSON.parse(Cookies.get('userDetails') || '{}').email,
          name: JSON.parse(Cookies.get('userDetails') || '{}').displayName,
          classId: courseId,
        }
        try{
          const response = await createClass(payload);
          if (response) {
            console.log('Class created:', response);
            setError('Payment successful. Class created.');
          }
        
        } catch (err) {
          console.error('Error:', err);
          setError('Failed to initiate payment.');
        }
        
      }
      
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to initiate payment.');
    }

    setLoading(false);
  };

  const cardBrandIcons: { [key: string]: string } = {
    visa: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
    mastercard: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    amex: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg',
    discover: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Discover_Card_logo.svg',
    default: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Credit-Card-Generic.png',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white text-gray-800 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">Payment Information</h2>

      {/* Card Number Field */}
      <div className="relative">
  {/* Card Number Field */}
  <label htmlFor="cardNumber" className="text-sm font-medium">
    Card Number
  </label>
  <div className="relative">
    <CardNumberElement
      id="cardNumber"
      className="p-3 border border-gray-600 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#000',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#ff3860',
          },
        },
      }}
      onChange={handleCardChange}
    />
    {/* Card Brand Icon */}
    {cardBrand && (
      <img
        src={cardBrandIcons[cardBrand] || cardBrandIcons.default}
        alt={`${cardBrand} icon`}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-5"
      />
    )}
  </div>
  {cardError && <p className="text-red-500 text-xs mt-2">{cardError}</p>}
</div>

      {/* Card Expiry and CVC Fields */}
      <div className="flex gap-4">
        <div className="w-1/2">
          <label htmlFor="cardExpiry" className="text-sm font-medium">Expiration Date</label>
          <CardExpiryElement
            id="cardExpiry"
            className="p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="cardCvc" className="text-sm font-medium">Security Code</label>
          <CardCvcElement
            id="cardCvc"
            className="p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md disabled:bg-gray-600"
        disabled={!stripe || loading}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default PaymentForm;
