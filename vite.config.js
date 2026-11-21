import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" membuat situs bisa di-hosting di mana saja (GitHub Pages, Netlify, subfolder, dsb.)
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: { chunkSizeWarningLimit: 700 },
});
