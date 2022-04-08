module.exports = {
     mode: 'jit',
     content: [
          './resources/**/*.js',
          './src/**/*.{js,jsx,ts,tsx,vue}',
     ],
     darkMode: 'class', // or 'media' or 'class'
     theme: {
          extend: {},
     },
     variants: {
          extend: {},
     },
     plugins: [
          require('@tailwindcss/typography'),
          require('@tailwindcss/aspect-ratio'),
     ],
}
