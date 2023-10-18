import { createViteConfig, createVitestConfig } from 'build-utils';

import packageJson from './package.json';

export default createViteConfig({
  packageName: packageJson.name,
  formats: ['es', 'cjs'],
  external: ['@tma.js/bridge', '@tma.js/parsing', '@tma.js/event-emitter', '@tma.js/logger'],
  test: createVitestConfig({}),
});