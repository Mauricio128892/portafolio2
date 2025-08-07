import React, { useEffect, useRef, useState, useCallback } from 'react';

const HeroSection = () => {
  const luffyAudioRef = useRef(null);
  const cartelImageRef = useRef(null);
  const [luffyAnimationState, setLuffyAnimationState] = useState('idle');
  const [cartelAnimation, setCartelAnimation] = useState('');

  useEffect(() => {
    // Inicializa el audio de Luffy
    luffyAudioRef.current = new Audio('/audio/sonido1.mp3');
    luffyAudioRef.current.load();

    const audio = luffyAudioRef.current;
    const handleAudioEnded = () => {
      console.log('Audio terminado, Luffy regresando...');
      setLuffyAnimationState('returning');
    };

    audio.addEventListener('ended', handleAudioEnded);

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleAudioEnded);
        audio.pause();
        audio.currentTime = 0;
      }
      luffyAudioRef.current = null;
    };
  }, []);

  const handleLuffyClick = () => {
    if (luffyAudioRef.current && luffyAnimationState === 'idle') {
      setLuffyAnimationState('leaving');
      luffyAudioRef.current.pause();
      luffyAudioRef.current.currentTime = 0;
      luffyAudioRef.current.play().catch(e => console.error("Error al reproducir el audio:", e));
    }
  };

  useEffect(() => {
    if (luffyAnimationState === 'returning') {
      const returnDuration = 1000;
      const timer = setTimeout(() => {
        setLuffyAnimationState('idle');
      }, returnDuration);
      return () => clearTimeout(timer);
    }
  }, [luffyAnimationState]);

  const getLuffyAnimationClasses = () => {
    let animationClass = '';
    if (luffyAnimationState === 'leaving') {
      animationClass = 'animate-slide-out-left';
    } else if (luffyAnimationState === 'returning') {
      animationClass = 'animate-slide-in-right-fade-in';
    }
    return `object-contain cursor-pointer ${animationClass}`;
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full
                   bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('/images/cielo2.gif')` }}
    >
      {/* Contenedor del cartel y la cuerda */}
      <div className="absolute top-[70px] left-[5%] md:left-[8%] lg:left-[10%] flex flex-col items-center">
        {/* Cuerda: Ajustado height para responsividad */}
        <div className="h-[80px] md:h-[100px] lg:h-[120px] w-[2px] bg-white origin-top animate-swing-rope z-20"></div>
        {/* Cartel: Ajustado width y height para ser 35% más chicos */}
        <img
          ref={cartelImageRef}
          src="/images/cartel.png"
          alt="Cartel de Se Busca"
          className={`w-[163px] h-[228px] object-contain animate-swing-poster origin-top z-10 ${cartelAnimation}
                      md:w-[260px] md:h-[358px]
                      lg:w-[325px] lg:h-[455px]`}
          style={{ marginTop: '-2px' }}
          // Puedes añadir un onClick aquí si el cartel debe hacer algo al ser presionado
        />
      </div>

      <img
        src="/images/luffy.gif"
        alt="Luffy navegando en su barco"
        // Ajustado height para ser 25% más pequeño
        className={`absolute bottom-[0px] right-0 h-[225px] object-contain z-20 ${getLuffyAnimationClasses()}
                    md:h-[300px] lg:h-[375px]`}
        onClick={handleLuffyClick}
      />

      <style>
        {`
        @keyframes swing-rope {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes swing-poster {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .animate-swing-rope {
          animation: swing-rope 4s ease-in-out infinite;
        }

        .animate-swing-poster {
          animation: swing-poster 4s ease-in-out infinite;
        }

        @keyframes slide-out-left {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-150%); opacity: 0; }
        }
        .animate-slide-out-left {
          animation: slide-out-left 1s forwards;
        }

        @keyframes slide-in-right-fade-in {
          from { transform: translateX(150%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right-fade-in {
          animation: slide-in-right-fade-in 1s forwards;
        }

        @keyframes cartel-shake {
          0%, 100% { transform: translateX(0) rotate(-5deg); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px) rotate(-8deg); }
          20%, 40%, 60%, 80% { transform: translateX(10px) rotate(-2deg); }
        }
        .animate-cartel-shake {
          animation: cartel-shake 4s ease-in-out;
        }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
