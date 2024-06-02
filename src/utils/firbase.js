// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwASQTtkseiRoEF7-vYvbzgWrkBMgZB2c",
  authDomain: "netflixgpt-47d67.firebaseapp.com",
  projectId: "netflixgpt-47d67",
  storageBucket: "netflixgpt-47d67.appspot.com",
  messagingSenderId: "234148752221",
  appId: "1:234148752221:web:1511e77622b819e6a256b4",
  measurementId: "G-PZW720S0WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();