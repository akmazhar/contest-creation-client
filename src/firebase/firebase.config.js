// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-n3ldyM5Rtks6Pogm_xNowvxyhl4BHWE",
  authDomain: "contest-creation.firebaseapp.com",
  projectId: "contest-creation",
  storageBucket: "contest-creation.appspot.com",
  messagingSenderId: "827051003551",
  appId: "1:827051003551:web:39c13d78a44e7d31c2dcaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
