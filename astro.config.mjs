import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  site: "https://torreshc.com",
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@ui": path.resolve("./src/components/ui"),
        "@sections": path.resolve("./src/components/sections"),
        "@data": path.resolve("./src/data"),
        "@layouts": path.resolve("./src/layouts"),
        "@utils": path.resolve("./src/utils"),
      },
    },
  },
});
