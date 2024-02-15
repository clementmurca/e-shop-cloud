// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOFyDdQplAjlrNM_c0pzNKpf4LuZFiHKI",
    authDomain: "e-shop-cloud-c16f2.firebaseapp.com",
    projectId: "e-shop-cloud-c16f2",
    storageBucket: "e-shop-cloud-c16f2.appspot.com",
    messagingSenderId: "428071463225",
    appId: "1:428071463225:web:7dd86f6e1464010d4be0e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const googleAuth = new GoogleAuthProvider();

// Firestore
export const db = new getFirestore(app);