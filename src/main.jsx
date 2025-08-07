// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <--- Vuelve a importar tu componente principal App
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* <--- Vuelve a renderizar tu componente App */}
  </React.StrictMode>,
);