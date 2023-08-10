import type { Plugin } from 'vite'
import type { CheckScopedOptions } from './types'
import { resolveTransform } from './transform'

const NAME = 'vite-plugin-check-scoped'

export default function CheckScopedPlugin(options?: CheckScopedOptions): Plugin {
  return {
    name: NAME,
    enforce: 'pre',
    transform: resolveTransform(options),
  }
}

export * from './utils'
export type * from './types'
export * from './transform'
