// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { collection, addDoc,doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK8x4Rrvb1hzoriZIyI4_EX3N_5vMGvsw",
  authDomain: "dockii.firebaseapp.com",
  projectId: "dockii",
  storageBucket: "dockii.appspot.com",
  messagingSenderId: "761405991571",
  appId: "1:761405991571:web:9f53878107ed9393ff7b66",
  measurementId: "G-D6TLJ3BS5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export {
  auth, 
  db, 
  provider, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  collection, 
  addDoc, 
  doc,
  getDoc,
  signInWithEmailAndPassword,
  setDoc,
  signOut,
  updateDoc,
  arrayUnion
};