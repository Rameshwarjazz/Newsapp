import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAyI8ZF1WKWXMHNi2qPJJYu5TSjJJvTHI0",
    authDomain: "newsapp-481c7.firebaseapp.com",
    databaseURL: "https://newsapp-481c7-default-rtdb.firebaseio.com",
    projectId: "newsapp-481c7",
    storageBucket: "newsapp-481c7.appspot.com",
    messagingSenderId: "700590097924",
    appId: "1:700590097924:web:c47e3aa54849e7b9f21751",
    measurementId: "G-X05N60Y1QX"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  
  export { auth, firestore };
