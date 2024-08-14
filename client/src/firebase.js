import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY ,
  authDomain: "cardb-a15a7.firebaseapp.com",
  projectId: "cardb-a15a7",
  storageBucket: "cardb-a15a7.appspot.com",
  messagingSenderId: "48250904365",
  appId: "1:48250904365:web:2f9e6c29bb92d1a6cdbda4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
