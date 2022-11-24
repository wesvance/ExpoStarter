import { Pressable } from 'components/atoms/Pressable'

import { links } from 'utils/constants'
import { useNavigation } from 'utils/navigation'

type LinkProps = {
  children: React.ReactNode
  to: keyof typeof links
  options?: any
}

export const Link = ({ children, to, options = {} }: LinkProps) => {
  const navigation = useNavigation()
  return <Pressable onPress={() => navigation.navigate(links[to], options)}>{children}</Pressable>
}
