/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary-green': '#A0FF1F',
      'primary-pink': '#F70087',
      'primary-black': '#000000',
      'primary-white': '#FFFFFF',
      'secondary-green': '#00ED71',
      'secondary-pink': '#F40256',
      'grey-dark': '#5B5B5B',
      'grey-mid': '#C3C3C3',
      'grey-light': '#F8F8F8',

      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.primary-green')}, ${theme('colors.secondary-green')})`,
      }),
    },
  },
  plugins: [],
}

