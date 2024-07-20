import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMxGoMG-4NNT8GF8fVXHgvxRakXOqH_uc",
  authDomain: "hotels-dashboard-7d618.firebaseapp.com",
  projectId: "hotels-dashboard-7d618",
  storageBucket: "hotels-dashboard-7d618.appspot.com",
  messagingSenderId: "985297203449",
  appId: "1:985297203449:web:fa5a60d9d6b596b3e4f228",
  measurementId: "G-ME1S8X1Q2T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
