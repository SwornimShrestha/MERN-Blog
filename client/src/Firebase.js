import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-blog-a346f.firebaseapp.com",
  projectId: "mern-blog-a346f",
  storageBucket: "mern-blog-a346f.appspot.com",
  messagingSenderId: "52884667812",
  appId: "1:52884667812:web:c44a89388d2b0634ad1531",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
