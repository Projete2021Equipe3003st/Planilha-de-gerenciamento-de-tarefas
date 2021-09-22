// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAILx5qouyv1qvpSj9S50Qb-C47xrNFm1Y",
  authDomain: "projete-cf017.firebaseapp.com",
  projectId: "projete-cf017",
  storageBucket: "projete-cf017.appspot.com",
  messagingSenderId: "365572251114",
  appId: "1:365572251114:web:fcc71142019f4bfeb56693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();