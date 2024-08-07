import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import tailwindcss from "tailwindcss";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
