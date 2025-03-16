
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAblCT0tarehE6aYKjbf6-qhQXO2Q5aHFw",
  authDomain: "login-babe1.firebaseapp.com",
  projectId: "login-babe1",
  storageBucket: "login-babe1.firebasestorage.app",
  messagingSenderId: "273771126266",
  appId: "1:273771126266:web:de1ad53ad32ab3fd1dd843",
  measurementId: "G-D1K0X1E9R5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)