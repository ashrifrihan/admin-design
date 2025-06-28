// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA07f2ulEpvwID71XavSMCNm4PVeLu5jl0",
  authDomain: "login-auth-f8491.firebaseapp.com",
  projectId: "login-auth-f8491",
  storageBucket: "login-auth-f8491.firebasestorage.app",
  messagingSenderId: "803852488762",
  appId: "1:803852488762:web:c1f104d2203851e7cd6503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();

export default app