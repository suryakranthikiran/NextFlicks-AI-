// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEwCsuDntzUObUPCv7CS3vC5D8-xXp8jU",
    authDomain: "netflixgpt-bf9db.firebaseapp.com",
    projectId: "netflixgpt-bf9db",
    storageBucket: "netflixgpt-bf9db.firebasestorage.app",
    messagingSenderId: "344570778589",
    appId: "1:344570778589:web:b26850daedc484d9c6dc34",
    measurementId: "G-CKQ5NSCNXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()