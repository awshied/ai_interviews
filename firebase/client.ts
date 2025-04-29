import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDoA539tdU-Vczv5rs1F5KuHd8WjY_YxM",
  authDomain: "prepwise-42b19.firebaseapp.com",
  projectId: "prepwise-42b19",
  storageBucket: "prepwise-42b19.firebasestorage.app",
  messagingSenderId: "650013298422",
  appId: "1:650013298422:web:571d19666d6ae2ff78a6d7",
  measurementId: "G-JN20885T92",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
