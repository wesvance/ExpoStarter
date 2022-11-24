import { isDev, isStaging } from './environment'
import { isAndroid, isIos, isWeb } from './platform'

const LOCAL_PATH = 'localhost:3000'
const DEV_PATH = 'web-dev.starter.app'
const STAGING_PATH = 'web-staging.starter.app'
const PRODUCTION_PATH = 'web.starter.app'

let path = ''
let fullPath = ''
// if (environment.isLocal) {
//   path = LOCAL_PATH
//   fullPath = `http://${path}`
// } else

if (isDev) {
  path = DEV_PATH
  fullPath = `https://${path}`
} else if (isStaging) {
  path = STAGING_PATH
  fullPath = `https://${path}`
} else {
  path = PRODUCTION_PATH
  fullPath = `https://${path}`
}

export const localAppPath = 'starter://'
export const localPath = path
export const localPathWithProtocol = fullPath

export const whatsNew = ''
export const featureBoard = ''
export const privacyPolicy = ''

export const iOSDownload = ''
export const androidDownload = ''

let platformDownload = iOSDownload
if (isIos) {
  platformDownload = androidDownload
} else if (isAndroid) {
  platformDownload = androidDownload
}
export const download = platformDownload
