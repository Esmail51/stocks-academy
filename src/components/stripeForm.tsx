import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '../services/payment';
import { createClass } from '../services/classes';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import BookingDialog from "./bookingDialog";
import { createEventInCalendar } from '../services/event';

const PaymentForm: React.FC = () => {
  const location = useLocation();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardError, setCardError] = useState<string | null>(null);
  const [cardBrand, setCardBrand] = useState<string | null>(null);
  const { date, courseId } = location.state;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const [userDetails, setUserDetails] = useState<any>({});

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

  useEffect(() => {
    const userDetailsString = Cookies.get('userDetails') || '{}';
    const userDetails = JSON.parse(userDetailsString);
    setUserDetails(userDetails);
  }, []);

  const handleCreateEvent = async () => {
    const eventDetails = {
      summary: location.state.courseName,
      description: location.state.courseName,
      start: {
        dateTime: location.state.startTime,
        timeZone: "UTC", // Adjust timezone as needed
      },
      end: {
        dateTime: location.state.endTime,
        timeZone: "UTC", // Adjust timezone as needed
      },
    };
    await createEventInCalendar(eventDetails);
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
        amount: location.state?.price + location.state?.tax,
        currency: 'usd',
      };
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
        };
        try {
          const response = await createClass(payload);
          if (response) {
            openDialog();
            console.log('Class created:', response);
            setError('Payment successful. Class created.');
            handleCreateEvent();
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
    default: 'https://t3.ftcdn.net/jpg/05/74/43/12/360_F_574431210_icdpLDlDxAfsNacnV56vIWb4pCRnaNBA.jpg',
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-4xl h-auto bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 m-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Payment Summary</h2>
              <p className="text-sm text-gray-600">
                Dear <span className="font-semibold">{userDetails ? userDetails.displayName : "User"}</span>,
              </p>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-700 mt-2">
                  <span>Course fee:</span>
                  <span>${location.state?.price}.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Tax:</span>
                  <span>${location.state?.tax}.00</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-gray-800 mt-4">
                  <span>Total payment:</span>
                  <span>${location.state?.price + location.state?.tax}.00</span>
                </div>
              </div>
            </div>

            <div>
              <BookingDialog isOpen={isDialogOpen} onClose={closeDialog} />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">Payment Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
                  <div className="relative">
                    <CardNumberElement
                      id="cardNumber"
                      className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                      onChange={handleCardChange} />
                    {cardBrand && (
                      <img
                        src={cardBrandIcons[cardBrand] || cardBrandIcons.default}
                        alt={`${cardBrand} icon`}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-5" />
                    )}
                  </div>
                  {cardError && <p className="text-red-500 text-xs mt-2">{cardError}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="cardExpiry" className="text-sm font-medium">Expiration Date (MM/YY)</label>
                    <CardExpiryElement
                      id="cardExpiry"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="cardCvc" className="text-sm font-medium">CVV / CVC Code</label>
                    <CardCvcElement
                      id="cardCvc"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4285F4] text-white p-3 rounded-md disabled:bg-gray-400"
                  disabled={!stripe || loading}
                >
                  {loading ? 'Processing...' : 'Make Payment'}
                </button>
              </form>

              {cardError && <p className="text-red-500 text-sm mt-2">{cardError}</p>}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
