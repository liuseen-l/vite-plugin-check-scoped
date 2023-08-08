/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})
