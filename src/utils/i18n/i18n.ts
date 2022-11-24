import { debug } from 'utils/logger'

import { Localization } from './lib/expo-localization'
import { i18n } from './lib/i18n-js'
import { translations } from './translations'

export const init = () => {
  debug('TRANSLATIONS: ', translations)
  i18n.translations = translations
  i18n.locale = Localization.locale
  i18n.fallbacks = true
}

export const getKey = (keyName: string) => {
  return i18n.t(keyName)
}
