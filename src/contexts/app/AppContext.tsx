import React, { createContext, useContext, useState } from 'react'

import { useSetupFonts } from 'hooks/useSetupFonts'

import { NetInfo, NetInfoState, useNetInfo } from 'utils/netinfo'
import { onlineManager } from 'utils/reactquery'
import { Color } from 'utils/theme/template/colors'

type AppContextState = {
  infoBarColor: Color
  netInfo: NetInfoState
}

const AppContext = createContext({} as AppContextState)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [barColor, setBarColor] = useState<Color>('white')
  const netInfo = useNetInfo()
  const [fontsLoaded] = useSetupFonts()

  // Wait for the fonts to load before rendering the app
  if (!fontsLoaded) {
    return null
  }

  // This lets React Query know when the app is online or offline
  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected)
    })
  })

  return (
    <AppContext.Provider
      value={{
        infoBarColor: barColor,
        netInfo
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useApp = () => {
  const appContext = useContext(AppContext)
  if (appContext == null) {
    throw new Error('useApp() called outside of a AppProvider?')
  }
  return appContext
}

export { AppProvider, useApp }
