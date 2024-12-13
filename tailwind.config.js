/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'xs': '320px', // Para pantallas muy pequeñas, menores de sm
      'sm': '640px', // Pantallas pequeñas
      'md': '768px', // Pantallas medianas
      'lg': '1024px', // Pantallas grandes
      'xl': '1280px', // Pantallas muy grandes
      '2xl': '1536px', // Pantallas extra grandes
    },
    extend: {
      colors: {
        primaryLight: '#3C6B5C',
        primaryDark: '#1b4235',
        secondary: '#f5f5f5',
        secondaryLight: '#d9d9d9',
        secondaryDark: '#989a99',
        black: '#000000',
        white: '#FFFFFF'
      },
      backgroundImage: {
        fondoInicio: "url('./assets/images/Castillo3.jpg')",
      },
      fontFamily: {
        text: 'Roboto',
      },
      fontSize: {
        'sm': '8px',
        'md': '12px',
        'lg': '13px',
        'xl': '14px',
        '1xl': '15px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '40px',
        '7xl': '64px',
        '8xl': '80px',
        '9xl': '92px',
        '10xl': '96px',
        '11xl': '120px',
      },
    },
  },
  plugins: [],
}

