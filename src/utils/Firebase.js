import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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

export const auth = getAuth();

