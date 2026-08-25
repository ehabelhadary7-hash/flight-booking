// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0rZa7aot2cgV-4kcpEELT6-OzMV8fpo8",
  authDomain: "look-stor.firebaseapp.com",
  projectId: "look-stor",
  storageBucket: "look-stor.firebasestorage.app",
  messagingSenderId: "943738196098",
  appId: "1:943738196098:web:69fabc54c5829443fbe49b",
  measurementId: "G-Z633G60RZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);