import { Fragment } from 'react'
import { StyleProp, ViewStyle } from 'types/react'

import { Box, BoxProps } from 'components/atoms/Box'

import { useTheme } from 'contexts/theme'

import { useResponsiveProp } from 'hooks/useResponsiveProp'

import { ResponsiveProp, Space } from 'utils/theme'

type StackProps = BoxProps & {
  children: React.ReactNode[]
  space?: ResponsiveProp<Space>
  flexDirection?: ResponsiveProp<'row' | 'column'>
  style?: StyleProp<ViewStyle>
}

export const Stack = ({ children, space, flexDirection, ...props }: StackProps) => {
  const { theme } = useTheme()

  const responsiveDirection = useResponsiveProp(flexDirection)
  const responsiveSpace = useResponsiveProp(space)
  const calculatedSpace = responsiveSpace ? theme.space.base[responsiveSpace] : 0

  const childrenWithSpace =
    children && children.length
      ? children.map((child: React.ReactNode, index: number) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
              {child}
              {index < children.length - 1 ? (
                <Box
                  height={responsiveDirection === 'column' ? calculatedSpace : 0}
                  width={responsiveDirection === 'row' ? calculatedSpace : 0}
                />
              ) : null}
            </Fragment>
          )
        })
      : children

  return (
    <Box flexDirection={flexDirection} {...props}>
      {childrenWithSpace}
    </Box>
  )
}
