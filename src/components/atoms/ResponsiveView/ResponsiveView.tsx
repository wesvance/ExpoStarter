import { useResponsiveProp } from 'hooks/useResponsiveProp'

import { ResponsiveProp } from 'utils/theme'

type ResponsiveViewProps = {
  children: JSX.Element
  visible?: ResponsiveProp<boolean>
}

export const ResponsiveView = ({ children, visible }: ResponsiveViewProps) => {
  if (visible === undefined) return children

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isVisible = useResponsiveProp(visible)
  if (!isVisible) return null
  return children
}
