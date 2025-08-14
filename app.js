import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ_VA2uWutlwhEwUSCsNfs_A-37hLWM1s",
  authDomain: "fast-data-f239c.firebaseapp.com",
  projectId: "fast-data-f239c",
  storageBucket: "fast-data-f239c.firebasestorage.app",
  messagingSenderId: "1051037961523",
  appId: "1:1051037961523:web:6a81792bbfd47168ac8246",
  measurementId: "G-H4XVSBVQT7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const pin = document.getElementById("pin").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "users", uid), { username, pin, email });

    message.style.color = "green";
    message.textContent = "Registration successful! Redirecting to login...";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  } catch (error) {
    message.style.color = "red";
    message.textContent = `Error: ${error.message}`;
  }
});
