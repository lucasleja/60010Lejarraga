import { initializeApp } from "firebase/app";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyAz1lNB3rMbgACacOYEASBNLTkcvOzrqNE",
  authDomain: "mi-primer-proyecto-689c5.firebaseapp.com",
  projectId: "mi-primer-proyecto-689c5",
  storageBucket: "mi-primer-proyecto-689c5.appspot.com",
  messagingSenderId: "743180750724",
  appId: "1:743180750724:web:b1903dbd888fd9ea9cd7d1"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)