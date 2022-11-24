import React, { createContext, useContext, useMemo } from 'react'

import { useWindowDimensions } from 'hooks/useWindowDimensions'

import { breakpoints as breakpointConstants } from 'utils/constants'
import { EdgeInsets, useSafeAreaInsets } from 'utils/safeArea'
import { Breakpoints, ResponsiveObject } from 'utils/theme'

type Dimensions = {
  width: number
  height: number
  ratio: number
  isHorizontal: boolean
  isVertical: boolean
}
type Breakpoint = {
  readable: Breakpoints
  index: number
  isMobile: boolean
}

type WindowContextState = {
  dimensions: Dimensions
  breakpoint: Breakpoint
  breakpoints: ResponsiveObject<boolean>
  insets: EdgeInsets
}

const WindowContext = createContext({} as WindowContextState)

const WindowProvider = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets()
  const { width, height } = useWindowDimensions()
  const ratio = width / height

  const breakpoints = useMemo(() => {
    return {
      xxs: true,
      xs: width >= breakpointConstants.xs, // xs should be true when started...
      sm: width >= breakpointConstants.sm,
      md: width >= breakpointConstants.md,
      lg: width >= breakpointConstants.lg,
      xl: width >= breakpointConstants.xl,
      xxl: width >= breakpointConstants.xxl
    }
  }, [width])

  // Converts the above object to an array of booleans
  const currentBreakpointsArray = useMemo(
    () =>
      Object.values(breakpoints)
        .map((value) => {
          return value
        })
        .filter((value) => value),
    [breakpoints]
  )

  const currentBreakpointIndex = currentBreakpointsArray.length - 1

  const currentBreakpoint = useMemo(
    () => Object.keys(breakpoints)[currentBreakpointIndex],
    [breakpoints, currentBreakpointIndex]
  )

  const value = {
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

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
}

const useWindow = () => {
  const windowContext = useContext(WindowContext)
  if (windowContext == null) {
    throw new Error('useWindow() called outside of a WindowProvider?')
  }
  return windowContext
}

export { WindowProvider, useWindow }
