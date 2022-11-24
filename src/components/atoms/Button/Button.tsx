import { memo } from 'react'

import { Box } from 'components/atoms/Box'
import type { BoxProps } from 'components/atoms/Box'
import { Pressable } from 'components/atoms/Pressable'
import { Text } from 'components/atoms/Text'

import { useResponsiveProp } from 'hooks/useResponsiveProp'

import { styled } from 'utils/styled'
import { Color } from 'utils/theme'

import type { ButtonProps } from './Button.types'

const ButtonContainer = styled(Box)<
  ButtonProps & {
    isPressed?: boolean
    isDisabled?: boolean
    isHovered?: boolean
    isFocused?: boolean
  }
>`
  background-color: ${({ theme, color = 'secondary', isHovered, isPressed }) => {
    if (isPressed) {
      return theme.color[color as Color].tint
    }
    if (isHovered) {
      return theme.color[color as Color].shade
    }

    return theme.color[color as Color].base
  }};
  padding: ${({ theme }) => theme.space.base.sm}px ${({ theme }) => theme.space.base.xl}px;
  ${({ isPressed }) => (isPressed ? `shadow-opacity: 0;` : '')};
`

const StyledText = styled(Text)`
  color: ${({ theme, color = 'secondary' }) => theme.color[color].foreground};
  padding: 0px;
  margin: 0px;
  text-align: center;
`

export const Button = memo(
  ({
    onPress,
    color = 'secondary',
    borderRadius = 'xxl',
    size = 'sm',
    shadow = 'xxs',
    children,
    ...rest
  }: ButtonProps & BoxProps) => {
    const responsiveColor = useResponsiveProp(color)

    return (
      <Pressable onPress={onPress}>
        {(pressableProps) => (
          <ButtonContainer
            onPress={onPress}
            borderRadius={borderRadius}
            color={responsiveColor}
            accessible
            shadow={shadow}
            accessibilityRole='button'
            {...pressableProps}
            {...rest}
          >
            <StyledText
              weight='medium'
              color={color}
              selectable={false}
              suppressHighlighting
              size={size}
              {...pressableProps}
            >
              {children}
            </StyledText>
          </ButtonContainer>
        )}
      </Pressable>
    )
  }
)

Button.displayName = 'Button'
