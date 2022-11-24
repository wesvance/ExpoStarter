import { Color, Radius, Size } from 'utils/theme'

export type ButtonProps = {
  children: React.ReactNode
  color?: Color
  size?: Size
  shadow?: Size
  borderRadius?: Radius
  onPress?: () => void
  href?: string
}
