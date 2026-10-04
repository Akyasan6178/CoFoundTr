import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Legacy build, sitenin alan adı kökünden servis edildiğini varsayan mutlak
// "/assets/..." yolları kullanıyordu. Aynı davranışı korumak için base "/".
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
