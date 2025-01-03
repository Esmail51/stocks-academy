// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuRfcoPDzRvVhYuVnn6JjPTyjwExWejdc",
  authDomain: "strictly-stocks-cbebc.firebaseapp.com",
  projectId: "strictly-stocks-cbebc",
  storageBucket: "strictly-stocks-cbebc.firebasestorage.app",
  messagingSenderId: "790843306622",
  appId: "1:790843306622:web:d49e0b5f0b44c1e395de2f",
  measurementId: "G-6DH8P6ZVTW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);