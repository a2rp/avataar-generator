import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/avataar-generator/",

    plugins: [react()],

    build: {
        sourcemap: false,
        target: "es2019",
    },

    css: {
        devSourcemap: false,
    },
});
