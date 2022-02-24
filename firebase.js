// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1SU2RoRw3Co3KCM0s5GXHFRupUUG2Wz8",
  authDomain: "instagram-reels-clone-aa9d8.firebaseapp.com",
  projectId: "instagram-reels-clone-aa9d8",
  storageBucket: "instagram-reels-clone-aa9d8.appspot.com",
  messagingSenderId: "494509961748",
  appId: "1:494509961748:web:f7870c18066f7a5bf0ad01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

export { auth, storage, db };
export default app;
