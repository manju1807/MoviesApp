/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      maxWidth: '740px',
    },
    fontFamily: {
      primary: 'Poppins',
      secondary: ['inter', 'sans'],
      headingcursive: ['Allura', 'serif'],
      secondary2: ['Italianno', 'cursive'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#1c292f',
        secondary: '#d9e1e4',
        secondary2: '#d9e1e4',
        actionColor: '#f92a38',
        black: '#1A1A1A',
      },
    },
  },
  plugins: [],
};
