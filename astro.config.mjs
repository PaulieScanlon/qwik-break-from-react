import { defineConfig } from 'astro/config';
import qwikdev from '@qwikdev/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // integrations: [qwikdev(), tailwind()],
  integrations: [
    qwikdev(),
    react({
      include: ['**/react/*'],
    }),
    tailwind(),
  ],
});
