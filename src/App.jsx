// src/App.jsx
import React, { useState, useEffect } from 'react'; // Importa useState y useEffect
// Importa todos los componentes que forman tu aplicación.
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DevLogs from './components/DevLogs'; // Asegúrate de que este sea el nombre correcto del archivo y componente
import Footer from './components/Footer';

// Componente principal de la aplicación.
function App() {
  // Estado para controlar si algún modal de proyecto está abierto
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);
  // Nuevo estado para controlar la visibilidad de la pantalla de carga
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  // useEffect para manejar la pantalla de carga
  useEffect(() => {
    // No hay temporizador aquí, la pantalla de carga se ocultará al hacer clic.
    // Puedes añadir lógica de precarga de assets aquí si es necesario en el futuro.

    // Función de limpieza (vacía por ahora, pero buena práctica si se añade lógica de carga)
    return () => {};
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar

  // Funciones para actualizar el estado del modal
  const setModalOpen = () => setIsAnyModalOpen(true);
  const setModalClosed = () => setIsAnyModalOpen(false);

  // Manejador de clic para la pantalla de carga
  const handleLoadingScreenClick = () => {
    setShowLoadingScreen(false);
  };

  return (
    // Contenedor principal de la aplicación.
    // min-h-screen asegura que ocupe al menos toda la altura de la ventana.
    // bg-sea-blue aplica el color de fondo azul oscuro definido en tailwind.config.js.
    // relative y overflow-hidden son para el posicionamiento del fondo de ondas.
    <div className="min-h-screen bg-sea-blue relative overflow-hidden">
      {/* Pantalla de carga condicional */}
      {showLoadingScreen && (
        <div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white text-center z-50 p-4 cursor-pointer" // Añadido cursor-pointer
          onClick={handleLoadingScreenClick} // Añadido el manejador de clic
        >
          <h1 className="text-4xl md:text-5xl font-pirata-one mb-4 animate-pulse">¡Bienvenido!</h1> {/* CAMBIO CLAVE: Eliminado "Nakama" */}
          <p className="text-lg md:text-xl font-montserrat">
            La mayoría de los elementos interactivos de este portafolio, incluyendo los GIFs,
            se pueden **interactuar** con solo presionarlos.
          </p>
          <p className="text-sm mt-8 animate-pulse">Haz clic en cualquier lugar para continuar...</p> {/* Mensaje para guiar al usuario */}
        </div>
      )}

      {/* Fondo general de ondas sutil. */}
      {/* absolute inset-0 posiciona el div para cubrir todo el contenedor padre. */}
      {/* bg-waves-pattern (si está definido) y bg-repeat para la textura. */}
      {/* opacity-10 para que sea sutil, z-0 para que esté detrás de todo. */}
      <div className="absolute inset-0 bg-waves-pattern bg-repeat opacity-10 z-0"></div>

      {/* Renderiza el componente Header (tu barra de navegación). */}
      {/* Asegúrate de que el componente Header use la clase bg-wood-dark para el fondo. */}
      {/* Pasa el estado isAnyModalOpen al Header */}
      <Header isAnyModalOpen={isAnyModalOpen} />

      {/* Contenedor principal para las secciones de contenido. */}
      {/* relative y z-10 aseguran que el contenido esté por encima del fondo de ondas. */}
      <main className="relative z-10">
        <HeroSection /> {/* Sección de inicio con Luffy y el cartel. */}
        <AboutMe />     {/* Sección "Sobre Mí". */}
        {/* Pasa las funciones para abrir/cerrar el modal al componente Projects */}
        <Projects onModalOpen={setModalOpen} onModalClose={setModalClosed} />
        <DevLogs />       {/* Sección de DevLogs. */}
        <Contact />     {/* Sección de contacto. */}
      </main>

      {/* Renderiza el componente Footer (pie de página). */}
      <Footer />
    </div>
  );
}

export default App;
