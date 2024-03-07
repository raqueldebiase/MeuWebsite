// firebase-config.js
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBAwiIez1R14P1aCc7DowMLrzT52Kv8pyQ",
  authDomain: "formulario-de-contato-21184.firebaseapp.com",
  projectId: "formulario-de-contato-21184",
  storageBucket: "formulario-de-contato-21184.appspot.com",
  messagingSenderId: "565842643351",
  appId: "1:565842643351:web:013235b21df1b7571a5cd2",
  measurementId: "G-T11DEGMCDT",
  databaseURL: "https://formulario-de-contato.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
