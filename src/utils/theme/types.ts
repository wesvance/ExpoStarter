import { color, font, image, radius, size, space } from './template'
import { theme } from './theme'

export type Theme = ReturnType<typeof theme>

export type BaseColor = color.Color

export type Breakpoints = size.Size & space.Space
export type Color = keyof Theme['color']
export type ColorOption = keyof Theme['color']['base']
export type CompoundColor = `${Color}.${ColorOption}`
export type ColorKey = color.ColorKey
export type Size = size.Size
export type Space = space.Space
export type Shadow = space.Space
export type Radius = radius.Radis
export type ImageName = image.ImageName
export type ImageAspect = image.ImageAspect
export type ImageColors = image.ImageColors

export type TextFont = font.TextFontFamily
export type IconFont = font.IconFontFamily

export type TextFontWeight = font.TextFontWeight
export type IconFontWeight = font.IconFontWeight

export type ResponsiveObject<T> = {
  [key in Breakpoints]?: T
}

export type ResponsiveArray<T> = Array<T>

export type ResponsiveProp<T> = ResponsiveObject<T> | ResponsiveArray<T> | T

export interface BoxSpacing {
  vertical?: Space | number
  horizontal?: Space | number
  top?: Space | number
  right?: Space | number
  bottom?: Space | number
  left?: Space | number
}
