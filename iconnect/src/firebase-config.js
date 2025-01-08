// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBEh54qCXaGXH9OsltGxvqEOR2Vc1nXI0Y",
  authDomain: "login-form-e8d35.firebaseapp.com",
  projectId: "login-form-e8d35",
  storageBucket: "login-form-e8d35.firebasestorage.app",
  messagingSenderId: "947071646125",
  appId: "1:947071646125:web:47f1069f22cc8a6c260924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);