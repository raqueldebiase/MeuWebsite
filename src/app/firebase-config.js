// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBAwiIez1R14P1aCc7DowMLrzT52Kv8pyQ",
  authDomain: "formulario-de-contato-21184.firebaseapp.com",
  projectId: "formulario-de-contato-21184",
  storageBucket: "formulario-de-contato-21184.appspot.com",
  messagingSenderId: "565842643351",
  appId: "1:565842643351:web:013235b21df1b7571a5cd2",
  measurementId: "G-T11DEGMCDT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export default app; // Exporte o objeto app em vez de firebaseConfig
