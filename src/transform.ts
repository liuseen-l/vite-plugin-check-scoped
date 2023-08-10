import { parse } from '@vue/compiler-sfc'
import { handleCheckPath, wrapNormalizePath } from './utils'
import type { CheckScopedOptions } from './types'

export function resolveTransform(options?: CheckScopedOptions) {
  const include = wrapNormalizePath(options?.include || [])
  const exclude = wrapNormalizePath(options?.exclude || [])

  return (code: string, id: string) => {
    if (!id.endsWith('vue'))
      return

    if (exclude.length > 0 && handleCheckPath(id, exclude))
      return

    if (include.length > 0 && !handleCheckPath(id, include))
      return

    const { descriptor: { styles } } = parse(code)
    for (const style of styles) {
      if (!Boolean(style.attrs.scoped))
        throw new Error(`${id} style is not marked with scoped`)
    }
  }
}
