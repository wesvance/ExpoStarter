import { sizing } from './sizing'

export type SizeKeys = keyof typeof sizing
export type ResponsiveSize = typeof sizing.base

export type Size = keyof ResponsiveSize
