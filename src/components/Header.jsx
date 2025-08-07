// src/components/Header.jsx
import React, { useState, useEffect, useCallback } from 'react';
<<<<<<< HEAD
// Importa los iconos de hamburguesa y cerrar. Los iconos de redes sociales han sido eliminados.
import { FaBars, FaTimes } from 'react-icons/fa';
=======
// Importa los iconos de redes sociales. Asegúrate de tener 'react-icons' instalado.
import { FaGithub, FaLinkedin, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa

// Recibe isAnyModalOpen como prop
const Header = ({ isAnyModalOpen }) => {
  // Estado para controlar la visibilidad del navbar (basado en scroll)
  const [isVisibleByScroll, setIsVisibleByScroll] = useState(true);
  // Estado para guardar la última posición de scroll
  const [lastScrollY, setLastScrollY] = useState(0);
  // Estado para controlar la visibilidad del menú móvil (hamburguesa)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Nuevo estado para manejar la posición inicial del toque para el swipe
  const [touchStartX, setTouchStartX] = useState(0);

  // Inicializa lastScrollY en el montaje del componente a la posición actual del scroll
  useEffect(() => {
    setLastScrollY(window.scrollY);
  }, []);

  // Función para manejar el evento de scroll
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisibleByScroll(false); // Oculta el navbar al bajar
    } else {
      setIsVisibleByScroll(true); // Muestra el navbar al subir o al estar en la parte superior
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // useEffect para añadir y limpiar el event listener del scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Función para alternar la visibilidad del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Control body scroll when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Deshabilita el scroll del body
    } else {
      document.body.style.overflow = 'unset'; // Habilita el scroll del body
    }
  };

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset'; // Habilita el scroll del body
  };

  // Manejador para el inicio del toque (para detección de swipe)
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX); // Guarda la posición X inicial del toque
  };

  // Manejador para el final del toque (detección de swipe)
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX; // Posición X final del toque
    const swipeDistance = touchEndX - touchStartX; // Distancia del deslizamiento
    const swipeThreshold = 50; // Umbral mínimo para considerar un deslizamiento (en píxeles)

    // Si se deslizó hacia la derecha y el menú no está abierto
    if (swipeDistance > swipeThreshold && !isMobileMenuOpen) {
      toggleMobileMenu(); // Abre el menú móvil
    }
  };

  // Determina la visibilidad final del navbar:
  // Si un modal (de proyectos) está abierto, el navbar debe estar oculto.
  // De lo contrario, sigue la lógica de visibilidad por scroll.
  const finalIsVisible = isAnyModalOpen ? false : isVisibleByScroll;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50
<<<<<<< HEAD
                   bg-[url('/images/fondo0.png')] bg-cover bg-no-repeat bg-center /* Fondo con la imagen fondo0.png */
=======
                   bg-[#4A2C2A] /* Color café madera más oscuro para el navbar */
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
                   border-b-8 border-primary-gold
                   shadow-lg py-4 px-8 flex justify-between items-center
                   transform transition-transform duration-300 ease-in-out
                   ${finalIsVisible ? 'translate-y-0' : '-translate-y-full'}`}
        onTouchStart={handleTouchStart} // Añade el listener para el inicio del toque
        onTouchEnd={handleTouchEnd}     // Añade el listener para el final del toque (detección de swipe)
      >

        {/* Menú de escritorio (visible en md y pantallas más grandes) */}
        {/* hidden: Oculto por defecto en pantallas pequeñas */}
        {/* md:flex: Se muestra como flexbox en pantallas medianas y más grandes */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-6 md:space-x-10">
            <li>
              <a href="#inicio" className="group flex items-center space-x-2
<<<<<<< HEAD
                                          text-white
=======
                                          text-wood-light
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
                                          hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
                <span className="font-adventure text-lg">Inicio</span>
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="group flex items-center space-x-2
<<<<<<< HEAD
                                          text-white
=======
                                          text-wood-medium
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
                                          hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
                <span className="font-adventure text-lg">Sobre Mí</span>
              </a>
            </li>
            <li>
              <a href="#proyectos" className="group flex items-center space-x-2
<<<<<<< HEAD
                                          text-white
=======
                                          text-wood-medium
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
                                          hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
                <span className="font-adventure text-lg">Proyectos</span>
              </a>
            </li>
            <li>
<<<<<<< HEAD
              <a href="#devlogs" className="group flex items-center space-x-2 {/* CAMBIO: Enlace a #devlogs */}
                                          text-white
                                          hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
                <span className="font-adventure text-lg">DevLogs</span> {/* CAMBIO: Texto del enlace a DevLogs */}
=======
              <a href="#blogs" className="group flex items-center space-x-2
                                          text-wood-medium
                                          hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
                <span className="font-adventure text-lg">Blogs</span>
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
              </a>
            </li>
            <li>
              <a href="#contacto" className="group flex items-center space-x-2
<<<<<<< HEAD
                                          text-white
=======
                                          text-wood-medium
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
                                          hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
                <span className="font-adventure text-lg">Contacto</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Icono de hamburguesa (visible en pantallas pequeñas) */}
        {/* md:hidden: Oculto en pantallas medianas y más grandes */}
        <div className="md:hidden flex-grow flex justify-start">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

<<<<<<< HEAD
        {/* Los iconos de redes sociales han sido eliminados de aquí */}
        <div className="flex space-x-4 md:flex">
          {/* Este div ahora está vacío, ya que los iconos de redes sociales han sido eliminados */}
=======
        {/* Iconos de redes sociales (siempre visibles, pero ajustados para móvil) */}
        <div className="flex space-x-4 md:flex">
          <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer"
             className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
            <FaGithub className="w-7 h-7" />
          </a>
          <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer"
             className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a href="https://youtube.com/tu_canal" target="_blank" rel="noopener noreferrer"
             className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
            <FaYoutube className="w-7 h-7" />
          </a>
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
        </div>
      </header>

      {/* Overlay para el menú móvil */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu} // Cierra el menú al hacer clic en el overlay
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
        ></div>
      )}

      {/* Menú móvil (oculto por defecto, se muestra con isMobileMenuOpen) */}
      {/* md:hidden: Oculto en pantallas medianas y más grandes */}
<<<<<<< HEAD
      <div className={`fixed top-0 left-0 w-64 h-full bg-[url('/images/fondo0.png')] bg-cover bg-no-repeat bg-center z-50 transform transition-transform duration-300 ease-in-out md:hidden
=======
      <div className={`fixed top-0 left-0 w-64 h-full bg-[#4A2C2A] z-50 transform transition-transform duration-300 ease-in-out md:hidden
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
                       ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Botón de cerrar dentro del menú móvil para mejor UX */}
        <button onClick={closeMobileMenu} className="absolute top-4 right-4 text-white text-3xl">
          <FaTimes />
        </button>
        <ul className="flex flex-col items-start p-8 space-y-6 mt-20">
<<<<<<< HEAD
          {/* Listado de enlaces con separadores de imagen */}
          <li className="w-full pb-4">
            <a href="#inicio" onClick={closeMobileMenu} className="text-white hover:text-primary-gold text-2xl font-adventure">Inicio</a>
          </li>
          <div className="h-1 w-full bg-[url('/images/fondo0.png')] bg-cover bg-no-repeat bg-center"></div>
          <li className="w-full pb-4">
            <a href="#sobre-mi" onClick={closeMobileMenu} className="text-white hover:text-primary-gold text-2xl font-adventure">Sobre Mí</a>
          </li>
          <div className="h-1 w-full bg-[url('/images/fondo0.png')] bg-cover bg-no-repeat bg-center"></div>
          <li className="w-full pb-4">
            <a href="#proyectos" onClick={closeMobileMenu} className="text-white hover:text-primary-gold text-2xl font-adventure">Proyectos</a>
          </li>
          <div className="h-1 w-full bg-[url('/images/fondo0.png')] bg-cover bg-no-repeat bg-center"></div>
          <li className="w-full pb-4">
            <a href="#devlogs" onClick={closeMobileMenu} className="text-white hover:text-primary-gold text-2xl font-adventure">DevLogs</a> {/* CAMBIO: Enlace a #devlogs y texto a DevLogs */}
          </li>
          <div className="h-1 w-full bg-[url('/images/fondo0.png')] bg-cover bg-no-repeat bg-center"></div>
          <li className="w-full pb-4 last:border-b-0">
            <a href="#contacto" onClick={closeMobileMenu} className="text-white hover:text-primary-gold text-2xl font-adventure">Contacto</a>
          </li>
          {/* Los iconos de redes sociales han sido eliminados de aquí */}
          <div className="flex space-x-4 mt-8">
            {/* Este div ahora está vacío, ya que los iconos de redes sociales han sido eliminados */}
=======
          {/* Añadido border-b-2 border-black y pb-4 para el separador, y last:border-b-0 para el último elemento */}
          <li className="w-full border-b-2 border-black pb-4">
            <a href="#inicio" onClick={closeMobileMenu} className="text-wood-light hover:text-primary-gold text-2xl font-adventure">Inicio</a>
          </li>
          <li className="w-full border-b-2 border-black pb-4">
            <a href="#sobre-mi" onClick={closeMobileMenu} className="text-wood-medium hover:text-primary-gold text-2xl font-adventure">Sobre Mí</a>
          </li>
          <li className="w-full border-b-2 border-black pb-4">
            <a href="#proyectos" onClick={closeMobileMenu} className="text-wood-medium hover:text-primary-gold text-2xl font-adventure">Proyectos</a>
          </li>
          <li className="w-full border-b-2 border-black pb-4">
            <a href="#blogs" onClick={closeMobileMenu} className="text-wood-medium hover:text-primary-gold text-2xl font-adventure">Blogs</a>
          </li>
          <li className="w-full pb-4 last:border-b-0"> {/* El último elemento no tiene borde inferior */}
            <a href="#contacto" onClick={closeMobileMenu} className="text-wood-medium hover:text-primary-gold text-2xl font-adventure">Contacto</a>
          </li>
          <div className="flex space-x-4 mt-8">
            <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer"
               className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer"
               className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="https://youtube.com/tu_canal" target="_blank" rel="noopener noreferrer"
               className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
              <FaYoutube className="w-8 h-8" />
            </a>
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
