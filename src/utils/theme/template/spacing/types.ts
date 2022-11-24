import { spacing } from './spacing'

export type SpaceKeys = keyof typeof spacing
export type ResponsiveSpace = typeof spacing.base
export type Space = keyof ResponsiveSpace
