// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfyN1hckY0LRQlkL5aI--3JmtKZ0Cc290",
  authDomain: "shostore-11c25.firebaseapp.com",
  projectId: "shostore-11c25",
  storageBucket: "shostore-11c25.appspot.com",
  messagingSenderId: "79038931284",
  appId: "1:79038931284:web:f14feeab8f8b73f4ad68c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;