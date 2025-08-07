// src/components/Projects.jsx
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'; // Importa useRef
import ProjectModal from './ProjectModal'; // Asegúrate de que este componente exista
import ProjectChest from './ProjectChest'; // Asegúrate de que este componente exista
import * as Tone from 'tone'; // Importa Tone.js

=======
import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal'; // Asegúrate de que este componente exista
import ProjectChest from './ProjectChest'; // Asegúrate de que este componente exista

// Recibe onModalOpen y onModalClose como props
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
const Projects = ({ onModalOpen, onModalClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

<<<<<<< HEAD
  const garpAudioRef = useRef(null); // Referencia para el reproductor de audio de Garp
  const [isGarpAudioLoaded, setIsGarpAudioLoaded] = useState(false); // Estado para saber si el audio de Garp está cargado
  // Eliminado: isGarpAnimating ya no es necesario para la animación del GIF
  const [showGarpBubble, setShowGarpBubble] = useState(false); // Nuevo estado para controlar la visibilidad de la burbuja de texto

  // Datos de los proyectos
=======
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
  const projectsData = [
    {
      id: 1,
      title: 'Página Web Profesional para Psicóloga',
      description: 'Una página web profesional diseñada para mi madre, una psicóloga. Permite a los visitantes acceder a su información personal, conocer los tipos de terapias que ofrece y sus estudios. Además, los usuarios pueden agendar citas directamente o enviar mensajes a través de WhatsApp, facilitando la comunicación y el acceso a sus servicios.',
      link: 'https://mama432.netlify.app/',
      images: ['/images/foto1.png', '/images/foto2.png', '/images/foto3.png', '/images/foto4.png']
    },
    {
      id: 2,
      title: 'Página Web de Rutinas de Gimnasio',
      description: 'Una plataforma web dedicada a rutinas de gimnasio que incluye un sistema de inicio y cierre de sesión con Google. Los usuarios pueden acceder a diversas rutinas personalizadas y gestionar su progreso de entrenamiento de manera sencilla y segura.',
      link: 'https://examennnn.netlify.app/',
      images: ['/images/foto11.png', '/images/foto12.png', '/images/foto13.png', '/images/foto14.png']
    },
    {
      id: 3,
      title: 'Sistema de Gestión de Recursos Humanos',
      description: 'Una aplicación web de recursos humanos que permite el ingreso mediante una cuenta de Google. Facilita la adición de trabajadores, sus datos y roles, incluye una función de filtrado de búsqueda y una sección dedicada al perfil de usuario, con opción de cerrar sesión.',
<<<<<<< HEAD
      link: 'https://rh2.netlify.app/',
      images: ['/images/foto20.png', '/images/foto21.png', '/images/foto22.png', '/images/foto23.png']
    },
  ];

  // Efecto para cargar el audio de Garp
  useEffect(() => {
    const setupGarpAudio = async () => {
      try {
        if (Tone.context.state !== 'running') {
          await Tone.start();
        }
        const player = new Tone.Player("/audio/risa2.mp3").toDestination();
        player.volume.value = -10;
        player.fadeIn = 0.1;
        player.fadeOut = 0.5;
        await player.loaded;
        garpAudioRef.current = player;
        setIsGarpAudioLoaded(true);
      } catch (e) {
        console.error("Error al cargar el audio risa2.mp3 para Garp:", e);
      }
    };

    setupGarpAudio();

    return () => {
      if (garpAudioRef.current) {
        garpAudioRef.current.dispose();
        garpAudioRef.current = null;
      }
    };
  }, []);

=======
      link: 'https://rh2.netlify.app/', // Link corregido
      images: ['/images/foto20.png', '/images/foto21.png', '/images/foto22.png', '/images/foto23.png'] // Imágenes corregidas
    },
  ];

>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    if (onModalOpen) {
<<<<<<< HEAD
      onModalOpen();
=======
      onModalOpen(); // Llama a la función de App para indicar que el modal está abierto
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    if (onModalClose) {
<<<<<<< HEAD
      onModalClose();
    }
  };

  // Manejador de clic para el GIF de Garp
  const handleGarpClick = async () => {
    if (isGarpAudioLoaded && garpAudioRef.current) { // No se verifica isGarpAnimating aquí
      try {
        if (Tone.context.state !== 'running') {
          await Tone.start();
        }
        garpAudioRef.current.stop();
        garpAudioRef.current.start();
        
        // Mostrar la burbuja de texto
        setShowGarpBubble(true);
        // Ocultar la burbuja después de 2 segundos
        setTimeout(() => {
          setShowGarpBubble(false);
        }, 2000); // Duración de la burbuja
        
      } catch (e) {
        console.error("Error al reproducir el audio de Garp:", e);
      }
    }
  };
=======
      onModalClose(); // Llama a la función de App para indicar que el modal está cerrado
    }
  };

  // No es necesario un useEffect para limpiar la clase del body aquí,
  // ya que App.jsx gestiona el estado centralmente.
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa

  return (
    <section id="proyectos" className="relative bg-black min-h-screen flex flex-col justify-center items-center py-16">
      {/* Background of the section without opacity */}
      <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/images/fondo3.png')" }}></div>

      {/* Solo se mantiene el contenido principal, sin animaciones ni videos */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between p-4">
<<<<<<< HEAD
        {/* Left Side: Garp GIF (AHORA CLICABLE CON BURBUJA DE TEXTO) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="relative">
            {/* La imagen de Garp, ahora sin la animación de pulso */}
            <img
              src="/images/2.gif" // Usando el GIF de Garp (llamado 2.gif)
              alt="Garp"
              className={`max-h-screen object-contain relative z-30 cursor-pointer transition-transform duration-200`} // Eliminado 'animate-pulse-gif'
              onClick={handleGarpClick}
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x400/555/eee?text=Garp+GIF"; }} // Fallback
            />
            {/* Burbuja de texto "HA HA HA" */}
            {showGarpBubble && (
              <div className="garp-bubble absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-full
                              bg-black text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap
                              font-pirata-one text-2xl animate-bubble-fade-in-out">
                HA HA HA
              </div>
            )}
=======
        {/* Left Side: Garp GIF (ESTÁTICO) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="relative">
            {/* La imagen de Garp, ahora sin el onClick y sin clases de animación */}
            <img
              src="/images/2.gif" // Usando el GIF de Garp (llamado 2.gif)
              alt="Garp" // Alt text simple, ya no "showing his power"
              className="max-h-screen object-contain relative z-30" // Clases para posicionamiento y tamaño
            />
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
          </div>
        </div>

        {/* Right Side: Projects Container */}
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-8">
<<<<<<< HEAD
          <h2 className="text-5xl md:text-6xl font-pirata-one text-primary-gold text-center mb-12
                       bg-[url('/images/fondo44.png')] bg-cover bg-no-repeat bg-center p-4 rounded-lg
                       border-4 border-black"
              style={{ WebkitTextStroke: '1px black' }}>
=======
          {/* Título de la sección Proyectos. Asegurado text-primary-gold */}
          <h2 className="text-5xl md:text-6xl font-pirata-one text-primary-gold text-center mb-12">
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
            Proyectos
          </h2>
          {projectsData.map((project) => (
            <ProjectChest
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
<<<<<<< HEAD

      {/* Estilos CSS para la animación de la burbuja de texto */}
      <style>
        {`
        /* Eliminado: @keyframes pulse-gif ya no es necesario */

        @keyframes bubble-fade-in-out {
          0% { opacity: 0; transform: translate(-50%, -100%) scale(0.8); }
          10% { opacity: 1; transform: translate(-50%, -100%) scale(1); }
          90% { opacity: 1; transform: translate(-50%, -100%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -100%) scale(0.8); }
        }
        .animate-bubble-fade-in-out {
          animation: bubble-fade-in-out 2s ease-out forwards; /* Duración de la animación de la burbuja */
        }

        /* Opcional: Cola de la burbuja de texto */
        .garp-bubble::after {
          content: '';
          position: absolute;
          bottom: -10px; /* Ajusta para que la cola apunte al GIF */
          left: 50%;
          transform: translateX(-50%);
          border-width: 10px 10px 0;
          border-style: solid;
          border-color: black transparent transparent transparent; /* Color de la cola */
        }
        `}
      </style>
=======
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
    </section>
  );
};

export default Projects;
