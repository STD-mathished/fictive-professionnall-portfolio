import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/professionnel-portfiolio/',
  appType: 'mpa',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        projets: 'pages/Projets.html',
        apropos: 'pages/Apropos.html',
        contact: 'pages/contact.html',
      },
    },
  },
})
