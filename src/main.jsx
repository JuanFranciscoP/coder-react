import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4XWbZpfGbSZWeE9exkNEJcSFmhHtetAY",
  authDomain: "tienda-react-4566e.firebaseapp.com",
  projectId: "tienda-react-4566e",
  storageBucket: "tienda-react-4566e.appspot.com",
  messagingSenderId: "901718332285",
  appId: "1:901718332285:web:5c626dbf22ae5b3b3f3214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
