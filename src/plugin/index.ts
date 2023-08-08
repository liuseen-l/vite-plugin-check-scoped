import type { Plugin } from 'vite'
import type { CheckScopedOptions } from '../types'
import { resolveTransform } from './transofrm'

const NAME = 'vite-plugin-check-scoped'

export function CheckScopedPlugin(options?: CheckScopedOptions): Plugin {
  return {
    name: NAME,
    enforce: 'pre',
    transform: resolveTransform(options),
  }
}

export * from './transofrm'
