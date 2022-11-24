import { useState } from 'react'
import { StyleProp, ViewStyle } from 'types/react'

import { Box } from 'components/atoms/Box'
import { ImageBackground } from 'components/atoms/ImageBackground'
import { Text } from 'components/atoms/Text'

import { useTheme } from 'contexts/theme'

import { Color, Size } from 'utils/theme'

type AvatarProps = {
  children?: React.ReactNode
  src?: { uri: string }
  size?: Size
  backgroundColor?: Color
  style?: StyleProp<ViewStyle>
}

export const Avatar = ({
  children,
  src,
  size = 'xs',
  backgroundColor = 'primary',
  style = {}
}: AvatarProps) => {
  const { theme } = useTheme()
  const [avatarLoaded, setAvatarLoaded] = useState(true)

  const imageBackgroundStyle = {
    width: '100%',
    height: '100%'
  }

  return (
    <Box
      justify='center'
      align='center'
      width={`${theme.size.avatar[size]}px`}
      height={`${theme.size.avatar[size]}px`}
      overflow='hidden'
      borderRadius='full'
      background={backgroundColor}
      style={style}
    >
      <ImageBackground
        onError={() => setAvatarLoaded(false)}
        source={src}
        style={imageBackgroundStyle}
      >
        {avatarLoaded ? null : (
          <>
            <Box borderRadius='full' justify='center' align='center' width='100%' height='100%'>
              <Text color={backgroundColor}>{children}</Text>
            </Box>
          </>
        )}
      </ImageBackground>
    </Box>
  )
}
