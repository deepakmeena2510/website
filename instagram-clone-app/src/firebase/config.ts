// Firebase configuration file

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* ---------------- FIREBASE CONFIG ---------------- */
/*
⚠️ IMPORTANT:
Ye values aapko Firebase Console se milengi
(Project Settings → General → Web App)
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

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
