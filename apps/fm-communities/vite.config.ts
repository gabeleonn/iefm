import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "inline",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,jpg,ico}"],
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "pwa-maskable-192x192.png",
      ],
      manifest: {
        name: "IEFM Comunidades",
        short_name: "Comunidades",
        description: "IEFM Comunidades",
        theme_color: "#ffffff",
        background_color: "#262626",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
})
