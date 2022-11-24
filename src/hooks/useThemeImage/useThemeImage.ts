import { ImageURISource } from 'react-native'

import { useTheme } from 'contexts/theme'

import { ImageAspect, ImageColors, ImageName } from 'utils/theme'

// This hook converts an imageString into an image from the theme
export const useThemeImage = (imageString?: ImageName) => {
  const { theme } = useTheme()

  if (!imageString) return undefined

  const imageParts = imageString.split('.')

  if (imageParts.length !== 2) return undefined

  const imageDimensions = imageParts[0] as ImageAspect
  const imageColor = imageParts[1] as ImageColors

  return theme.images[imageDimensions][imageColor] as ImageURISource
}
