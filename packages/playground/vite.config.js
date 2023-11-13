// vite.config.js
import { defineConfig } from "vite";

export default defineConfig(async () => {
    return {
        build: {
            outDir: "assets/js/kengine-webcomponents",
            lib: {
                entry: "bundle.esm.js",
                formats: ["es"],
                fileName: () => "bundle.esm.js",
            },
        },
    };
});
