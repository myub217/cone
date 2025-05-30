/** @format */

import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
    root: __dirname,
    base: "./",
    build: {
        outDir: "dist"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./")
        }
    }
})
