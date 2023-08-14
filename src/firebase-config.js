// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdQs1UYS3Ik_W-cyYgrKULrDy-LnLCrCI",
  authDomain: "chatapp-c8bf8.firebaseapp.com",
  projectId: "chatapp-c8bf8",
  storageBucket: "chatapp-c8bf8.appspot.com",
  messagingSenderId: "409498186306",
  appId: "1:409498186306:web:023f8cdd1cac283a3a73db",
  measurementId: "G-JC48CK303B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
