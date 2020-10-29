import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "things-for-good-93e82.firebaseapp.com",
  databaseURL: "https://things-for-good-93e82.firebaseio.com",
  projectId: "things-for-good-93e82",
  storageBucket: "things-for-good-93e82.appspot.com",
  messagingSenderId: "606887014409",
  appId: "1:606887014409:web:d7398c862853eb6d2688d8",
};

firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();
const firebaseFirestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => firebaseAuth.signInWithPopup(provider);

export { firebaseAuth, firebaseFirestore, signInWithGoogle };
