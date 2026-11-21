import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Opsional: menghasilkan satu file HTML mandiri untuk pratinjau cepat (npm run build:preview)
export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile()],
  build: { outDir: "dist-preview", emptyOutDir: true },
});
