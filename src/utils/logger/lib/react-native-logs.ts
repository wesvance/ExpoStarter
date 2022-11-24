import {
  consoleTransport as RNConsoleTransport,
  logger as RNLogs,
  sentryTransport as RNSentryTransport
} from 'react-native-logs'

export const logger = RNLogs
export const consoleTransport = RNConsoleTransport
export const sentryTransport = RNSentryTransport
