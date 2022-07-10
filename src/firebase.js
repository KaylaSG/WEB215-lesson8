import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfY8PsnNmxKofVES6LJpzpK6KoFLd2MOQ",
  authDomain: "instagram-clone-6e11b.firebaseapp.com",
  projectId: "instagram-clone-6e11b",
  storageBucket: "instagram-clone-6e11b.appspot.com",
  messagingSenderId: "262767919419",
  appId: "1:262767919419:web:2932eb629f7912197bb71e",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
