import notifee, { TriggerType } from '@notifee/react-native'

export const createChannel = async ({ id = 'default', name = 'defaultChannel' }) => {
  const channel = await notifee.createChannel({
    id,
    name
  })
  return channel
}

export const createNotification = async ({ title = 'Hello World', body = 'Notification body' }) => {
  const currentTime = new Date(Date.now())
  const notification = await notifee.createTriggerNotification(
    {
      title,
      body
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: currentTime.getTime() + 5000
    }
  )

  return notification
}
