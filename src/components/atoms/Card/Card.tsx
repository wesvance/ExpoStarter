import { Box, BoxProps } from 'components/atoms/Box'

type CardProps = BoxProps & {
  children: React.ReactNode
}

export const Card = ({
  children,
  background = 'base',
  padding = 'lg',
  borderRadius = 'sm',
  border = { width: 2, color: 'baseFlip' },
  width = '100%',
  ...other
}: CardProps) => {
  return (
    <Box
      background={background}
      padding={padding}
      borderRadius={borderRadius}
      border={border}
      shadow='xxs'
      width={width}
      {...other}
    >
      {children}
    </Box>
  )
}
