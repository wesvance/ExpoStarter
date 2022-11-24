import { environment } from 'utils/constants'
import { sentry } from 'utils/sentry'

import {
  consoleTransport,
  logger as libLogger,
  sentryTransport,
  transportFunctionType
} from './lib'

const transport: transportFunctionType = (props) => {
  if (environment.isDev) {
    consoleTransport(props)
  } else {
    sentryTransport(props)
  }
}

const defaultConfig = {
  levels: {
    debug: 0,
    info: 100,
    success: 200,
    warn: 300,
    error: 400,
    fatal: 500
  },
  severity: environment.isDev ? 'debug' : 'fatal',
  transport,
  transportOptions: {
    SENTRY: environment.isDev ? null : sentry,
    colors: {
      debug: '',
      info: 'blueBright',
      success: 'greenBright',
      warn: 'yellowBright',
      error: 'redBright',
      fatal: 'red'
    },
    extensionColors: {
      DEFAULT: 'whiteBright',
      REALM: 'magentaBright'
    }
  },
  enabledExtensions: ['DEFAULT', 'REALM'],
  async: true,
  dateFormat: 'time',
  printLevel: !environment.isDev,
  printDate: !environment.isDev,
  enabled: true
}

const baseLogger = libLogger.createLogger(defaultConfig)
const defaultLogger = baseLogger.extend('DEFAULT')

export const { debug, info, success, warn, error, fatal } = defaultLogger
