import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "../utils/constants";

console.log(FIREBASE_CONFIG);
const firebaseConfig = JSON.parse(FIREBASE_CONFIG);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
