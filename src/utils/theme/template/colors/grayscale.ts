import { computeShade, computeTint, hexToGrayscale } from 'utils/colors'

import { base as baseTheme } from './base'
import { ColorObject } from './types'

const grayscaleInt = {} as {
  [key: string]: ColorObject
}

// eslint-disable-next-line no-restricted-syntax
for (const [key, value] of Object.entries(baseTheme)) {
  const colorKey = key as keyof typeof baseTheme

  if (typeof value === 'string') {
    const shade = computeShade(value)
    const tint = computeTint(value)
    grayscaleInt[colorKey] = {
      base: hexToGrayscale(value) || '#00000000',
      foreground: hexToGrayscale(value) || '#00000000',
      tint: tint || '#00000000',
      shade: shade || '#00000000'
    }
  } else {
    const { base, foreground } = value

    const shade = computeShade(base)
    const tint = computeTint(base)

    grayscaleInt[colorKey] = {
      base: hexToGrayscale(base) || '#00000000',
      foreground: hexToGrayscale(foreground) || '#00000000',
      tint: tint || '#00000000',
      shade: shade || '#00000000'
    }
  }
}

export const grayscale = grayscaleInt
