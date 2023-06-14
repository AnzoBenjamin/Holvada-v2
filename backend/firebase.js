// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBru8KBJ--EgLaHfwPGxXU2UfygYLPHgI",
  authDomain: "holvada.firebaseapp.com",
  projectId: "holvada",
  storageBucket: "holvada.appspot.com",
  messagingSenderId: "201133205299",
  appId: "1:201133205299:web:7cfaeb4606adaa7850c046",
  measurementId: "G-Y6PRWVRVV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);