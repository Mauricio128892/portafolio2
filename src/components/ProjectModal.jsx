// src/components/ProjectModal.jsx
import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null; // No renderizar si no hay proyecto

  return (
    // Overlay oscuro para el modal
    // fixed inset-0: Fija el modal en toda la pantalla.
    // bg-black bg-opacity-75: Fondo negro semitransparente.
    // flex items-center justify-center: Centra el contenido del modal.
    // z-50: Asegura que esté por encima de otros elementos.
    // p-4: Padding general.
    // transition-opacity duration-300: Transición suave para el fade-in/out del overlay.
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      {/* Contenedor del modal */}
      {/* bg-gray-800 p-8 rounded-lg shadow-lg: Estilos de la caja del modal. */}
      {/* max-w-3xl w-full relative: Ancho máximo y responsividad. */}
      {/* CAMBIO CLAVE: border-4 border-white para un borde blanco */}
      {/* animate-modal-open: Aplica la animación de apertura. */}
      {/* overflow-y-auto: Habilita el scroll vertical cuando el contenido es demasiado grande. */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full relative border-4 border-white animate-modal-open overflow-y-auto max-h-[95vh]">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-white transition-colors"
        >
          &times;
        </button>

        {/* Título del proyecto */}
        {/* CAMBIO CLAVE: text-white para el color del título */}
        {/* CAMBIO CLAVE: border-b-2 border-white para la línea blanca */}
        <h2 className="text-4xl font-pirata-one text-white text-center mb-6 border-b-2 border-white pb-2">
          {project.title}
        </h2>

        {/* Descripción del proyecto */}
        <p className="text-lg text-white mb-6 leading-relaxed text-center">
          {project.description}
        </p>

        {/* Contenedor de imágenes del proyecto */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {project.images && project.images.map((image, index) => (
            <div key={index} className="w-full h-40 bg-gray-700 rounded-md flex items-center justify-center overflow-hidden">
              <img
                src={image} // La ruta de la imagen
                alt={`${project.title} - Imagen ${index + 1}`}
                className="w-full h-full object-cover" // Asegura que la imagen cubra el espacio
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x150/555/eee?text=Imagen+no+cargada"; }} // Fallback si la imagen no carga
              />
            </div>
          ))}
        </div>

        {/* Botón para "Ir a este Proyecto!" */}
        {project.link && (
          <div className="text-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105"
            >
              ¡Ir a este Proyecto!
            </a>
          </div>
        )}
      </div>

      {/* Estilos CSS para la animación del modal */}
      <style>
        {`
        @keyframes modal-open {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal-open {
          animation: modal-open 0.3s ease-out forwards;
        }
        `}
      </style>
    </div>
  );
};

export default ProjectModal;
