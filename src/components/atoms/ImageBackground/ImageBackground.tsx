import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  ImageBackground as RNImageBackground,
  ImageBackgroundProps as RNImageBackgroundProps,
  StyleProp
} from 'react-native'

type ImageBackgroundProps = Omit<RNImageBackgroundProps, 'source'> & {
  source?: ImageSourcePropType
  resizeMode?: ImageResizeMode
  style?: StyleProp<ImageStyle>
  children?: React.ReactNode
}
export const ImageBackground = ({
  source,
  resizeMode = 'cover',
  style = {},
  children,
  ...props
}: ImageBackgroundProps) => {
  if (!source) return null

  return (
    <RNImageBackground source={source} resizeMode={resizeMode} style={style} {...props}>
      {children}
    </RNImageBackground>
  )
}
