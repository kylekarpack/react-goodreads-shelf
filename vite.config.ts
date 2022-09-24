import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      reporter: ["lcov", "text"],
      exclude: ["vitest.setup.ts", "**/*.test.{ts,tsx}"]
    }
  },
  plugins: [react(), dts(), cssInjectedByJsPlugin()],
  build: {
    outDir: "./dist",
    lib: {
      entry: "./src/index.ts",
      formats: ["cjs", "es"],
      fileName: "index"
    },
    minify: "esbuild",
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React"
        },
        exports: "named"
      }
    }
  }
});
