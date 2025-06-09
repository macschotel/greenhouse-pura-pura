// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkv7ESzK67pCVJet816sIbRY_khFZ-qu4",
  authDomain: "green-house-pura-pura.firebaseapp.com",
  projectId: "green-house-pura-pura",
  storageBucket: "green-house-pura-pura.firebasestorage.app",
  messagingSenderId: "751527151514",
  appId: "1:751527151514:web:b295bfbda4992f46ee5c23",
  measurementId: "G-PF2VVMW22K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };