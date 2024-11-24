import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVsrd8Bcrj1X94kes5Vz4vbiRbO6-t5MY",
  authDomain: "gantt-project-management.firebaseapp.com",
  projectId: "gantt-project-management",
  storageBucket: "gantt-project-management.firebasestorage.app",
  messagingSenderId: "614084603227",
  appId: "1:614084603227:web:00cf6cbc8712f409a23e7e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
