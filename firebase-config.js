// Firebase v11 (CDN, Modular) — shared across all pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// ==== YOUR PROJECT CONFIG (replace only if you change project) ====
const firebaseConfig = {
apiKey: "AIzaSyBZ_VA2uWutlwhEwUSCsNfs_A-37hLWM1s",
authDomain: "fast-data-f239c.firebaseapp.com",
projectId: "fast-data-f239c",
storageBucket: "fast-data-f239c.firebasestorage.app",
messagingSenderId: "1051037961523",
appId: "1:1051037961523:web:6a81792bbfd47168ac8246",
measurementId: "G-H4XVSBVQT7"
};
// ================================================================


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


// Simple role control: list admin emails here (can move to Firestore later)
export const adminEmails = [
"admin@gmail.com"
];