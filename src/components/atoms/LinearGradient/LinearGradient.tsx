import {
  LinearGradient as ExpoLinearGradient,
  LinearGradientProps as RNLinearGradientProps
} from 'expo-linear-gradient'

import { useTheme } from 'contexts/theme'

import { Color } from 'utils/theme'

type LinearGradientProps = Omit<RNLinearGradientProps, 'colors'> & {
  colors: Color[]
}

export const LinearGradient = ({ colors, ...props }: LinearGradientProps) => {
  const { theme } = useTheme()
  const themeColors = colors.map((color) => theme.color[color].base)

  return <ExpoLinearGradient colors={themeColors} {...props} />
}
