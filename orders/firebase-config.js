// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.VITE_API_KEY,
  authDomain: import.meta.VITE_AUTH_DOMAIN,
  projectId: "orders-2ce6e",
  storageBucket: "orders-2ce6e.appspot.com",
  messagingSenderId: "604203765707",
  appId: import.meta.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
