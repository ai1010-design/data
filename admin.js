import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
const db = getFirestore(app);
const auth = getAuth(app);

// Reference to table body
const tbody = document.querySelector("#usersTable tbody");

async function loadUsers() {
  const usersCollection = collection(db, "users");
  const usersSnapshot = await getDocs(usersCollection);

  usersSnapshot.forEach(doc => {
    const data = doc.data();
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${data.username}</td>
      <td>${data.email || "N/A"}</td>
      <td>${data.pin}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Load users when page opens
loadUsers();
