// sum.test.js
import { test } from 'vitest'
import { parse as _parse } from '@vue/compiler-sfc'
import { expect } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
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
  
  <style >
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
  const parseRes = _parse(templete)
  expect(parseRes.descriptor.styles).toMatchInlineSnapshot(`
    [
      {
        "attrs": {},
        "content": "
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
      ",
        "loc": {
          "end": {
            "column": 3,
            "line": 31,
            "offset": 697,
          },
          "source": "
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
      ",
          "start": {
            "column": 11,
            "line": 18,
            "offset": 456,
          },
        },
        "map": {
          "file": "anonymous.vue",
          "mappings": ";EAkBE,CAAC,CAAC,CAAC,CAAC,EAAE;IACJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC;IACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC;IACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC;EAC1B;EACA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE;IACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;EACxC;EACA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE;IACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;EACxC",
          "names": [],
          "sourceRoot": "",
          "sources": [
            "anonymous.vue",
          ],
          "sourcesContent": [
            "
      <script setup lang=\\"ts\\">
         import HelloWorld from './components/HelloWorld.vue'
      </script>
      
      <template>
        <div>
          <a href=\\"https://vitejs.dev\\" target=\\"_blank\\">
            <img src=\\"/vite.svg\\" class=\\"logo\\" alt=\\"Vite logo\\" />
          </a>
          <a href=\\"https://vuejs.org/\\" target=\\"_blank\\">
            <img src=\\"./assets/vue.svg\\" class=\\"logo vue\\" alt=\\"Vue logo\\" />
          </a>
        </div>
        <HelloWorld msg=\\"Vite + Vue\\" />
      </template>
      
      <style >
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
      ",
          ],
          "version": 3,
        },
        "type": "style",
      },
    ]
  `)
})
