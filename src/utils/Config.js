import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN6KRLq4_IaA7SNL5ah0dqJneoh3hEWmg",
  authDomain: "practice-project-bf6d3.firebaseapp.com",
  projectId: "practice-project-bf6d3",
  storageBucket: "practice-project-bf6d3.appspot.com",
  messagingSenderId: "111447033292",
  appId: "1:111447033292:web:f6193aa532d92b0a064969",
  measurementId: "G-G76GD6JPGF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
