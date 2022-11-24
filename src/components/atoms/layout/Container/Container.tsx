import { Box } from 'components/atoms/Box'

import { useTheme } from 'contexts/theme'
import { useWindow } from 'contexts/window'

import { ResponsiveProp } from 'utils/theme'

type ContainerProps = {
  children: React.ReactNode
  visible?: ResponsiveProp<boolean>
  maxWidth?: number
}

export const Container = ({ children, visible, maxWidth }: ContainerProps) => {
  const { insets, breakpoint } = useWindow()
  const { theme } = useTheme()
  const { isMobile } = breakpoint

  return (
    <Box
      visible={visible}
      /* 
        This accounts for the notch on iOS devices, but if we're not on mobile, 
        then there is a sidebar, so we dont want to add margin here, 
        since we add it to the sidebar.
      */
      margin={{ left: isMobile ? insets.left || 'xs' : 'xs', right: insets.right || 'xs' }}
      display='flex'
      align='center'
    >
      <Box width='100%' maxWidth={maxWidth || theme.maxWidth}>
        {children}
      </Box>
    </Box>
  )
}
