// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: "import.meta.env.FIREBASE_API_KEY",
  apiKey:"AIzaSyDxXNboypAHAiOUENEctE0qsEB2tPffxJ0",
  authDomain: "auth-app-cf6b9.firebaseapp.com",
  projectId: "auth-app-cf6b9",
  storageBucket: "auth-app-cf6b9.appspot.com",
  messagingSenderId: "478830482826",
  appId: "1:478830482826:web:e60ee4c099e74667986473"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);