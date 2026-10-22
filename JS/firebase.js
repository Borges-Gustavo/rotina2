// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5-974mJ4f9eX_tGTmdf5Ufa2Lq2fXjNI",
  authDomain: "project-5456599948464232672.firebaseapp.com",
  databaseURL: "https://project-5456599948464232672-default-rtdb.firebaseio.com",
  projectId: "project-5456599948464232672",
  storageBucket: "project-5456599948464232672.firebasestorage.app",
  messagingSenderId: "114109783215",
  appId: "1:114109783215:web:2e76a403e660233d03885a",
  measurementId: "G-LQJPRDFECY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);