// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHFoFS3jlnDHEckAEZNUImyLDV2UgYYI0",
  authDomain: "mytask-5ea06.firebaseapp.com",
  projectId: "mytask-5ea06",
  storageBucket: "mytask-5ea06.appspot.com",
  messagingSenderId: "818444827260",
  appId: "1:818444827260:web:277643193894c209a8a7f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;