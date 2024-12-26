import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Qa9daEiFF47S4fJhxQQXgFcMWY7i1rgTfzOfmVlKeizYmDqpK43Fdmdbhx7s0ATYQyIpxVOB4nKLbMjiyjl0KAF00uTpJebB9');

const StripeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
