import React, { createContext, useCallback, useContext, useState } from 'react'

type UserContextState = {
  loading: boolean
}

const UserContext = createContext({} as UserContextState)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState()

  return (
    <UserContext.Provider
      value={{
        loading: false
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => {
  const userContext = useContext(UserContext)
  if (userContext == null) {
    throw new Error('useUser() called outside of a UserProvider?')
  }
  return userContext
}

export { UserProvider, useUser }
