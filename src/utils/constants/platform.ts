import { OS, isTV as RNPlatformIsTv, Version } from './lib/react-native-platform'

const platform = OS
export const isAndroid = platform === 'android'
export const isIos = platform === 'ios'
export const isWeb = platform === 'web'
export const isWindows = platform === 'windows'
export const isMacOS = platform === 'macos'
export const isTV = RNPlatformIsTv
export const isNative = !isWeb

export const readable = platform
export const platformVersion = Version
