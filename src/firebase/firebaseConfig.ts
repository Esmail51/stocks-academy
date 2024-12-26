// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-ehL5MIHKNcNHH2J_8kIkvI9tfTn9X_E",
  authDomain: "strictly-stocks.firebaseapp.com",
  projectId: "strictly-stocks",
  storageBucket: "strictly-stocks.firebasestorage.app",
  messagingSenderId: "701095227141",
  appId: "1:701095227141:web:98ef8754c69909d6f8916c",
  measurementId: "G-WZVZ6R75F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);