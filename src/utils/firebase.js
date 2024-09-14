// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL-Y8Lq1qnr0TcuqPwjGNrLKyModRPG64",
  authDomain: "flixinsight-d94ca.firebaseapp.com",
  projectId: "flixinsight-d94ca",
  storageBucket: "flixinsight-d94ca.appspot.com",
  messagingSenderId: "869536664441",
  appId: "1:869536664441:web:0044f011d22e333d8dfda8",
  measurementId: "G-90GHKE52ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();