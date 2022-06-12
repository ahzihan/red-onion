// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiU2w5sGfGjV35t-xBzFWGMIHOY9tvQUM",
    authDomain: "red-onion-authentication-93865.firebaseapp.com",
    projectId: "red-onion-authentication-93865",
    storageBucket: "red-onion-authentication-93865.appspot.com",
    messagingSenderId: "413702395668",
    appId: "1:413702395668:web:065a8a3a84fd2245a85401"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const auth = getAuth( app );
export default auth;