import React from 'react'

import { ThemeProvider } from 'contexts/theme'
import { WindowProvider } from 'contexts/window'

import { useSetupFonts } from 'hooks/useSetupFonts'

import { SafeAreaProvider } from 'utils/safeArea'

export const decorators = [
  (Story) => {
    useSetupFonts()
    return (
      <SafeAreaProvider>
        <WindowProvider>
          <ThemeProvider fixedThemeColor='base' autoToggle={false}>
            <Story />
          </ThemeProvider>
        </WindowProvider>
      </SafeAreaProvider>
    )
  }
]

const customViewports = {
  xs: {
    name: 'Extra Small',
    styles: {
      width: '576px',
      height: '576px'
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: customViewports // newViewports would be an ViewportMap. (see below for examples)
  }
}
