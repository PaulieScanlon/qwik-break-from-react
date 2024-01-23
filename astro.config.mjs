import { defineConfig } from 'astro/config';
import qwikdev from '@qwikdev/astro';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [qwikdev(), tailwind()],
});
