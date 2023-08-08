import path from 'node:path'
import { normalizePath } from 'vite'

export function wrapNormalizePath(pathArray: string[]) {
  return pathArray.map((_path) => {
    return slash(path.resolve(__dirname, normalizePath(_path)))
  })
}

const windowsSlashRE = /\\/g
export function slash(p: string): string {
  return p.replace(windowsSlashRE, '/')
}
