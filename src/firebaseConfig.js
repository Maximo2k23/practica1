// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzFPV3qN1cHJ5ZwP-XThzsrQ5Hd20yWUc",
    authDomain: "upal-proyect.firebaseapp.com",
    projectId: "upal-proyect",
    storageBucket: "upal-proyect.appspot.com",
    messagingSenderId: "923123998319",
    appId: "1:923123998319:web:4d8e38e024ae52f309b79a",
    measurementId: "G-5QPE38QK39"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };