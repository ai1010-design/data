// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

// Handle registration
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Stop refresh

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const pin = document.getElementById("pin").value.trim();

  if (pin.length !== 4) {
    alert("PIN must be exactly 4 digits.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful!");
    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
