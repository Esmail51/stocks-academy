// src/components/BookingDialog.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingDialog: React.FC<BookingDialogProps> = ({ isOpen, onClose }) => {
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setIsBooking(true);
      setTimeout(() => {
        setIsConfirmed(true);
        setIsBooking(false);
        setTimeout(() => {
            navigate("/courses");
        }, 2000);
      }, 5000); 
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
        <div className="text-xl mb-4">Booking Confirmation</div>
        <div className="relative inline-block">
          <div className={`w-16 h-16 border-4 border-gray-300 rounded-full ${isBooking ? 'animate-spin' : ''}`}>
            {isConfirmed && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 text-3xl">
                ✔
              </div>
            )}
          </div>
        </div>
        <div className="mt-4">
          {isBooking && <span>Processing...</span>}
          {isConfirmed && !isBooking && <span>Booking Confirmed!</span>}
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingDialog;
