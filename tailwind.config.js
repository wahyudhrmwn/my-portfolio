/** @type {import('tailwindcss').Config} */
import prelinePlugin from './utils/tailwind-plugins';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    prelinePlugin,
  ],
}