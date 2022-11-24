import { base } from './base'

export type ColorKey = 'base' | 'dark' | 'light' | 'grayscale'
export type Color = keyof typeof base
export type ColorObject = typeof base.primary & {
  shade: string
  tint: string
}
