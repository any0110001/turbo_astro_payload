// @ts-check
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'payload/node';
import astrowind from './vendor/integration';

import icon from 'astro-icon';

loadEnv()

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react(), astrowind({
    config: './src/config.yaml',
  }), icon(
    {
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database'
        ]
      }
    }
  )],
  vite: {
    plugins: [tailwindcss()],
  },
})