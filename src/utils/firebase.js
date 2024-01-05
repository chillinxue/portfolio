// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRQe46RvSB6y7qN0oa8NkJ5tJYIRpFEAY",
  authDomain: "portfolio-d723c.firebaseapp.com",
  projectId: "portfolio-d723c",
  storageBucket: "portfolio-d723c.appspot.com",
  messagingSenderId: "924629409738",
  appId: "1:924629409738:web:285e2f71e3ff4873927933",
  measurementId: "G-WSL5FEJZ67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
