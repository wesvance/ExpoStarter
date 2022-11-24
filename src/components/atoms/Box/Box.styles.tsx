import { styled } from 'utils/styled'

import type { StyledBoxProps } from './Box.types'
import { LibBox } from './lib'

const getSizeFromStringOrNumber = (value: string | number) =>
  typeof value === 'string' ? value : `${value}px`

export const StyledBox = styled(LibBox)<StyledBoxProps>`
  ${({
    theme,
    flex,
    display,
    align,
    justify,
    background,
    color,
    flexDirection,
    borderRadius,
    maxWidth,
    maxHeight,
    minHeight,
    minWidth,
    width,
    height,
    zIndex,
    border,
    position,

    top,
    right,
    bottom,
    left,

    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    shadow,
    overflow,
    aspectRatio
  }) => {
    const overflowValue = overflow ? `overflow: ${overflow}` : ''
    const aspectRatioValue = aspectRatio ? `aspect-ratio: ${aspectRatio}` : ''

    const padding = `${
      paddingTop !== undefined
        ? `padding-top: ${
            typeof paddingTop === 'number' ? paddingTop : theme.space.base[paddingTop]
          }px;`
        : ''
    } ${
      paddingBottom !== undefined
        ? `padding-bottom: ${
            typeof paddingBottom === 'number' ? paddingBottom : theme.space.base[paddingBottom]
          }px;`
        : ''
    } ${
      paddingLeft !== undefined
        ? `padding-left: ${
            typeof paddingLeft === 'number' ? paddingLeft : theme.space.base[paddingLeft]
          }px;`
        : ''
    } ${
      paddingRight !== undefined
        ? `padding-right: ${
            typeof paddingRight === 'number' ? paddingRight : theme.space.base[paddingRight]
          }px;`
        : ''
    }`

    const margin = `${
      marginTop !== undefined
        ? `margin-top: ${
            typeof marginTop === 'number' ? marginTop : theme.space.base[marginTop]
          }px;`
        : ''
    } ${
      marginBottom !== undefined
        ? `margin-bottom: ${
            typeof marginBottom === 'number' ? marginBottom : theme.space.base[marginBottom]
          }px;`
        : ''
    } ${
      marginLeft !== undefined
        ? `margin-left: ${
            typeof marginLeft === 'number' ? marginLeft : theme.space.base[marginLeft]
          }px;`
        : ''
    } ${
      marginRight !== undefined
        ? `margin-right: ${
            typeof marginRight === 'number' ? marginRight : theme.space.base[marginRight]
          }px;`
        : ''
    }`
    const flexStyle = flex ? `flex: ${flex}` : ''
    const displayStyle = display ? `display: ${display}` : ''
    const alignStyle = align ? `align-items: ${align}` : ''
    const justifyContentStyle = justify ? `justify-content: ${justify}` : ''
    const backgroundColorStyle = background
      ? `background-color: ${theme.color[background].base};`
      : ''
    const textColorStyle = color ? `color: ${theme.color[color].foreground};` : ''
    const flexDirectionStyle = flexDirection ? `flex-direction: ${flexDirection}` : ''
    const borderRadiusStyle = borderRadius
      ? `border-radius: ${
          borderRadius === 'full' ? '999px' : `${theme.space.base[borderRadius]}px`
        }`
      : ''
    const maxWidthStyle =
      maxWidth !== undefined ? `max-width: ${getSizeFromStringOrNumber(maxWidth)}` : ''
    const maxHeightStyle =
      maxHeight !== undefined ? `max-height: ${getSizeFromStringOrNumber(maxHeight)}` : ''

    const minHeightStyle =
      minHeight !== undefined ? `min-height: ${getSizeFromStringOrNumber(minHeight)}` : ''
    const minWidthStyle =
      minWidth !== undefined ? `min-width: ${getSizeFromStringOrNumber(minWidth)}` : ''

    const widthStyle = width !== undefined ? `width: ${getSizeFromStringOrNumber(width)}` : ''
    const heightStyle = height !== undefined ? `height: ${getSizeFromStringOrNumber(height)}` : ''
    const shadowStyle = shadow
      ? `
      shadow-radius: ${theme.shadow.base[shadow].shadowRadius}px;
      shadow-opacity: ${theme.shadow.base[shadow].shadowOpacity};
      shadow-color: ${theme.shadow.base[shadow].shadowColor};
      shadow-offset: ${theme.shadow.base[shadow].shadowOffset};
    `
      : ''

    const zIndexStyle = zIndex !== undefined ? `z-index: ${zIndex};` : ''
    const borderStyle = border
      ? `border: ${border.width}px solid ${theme.color[border.color].base};`
      : ''
    const positionStyle = position ? `position: ${position};` : ''

    const topStyle = top !== undefined ? `top: ${getSizeFromStringOrNumber(top)}` : ''
    const rightStyle = right !== undefined ? `right: ${getSizeFromStringOrNumber(right)}` : ''
    const bottomStyle = bottom !== undefined ? `bottom: ${getSizeFromStringOrNumber(bottom)}` : ''
    const leftStyle = left !== undefined ? `left: ${getSizeFromStringOrNumber(left)}` : ''

    return `
      ${shadowStyle}
      ${padding}
      ${overflowValue}
      ${aspectRatioValue}
      ${margin}
      ${flexStyle}
      ${displayStyle}
      ${alignStyle}
      ${justifyContentStyle}
      ${backgroundColorStyle}
      ${textColorStyle}
      ${flexDirectionStyle}
      ${borderRadiusStyle}
      ${maxWidthStyle}
      ${maxHeightStyle}
      ${minHeightStyle}
      ${minWidthStyle}
      ${widthStyle}
      ${heightStyle}
      ${zIndexStyle}
      ${borderStyle}
      ${positionStyle}
      ${topStyle}
      ${rightStyle}
      ${bottomStyle}
      ${leftStyle}
    `
  }}
`
