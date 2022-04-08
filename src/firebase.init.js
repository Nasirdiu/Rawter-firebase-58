// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkxTErONsKuOV2imqXIXwBiuSEYN9gKuM",
  authDomain: "rawter-firebase.firebaseapp.com",
  projectId: "rawter-firebase",
  storageBucket: "rawter-firebase.appspot.com",
  messagingSenderId: "998732475137",
  appId: "1:998732475137:web:6aef7f57d283880e998900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;