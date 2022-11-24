import { debug } from 'utils/logger'

const notSupportedMessage = (message = '') => {
  debug(`Sorry, notifications are not supported on the web. ${message}`)
}

export const createChannel = async ({ id = 'default', name = 'defaultChannel' }) => {
  notSupportedMessage(`${id} - ${name}`)
}

export const createNotification = async ({ title = 'Hello World', body = 'Notification body' }) => {
  notSupportedMessage(`${title} - ${body}`)
}
