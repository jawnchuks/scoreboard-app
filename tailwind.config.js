module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundColor: ['checked'],
        borderColor: ['checked'],
        colors: {
          transparent: 'transparent',
          'white': '#ffffff',
          'black': '#000000',
          'dark-bg': '#212121',
          'bg-color': '#262626',
          'card-bg': '#303030',
          'card-hover': '#474747',
          'accent': '#47ff47',
          'primary': '#fefefe',
          'primary-hover': '#bebebe',
          'danger': '#7a0000',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }