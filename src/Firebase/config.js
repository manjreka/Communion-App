import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfsxVL2fnLUVI7ZNhYzs83uYYZ_2Lucdw",
  authDomain: "eventmanagementapp-fa984.firebaseapp.com",
  projectId: "eventmanagementapp-fa984",
  storageBucket: "eventmanagementapp-fa984.appspot.com",
  messagingSenderId: "690627647944",
  appId: "1:690627647944:web:6049cee522752c16f408fd",
  measurementId: "G-24Q8SX084G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
