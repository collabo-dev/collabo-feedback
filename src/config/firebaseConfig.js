// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDTNCb5C4KUNlWKN5sSmJZFT_BwCQS7Y1M",
    authDomain: "collabo-feedback.firebaseapp.com",
    projectId: "collabo-feedback",
    storageBucket: "collabo-feedback.appspot.com",
    messagingSenderId: "873721472961",
    appId: "1:873721472961:web:59e356c59e1c042618f140",
    measurementId: "G-MS28Y10VL9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);