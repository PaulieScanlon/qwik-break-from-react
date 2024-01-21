import { defineConfig } from 'astro/config';

import qwikdev from '@qwikdev/astro';
import react from '@astrojs/react';

export default defineConfig({
  // integrations: [react()],
  integrations: [qwikdev()],
  // integrations: [qwikdev(), react({ include: ['**/react/*'] })],
});
