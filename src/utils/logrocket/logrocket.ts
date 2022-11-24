import { environment } from 'utils/constants'

import { LogRocket } from './lib'

export const init = () => {
  if (environment.isDev) return null

  return false

  // Todo - add your logrocket key here / in the constatns
  return LogRocket.init('')
}
