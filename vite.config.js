import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // This MUST match your repository name exactly
  base: "/multi-model-ai-starter-code/", 
  plugins: [react(), tailwindcss()],
});
