// src/components/DevLogs.jsx
import React, { useRef, useEffect, useState } from 'react';
import * as Tone from 'tone'; // Importa Tone.js para el sonido

// Función para obtener el color de brillo según el personaje
const getGlowColor = (characterName) => {
  switch (characterName.toLowerCase()) {
    case 'luffy':
      return '#FF0000'; // Rojo
    case 'zoro':
      return '#00FF00'; // Verde
    case 'sanji':
      return '#FFFF00'; // Amarillo
    case 'franky':
      return '#87CEEB'; // Azul más claro (anteriormente #0000FF)
    case 'usopp':
      return '#FFA500'; // Naranja
    case 'robin':
      return '#800080'; // Púrpura
    default:
      return '#FFFF00'; // Amarillo por defecto si no se encuentra el personaje
  }
};

// Componente individual para cada tarjeta de blog
const DevBlogCard = ({ blog }) => {
  const audioPlayerRef = useRef(null);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isActive, setIsActive] = useState(false); // Nuevo estado para la animación activa

  // useEffect para inicializar y cargar el audio para cada tarjeta
  useEffect(() => {
    const setupAudio = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Crea un nuevo Tone.Player para cada tarjeta
        const player = new Tone.Player(`/audio/${blog.audioName}`).toDestination();
        player.volume.value = -10; // Ajusta el volumen si es necesario
        player.fadeIn = 0.1;
        player.fadeOut = 0.5;

        await player.loaded; // Espera a que el audio esté cargado
        audioPlayerRef.current = player;
        setIsAudioLoaded(true);
        setIsLoading(false);
      } catch (e) {
        console.error(`Error al cargar el audio para ${blog.audioName}:`, e);
        setError("Error al cargar audio.");
        setIsLoading(false);
      }
    };

    setupAudio();

    // Función de limpieza para liberar recursos de Tone.js
    return () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.dispose();
        audioPlayerRef.current = null;
      }
    };
  }, [blog.audioName]); // Se ejecuta cuando el nombre del audio cambia

  const handleGifClick = async (e) => {
    e.stopPropagation(); // Evita que el clic en el GIF active el clic de la tarjeta padre

    if (isAudioLoaded && audioPlayerRef.current) {
      try {
        // Asegura que el contexto de audio esté iniciado al hacer clic
        if (Tone.context.state !== 'running') {
          await Tone.start();
        }
        
        audioPlayerRef.current.stop(); // Detiene si ya está reproduciéndose
        audioPlayerRef.current.start(); // Inicia la reproducción
        
        setIsActive(true); // Activa la animación

        // Desactiva la animación cuando el audio termina
        const audioDuration = audioPlayerRef.current.buffer.duration * 1000; // Duración en milisegundos
        setTimeout(() => {
          setIsActive(false);
        }, audioDuration);

      } catch (e) {
        console.error(`Error al reproducir el audio para ${blog.audioName}:`, e);
        setError("Error al reproducir audio.");
      }
    } else if (isLoading) {
      // console.log("Audio aún cargando, por favor espera...");
    } else if (error) {
      // console.log("Hubo un error al cargar el audio.");
    }
  };

  const glowColor = getGlowColor(blog.audioName.replace('.mp3', '')); // Obtiene el color de brillo

  return (
    <div 
      className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center
                 border-4 border-black transform transition-transform duration-200 hover:scale-105
                 min-h-[550px] flex-grow"
    >
      {/* Espacio para la imagen del blog */}
      <div className="w-full h-48 bg-gray-700 rounded-md mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={blog.imageUrl || "https://placehold.co/400x200/333/fff?text=Aqui+va+la+foto"}
          alt={`Imagen del Blog ${blog.id}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Descripción y enlace al video */}
      <h3 className="text-2xl font-metal-mania text-primary-gold mb-2">Bitaroca</h3>
      <p className="text-lg leading-relaxed text-white mb-4 flex-grow">
        {blog.description}
        {blog.videoLink && (
          <a
            href={blog.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline ml-2"
            onClick={(e) => e.stopPropagation()}
          >
            Ver Video
          </a>
        )}
      </p>

      {/* GIF del proyecto - Ahora es clicable y tiene animación */}
      <div 
        className={`w-48 h-48 bg-gray-700 rounded-md flex items-center justify-center overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 ${isActive ? 'animate-gif-pulse-glow' : ''}`}
        onClick={handleGifClick}
        style={{ '--glow-color': glowColor }}
      >
        <img
          src={`/images/${blog.gifName}`}
          alt={`GIF del Proyecto ${blog.id}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Indicador de carga de audio */}
      {isLoading && <p className="text-sm text-gray-400">Cargando audio...</p>}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

const DevLogs = () => {
  // Datos de ejemplo para los 6 blogs con nombres de audio asociados a los personajes de la imagen
  const devBlogData = [
    { 
      id: 1, 
      imageUrl: '/images/blog1.png', 
      description: 'Explicación de página web enfocada en un recetario donde se almacenan en una base de datos, se pueden editar y también eliminar. Incluye explicación de funcionalidad y código.', 
      videoLink: '#', 
      gifName: 'proyecto1.gif', 
      audioName: 'luffy.mp3' 
    },
    { 
      id: 2, 
      imageUrl: '/images/blog2.png', 
      description: 'Explicación de página web sobre recursos humanos donde se pueden agregar roles, buscar y filtrar por nombre, correo o rol. Para acceder es necesario iniciar sesión con Google. Incluye explicación de funcionalidad y código.', 
      videoLink: '#', 
      gifName: 'proyecto2.gif', 
      audioName: 'zoro.mp3' 
    },
    // CAMBIO CLAVE: Sanji al 3er lugar
    { 
      id: 3, 
      imageUrl: '/images/blog3.png', 
      description: 'Página web de práctica donde se estaba aprendiendo a hacer un login, mantener y cerrar sesión. Incluye explicación de funcionalidad y código.', 
      videoLink: '#', 
      gifName: 'proyecto3.gif', 
      audioName: 'sanji.mp3' 
    },
    // CAMBIO CLAVE: Usopp al 4to lugar
    { 
      id: 4, // El ID se mantiene, pero el contenido es de Usopp
      imageUrl: '/images/blog5.png', 
      description: 'Integración de estilos a la mi página con React/VSC', 
      videoLink: '#', 
      gifName: 'proyecto5.gif', 
      audioName: 'usopp.mp3' 
    },
    // CAMBIO CLAVE: Franky al 5to lugar
    { 
      id: 5, // El ID se mantiene, pero el contenido es de Franky
      imageUrl: '/images/blog4.png', 
      description: 'Página web enfocada en rutinas de gimnasio donde para entrar se necesita iniciar sesión. Incluye explicación de funcionalidad y código.', 
      videoLink: '#', 
      gifName: 'proyecto4.gif', 
      audioName: 'franky.mp3' 
    },
    // Robin al 6to lugar
    { 
      id: 6, 
      imageUrl: '/images/blog6.png', 
      description: 'Configuración de entorno React/VSC y borrador de la página', 
      videoLink: '#', 
      gifName: 'proyecto6.gif', 
      audioName: 'robin.mp3' 
    },
  ];

  return (
    <section 
      id="devlogs" 
      className="py-20 px-4 md:px-8 lg:px-16 text-white relative z-10 
                 bg-[url('/images/fondo4.png')] bg-cover bg-center bg-no-repeat" 
    >

      {/* Separador superior */}
      <div className="w-full h-8 bg-wood-separator absolute top-0 left-0"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-pirata-one text-white text-center mb-12
                       bg-black border-4 border-white p-4 rounded-lg">
          DevLogs
        </h2>

        {/* Contenedor de la cuadrícula de blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {devBlogData.map(blog => (
            <DevBlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      {/* Separador inferior */}
      <div className="w-full h-8 bg-wood-separator absolute bottom-0 left-0"></div>

      {/* Estilos adicionales para las animaciones del GIF (ahora con color dinámico) */}
      <style>
        {`
        @keyframes gif-pulse-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0px rgba(var(--glow-color-rgb, 255, 255, 0), 0);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 20px 5px var(--glow-color);
          }
        }

        .animate-gif-pulse-glow {
          animation: gif-pulse-glow 1s ease-in-out infinite alternate;
        }
        `}
      </style>
    </section>
  );
};

export default DevLogs;
