import { defineConfig } from 'astro/config';
import qwikdev from '@qwikdev/astro';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev(), tailwind()],
});
