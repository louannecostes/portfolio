/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#DABFFF',  // Violet clair
        'primary-dark': '#6A0DAD',   // Violet foncé
        'secondary-light': '#F0F4F8', // Gris clair
        'secondary-dark': '#4A4A4A',  // Gris foncé
        'accent': '#B39DDB',         // Violet pastel
        'white': '#FFFFFF',
        'black': '#000000',
      },
      // Configuration des polices personnalisées
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],   // Utilisation pour le texte courant
        heading: ['Montserrat', 'sans-serif'], // Utilisation pour les titres
      },
      // Ajout de styles personnalisés pour les boutons et cartes
      borderRadius: {
        'xl': '1.5rem', // Largeur de bordure pour un effet moderne
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}

