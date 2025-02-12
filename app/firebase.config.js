import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCznrBMujWtn5cLrKYOFjbT7zrJ-DuNPvg",
  authDomain: "shumbrel-327fc.firebaseapp.com",
  projectId: "shumbrel-327fc",
  storageBucket: "shumbrel-327fc.firebasestorage.app",
  messagingSenderId: "167505309744",
  appId: "1:167505309744:web:82836d0f33ff1fb3dfbdf5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };