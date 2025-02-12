import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLD4BoCtlY9eKphgFN1gseNjGikrbCKMw",
  authDomain: "cart-e-commerce.firebaseapp.com",
  projectId: "cart-e-commerce",
  storageBucket: "cart-e-commerce.firebasestorage.app",
  messagingSenderId: "922175331675",
  appId: "1:922175331675:web:4b54bcc772a9a8106f0e7e",
  measurementId: "G-2WVRKSH5NF"
};
// const firebaseConfig = {
//   apiKey: "VOTRE_API_KEY",
//   authDomain: "VOTRE_AUTH_DOMAIN",
//   projectId: "VOTRE_PROJECT_ID",
//   storageBucket: "VOTRE_STORAGE_BUCKET",
//   messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
//   appId: "VOTRE_APP_ID",
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);