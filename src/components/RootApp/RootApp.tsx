import { Navigator } from 'navigators'
import React from 'react'

import { Box } from 'components/atoms/Box'

import { useApp } from 'contexts/app'
import { useWindow } from 'contexts/window'

export const RootApp = () => {
  const { infoBarColor } = useApp()
  const { insets, dimensions } = useWindow()

  return (
    <>
      <Box
        flex={1}
        minHeight='100%'
        padding={{ top: dimensions.isHorizontal ? insets.top : 0 }}
        background={infoBarColor}
      >
        <Navigator />
      </Box>
    </>
  )
}
