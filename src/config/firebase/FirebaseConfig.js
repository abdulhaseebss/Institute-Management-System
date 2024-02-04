
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBccESPN8hBYvPGxKjDEp0li61aeGIok6A",
  authDomain: "ah-ims.firebaseapp.com",
  projectId: "ah-ims",
  storageBucket: "ah-ims.appspot.com",
  messagingSenderId: "28314281072",
  appId: "1:28314281072:web:a867a490560373d68cc0b5",
  measurementId: "G-1XX4Q3C04Q"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app