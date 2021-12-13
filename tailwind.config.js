module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        backgroundColor: ['checked'],
        borderColor: ['checked'],
        colors: {

          'black': '#262626',
          'gray': '#303030',
          'light-grey': '#474747'
        },
      },
    },
    plugins: [],
  }