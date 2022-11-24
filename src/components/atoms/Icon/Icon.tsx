import { FontAwesome, fontAwesomeGlyphMap } from './FontAwesome'
import type { IconProps } from './Icon.types'

export const Icon = ({
  name,
  color = 'base',
  size = 'md',
  weight = 'regular',
  style = {}
}: IconProps) => {
  const props = {
    name,
    color,
    size,
    weight,
    style
  }

  if (fontAwesomeGlyphMap[name]) {
    return <FontAwesome {...props} />
  }
  return null
}
