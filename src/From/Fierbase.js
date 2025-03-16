// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAblCT0tarehE6aYKjbf6-qhQXO2Q5aHFw",
  authDomain: "login-babe1.firebaseapp.com",
  projectId: "login-babe1",
  storageBucket: "login-babe1.firebasestorage.app",
  messagingSenderId: "273771126266",
  appId: "1:273771126266:web:de1ad53ad32ab3fd1dd843",
  measurementId: "G-D1K0X1E9R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 export default app
// const analytics = getAnalytics(app);