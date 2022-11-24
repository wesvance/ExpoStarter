import React, { useEffect } from 'react'
import 'react-native-gesture-handler'

import { RootApp } from 'components/RootApp'

import { RootContext } from 'contexts/root'

import { init as InitI18n } from 'utils/i18n'
import { init as InitLogRocket } from 'utils/logrocket'
import { init as InitSentry } from 'utils/sentry'

// Sets up internationalization
InitI18n()

const App = () => {
  useEffect(() => {
    InitLogRocket()
    InitSentry()
  }, [])

  return (
    <RootContext>
      <RootApp />
    </RootContext>
  )
}

export default App
