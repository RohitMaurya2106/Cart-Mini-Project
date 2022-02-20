import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from "firebase/compat/app"; 
import "firebase/compat/auth";
import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnWnKg1b0dNwXpz136KFqpK6hYjwP5RyE",
  authDomain: "cart-a4dd6.firebaseapp.com",
  projectId: "cart-a4dd6",
  storageBucket: "cart-a4dd6.appspot.com",
  messagingSenderId: "953327693699",
  appId: "1:953327693699:web:4f451cf1d0b36a68b0d0b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

