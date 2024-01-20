// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbs1wdG4VTEpkm9kzEVxMb5zvesHTzWbI",
  authDomain: "sew-studio.firebaseapp.com",
  projectId: "sew-studio",
  storageBucket: "sew-studio.appspot.com",
  messagingSenderId: "1065687062048",
  appId: "1:1065687062048:web:de6db16c55396728568e45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const logInWithEmailAndPassword = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

export const registerWithEmailAndPassword = async ({ email, password }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => {
  signOut(auth);
};
