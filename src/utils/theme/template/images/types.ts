import { base } from './base'

export type ColorKey = 'base' | 'dark' | 'light' | 'grayscale'
export type ImageAspect = keyof typeof base
export type ImageColors = keyof typeof base.logoHorizontal

export type ImageName = `${ImageAspect}.${ImageColors}`
