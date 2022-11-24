import { StyleProp, TextStyle } from 'react-native'

import { Color, IconFontWeight, Size } from 'utils/theme'

import { fontAwesomeGlyphMap } from './FontAwesome/fontAwesomeGlyphMap'

export type IconKey = keyof typeof fontAwesomeGlyphMap

export type IconProps = {
  name: IconKey
  color?: Color
  size?: Size
  weight?: IconFontWeight
  style?: StyleProp<TextStyle>
}
