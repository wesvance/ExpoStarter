import { useWindowDimensions } from 'hooks/useWindowDimensions'

import { breakpoints as breakpointConstants } from 'utils/constants'
import { useSafeAreaInsets } from 'utils/safeArea'
import { Breakpoints } from 'utils/theme'

export const useWindow = () => {
  const insets = useSafeAreaInsets()
  const { width, height } = useWindowDimensions()
  const ratio = width / height

  const breakpoints = {
    xxs: true,
    xs: width >= breakpointConstants.xs, // xs should be true when started...
    sm: width >= breakpointConstants.sm,
    md: width >= breakpointConstants.md,
    lg: width >= breakpointConstants.lg,
    xl: width >= breakpointConstants.xl,
    xxl: width >= breakpointConstants.xxl
  }

  // Converts the above object to an array of booleans
  const currentBreakpointsArray = Object.values(breakpoints)
    .map((value) => {
      return value
    })
    .filter((value) => value)

  const currentBreakpointIndex = currentBreakpointsArray.length - 1
  const currentBreakpoint = Object.keys(breakpoints)[currentBreakpointIndex]

  return {
    dimensions: {
      width,
      height,
      ratio,
      isHorizontal: ratio > 1,
      isVertical: ratio <= 1
    },
    breakpoint: {
      readable: currentBreakpoint as Breakpoints,
      index: currentBreakpointIndex,
      isMobile: !breakpoints.xl
    },
    breakpoints,
    insets
  }
}
