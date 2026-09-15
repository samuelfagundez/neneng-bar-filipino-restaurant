import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nombre del repo en GitHub Pages -> https://<usuario>.github.io/neneng-bar-filipino-restaurant/
const BASE = process.env.VITE_BASE ?? '/neneng-bar-filipino-restaurant/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})
