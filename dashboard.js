import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

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
const auth = getAuth(app);

document.body.innerHTML = "<h3>Loading...</h3>";

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.body.innerHTML = `
      <h2>Welcome to the Dashboard, ${user.email}</h2>
      <button id="logoutBtn">Logout</button>
    `;

    document.getElementById("logoutBtn").addEventListener("click", async () => {
      await signOut(auth);
      window.location.href = "login.html";
    });
  } else {
    window.location.href = "login.html";
  }
});
