// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqWwpiEnZCOH_MGw8F5hkMOJD0UYcn_wE",
  authDomain: "match-app-da453.firebaseapp.com",
  databaseURL: "https://match-app-da453-default-rtdb.firebaseio.com",
  projectId: "match-app-da453",
  storageBucket: "match-app-da453.appspot.com",
  messagingSenderId: "410291961705",
  appId: "1:410291961705:web:6804b1ea0380e31dc447f8",
  measurementId: "G-JS1GVQCGLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)