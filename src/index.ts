import { type Plugin } from 'vite'
import { parse } from '@vue/compiler-sfc'
import type { CheckScopedOptions } from './types'
import { wrapNormalizePath } from './utils'

const NAME = 'vite-plugin-check-scoped'

export default function CheckScopedPlugin(options?: CheckScopedOptions): Plugin {
  const include = wrapNormalizePath(options?.include || [])
  const exclude = wrapNormalizePath(options?.exclude || [])
  console.log(include)
  console.log(exclude)

  return {
    name: NAME,
    enforce: 'pre',
    transform(code: string, id: string) {
      if (!id.endsWith('vue'))
        return

      const { descriptor: { styles } } = parse(code)
      for (const style of styles) {
        if (!Boolean(style.attrs.scoped))
          throw new Error(`${id} style is not marked with scoped`)
      }
    },
  }
}
