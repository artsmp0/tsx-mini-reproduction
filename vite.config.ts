import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath } from "node:url";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { "~": srcDir } },
  plugins: [vue(), vueJsx()],
});
