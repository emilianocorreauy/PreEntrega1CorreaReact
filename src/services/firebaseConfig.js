import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUiFQze5eLnsnxhKbhX6xQfu8_nxZ_Kcc",
    authDomain: "ecommerce-63110.firebaseapp.com",
    projectId: "ecommerce-63110",
    storageBucket: "ecommerce-63110.appspot.com",
    messagingSenderId: "42139133777",
    appId: "1:42139133777:web:11f298be67136068795570",
    measurementId: "G-8RCSN8GMVY"
  };


  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
