import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
use ref tiene dos usos

1. una interacción con el dom (real) sin pasar por el virtual dom
focus
copy
media player
scroll animation

2. referencia mutable
una variable que vamos a tener en react, cuyo valor es persistente a lo largo de los renders que van ocurriendo
cada vez que se pinte el componente. pero con la diferencia a los estados que cuando estas variables cambian su valor
no causa una nueva renderización
render count 
loading app



*/