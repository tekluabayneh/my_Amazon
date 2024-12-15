import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR9O67wu8ubUBCzpXp2KTkFeKq1ci4l6g",
  authDomain: "my-9e857.firebaseapp.com",
  projectId: "my-9e857",
  storageBucket: "my-9e857.firebasestorage.app",
  messagingSenderId: "412534419765",
  appId: "1:412534419765:web:25269521e967c4dae89c7c",
  measurementId: "G-JFVSVNHDKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
