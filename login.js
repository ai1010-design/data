import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZ_VA2uWutlwhEwUSCsNfs_A-37hLWM1s",
  authDomain: "fast-data-f239c.firebaseapp.com",
  projectId: "fast-data-f239c",
  storageBucket: "fast-data-f239c.firebasestorage.app",
  messagingSenderId: "1051037961523",
  appId: "1:1051037961523:web:6a81792bbfd47168ac8246",
  measurementId: "G-H4XVSBVQT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login form
const form = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginMessage.style.color = "green";
    loginMessage.textContent = "Login successful! Redirecting...";

    // Redirect after login
    window.location.href = "dashboard.html"; // Change to your main page

  } catch (error) {
    loginMessage.style.color = "red";
    loginMessage.textContent = `Error: ${error.message}`;
  }
});
