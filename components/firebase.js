import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD-SoUoc00OeZRBIs4bY6PPUEX7nIM2QZQ",
  authDomain: "samba-motors.firebaseapp.com",
  projectId: "samba-motors",
  storageBucket: "samba-motors.appspot.com",
  messagingSenderId: "443843855392",
  appId: "1:443843855392:web:1c1eec331fda8df045e845",
  measurementId: "G-5ZWVKN239R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;