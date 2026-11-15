import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serve em /Massa_Madre/; no dev continua em /
  base: command === 'build' ? '/Massa_Madre/' : '/',
}))
