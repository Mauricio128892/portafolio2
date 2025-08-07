// src/components/Footer.jsx
<<<<<<< HEAD
import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Tone from 'tone'; // Importa Tone.js para el manejo de audio

const Footer = () => {
  const audioPlayerRef = useRef(null); // Referencia para la instancia de Tone.Player
  const progressIntervalRef = useRef(null); // Referencia para el intervalo de actualización de progreso
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si el audio está reproduciéndose
  const [isLoaded, setIsLoaded] = useState(false); // Estado para saber si el audio está cargado

  // useEffect para inicializar y cargar el audio una vez que el componente se monta
  useEffect(() => {
    const setupAudio = async () => {
      try {
        // Crea un nuevo Tone.Player para cargar el archivo MP3
        const player = new Tone.Player("/audio/song.mp3").toDestination();
        player.volume.value = -10; // Ajusta el volumen (en decibelios)
        player.fadeIn = 0.1; // Efecto de entrada suave
        player.fadeOut = 0.5; // Efecto de salida suave

        // Espera a que el archivo de audio esté cargado
        await player.loaded;
        audioPlayerRef.current = player; // Guarda la instancia del reproductor
        setIsLoaded(true); // Marca el audio como cargado
        console.log('song.mp3 cargado exitosamente.');
      } catch (error) {
        console.error('Error al inicializar el reproductor de audio o cargar song.mp3:', error);
      }
    };

    setupAudio();

    // Función de limpieza: se ejecuta cuando el componente se desmonta
    return () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.dispose(); // Libera los recursos de Tone.js
        audioPlayerRef.current = null;
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current); // Limpia el intervalo de progreso
      }
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez

  // Manejador de clic para la imagen del Going Merry
  const handleMerryClick = useCallback(async () => {
    if (!isLoaded) {
      console.log("Audio aún cargando, por favor espera...");
      return;
    }

    try {
      // Asegura que el contexto de audio esté iniciado o reanudado al hacer clic
      if (Tone.context.state !== 'running') {
        await Tone.start();
        console.log('Audio context resumed on click for playback.');
      }

      if (isPlaying) {
        // Si está reproduciendo, pausar
        audioPlayerRef.current.stop(); // Detiene la reproducción
        clearInterval(progressIntervalRef.current); // Detiene la actualización del progreso
        progressIntervalRef.current = null;
      } else {
        // Si está pausado o detenido, iniciar reproducción
        // Reinicia el progreso a 0 si la canción ya había terminado
        const startOffset = audioPlayerRef.current.currentTime >= audioPlayerRef.current.buffer.duration ? 0 : audioPlayerRef.current.currentTime;
        audioPlayerRef.current.start(0, startOffset); // Inicia desde el progreso actual o 0

        // Inicia la actualización del progreso cada 100ms
        progressIntervalRef.current = setInterval(() => {
          if (audioPlayerRef.current && audioPlayerRef.current.state === "started") {
            const currentTime = audioPlayerRef.current.currentTime;
            // Si la canción termina, detener la reproducción y resetear
            if (currentTime >= audioPlayerRef.current.buffer.duration) {
              audioPlayerRef.current.stop();
              clearInterval(progressIntervalRef.current);
              progressIntervalRef.current = null;
              setIsPlaying(false);
            }
          }
        }, 100);
      }
      setIsPlaying(!isPlaying); // Alterna el estado de reproducción

    } catch (error) {
      console.error("Error al reproducir o pausar el audio:", error);
    }
  }, [isPlaying, isLoaded]); // Dependencias para useCallback

  return (
    // Contenedor principal del pie de página.
    <footer className="py-8 px-4 md:px-8 lg:px-16 text-white text-center relative z-10
                       bg-[url('/images/final.png')] bg-cover bg-center bg-no-repeat">
      {/* Contenedor para la imagen del Going Merry */}
      {/* h-72 para dar espacio a la animación vertical */}
      <div className="w-full text-center mb-2 relative h-72 flex items-end justify-center">
        <img
          src="/images/goingmerry.jpg" // Asegúrate de que esta ruta sea correcta
          alt="Going Merry"
          // Posicionamiento absoluto, centrado y animación condicional
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-auto max-w-xs object-contain opacity-80 cursor-pointer
                      ${isPlaying ? 'animate-merry-sway' : 'animate-merry-float-idle'}`} // Animación condicional
          onClick={handleMerryClick}
        />
        {/* La barra de duración del audio ha sido eliminada */}
      </div>

      {/* Texto de copyright o información del pie de página */}
      <p className="text-white">&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
      
      {/* Estilos CSS para las animaciones */}
      <style>
        {`
        /* Animación de "cabeceo" cuando la música está sonando */
        @keyframes merry-sway {
          0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
          25% { transform: translateX(calc(-50% - 15px)) translateY(-10px) rotate(-2deg); } /* Más movimiento y rotación */
          75% { transform: translateX(calc(-50% + 15px)) translateY(10px) rotate(2deg); }  /* Más movimiento y rotación */
        }
        .animate-merry-sway {
          animation: merry-sway 2.5s ease-in-out infinite alternate; /* Más rápido (2.5s) */
        }

        /* Nueva animación de solo flotar arriba y abajo cuando la música no está activa */
        @keyframes merry-float-idle {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); } /* Flota 10px hacia arriba */
        }
        .animate-merry-float-idle {
          animation: merry-float-idle 3s ease-in-out infinite alternate; /* Animación suave de flotar */
        }

        /* Estilos para el slider de progreso (si se reintroduce) */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #FFD700; /* Dorado */
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #FFD700; /* Dorado */
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
        `}
      </style>
=======
import React from 'react';

const Footer = () => {
  return (
    // Contenedor principal del pie de página.
    // py-8: Padding vertical.
    // px-4 md:px-8 lg:px-16: Padding horizontal responsivo.
    // bg-wood-dark: Color de fondo (asumiendo que quieres el color de madera oscura).
    // text-white: Color de texto.
    // text-center: Centra el texto.
    // relative z-10: Asegura que esté por encima del fondo general.
    <footer className="py-8 px-4 md:px-8 lg:px-16 bg-wood-dark text-white text-center relative z-10">
      {/* Contenedor para la imagen del Going Merry */}
      {/* w-full: Ocupa todo el ancho disponible. */}
      {/* h-auto: Mantiene la proporción de la imagen. */}
      {/* object-contain: Escala la imagen para que quepa dentro del contenedor sin recortarla. */}
      {/* mx-auto: Centra la imagen horizontalmente. */}
      {/* opacity-80: Reduce la opacidad para que sea más sutil. */}
      {/* mb-2: Margen inferior para separar la imagen del texto del copyright (reducido). */}
      <div className="w-full text-center mb-2">
        <img
          src="/images/goingmerry.jpg" // Asegúrate de que esta ruta sea correcta
          alt="Going Merry"
          className="w-full h-auto max-w-xs mx-auto object-contain opacity-80 animate-float-up" // ¡Añadida la clase animate-float-up!
        />
      </div>

      {/* Texto de copyright o información del pie de página */}
      <p className="text-white">&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p> {/* Asegurado text-white */}
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
    </footer>
  );
};

export default Footer;
