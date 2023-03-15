// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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