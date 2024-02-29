// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC708oExoVDl-uad6BgXN4pLUlsVsKaXtk",
  authDomain: "email-password-auth-2-295bf.firebaseapp.com",
  projectId: "email-password-auth-2-295bf",
  storageBucket: "email-password-auth-2-295bf.appspot.com",
  messagingSenderId: "708684352910",
  appId: "1:708684352910:web:aecfc1222a77bae0bf68df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth; 