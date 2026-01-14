import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // The base path must match your GitHub repository name
  base: "/multi-model-ai-starter-code/", 
  plugins: [react(), tailwindcss()],
});
