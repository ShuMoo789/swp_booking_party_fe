// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLNLS65ZyzwR9uUObKJLkLkPOrksUcwKw",
  authDomain: "partykidzbooking.firebaseapp.com",
  projectId: "partykidzbooking",
  storageBucket: "partykidzbooking.appspot.com",
  messagingSenderId: "354578637161",
  appId: "1:354578637161:web:979e316751106c5393ddf8",
  measurementId: "G-PSTXV8SHQ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();

export { storage };
