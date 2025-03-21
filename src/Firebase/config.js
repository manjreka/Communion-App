import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ||
    "AIzaSyCfsxVL2fnLUVI7ZNhYzs83uYYZ_2Lucdw",
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
    "eventmanagementapp-fa984.firebaseapp.com",
  projectId:
    process.env.REACT_APP_FIREBASE_PROJECT_ID || "eventmanagementapp-fa984",
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    "eventmanagementapp-fa984.appspot.com",
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "690627647944",
  appId:
    process.env.REACT_APP_FIREBASE_APP_ID ||
    "1:690627647944:web:6049cee522752c16f408fd",
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-24Q8SX084G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
