import React, { createContext, useContext, useState } from 'react'

type NotificationContextState = {
  notifications: any[]
  // clearNotifications: () => void
  // createNotification: (notification: any) => void
  // cancelNotification: (notification: any) => void
}

const NotificationContext = createContext({} as NotificationContextState)

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState([])

  /* 
    About - setInitialNotificationRoute
    If the user opens the app via a notification, and that notification has an associated route
    then we can set the route here and our navigation provider will pick it up and navigate to
    it once the app is finished loading - Wes
  */
  const [initialNotificationRoute, setInitialNotificationRoute] = useState()

  return (
    <NotificationContext.Provider
      value={{
        notifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

const useNotification = () => {
  const notificationContext = useContext(NotificationContext)
  if (notificationContext == null) {
    throw new Error('useNotification() called outside of a NotificationProvider?')
  }
  return notificationContext
}

export { NotificationProvider, useNotification }
