import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { CheckScopedPlugin } from 'vite-plugin-check-scoped'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), CheckScopedPlugin({
    include: ['**/*.vue'],
    exclude: ['./src/components/HelloWorld.vue'],
  })],
})
