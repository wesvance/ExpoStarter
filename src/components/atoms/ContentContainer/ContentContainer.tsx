import { Box } from 'components/atoms/Box'

import { useWindow } from 'contexts/window'

type Props = {
  children: React.ReactNode
}

export const ContentContainer = ({ children }: Props) => {
  const { dimensions } = useWindow()

  return (
    <Box
      margin={{
        left: 'sm',
        right: dimensions.isHorizontal ? 'sm' : 'md'
      }}
    >
      {children}
    </Box>
  )
}
