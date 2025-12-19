import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/Portfilo/',   // 🔥 RẤT QUAN TRỌNG
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks(id) {
          vendor:["react","react-dom"]
          icons: ["lucide-react"]
        }
      }
    }
  },
  preview: {
    port: 3000,
    open: true,
  },
})
