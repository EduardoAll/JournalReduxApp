// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfeozu3kGXlwLag3vv58PHwlaBIMKVzgQ",
  authDomain: "journal-practica.firebaseapp.com",
  projectId: "journal-practica",
  storageBucket: "journal-practica.appspot.com",
  messagingSenderId: "88482654778",
  appId: "1:88482654778:web:ebb0318030c42ec4e9a303"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );

