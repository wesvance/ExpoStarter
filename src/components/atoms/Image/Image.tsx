import { ImageSourcePropType, ImageStyle, Image as RNImage, StyleProp } from 'react-native'

import { Box, BoxProps } from 'components/atoms/Box'

import { useResponsiveProp } from 'hooks/useResponsiveProp'
import { useThemeImage } from 'hooks/useThemeImage'

import { ImageName, ResponsiveProp } from 'utils/theme'

type Props = {
  source?: ImageSourcePropType
  image?: ResponsiveProp<ImageName>
  style?: StyleProp<ImageStyle>
  width?: ResponsiveProp<number | string>
  height?: ResponsiveProp<number | string>
  dimensions: {
    width: number
    height: number
  }
  resizeMode?: 'contain' | 'cover' | 'center' | 'repeat' | 'stretch'
  containerProps?: BoxProps
}

export const Image = ({
  source,
  style = {},
  width = undefined,
  height = undefined,
  image,
  // Used to calculate the aspect ratio
  dimensions,
  resizeMode = 'contain',
  containerProps = {}
}: Props) => {
  const computedAspectRatio = dimensions.width / dimensions.height

  const responsiveWidth = useResponsiveProp(width)
  const responsiveHeight = useResponsiveProp(height)
  const responsiveAspectRatio = useResponsiveProp(computedAspectRatio)
  const responsiveImageString = useResponsiveProp(image)

  const themeImage = useThemeImage(responsiveImageString)

  return (
    <Box
      width={responsiveWidth}
      height={responsiveHeight}
      aspectRatio={responsiveAspectRatio}
      {...containerProps}
    >
      <RNImage
        resizeMode={resizeMode}
        source={source || themeImage}
        style={[{ width: '100%', height: '100%' }, style]}
      />
    </Box>
  )
}
