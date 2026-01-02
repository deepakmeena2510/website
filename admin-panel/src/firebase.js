// Firebase configuration for Admin Panel (Web)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/* ---------------- FIREBASE CONFIG ---------------- */
/*
⚠️ Firebase Console → Project Settings → General → Web App
Yahan se values copy karo
*/

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

/* ---------------- INITIALIZE ---------------- */

const app = initializeApp(firebaseConfig);

/* ---------------- SERVICES ---------------- */

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
