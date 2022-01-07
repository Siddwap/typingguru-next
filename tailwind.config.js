module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './commons/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      resique: ['Risque', 'cursive'],
      redressed: ['Redressed', 'cursive'],
      ropa_sans: ['Ropa Sans', 'sans-serif'],
      rhodium_libre: ['Rhodium Libre', 'serif'],
      roboto_mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        dark: {
          primary: {
            900: '#A783F8',
            50: '#181a1b',
          },
          background: {
            DEFAULT: '#1b1d1e',
            keyboard: '#222426'
          },
          red: {
            900: '#e17d7d',
          },
        },
        primary: {
          DEFAULT: '#8B5CF6',
          50: '#FFFFFF',
          100: '#F9F7FF',
          200: '#DED0FC',
          300: '#C2A9FA',
          400: '#A783F8',
          500: '#8B5CF6',
          600: '#6527F3',
          700: '#4A0CD6',
          800: '#3709A1',
          900: '#25066C',
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
};
