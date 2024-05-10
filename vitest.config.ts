import { defineConfig } from 'vitest/config';

export default defineConfig((_configEnv) =>
  defineConfig({
    esbuild: { target: 'es2022' },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        target: 'es2022',
      },
    },
    test: {
      include: ['packages/__tests__/**/*.spec.ts'],

      deps: {
        interopDefault: true,
      },
      environment: 'jsdom',
    },
  })
);
