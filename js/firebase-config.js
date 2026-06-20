// ============================================================
//  HoverBird — Firebase Configuration
//  Shared across all pages. Import from this file only.
//  DO NOT paste your Firebase config anywhere else.
// ============================================================

import { initializeApp }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }              from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }         from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics }         from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// ── Your Firebase project credentials ──────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyBQcFOKqgcNnnYBFKGnZELWu6lXOSMTztY",
  authDomain:        "hoverbird-8151b.firebaseapp.com",
  projectId:         "hoverbird-8151b",
  storageBucket:     "hoverbird-8151b.firebasestorage.app",
  messagingSenderId: "437972193604",
  appId:             "1:437972193604:web:bf36efd68f7f0765de4711",
  measurementId:     "G-1K1D4EF2KW"
};

// ── Initialize Firebase ─────────────────────────────────────
const app       = initializeApp(firebaseConfig);
const auth      = getAuth(app);
const db        = getFirestore(app);
const analytics = getAnalytics(app);

// ── Admin UID ───────────────────────────────────────────────
//  Replace this string with your own Firebase UID after you
//  log in once and copy it from Firebase Console → Auth tab.
export const ADMIN_UID = "TdkBDyJTTpaHrdaEzMSgsemsCb92";

// ── Exports (used by every page) ───────────────────────────
export { app, auth, db, analytics };
