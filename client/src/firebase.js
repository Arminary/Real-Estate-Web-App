// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-63a87.firebaseapp.com",
  projectId: "real-estate-63a87",
  storageBucket: "real-estate-63a87.appspot.com",
  messagingSenderId: "31429948742",
  appId: "1:31429948742:web:5635b7dfd6f08015cfe147"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);