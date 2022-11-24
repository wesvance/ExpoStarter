import { ResponsiveView } from 'components/atoms/ResponsiveView'

import { useBoxSpacing } from 'hooks/useBoxSpacing'
import { useResponsiveProp } from 'hooks/useResponsiveProp'

import { StyledBox } from './Box.styles'
import type { BoxProps } from './Box.types'

export const Box = ({
  background,
  children,
  display,
  align,
  justify,
  color,
  flexDirection,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  width,
  height,
  position,
  flex,
  zIndex,
  padding,
  margin,
  style,
  shadow,
  borderRadius,
  border,
  visible,
  top,
  right,
  bottom,
  left,
  overflow,
  aspectRatio
}: BoxProps) => {
  // const responsiveProps = useResponsiveProps(
  //   {
  //     background,
  //     flex,
  //     padding,
  //     margin,
  //     style,
  //     shadow,
  //     borderRadius,
  //     visible
  //   },
  //   []
  // )
  // console.log('RESPONSIVE PROPS', responsiveProps)

  const responsiveDisplay = useResponsiveProp(display)
  const responsiveAlign = useResponsiveProp(align)
  const responsiveJustify = useResponsiveProp(justify)
  const responsiveColor = useResponsiveProp(color)
  const responsiveDirection = useResponsiveProp(flexDirection)
  const responsiveMaxWidth = useResponsiveProp(maxWidth)
  const responsiveMaxHeight = useResponsiveProp(maxHeight)
  const responsiveWidth = useResponsiveProp(width)
  const responsiveZIndex = useResponsiveProp(zIndex)
  const responsiveHeight = useResponsiveProp(height)
  const responsivePosition = useResponsiveProp(position)
  const responsivePadding = useResponsiveProp(padding)
  const responsiveMargin = useResponsiveProp(margin)
  const responsiveFlex = useResponsiveProp(flex)
  const responsiveBackground = useResponsiveProp(background)
  const responsiveShadow = useResponsiveProp(shadow)
  const responsiveBorderRadius = useResponsiveProp(borderRadius)
  const responsiveBorder = useResponsiveProp(border)
  const responsiveTop = useResponsiveProp(top)
  const responsiveRight = useResponsiveProp(right)
  const responsiveBottom = useResponsiveProp(bottom)
  const responsiveLeft = useResponsiveProp(left)
  const responsiveOverflow = useResponsiveProp(overflow)
  const responsiveMinHeight = useResponsiveProp(minHeight)
  const responsiveMinWidth = useResponsiveProp(minWidth)
  const responsiveAspectRatio = useResponsiveProp(aspectRatio)
  const paddingSpacing = useBoxSpacing(responsivePadding)
  const marginSpacing = useBoxSpacing(responsiveMargin)

  const resultingProps = {
    display: responsiveDisplay,
    align: responsiveAlign,
    justify: responsiveJustify,
    color: responsiveColor,
    flexDirection: responsiveDirection,
    maxWidth: responsiveMaxWidth,
    maxHeight: responsiveMaxHeight,
    width: responsiveWidth,
    height: responsiveHeight,
    position: responsivePosition,
    background: responsiveBackground,
    flex: responsiveFlex,
    shadow: responsiveShadow,
    borderRadius: responsiveBorderRadius,
    border: responsiveBorder,
    zIndex: responsiveZIndex,
    overflow: responsiveOverflow,
    aspectRatio: responsiveAspectRatio,
    minHeight: responsiveMinHeight,
    minWidth: responsiveMinWidth,

    top: responsiveTop,
    right: responsiveRight,
    bottom: responsiveBottom,
    left: responsiveLeft,

    // Padding & Margin for Box
    paddingTop: paddingSpacing.top,
    paddingBottom: paddingSpacing.bottom,
    paddingRight: paddingSpacing.right,
    paddingLeft: paddingSpacing.left,
    marginTop: marginSpacing.top,
    marginBottom: marginSpacing.bottom,
    marginRight: marginSpacing.right,
    marginLeft: marginSpacing.left
  }

  return (
    <ResponsiveView visible={visible}>
      <StyledBox {...resultingProps} style={style}>
        {children}
      </StyledBox>
    </ResponsiveView>
  )
}
