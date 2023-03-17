import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAS8iyQ_IdGr1va3dScRXDfQvbjnsc8GrI",
  authDomain: "matiasgajo-ecommerce.firebaseapp.com",
  projectId: "matiasgajo-ecommerce",
  storageBucket: "matiasgajo-ecommerce.appspot.com",
  messagingSenderId: "1042678095449",
  appId: "1:1042678095449:web:14266c6c66fe76d3c59b48"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


