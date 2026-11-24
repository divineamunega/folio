// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://divinne.xyz',

  adapter: cloudflare({
    imageService: 'compile',
  }),

  image: {
    // Enable image optimization for public folder images
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    // Configure image domains for remote images if needed
    remotePatterns: [],
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap': ['gsap'],
          }
        }
      }
    }
  },

  integrations: [react()],
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },
});