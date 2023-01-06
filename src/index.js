import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDJcdJ3MqOtsMTZJ-gHhhoqsL-9V2ysnmI",
  authDomain: "sitenoticias-97308.firebaseapp.com",
  databaseURL: "https://sitenoticias-97308-default-rtdb.firebaseio.com",
  projectId: "sitenoticias-97308",
  storageBucket: "sitenoticias-97308.appspot.com",
  messagingSenderId: "413903078330",
  appId: "1:413903078330:web:a54536acdafea9e1675383",
  databaseURL: "https://sitenoticias-97308-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

///////////////////////////////////////////////////////////////////////////////////////////////////////


root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
