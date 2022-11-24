import React from 'react'

import { AppProvider } from 'contexts/app'
import { AuthProvider } from 'contexts/auth'
import { ThemeProvider } from 'contexts/theme'
import { UserProvider } from 'contexts/user'
import { WindowProvider } from 'contexts/window'

import { QueryClientProvider, queryClient } from 'utils/reactquery'
import { SafeAreaProvider } from 'utils/safeArea'

export const RootContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <WindowProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <UserProvider>
              <AppProvider>
                <ThemeProvider>{children}</ThemeProvider>
              </AppProvider>
            </UserProvider>
          </AuthProvider>
        </QueryClientProvider>
      </WindowProvider>
    </SafeAreaProvider>
  )
}
