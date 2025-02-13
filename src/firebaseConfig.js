import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLD4BoCtlY9eKphgFN1gseNjGikrbCKMw",
  authDomain: "cart-e-commerce.firebaseapp.com",
  projectId: "cart-e-commerce",
  storageBucket: "cart-e-commerce.firebasestorage.app",
  messagingSenderId: "922175331675",
  appId: "1:922175331675:web:4b54bcc772a9a8106f0e7e",
  measurementId: "G-2WVRKSH5NF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Erreur de connexion :", error);
  }
};