/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', 'index.html'],
  theme: {
    extend: {
      colors: {
        'leaf': "#68B52B",
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
