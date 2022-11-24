import { useTheme } from 'contexts/theme'

import { faProLight, faProRegular, faProSolid, faProThin } from 'utils/constants/fonts'

import type { IconProps } from '../Icon.types'
import { createIconSet } from '../lib'
import { fontAwesomeGlyphMap } from './fontAwesomeGlyphMap'

const FontAwesomeThin = createIconSet(
  fontAwesomeGlyphMap,
  faProThin,
  'assets/fonts/fontawesome/FA6Pro-Thin-100.otf'
)

const FontAwesomeLight = createIconSet(
  fontAwesomeGlyphMap,
  faProLight,
  'assets/fonts/fontawesome/FA6Pro-Light-300.otf'
)

const FontAwesomeRegular = createIconSet(
  fontAwesomeGlyphMap,
  faProRegular,
  'assets/fonts/fontawesome/FA6Pro-Regular-400.otf'
)

const FontAwesomeSolid = createIconSet(
  fontAwesomeGlyphMap,
  faProSolid,
  'assets/fonts/fontawesome/FA6Pro-Solid-900.otf'
)

export const FontAwesome = ({
  name,
  color = 'base',
  size = 'xxl',
  style = {},
  weight = 'regular'
}: IconProps) => {
  const { theme } = useTheme()

  const iconColor = theme.color[color].foreground
  const iconSize = theme.size.font[size]

  const props = {
    name,
    color: iconColor,
    size: iconSize,
    style
  }

  switch (weight) {
    case 'thin':
      return <FontAwesomeThin {...props} />
    case 'light':
      return <FontAwesomeLight {...props} />
    case 'solid':
      return <FontAwesomeSolid {...props} />
    default:
      return <FontAwesomeRegular {...props} />
  }
}
