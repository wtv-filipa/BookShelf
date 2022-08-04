//import firebase from 'firebase';
import "firebase/firestore";
//teste
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPJgPWEJQ_EpO6c5uG7pIW2Y4bYjPVgRk",
  authDomain: "projeto-89442-89727.firebaseapp.com",
  databaseURL: "https://projeto-89442-89727.firebaseio.com",
  projectId: "projeto-89442-89727",
  storageBucket: "projeto-89442-89727.appspot.com",
  messagingSenderId: "68575405619",
  appId: "1:68575405619:web:ca32be49e2abb2fc872546"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;

// avoid deprecated warnings
db.settings({
  timestampsInSnapshots: true
})

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();




