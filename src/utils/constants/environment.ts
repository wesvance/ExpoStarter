import { debugMode } from './lib/expo-constants'

const Env = process.env.APP_ENV

export const isDev = debugMode || Env === 'development' || Env === 'local'
export const isStaging = (Env === 'test' || Env === 'staging') && !isDev
export const isProd = Env === 'production' && !isDev && !isStaging

let intReadable = 'unknown'
if (isDev) {
  intReadable = 'development'
} else if (isStaging) {
  intReadable = 'staging'
} else if (isProd) {
  intReadable = 'production'
}

export const readable = intReadable
