// src/App.jsx
import React, { useState } from 'react'; // Importa useState
// Importa todos los componentes que forman tu aplicación.
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
// import TestNav from './components/TestNav'; // Comentado o eliminado, ya no es necesario para la depuración
import Footer from './components/Footer';

// Componente principal de la aplicación.
function App() {
  // Nuevo estado para controlar si algún modal de proyecto está abierto
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  // Funciones para actualizar el estado del modal
  const setModalOpen = () => setIsAnyModalOpen(true);
  const setModalClosed = () => setIsAnyModalOpen(false);

  return (
    // Contenedor principal de la aplicación.
    // min-h-screen asegura que ocupe al menos toda la altura de la ventana.
    // bg-sea-blue aplica el color de fondo azul oscuro definido en tailwind.config.js.
    // relative y overflow-hidden son para el posicionamiento del fondo de ondas.
    <div className="min-h-screen bg-sea-blue relative overflow-hidden">
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
        <Blogs />       {/* Sección de blogs. */}
        <Contact />     {/* Sección de contacto. */}
      </main>

      {/* Renderiza el componente Footer (pie de página). */}
      <Footer />
    </div>
  );
}

export default App;
