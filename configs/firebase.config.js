// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "module-50-bc77a.firebaseapp.com",
  projectId: "module-50-bc77a",
  storageBucket: "module-50-bc77a.firebasestorage.app",
  messagingSenderId: "690986159912",
  appId: "1:690986159912:web:6105a356d387a135fc0a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)