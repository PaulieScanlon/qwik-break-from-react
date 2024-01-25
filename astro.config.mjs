import { defineConfig } from 'astro/config';
import qwikdev from '@qwikdev/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react({
      include: ['**/react/*'],
    }),
    qwikdev({
      include: ['**/qwikdev/*'],
    }),
  ],
});
