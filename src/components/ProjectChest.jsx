// src/components/ProjectChest.jsx
import React from 'react';

const ProjectChest = ({ project, onClick }) => {
  return (
    <div
      // Se añadió 'w-full' para que el cuadro ocupe todo el ancho disponible en su columna.
<<<<<<< HEAD
      // CAMBIO CLAVE: Fondo con imagen fondo33.png
      // CAMBIO: Añadido 'border-4 border-black' para un borde negro de 4px.
      // CAMBIO CLAVE: Cambiado 'rounded-lg' a 'rounded-2xl' para esquinas más redondeadas.
      className="p-6 rounded-2xl shadow-lg text-center cursor-pointer transform transition-transform duration-200 hover:scale-105 border-4 border-black hover:border-primary-gold w-full
                 bg-[url('/images/fondo33.png')] bg-cover bg-no-repeat bg-center"
      onClick={onClick}
    >
      {/* Título del proyecto: Color de texto cambiado a negro */}
      <h3 className="text-2xl font-pirata-one text-black mb-2">{project.title}</h3>
      {/* Párrafo con color de texto cambiado a negro */}
      <p className="text-lg leading-relaxed text-black mb-4">Haz clic para ver más detalles del proyecto.</p>
=======
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center cursor-pointer transform transition-transform duration-200 hover:scale-105 border-4 border-transparent hover:border-primary-gold w-full"
      onClick={onClick}
    >
      {/* Título del proyecto: Cambiado a font-pirata-one para mejor legibilidad */}
      <h3 className="text-2xl font-pirata-one text-primary-gold mb-2">{project.title}</h3>
      <p className="text-lg leading-relaxed text-white mb-4">Haz clic para ver más detalles del proyecto.</p>
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
      {/* Puedes poner una imagen de un cofre aquí si quieres */}
      <img 
        src="/images/cofre.png" // Asegúrate de tener una imagen de cofre en esta ruta
        alt="Abrir Cofre" 
        className="mx-auto w-32 h-32 object-contain mt-4" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/128x128/555/eee?text=Cofre"; }}
      />
<<<<<<< HEAD
      {/* Botón con color de fondo gris oscuro y hover más oscuro */}
      {/* CAMBIO CLAVE: Aumentado el padding horizontal de px-4 a px-8 */}
      <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-8 rounded-full transition-colors duration-300">
=======
      <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
        Abrir Cofre
      </button>
    </div>
  );
};

export default ProjectChest;
