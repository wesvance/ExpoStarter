import { memo } from 'react'
import { StyleProp, ViewStyle } from 'types/react'

import { Box } from 'components/atoms/Box'
import { ScrollView } from 'components/atoms/ScrollView'

import { styled } from 'utils/styled'
import { Color } from 'utils/theme'

type PageProps = {
  children: React.ReactNode
  backgroundColor?: Color
  withScroll?: boolean
  style?: StyleProp<ViewStyle>
}

const StyledBox = styled(Box)<PageProps>`
  background-color: ${({ theme, backgroundColor = 'base' }) => theme.color[backgroundColor].base};
  min-height: 100%;
`

export const Page = memo(
  ({ children, backgroundColor, withScroll = true, style = {} }: PageProps) => {
    if (withScroll)
      return (
        <Box background={backgroundColor} flex={1}>
          <ScrollView style={style}>
            <StyledBox backgroundColor={backgroundColor}>{children}</StyledBox>
          </ScrollView>
        </Box>
      )

    return (
      <Box background={backgroundColor} flex={1}>
        <StyledBox backgroundColor={backgroundColor}>{children}</StyledBox>
      </Box>
    )
  }
)

Page.displayName = 'Page'
