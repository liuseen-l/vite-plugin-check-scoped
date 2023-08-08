# vite-plugin-check-scoped

[![NPM version](https://img.shields.io/npm/v/vite-plugin-check-scoped?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-check-scoped)

Check that your style code is non-scoed in the development environment.


## Why?

When we develop a project, we may not add scoped tags to the style due to negligence, which makes it difficult to change when the later project is large, especially when the team collaborates, and it is more difficult to correct, so in order to avoid this problem, the code is checked in the development environment.

## 📦 Install

Now this plugin supports both Vite 2.x and 3.x. Just install it:

```bash
pnpm add -D vite-plugin-check-scoped
```

## 🦄 Usage

Let's use a VUE project as an example

```typescript

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

```
## 📄 License

[MIT License](https://github.com/vite-plugins/vite-plugin-clt-svr/blob/main/LICENSE) © 2019-PRESENT [LiuSeen](https://github.com/liuseen-l)
