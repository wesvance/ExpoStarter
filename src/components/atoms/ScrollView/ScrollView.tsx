import { ScrollView as LibScrollView } from 'react-native'
import type { ScrollViewProps as LibScrollViewProps } from 'react-native'

type ScrollViewProps = LibScrollViewProps

export const ScrollView = ({
  children,
  showsHorizontalScrollIndicator = false,
  ...props
}: ScrollViewProps) => {
  return (
    <LibScrollView showsHorizontalScrollIndicator={showsHorizontalScrollIndicator} {...props}>
      {children}
    </LibScrollView>
  )
}
