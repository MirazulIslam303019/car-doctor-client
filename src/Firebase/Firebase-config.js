// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD37znm3eAsHztlL1CynJ-y6Vn60ELGcDg",
  authDomain: "car-doctor-aeeaa.firebaseapp.com",
  projectId: "car-doctor-aeeaa",
  storageBucket: "car-doctor-aeeaa.appspot.com",
  messagingSenderId: "361620044271",
  appId: "1:361620044271:web:f1dddd5c1d4fd9b2e59e1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;