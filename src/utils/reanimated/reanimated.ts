import ReAnimated, {
  Easing as ReanimatedEasing,
  interpolate as reanimatedInterpolate,
  useAnimatedStyle as reanimatedUseAnimatedStyle,
  useSharedValue as reanimatedUseSharedValue,
  withRepeat as reanimatedWithRepeat,
  withTiming as reanimatedWithTiming
} from 'react-native-reanimated'
import { withPause as redashWithPause } from 'react-native-redash'

export const Easing = ReanimatedEasing
export const withTiming = reanimatedWithTiming
export const withRepeat = reanimatedWithRepeat
export const withPause = redashWithPause
export const useSharedValue = reanimatedUseSharedValue
export const useAnimatedStyle = reanimatedUseAnimatedStyle
export const Animated = ReAnimated
export const interpolate = reanimatedInterpolate
