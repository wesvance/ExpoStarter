import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { useWindow } from 'contexts/window'

import { useColorScheme } from 'hooks/useColorScheme'

import { environment } from 'utils/constants'
import { ThemeProvider as StyledComponentsThemeProvider } from 'utils/styled'
import { ColorKey, Theme, theme } from 'utils/theme'

type ThemeContextState = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeContextState)

// This allows for a tightly typed theme object to be passed to components
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

const ThemeProvider = ({
  children,
  autoToggle = true,
  fixedThemeColor
}: {
  children: React.ReactNode
  autoToggle?: boolean
  fixedThemeColor?: ColorKey
}) => {
  const { breakpoint } = useWindow()
  const deviceTheme = useColorScheme()
  const [userOptions, setUserOptions] = useState<{
    themeColor: ColorKey
  }>({ themeColor: fixedThemeColor || deviceTheme || 'base' })

  useEffect(() => {
    if (!fixedThemeColor && deviceTheme)
      setUserOptions((options) => {
        return {
          ...options,
          themeColor: deviceTheme
        }
      })
  }, [fixedThemeColor, deviceTheme])

  const computedTheme = theme({
    userOptions,
    breakpointIndex: breakpoint.index
  })

  const setColor = (themeColorKey: ColorKey = 'base') => {
    setUserOptions((options) => {
      return {
        ...options,
        themeColor: themeColorKey
      }
    })
  }

  const toggleTheme = useCallback(() => {
    const { themeColor } = userOptions
    if (themeColor === 'base') {
      setColor('dark')
    } else if (themeColor === 'dark') {
      setColor('light')
    } else if (themeColor === 'light') {
      setColor('grayscale')
    } else {
      setColor('base')
    }
  }, [userOptions])

  useEffect(() => {
    const timer = setInterval(() => {
      toggleTheme()
    }, 30000)

    if (!environment.isDev || !autoToggle) clearInterval(timer)

    return () => clearTimeout(timer)
  }, [toggleTheme, autoToggle])

  return (
    <ThemeContext.Provider
      value={{
        theme: computedTheme,
        toggleTheme
      }}
    >
      {/* This is necessary for the styled-components to receive the theme via their props */}
      <StyledComponentsThemeProvider theme={computedTheme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  if (themeContext == null) {
    throw new Error('useTheme() called outside of a ThemeProvider?')
  }
  return themeContext
}

export { ThemeProvider, useTheme }
