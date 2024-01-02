// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFCQnZX0JrOGwq5LFVp5yJhSI-I70ny4Q",
  authDomain: "cineflix-gpt-de85b.firebaseapp.com",
  projectId: "cineflix-gpt-de85b",
  storageBucket: "cineflix-gpt-de85b.appspot.com",
  messagingSenderId: "46349422879",
  appId: "1:46349422879:web:86a97f5c3e769340c0602a",
  measurementId: "G-S2TWMMGB9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);