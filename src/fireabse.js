// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtw6MiGPrnVGmwV-OXmrdz0adnFlbnVlE",
  authDomain: "propertyfinderghana.firebaseapp.com",
  projectId: "propertyfinderghana",
  storageBucket: "propertyfinderghana.appspot.com",
  messagingSenderId: "311979779898",
  appId: "1:311979779898:web:7c53cb79a29845e18ed203",
  measurementId: "G-4JEK8WNG9X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
