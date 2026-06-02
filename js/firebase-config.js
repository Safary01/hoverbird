import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQcFOKqgcNnnYBFKGnZELWu6lXOSMTztY",
  authDomain: "hoverbird-8151b.firebaseapp.com",
  projectId: "hoverbird-8151b",
  storageBucket: "hoverbird-8151b.firebasestorage.app",
  messagingSenderId: "437972193604",
  appId: "1:437972193604:web:bf36efd68f7f0765de4711",
  measurementId: "G-1K1D4EF2KW"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
