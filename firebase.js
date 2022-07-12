// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArDy5S_ftLuydnGpeihLrnSbShMD2E7O0",
  authDomain: "facebook-clone-b7f00.firebaseapp.com",
  projectId: "facebook-clone-b7f00",
  storageBucket: "facebook-clone-b7f00.appspot.com",
  messagingSenderId: "743885565660",
  appId: "1:743885565660:web:ff39f19484d8762a760e19",
};

// Initialize Firebase

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
