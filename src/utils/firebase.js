// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd3uwoF8xt-RFkwLLc-E5dTRV3pkpQDjY",
    authDomain: "netflix-gpt07.firebaseapp.com",
    projectId: "netflix-gpt07",
    storageBucket: "netflix-gpt07.firebasestorage.app",
    messagingSenderId: "671261465619",
    appId: "1:671261465619:web:b279fbf670635f06e9b3e6",
    measurementId: "G-4GEW16SX2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();