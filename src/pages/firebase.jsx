import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnUXlJJ5ATkfYm_8y8VJeTu35KfqZ_bds",
  authDomain: "crymoney-16fd9.firebaseapp.com",
  projectId: "crymoney-16fd9",
  storageBucket: "crymoney-16fd9.appspot.com",
  messagingSenderId: "1047281859470",
  appId: "1:1047281859470:web:b2af76d703e00f589382df",
  measurementId: "G-3MCPZFFTB4"
};


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Obtenha uma referência para o Firestore
const db = firebase.firestore();

export default db;