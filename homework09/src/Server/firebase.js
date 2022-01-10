import firebase from "firebase";
import "firebase/auth";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyC898GJWooAZEOlo2TL1bAROpNQWbdq97I",
    authDomain: "gb-messenger-5b31d.firebaseapp.com",
    projectId: "gb-messenger-5b31d",
    storageBucket: "gb-messenger-5b31d.appspot.com",
    messagingSenderId: "1036280548218",
    appId: "1:1036280548218:web:b7da21750adc958955e4c3"
};
  

firebase.initializeApp(firebaseConfig);