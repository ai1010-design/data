import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


const form = document.getElementById('registerForm');
const msg = document.getElementById('regMsg');


form.addEventListener('submit', async (e)=>{
e.preventDefault();
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value;
const pin = document.getElementById('pin').value.trim();
const phone = document.getElementById('phone').value.trim();


if(pin.length !== 4 || !/^[0-9]{4}$/.test(pin)){
msg.style.color='crimson'; msg.textContent='PIN must be exactly 4 digits.'; return;
}


try{
const cred = await createUserWithEmailAndPassword(auth, email, password);
const uid = cred.user.uid;


await setDoc(doc(db, 'users', uid), {
username, email, phone: phone||null, pin, createdAt: serverTimestamp(), role: 'user'
});


msg.style.color='green'; msg.textContent='Account created. Redirecting…';
window.location.href = 'dashboard.html';
}catch(err){
msg.style.color='crimson'; msg.textContent = err.message;
}
});