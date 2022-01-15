// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBGQvcNgn4YWguQoulhcb9A92VTOcQNqM",
  authDomain: "snapchat-clone-21f68.firebaseapp.com",
  projectId: "snapchat-clone-21f68",
  storageBucket: "snapchat-clone-21f68.appspot.com",
  messagingSenderId: "668646068203",
  appId: "1:668646068203:web:17b5a51fef99a7af5513ae",
  measurementId: "G-67DFDVB7TW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;