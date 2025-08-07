// src/components/TestImageLoad.jsx
import React from 'react';

const TestImageLoad = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Probando la Carga del NUEVO GIF (2.gif)</h1>
      <p>Si ves un borde rojo pero no la imagen, el GIF podría estar dañado o tener un problema.</p>
      <img
        src="/images/2.gif" // ¡CAMBIO AQUÍ! Usando 2.gif
        alt="Nuevo GIF de Luffy de prueba"
        style={{ border: '3px solid red', maxWidth: '80%', height: 'auto', display: 'block', margin: '20px auto' }}
      />
      <p>Si el GIF aparece, ¡problema resuelto!</p>
    </div>
  );
};

export default TestImageLoad;