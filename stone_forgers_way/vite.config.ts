import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const htmlEnvFallbackPlugin = () => ({
  name: "html-env-fallback",
  transformIndexHtml(html: string) {
    const title = process.env.VITE_APP_TITLE || "The Stone Forger's Way :: Move from Chaos to Coherence";
    const logo = process.env.VITE_APP_LOGO || "/stone-forger.png";
    const analyticsEndpoint = process.env.VITE_ANALYTICS_ENDPOINT || "https://umami.dev.ops.butterfly-effect.dev";
    const analyticsWebsiteId = process.env.VITE_ANALYTICS_WEBSITE_ID || "analytics_proj_abc123def456";

    return html
      .replace(/%VITE_APP_TITLE%/g, title)
      .replace(/%VITE_APP_LOGO%/g, logo)
      .replace(/%VITE_ANALYTICS_ENDPOINT%/g, analyticsEndpoint)
      .replace(/%VITE_ANALYTICS_WEBSITE_ID%/g, analyticsWebsiteId);
  }
});

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime(), htmlEnvFallbackPlugin()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
