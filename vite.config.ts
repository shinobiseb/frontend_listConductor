import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://shinobiseb.github.io/frontend_listConductor/",
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
