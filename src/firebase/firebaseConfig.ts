// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-ehL5MIHKNcNHH2J_8kIkvI9tfTn9X_E",
  authDomain: "strictly-stocks.firebaseapp.com",
  projectId: "strictly-stocks",
  storageBucket: "strictly-stocks.firebasestorage.app",
  messagingSenderId: "701095227141",
  appId: "1:701095227141:web:98ef8754c69909d6f8916c",
  measurementId: "G-WZVZ6R75F7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);