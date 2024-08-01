/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts,md}"],
  theme: {
    extend: {
      fontFamily: {
        Mulish: ['Mulish', 'sans-serif'],
        IBMPlexMono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: { nav: '100px' }
    },
  },
  plugins: [],
}

