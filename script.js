// Firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Form submission
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const pin = document.getElementById("pin").value;

  try {
    // 1️⃣ Create user with email/password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // 2️⃣ Save username and PIN in Firestore
    await setDoc(doc(db, "users", uid), {
      username,
      pin
    });

    message.style.color = "green";
    message.textContent = "Registration successful!";

    // 3️⃣ Optional: redirect to another page
    // window.location.href = "dashboard.html";

  } catch (error) {
    console.error(error);
    message.style.color = "red";
    message.textContent = `Error: ${error.message}`;
  }
});
