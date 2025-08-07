/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sea-blue': '#2E4057',       // Azul oscuro para fondos
        'primary-gold': '#FFD700',   // Dorado principal para títulos y acentos
        'primary-purple': '#800080', // Morado oscuro (anterior)
        'primary-light-purple': '#BB86FC', // Morado claro (anterior)
        'vibrant-purple': '#DDA0DD', // ¡Nuevo color morado vibrante!
        'wood-light': '#F5DEB3',     // Color de madera clara para texto en Header
        'wood-separator': '#4A2C2A', // Color de madera oscura para separadores y Header
        'cloud-white': '#FFFFFF',    // Blanco puro para texto general del body
        'wood-dark': '#4A2C2A',      // Definido para el footer y header
      },
      backgroundImage: {
        'waves-pattern': "url('/images/tu-patron-de-ondas.svg')", // Tu imagen de fondo de olas
      },
      keyframes: {
        // Puedes definir keyframes personalizados aquí si lo deseas
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Asegúrate de que 'pulse' esté aquí
      },
    },
  },
  plugins: [],
};
