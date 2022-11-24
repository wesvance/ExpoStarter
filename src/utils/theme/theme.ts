/* eslint-disable no-console */
import { computeForeground, computeShade, computeTint } from 'utils/colors'
import { lg, md, sm, xl, xs, xxl } from 'utils/constants/breakpoints'

import { color, font, image, radius, size, space } from './template'

const { colors } = color
const { images } = image

export type BreakpointArray = [number, number, number, number, number, number, number]
export type BreakpointSizeMatrix = {
  [key in size.Size]: BreakpointArray
}

const selectValueFromBreakpoint = (options: BreakpointArray, breakpointIndex: number) => {
  return options[breakpointIndex]
}

/*
  reduceTemplateMatrixFromBreakpoint
  * Calculate the theme based on the size of the screen
  * Given a known current breakpoint, set the theme to the correct column measurements

  Breakpoints: |xxs, xs, sm, md, lg, xl, xxl|
  
  xxs:          [ 2,  2,  2,  2,  2,  4,  4],
  xs:           [ 4,  4,  4,  4,  4,  8,  8],
  sm:           [ 6,  6,  6,  6,  6, 12, 12],
  md:           [ 8,  8,  8,  8,  8, 16, 16],
  lg:           [12, 12, 12, 12, 12, 24, 24],
  xl:           [16, 16, 16, 16, 16, 32, 32],
  xxl:          [24, 24, 24, 24, 24, 48, 48]

  If the screen is currently 'xl', then the breakpointIndex will be 5 and the results will be:
  {xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48}
*/

const reduceTemplateMatrixFromBreakpoint = (
  sizeRecord: BreakpointSizeMatrix,
  breakpointIndex: number // index of the current breakpoint in the array
) => {
  let spacingResult!: {
    [key in size.Size]: number
  }

  const sizeKeys = Object.keys(sizeRecord) as size.Size[]
  sizeKeys.forEach((key) => {
    const breakpointSpecificSpacing = selectValueFromBreakpoint(
      sizeRecord[key] as BreakpointArray,
      breakpointIndex
    )
    spacingResult = {
      ...spacingResult,
      [key]: breakpointSpecificSpacing
    }
  })

  return spacingResult
}

export const theme = ({
  userOptions,
  breakpointIndex
}: {
  userOptions: {
    themeColor: color.ColorKey
  }
  breakpointIndex: number
}) => {
  const { themeColor } = userOptions

  const selectedThemeColor = colors[themeColor as color.ColorKey]

  // Computes colors from the selectedThemeColor with flips
  type NumArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const transparentOptions: NumArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  const computedColor = Object.keys(selectedThemeColor).reduce(
    (acc, key: string) => {
      const colorValue = colors[themeColor][key as color.Color]

      if (key === 'transparent') {
        let transparentKeys = {} as { string: color.ColorObject }
        transparentOptions.map((option) => {
          const transparentOption = `rgba(0, 0, 0, ${option / 100})`
          transparentKeys = {
            ...transparentKeys,
            [`transparent${option}`]: {
              base: transparentOption,
              foreground: transparentOption,
              tint: transparentOption,
              shade: transparentOption,
              contrast: transparentOption
            }
          }
          return transparentKeys
        })

        const result = {
          ...acc,
          ...transparentKeys
        }
        return result
      }

      if (typeof colorValue !== 'string') {
        const colorShade = computeShade(colorValue.base)
        const colorTint = computeTint(colorValue.base)
        const contrast = computeForeground(colorValue.base)

        return {
          ...acc,
          [key]: {
            ...colorValue,
            tint: colorTint,
            shade: colorShade,
            contrast
          },
          [`${key}Flip`]: {
            ...colorValue,
            base: colorValue.foreground,
            foreground: colorValue.base,
            tint: computeTint(colorValue.foreground),
            shade: computeShade(colorValue.foreground),
            contrast: computeForeground(colorValue.foreground)
          }
        }
      }

      const colorShade = computeShade(colorValue)
      const colorTint = computeTint(colorValue)
      const contrast = computeForeground(colorValue)

      return {
        ...acc,
        [key]: {
          base: colorValue,
          foreground: colorValue,
          tint: colorTint,
          shade: colorShade,
          contrast
        },
        [`${key}Flip`]: {
          base: colorValue,
          foreground: colorValue,
          tint: colorTint,
          shade: colorShade,
          contrast
        }
      }
    },

    {} as {
      [key in
        | color.Color
        | `${color.Color}Flip`
        | `transparent${typeof transparentOptions[number]}`]: color.ColorObject
    }
  )

  const computedBaseFontSize = reduceTemplateMatrixFromBreakpoint(
    size.sizing.base as BreakpointSizeMatrix,
    breakpointIndex
  )

  const computedAvatarSize = reduceTemplateMatrixFromBreakpoint(
    size.sizing.avatar as BreakpointSizeMatrix,
    breakpointIndex
  )

  const computedBorderSize = reduceTemplateMatrixFromBreakpoint(
    size.sizing.border as BreakpointSizeMatrix,
    breakpointIndex
  )

  const computedBaseSpacing = reduceTemplateMatrixFromBreakpoint(
    space.spacing.base as BreakpointSizeMatrix,
    breakpointIndex
  )

  const computedRadiusSize = reduceTemplateMatrixFromBreakpoint(
    radius.radius.base as BreakpointSizeMatrix,
    breakpointIndex
  )

  const sizeKeys = Object.keys(space.spacing.base) as size.Size[]
  const breakpointKey = sizeKeys[breakpointIndex]

  const maxWidthPerBreakpoint = [215, 500, 720, 960, 1140, 1140, 1296] as BreakpointArray
  const maxWidth = selectValueFromBreakpoint(maxWidthPerBreakpoint, breakpointIndex)

  const calculatedTheme = {
    maxWidth,
    images: images[themeColor],
    breakpoints: {
      lg,
      md,
      sm,
      xl,
      xs,
      xxl
    },
    shadow: {
      base: {
        none: {
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowColor: computedColor.transparent,
          shadowOffset: '0px 0px'
        },
        xxs: {
          shadowOpacity: 0.08,
          shadowRadius: 5,
          shadowColor: computedColor.black.base,
          shadowOffset: '2px 4px'
        },
        xs: {
          shadowOpacity: 0.16,
          shadowRadius: 5,
          shadowColor: computedColor.black.base,
          shadowOffset: '4px 8px'
        },
        sm: {
          shadowOpacity: 0.24,
          shadowRadius: 5,
          shadowColor: computedColor.black.base,
          shadowOffset: '8px 16px'
        },
        md: {
          shadowOpacity: 0.32,
          shadowRadius: 5,
          shadowColor: computedColor.black.base,
          shadowOffset: '16px 32px'
        },
        lg: {
          shadowOpacity: 0.48,
          shadowRadius: 5,
          shadowColor: computedColor.black.base,
          shadowOffset: '32px 64px'
        },
        xl: {
          shadowOpacity: 0.64,
          shadowRadius: 5,
          shadowColor: computedColor.black.base,
          shadowOffset: '64px 128px'
        },
        xxl: {
          shadowOpacity: 0.8,
          shadowRadius: 5,
          shadowColor: computedColor.black.base,
          shadowOffset: '128px 256px'
        }
      }
    },
    space: {
      base: computedBaseSpacing
    },
    radius: {
      base: computedRadiusSize
    },
    color: computedColor,
    size: {
      border: computedBorderSize,
      font: computedBaseFontSize,
      avatar: computedAvatarSize
    },
    typography: {
      family: font.font,
      weight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700
      }
    },

    /* 
      This is here for easier debugging on the theme's output values,
      We shouldn't use these values in components, but we can use them to debug the theme
      and generate a report of the theme's values.
    */
    _state: {
      ...userOptions,
      breakpoint: breakpointKey
    }
  }

  return calculatedTheme
}
