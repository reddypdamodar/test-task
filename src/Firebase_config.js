// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_MY_API_KEY,
  authDomain: "task2-f8661.firebaseapp.com",
  projectId: "task2-f8661",
  storageBucket: "task2-f8661.appspot.com",
  messagingSenderId: "1028142595011",
  appId: "1:1028142595011:web:620ce15c2f161b0bf41b76",
  measurementId: "G-Y9B8SWRVYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
