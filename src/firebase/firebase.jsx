import firebase from 'firebase/app'
import 'firebase/firestore';

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDO9H3f5mgUkSRJdpmhN5-Ru6qK0CnYG1E",
  authDomain: "tiendade-chicas.firebaseapp.com",
  projectId: "tiendade-chicas",
  storageBucket: "tiendade-chicas.appspot.com",
  messagingSenderId: "279463697227",
  appId: "1:279463697227:web:1d9ae19fbf5bbe19eca6ce",
  measurementId: "G-93Q6ZM2K7M"
};


  //Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

//Enable globally
export const dataBase = fb.firestore();
