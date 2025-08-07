// src/components/Contact.jsx
import React from 'react';
// Importa los iconos necesarios
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    // Contenedor principal de la sección "Contacto".
    // py-20: Padding vertical para espacio arriba y abajo.
    // px-4 md:px-8 lg:px-16: Padding horizontal responsivo.
    // bg-cover bg-center bg-fixed: Ajustes para el fondo.
    // text-white: Color de texto general para esta sección.
    // relative z-10: Asegura que esté por encima del fondo de ondas generales de App.jsx
    // bg-[url('/images/FONDO.png')]: La imagen de fondo se aplica como clase de Tailwind.
    // min-h-[850px]: Altura mínima de la sección ajustada para acomodar la imagen.
    <section
      id="contacto"
      className="py-20 px-4 md:px-8 lg:px-16 bg-cover bg-center bg-fixed text-white relative z-10 bg-[url('/images/FONDO.png')] min-h-[850px]"
    >
      {/* Separador de madera en la parte superior de la sección */}
      <div className="w-full h-8 bg-wood-separator absolute top-0 left-0 z-20"></div>

      {/* Contenedor principal del contenido - Manejará el apilamiento en móvil y la disposición en escritorio */}
      {/* flex flex-col: Por defecto, apila en columnas (móvil y tablet). */}
      {/* xl:flex-row: A partir de tamaño 'xl', se convierte en fila. */}
      {/* items-center: Centra los elementos verticalmente. */}
      {/* justify-center: Centra el contenido horizontalmente en el flex container. */}
      {/* xl:gap-x-48: Añade un gran espacio horizontal entre los elementos a partir de tamaño 'xl'. */}
      <div className="max-w-6xl mx-auto text-center relative z-20 flex flex-col xl:flex-row items-center justify-center xl:gap-x-48">
        {/* Contenedor para el cuadro de texto y los logos (lado izquierdo) */}
        {/* w-full xl:w-1/2: Ocupa todo el ancho en móvil, la mitad en pantallas xl. */}
        {/* flex flex-col items-center xl:items-start: Apila los elementos y los alinea a la izquierda en desktop. */}
        <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start mb-12 xl:mb-0">
          {/* Cuadro de texto principal */}
          <div className="w-full bg-white bg-opacity-90 p-8 rounded-3xl shadow-xl border-4 border-primary-gold text-gray-900 text-center xl:text-left">
            {/* Título: Cambiado a text-primary-gold */}
            <h2 className="text-5xl md:text-6xl font-pirata-one text-primary-gold mb-8">
              Contáctame
            </h2>
            {/* Párrafo: Cambiado a text-gray-900 para mejor contraste en fondo blanco */}
            <p className="text-lg leading-relaxed mb-8 text-gray-900">
              Puedes contactarme a través de los siguientes medios:
            </p>
          </div>

          {/* Contenedor de los logos de contacto - Ahora en fila horizontal */}
          {/* flex flex-col: Apila en móvil. */}
          {/* md:flex-row: Pone en fila a partir de tamaño 'md'. */}
          {/* justify-center: Centra los logos horizontalmente. */}
          {/* space-y-4 md:space-y-0: Espacio vertical en móvil, sin espacio vertical en desktop. */}
          {/* md:space-x-8: Espacio horizontal entre logos en desktop. */}
          {/* mt-8: Margen superior para separar del cuadro de texto. */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mt-8 w-full">
            {/* Tarjeta de Email */}
            <a
              href="mailto:0078828@red.unid.mx" // Correo actualizado
<<<<<<< HEAD
              className="flex flex-col items-center p-4 rounded-3xl bg-white bg-opacity-90 shadow-lg border-4 border-black {/* CAMBIO CLAVE: Borde negro */}
=======
              className="flex flex-col items-center p-4 rounded-3xl bg-white bg-opacity-90 shadow-lg border-4 border-transparent
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
                         hover:border-primary-gold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-gold cursor-pointer z-20
                         w-full md:w-40 h-40 justify-center" // Ancho y alto fijos para la tarjeta
            >
              <FaEnvelope className="w-12 h-12 text-gray-900 mb-2" />
              <span className="text-lg font-adventure text-gray-900">Correo</span>
            </a>

            {/* Tarjeta de GitHub */}
            <a
              href="https://github.com/Mauricio128892" // GitHub actualizado
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="flex flex-col items-center p-4 rounded-3xl bg-white bg-opacity-90 shadow-lg border-4 border-black {/* CAMBIO CLAVE: Borde negro */}
=======
              className="flex flex-col items-center p-4 rounded-3xl bg-white bg-opacity-90 shadow-lg border-4 border-transparent
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
                         hover:border-primary-gold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-gold cursor-pointer z-20
                         w-full md:w-40 h-40 justify-center" // Ancho y alto fijos para la tarjeta
            >
              <FaGithub className="w-12 h-12 text-gray-900 mb-2" />
              <span className="text-lg font-adventure text-gray-900">GitHub</span>
            </a>

            {/* Tarjeta de LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mauricio-valladares-velueta-0950622a5/" // LinkedIn actualizado
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="flex flex-col items-center p-4 rounded-3xl bg-white bg-opacity-90 shadow-lg border-4 border-black {/* CAMBIO CLAVE: Borde negro */}
=======
              className="flex flex-col items-center p-4 rounded-3xl bg-white bg-opacity-90 shadow-lg border-4 border-transparent
>>>>>>> bd33d8bea4a27e44c70add77657abb1ce151a8aa
                         hover:border-primary-gold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-gold cursor-pointer z-20
                         w-full md:w-40 h-40 justify-center" // Ancho y alto fijos para la tarjeta
            >
              <FaLinkedin className="w-12 h-12 text-gray-900 mb-2" />
              <span className="text-lg font-adventure text-gray-900">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Lado Derecho: Tu imagen personal (mi.jpg) */}
        {/* order-last: Asegura que este div sea el último en el orden flex (móvil y desktop). */}
        {/* flex justify-center items-center: Centra la imagen dentro de su contenedor. */}
        {/* w-full xl:w-1/2: Ocupa todo el ancho en móvil/tablet, la mitad en pantallas xl. */}
        {/* mt-12: Margen superior para separar la imagen del texto en móvil/tablet. */}
        {/* xl:mt-0: Elimina el margen superior en pantallas xl. */}
        <div className="w-full xl:w-1/2 flex justify-center items-center relative mt-12 xl:mt-0 order-last">
          <img
            src="/images/mi.jpg"
            alt="Tu Imagen Personal"
            // Ajuste de tamaño responsivo para la imagen: 30% más pequeña
            className="object-contain h-[350px] md:h-[490px] w-auto lg:h-[640px] z-30"
          />
        </div>
      </div>

      {/* Separador de madera en la parte inferior de la sección */}
      <div className="w-full h-8 bg-wood-separator absolute bottom-0 left-0"></div>
    </section>
  );
};

export default Contact;
