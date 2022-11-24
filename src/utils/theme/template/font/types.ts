import { font } from './font'

export type FontFamilyGroups = keyof typeof font

export type TextFontFamily = keyof typeof font.text
export type TextFontWeight = keyof typeof font.text.body | keyof typeof font.text.heading

export type IconFontFamily = keyof typeof font.icon
export type IconFontWeight =
  | keyof typeof font.icon.fontAwesome
  | keyof typeof font.icon.fontAwesomeBrands
export type FontAwesomeWeight = IconFontWeight
