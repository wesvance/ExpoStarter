/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react'

import { environment } from 'utils/constants'

const enableWdyr = false

// https://github.com/welldone-software/why-did-you-render
export const init = () => {
  if (environment.isDev && enableWdyr) {
    // eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    whyDidYouRender(React, {
      trackAllPureComponents: true
    })
  }
}
