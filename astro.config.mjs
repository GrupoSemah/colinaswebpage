// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://colinasdelapaz.com',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});