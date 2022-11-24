import { BoxSpacing, Space } from 'utils/theme'

export const useBoxSpacing = (spacing?: BoxSpacing | Space) => {
  let top: Space | number | undefined
  let bottom: Space | number | undefined
  let left: Space | number | undefined
  let right: Space | number | undefined

  if (typeof spacing === 'object') {
    if (spacing.vertical) {
      top = spacing.vertical
      bottom = spacing.vertical
    } else {
      top = spacing.top || undefined
      bottom = spacing.bottom || undefined
    }

    if (spacing.horizontal) {
      left = spacing.horizontal
      right = spacing.horizontal
    } else {
      left = spacing.left || undefined
      right = spacing.right || undefined
    }
  } else {
    top = spacing
    bottom = spacing
    left = spacing
    right = spacing
  }

  return {
    top,
    bottom,
    left,
    right
  }
}
