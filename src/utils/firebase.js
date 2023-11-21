import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNHNwYrs2z9OgujzHpw0GwQOTX6dW-Vs0",
  authDomain: "learnt-dana.firebaseapp.com",
  projectId: "learnt-dana",
  storageBucket: "learnt-dana.appspot.com",
  messagingSenderId: "17313459104",
  appId: "1:17313459104:web:b9dd61bc45b94e18d612c5",
  measurementId: "G-Z3E137DN3G",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
