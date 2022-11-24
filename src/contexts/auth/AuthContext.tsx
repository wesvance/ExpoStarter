import React, { createContext, useCallback, useContext, useState } from 'react'

import { debug } from 'utils/logger'

type AuthContextState = {
  user: boolean | null
  login: {
    anonymous: () => void
    emailPassword: ({ email, password }: { email: string; password: string }) => void
  }
  logOut: () => void
}
const AuthContext = createContext({} as AuthContextState)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const realmUser = null // getCurrentUser()
  const [authUser, setAuthUser] = useState<boolean | null>(realmUser)

  const loginAnonymous = useCallback(async () => {
    debug('Fake anonymous user logged in')
    setAuthUser(true)
  }, [])

  const loginEmailPassword = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      debug(`Fake email/password user logged in: ${email}`)
      setAuthUser(true)
    },
    []
  )

  const logOut = useCallback(async () => {
    // await realmLogOut({ id: USER_REALM_ID })
    debug('Logged out user')
    setAuthUser(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        login: {
          anonymous: loginAnonymous,
          emailPassword: loginEmailPassword
        },
        logOut,
        user: authUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const userContext = useContext(AuthContext)
  if (userContext == null) {
    throw new Error('useAuth() called outside of a AuthProvider?')
  }
  return userContext
}

export { AuthProvider, useAuth }
