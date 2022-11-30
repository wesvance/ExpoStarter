import { ViewProps } from 'react-native'

import { BoxSpacing, Color, Radius, ResponsiveProp, Shadow, Size, Space } from 'utils/theme'

type Flex = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type Display = 'flex' | 'grid' | 'block' | 'inline-block'

export type BoxProps = {
  children?: React.ReactNode | string
  flex?: ResponsiveProp<number>
  display?: ResponsiveProp<Display>
  align?: ResponsiveProp<Flex>
  justify?: ResponsiveProp<Flex>
  background?: ResponsiveProp<Color>
  color?: ResponsiveProp<Color>
  flexDirection?: ResponsiveProp<FlexDirection>
  borderRadius?: ResponsiveProp<Radius | 'full'>
  shadow?: ResponsiveProp<Shadow>
  maxWidth?: ResponsiveProp<number | string>
  maxHeight?: ResponsiveProp<number | string>
  minWidth?: ResponsiveProp<number | string>
  minHeight?: ResponsiveProp<number | string>
  width?: ResponsiveProp<number | string>
  height?: ResponsiveProp<number | string>
  position?: ResponsiveProp<'absolute' | 'relative'>
  padding?: ResponsiveProp<Space | BoxSpacing>
  margin?: ResponsiveProp<Space | BoxSpacing>
  border?: ResponsiveProp<BoxBorder>
  visible?: ResponsiveProp<boolean>
  zIndex?: ResponsiveProp<number>
  top?: ResponsiveProp<number | string>
  right?: ResponsiveProp<number | string>
  bottom?: ResponsiveProp<number | string>
  left?: ResponsiveProp<number | string>
  overflow?: ResponsiveProp<'visible' | 'hidden' | 'scroll'>
  aspectRatio?: ResponsiveProp<number>
} & ViewProps

export type StyledBoxProps = {
  flex?: number
  display?: Display
  align?: Flex
  justify?: Flex
  background?: Color
  color?: Color
  flexDirection?: FlexDirection
  borderRadius?: Radius | 'full'
  shadow?: Size
  maxWidth?: string | number
  maxHeight?: string | number
  minWidth?: string | number
  minHeight?: string | number
  width?: string | number
  height?: string | number
  zIndex?: number
  border?: BoxBorder
  position?: string

  top?: Space | number | string
  right?: Space | number | string
  bottom?: Space | number | string
  left?: Space | number | string

  paddingTop?: Space | number
  paddingBottom?: Space | number
  paddingRight?: Space | number
  paddingLeft?: Space | number
  marginTop?: Space | number
  marginBottom?: Space | number
  marginRight?: Space | number
  marginLeft?: Space | number
  overflow?: 'visible' | 'hidden' | 'scroll'
  aspectRatio?: number
}
export interface BoxBorder {
  width: number
  color: Color
}
