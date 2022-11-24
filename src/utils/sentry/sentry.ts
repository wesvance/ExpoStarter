import { environment } from 'utils/constants'

import { Sentry } from './lib'

export const init = () => {
  if (environment.isDev) return

  // Todo - add your sentry config here
  Sentry.init({
    dsn: '',
    enableInExpoDevelopment: true
  })
}

export const sentry = Sentry
