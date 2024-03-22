// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCreA4RhdzuW2OHTswQOXSsLUV0UplbCL8",
  authDomain: "to-do-app-d759e.firebaseapp.com",
  projectId: "to-do-app-d759e",
  storageBucket: "to-do-app-d759e.appspot.com",
  messagingSenderId: "58576154459",
  appId: "1:58576154459:web:cbefa4f7c7a8d92b53b47e",
  measurementId: "G-8R5XXN7RSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { app, analytics, db }; // Export the Firebase app, analytics, and Firestore instance



