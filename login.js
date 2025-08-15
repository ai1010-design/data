import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


// If already logged in, go straight to dashboard
onAuthStateChanged(auth, (user)=>{ if(user) window.location.href='dashboard.html'; });


const form = document.getElementById('loginForm');
const msg = document.getElementById('loginMsg');


form.addEventListener('submit', async (e)=>{
e.preventDefault();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value;
try{
await signInWithEmailAndPassword(auth, email, password);
msg.style.color='green'; msg.textContent='Login successful. Redirecting…';
window.location.href = 'dashboard.html';
}catch(err){
msg.style.color='crimson'; msg.textContent = err.message;
}
});