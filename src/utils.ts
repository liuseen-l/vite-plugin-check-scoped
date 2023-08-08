import path from 'node:path'
import process from 'node:process'
import { normalizePath } from 'vite'
import { minimatch } from 'minimatch'

export function wrapNormalizePath(pathArray: string[]) {
  return pathArray.map((_path) => {
    return slash(path.resolve(process.cwd(), normalizePath(_path)))
  })
}

const windowsSlashRE = /\\/g
export function slash(p: string): string {
  return p.replace(windowsSlashRE, '/')
}

export function handleCheckPath(id: string, optionPaths: string[]): boolean {
  for (const op of optionPaths) {
    if (minimatch(id, op))
      return true
  }

  return false
}
