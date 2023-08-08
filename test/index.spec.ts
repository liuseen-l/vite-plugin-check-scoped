import { expect, test } from 'vitest'
import { parse as _parse } from '@vue/compiler-sfc'
import { minimatch } from 'minimatch'
import { resolveTransform, wrapNormalizePath } from 'vite-plugin-check-scoped'

test('parse', () => {
  const templete = `
  <script setup lang="ts">
     import HelloWorld from './components/HelloWorld.vue'
  </script>
  
  <template>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </template>

  `
  const parseRes = _parse(templete)
  expect(parseRes.descriptor.styles).toMatchInlineSnapshot('[]')
})

test('minimatch', () => {
  expect(minimatch('bar.foo', '*.foo')).toMatchInlineSnapshot('true')
  expect(minimatch('F:/forProjects/vite-plugin-check-scoped/src/*.vue', 'F:/forProjects/vite-plugin-check-scoped/playground/src/App.vue')).toMatchInlineSnapshot('false')
  expect(minimatch('F:/forProjects/vite-plugin-check-scoped/src/*.vue', 'F:/forProjects/vite-plugin-check-scoped/playground/src/test/App.vue')).toMatchInlineSnapshot('false')
  expect(minimatch('F:/forProjects/vite-plugin-check-scoped/playground/src/App.vue', 'F:/forProjects/vite-plugin-check-scoped/playground/src/*.vue')).toMatchInlineSnapshot('true')
  expect(minimatch('F:/forProjects/vite-plugin-check-scoped/playground/src/da/App.vue', 'F:/forProjects/vite-plugin-check-scoped/playground/src/**/*.vue')).toMatchInlineSnapshot('true')
  expect(minimatch('F:/forProjects/vite-plugin-check-scoped/playground/src/App.vue', 'F:/forProjects/vite-plugin-check-scoped/playground/src/**/*.vue')).toMatchInlineSnapshot('true')
})

test('case 1', () => {
  const include = wrapNormalizePath([
    'playground/src/**/*.vue',
    'playground/src/*.vue',
  ])
  const exclude = wrapNormalizePath([
    './playground/src/components/*.vue',
  ])

  expect(include).toMatchInlineSnapshot(`
    [
      "F:/forProjects/vite-plugin-check-scoped/playground/src/**/*.vue",
      "F:/forProjects/vite-plugin-check-scoped/playground/src/*.vue",
    ]
  `)

  expect(exclude).toMatchInlineSnapshot(`
    [
      "F:/forProjects/vite-plugin-check-scoped/playground/src/components/*.vue",
    ]
  `)

  const id = 'F:/forProjects/vite-plugin-check-scoped/playground/**/*.vue'

  const transofrm = resolveTransform({
    include,
    exclude,
  })

  const templete = `<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  </script>
  
  <template>
    <HelloWorld msg="Vite + Vue" />
  </template>
  
  <style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  </style>
  `

  expect(Boolean(transofrm(templete, id))).toMatchInlineSnapshot('false')
})
