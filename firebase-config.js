// Firebase v9+ Modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGq_JTV9xTo7hvef3OueY8GGzf3lAeOuo",
  authDomain: "raildashboard-ac29b.firebaseapp.com",
  projectId: "raildashboard-ac29b",
  storageBucket: "raildashboard-ac29b.firebasestorage.app",
  messagingSenderId: "688162390007",
  appId: "1:688162390007:web:f0d957b5f10f584b59b8f2",
  measurementId: "G-DZ09Y23XC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
