import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: [
        path.resolve(__dirname, 'src/main.ts'),
        path.resolve(__dirname, 'src/admin.ts'),
        path.resolve(__dirname, 'src/lib/utils.ts'),
      ],
      formats: ['es', 'cjs'],
      name: 'ui',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          Vue: 'vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
