import { Linking } from 'react-native'

import { Pressable } from 'components/atoms/Pressable'

import { Props } from './ExternalLink.types'

export const ExternalLink = ({ children, href }: Props) => {
  return <Pressable onPress={() => Linking.openURL(href)}>{children}</Pressable>
}
