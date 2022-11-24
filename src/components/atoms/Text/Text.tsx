import { ComponentPropsWithRef, StyleProp, TextStyle } from 'types/react'

import { ResponsiveView } from 'components/atoms/ResponsiveView'

import { styled } from 'utils/styled'
import { Color, ResponsiveProp, Size, TextFont, TextFontWeight } from 'utils/theme'

import { LibText } from './lib'

type TextProps = ComponentPropsWithRef<typeof LibText> & {
  children: React.ReactNode
  color?: Color
  size?: Size
  align?: 'left' | 'center' | 'right'
  weight?: TextFontWeight
  font?: TextFont
  style?: StyleProp<TextStyle>
  visible?: ResponsiveProp<boolean>
}

export const StyledText = styled(LibText)<TextProps>`
  color: ${({ theme, color = 'base' }) => theme.color[color].foreground};
  font-size: ${({ theme, size = 'md' }) => theme.size.font[size]}px;
  font-weight: ${({ theme, weight = 'normal', font = 'body' }) =>
    theme.typography.family.text[font][weight].weight};
  font-family: ${({ theme, weight = 'normal', font = 'body' }) =>
    theme.typography.family.text[font][weight].name};
  text-align: ${({ align = 'left' }) => align};
`

export const Text = ({
  children,
  align,
  color,
  size,
  weight,
  style = {},
  visible = true,
  font
}: TextProps) => {
  return (
    <ResponsiveView visible={visible}>
      <StyledText
        selectable
        color={color}
        font={font}
        size={size}
        weight={weight}
        style={style}
        align={align}
      >
        {children}
      </StyledText>
    </ResponsiveView>
  )
}
