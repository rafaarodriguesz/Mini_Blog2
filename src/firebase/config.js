// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ52_ctZA0Gtu2cRPSLxM9QQAvo1WHL4U",
  authDomain: "miniblog2-d46ec.firebaseapp.com",
  projectId: "miniblog2-d46ec",
  storageBucket: "miniblog2-d46ec.appspot.com",
  messagingSenderId: "73125813064",
  appId: "1:73125813064:web:5f5e9dcdd3937601c9f17d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };