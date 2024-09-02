// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-817b2.firebaseapp.com",
  projectId: "mern-estate-817b2",
  storageBucket: "mern-estate-817b2.appspot.com",
  messagingSenderId: "232156959314",
  appId: "1:232156959314:web:ad34f9c7cc4d5613a6c58b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
