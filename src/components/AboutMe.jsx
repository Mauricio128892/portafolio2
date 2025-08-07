// src/components/AboutMe.jsx
import React, { useRef, useState, useEffect, useCallback } from 'react';

const AboutMe = () => {
  const risaAudioRef = useRef(null); // Referencia para el audio de la risa
  const sectionRef = useRef(null); // Referencia para la sección completa
  const luffyGifRef = useRef(null); // Nueva referencia para el GIF de Luffy
  const [luffyPowerAnimation, setLuffyPowerAnimation] = useState(''); // Estado para la animación de poder de Luffy
  // Eliminado: const [sectionShakeAnimation, setSectionShakeAnimation] = useState(''); // Estado para la animación de temblor de la sección
  const [showAnimatedLuffy, setShowAnimatedLuffy] = useState(false); // Estado para controlar la visibilidad del Luffy animado

  useEffect(() => {
    // Inicializa el audio de la risa de Luffy
    risaAudioRef.current = new Audio('/audio/risa1.mp3');
    risaAudioRef.current.load(); // Precarga el audio

    // Limpieza al desmontar el componente
    return () => {
      if (risaAudioRef.current) {
        risaAudioRef.current.pause();
        risaAudioRef.current.currentTime = 0;
      }
      risaAudioRef.current = null;
    };
  }, []); // Se ejecuta solo una vez al montar y desmontar

  // Manejador de clic para el GIF de Luffy
  const handleLuffyClick = useCallback(() => {
    if (risaAudioRef.current && luffyGifRef.current) {
      // Reinicia el audio
      risaAudioRef.current.pause();
      risaAudioRef.current.currentTime = 0;
      risaAudioRef.current.play().catch(e => console.error("Error al reproducir el audio de risa:", e));

      // Reinicia la animación de Luffy
      // 1. Quita la clase de animación
      setLuffyPowerAnimation('');
      // 2. Fuerza un reflow para reiniciar la animación
      void luffyGifRef.current.offsetWidth;
      // 3. Vuelve a añadir la clase de animación
      setLuffyPowerAnimation('animate-luffy-power-release');
      setShowAnimatedLuffy(true); // Muestra el Luffy animado

      // Eliminado: Activa la animación de temblor de la sección
      // setSectionShakeAnimation('animate-section-tremble');

      setTimeout(() => {
        setLuffyPowerAnimation('');
        setShowAnimatedLuffy(false); // Oculta el Luffy animado
        // Eliminado: setSectionShakeAnimation('');
      }, 6000); // La duración de la animación de Luffy sigue siendo 6 segundos
    }
  }, []);

  return (
    <div className="about-me-container">
      <section
        id="sobre-mi"
        ref={sectionRef}
        // Eliminado: ${sectionShakeAnimation}
        className={`px-4 md:px-8 lg:px-16 pt-16 pb-16 bg-[url('/images/fondo2.png')] bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden flex justify-center items-center`}
      >
        {/* Separador superior - Usando bg-wood-separator */}
        <div className="w-full h-8 bg-wood-separator absolute top-0 left-0"></div>

        {/* Contenedor principal del contenido. */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-x-8 relative z-10 w-full">

          {/* Contenedor de la información de "Sobre Mí" */}
          {/* Fondo con imagen fondo2.png, texto ajustado, borde negro y esquinas más redondeadas */}
          <div className="w-full lg:w-1/2 bg-[url('/images/fondo22.png')] bg-cover bg-no-repeat bg-center p-6 rounded-2xl shadow-lg lg:pr-8 border-4 border-black">
            {/* Título principal a blanco */}
            <h2 className="text-5xl md:text-6xl font-pirata-one text-white text-left mb-12">
              Sobre Mí
            </h2>

            <div className="mb-10">
              {/* Título de subsección a blanco */}
              <h3 className="text-3xl font-metal-mania text-white mb-4">Formación</h3>
              {/* Párrafo a blanco con tu información */}
              <p className="text-lg leading-relaxed text-white">
                Mi nombre es Mauricio Valladares Velueta, tengo 20 años y actualmente estudio Ingeniería de Software y Sistemas Computacionales en la UNID de Campeche, México.
              </p>
            </div>

            <div className="mb-10">
              {/* Título de subsección a blanco */}
              <h3 className="text-3xl font-metal-mania text-white mb-4">El Saber Hacer (Habilidades Técnicas)</h3>
              {/* Párrafo a blanco con tu información */}
              <p className="text-lg leading-relaxed text-white">
                He manejado lenguajes y tecnologías como HTML, Java, React, Python y C#. Siempre estoy buscando aprender y mejorar mis habilidades en el desarrollo de software.
              </p>
            </div>

            <div className="mb-10">
              {/* Título de subsección a blanco */}
              <h3 className="text-3xl font-metal-mania text-white mb-4">El Saber Ser (Cualidades Personales)</h3>
              {/* Párrafo a blanco con tu información */}
              <p className="text-lg leading-relaxed text-white">
                Soy una persona dedicada y adaptable, con un fuerte compromiso por la mejora continua y el trabajo en equipo. Me esfuerzo por aplicar la lógica y la creatividad en cada desafío.
              </p>
            </div>

            <div className="mb-10">
              {/* Título de subsección a blanco */}
              <h3 className="text-3xl font-metal-mania text-white mb-4">Cursos y Formación Extra</h3>
              {/* Párrafo a blanco con tu información */}
              <p className="text-lg leading-relaxed text-white">
                Actualmente, estoy ampliando mis conocimientos con cursos adicionales para fortalecer mis bases en desarrollo web y sistemas.
              </p>
            </div>

            <div>
              {/* Título de subsección a blanco */}
              <h3 className="text-3xl font-metal-mania text-white mb-4">Pasatiempos</h3>
              {/* Párrafo a blanco con tu información */}
              <p className="text-lg leading-relaxed text-white">
                En mi tiempo libre, disfruto ver series, jugar videojuegos, pasar tiempo de calidad con mi familia, y me encantan los animales. También me gusta mantenerme activo yendo al gimnasio.
              </p>
            </div>
          </div>
          
          {/* Contenedor del GIF de Luffy */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end lg:mr-8">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Luffy ORIGINAL - visible cuando la animación NO está activa */}
              {!showAnimatedLuffy && (
                <img
                  ref={luffyGifRef} // Asigna la referencia al GIF de Luffy
                  src="/images/gear5.gif"
                  alt="Gear 5 GIF"
                  className={`relative max-w-md w-full max-h-[45.5vh] lg:max-h-[50vh] object-contain cursor-pointer z-10`}
                  onClick={handleLuffyClick}
                />
              )}

              {/* Luffy ANIMADO - visible SOLO cuando la animación está activa */}
              {showAnimatedLuffy && (
                <>
                  {/* Aura para el Luffy animado */}
                  <div className={`luffy-aura animate-luffy-aura-release`}></div>
                  <img
                    ref={luffyGifRef} // Asigna la referencia también al GIF animado
                    src="/images/gear5.gif"
                    alt="Gear 5 GIF Animation"
                    className={`relative max-w-md w-full max-h-[45.5vh] lg:max-h-[50vh] object-contain ${luffyPowerAnimation} z-20`}
                  />
                </>
              )}
            </div>
          </div>

        </div>

        {/* Separador inferior - Usando bg-wood-separator */}
        <div className="w-full h-8 bg-wood-separator absolute bottom-0 left-0"></div>
      </section>

      <style>{`
        @keyframes luffy-power-release {
          0% { filter: brightness(1); }
          5% { filter: brightness(1.1); } /* Reducido el brillo y eliminado el drop-shadow */
          95% { filter: brightness(1.1); } /* Reducido el brillo y eliminado el drop-shadow */
          100% { filter: brightness(1); }
        }
        .animate-luffy-power-release {
          animation: luffy-power-release 6s ease-in-out forwards; /* Dura 6 segundos */
        }

        .luffy-aura {
          position: absolute;
          width: 50%;
          height: 50%;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          z-index: 0;
          filter: blur(20px);
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scale(0);
        }

        @keyframes luffy-aura-effect {
          0% { opacity: 0; transform: translateX(-50%) scale(0); }
          5% { opacity: 0.2; transform: translateX(-50%) scale(1.0); } /* Reducida opacidad y escala */
          50% { opacity: 0.3; transform: translateX(-50%) scale(1.2); } /* Reducida opacidad y escala */
          95% { opacity: 0.2; transform: translateX(-50%) scale(1.0); } /* Reducida opacidad y escala */
          100% { opacity: 0; transform: translateX(-50%) scale(0); }
        }
        .animate-luffy-aura-release {
          animation: luffy-aura-effect 6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
