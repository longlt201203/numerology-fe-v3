import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@etc": path.resolve(__dirname, "src/etc"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@services": path.resolve(__dirname, "src/services"),
      "@dto": path.resolve(__dirname, "src/dto"),
      "@contents": path.resolve(__dirname, "src/contents"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173
  }
})
