import { ComponentPropsWithRef } from 'types/react'

import { Box } from 'components/atoms/Box'

import { styled } from 'utils/styled'

type FlexProps = ComponentPropsWithRef<typeof Box> & {
  flexDirection?: 'row' | 'column'
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around'
  align?: 'start' | 'end' | 'center' | 'stretch'
  wrap?: 'wrap' | 'nowrap'
}

const StyledFlexBox = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  flex-wrap: ${({ wrap = 'wrap' }) => wrap};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};
`

export const Flex = ({ children, ...props }: FlexProps) => {
  return <StyledFlexBox {...props}>{children}</StyledFlexBox>
}
