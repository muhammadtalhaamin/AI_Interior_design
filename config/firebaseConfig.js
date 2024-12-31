// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-interior-design-6f91a.firebaseapp.com",
  projectId: "ai-interior-design-6f91a",
  storageBucket: "ai-interior-design-6f91a.firebasestorage.app",
  messagingSenderId: "990411760415",
  appId: "1:990411760415:web:7913d928a4c3807980462a",
  measurementId: "G-6LPJE7XZ9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)