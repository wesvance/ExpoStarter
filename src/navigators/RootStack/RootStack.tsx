import { Login } from 'components/pages/Login'
import { Register } from 'components/pages/Register'

import { links } from 'utils/constants'
import { createNativeStackNavigator } from 'utils/navigation'

import { MainStack } from './MainStack'
import type { RootStackParams } from './RootStack.types'

const Stack = createNativeStackNavigator<RootStackParams>()

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {/* Marketing pages (Blog, Articles, etc.) */}
      {/* <Stack.Screen name={links.MARKETING_STACK} component={MarketingStack} /> */}
      {/* The Main App Section */}
      <Stack.Screen name={links.MAIN_STACK} component={MainStack} />

      <Stack.Screen name={links.LOGIN_PAGE} component={Login} />
      <Stack.Screen name={links.REGISTER_PAGE} component={Register} />

      {/* These pages sit above all other pages */}
    </Stack.Navigator>
  )
}
