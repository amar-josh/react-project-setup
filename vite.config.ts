// import { defineConfig } from "vite";
// When using Vitest with Vite, you need to use the defineConfig function from vitest/config instead of vite. This allows TypeScript to understand the test property
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.js"],
  },
});
