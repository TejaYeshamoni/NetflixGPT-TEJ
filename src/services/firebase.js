// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-3d59f.firebaseapp.com",
  projectId: "netflixgpt-3d59f",
  storageBucket: "netflixgpt-3d59f.appspot.com",
  messagingSenderId: "469891500919",
  appId: "1:469891500919:web:c0a9bb95699df08c76ef72",
  measurementId: "G-10RCD1FPGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();