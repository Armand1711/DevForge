// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzy8A08N0QmnwZbA4XqdZ3yGgxhaiY0gs",
  authDomain: "devforge-54199.firebaseapp.com",
  projectId: "devforge-54199",
  storageBucket: "devforge-54199.appspot.com",
  messagingSenderId: "502904312722",
  appId: "1:502904312722:web:06c50bb0716229fdcfe74b",
  measurementId: "G-WEV6HFWX55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Optionally, you can add other Firebase services here
// import { getFirestore } from "firebase/firestore";
// const db = getFirestore(app);

// Export the initialized app and any services you want to use
export { app, analytics }; // Add other exports as needed (e.g., db)
