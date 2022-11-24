import { links } from 'utils/constants'
import { createNativeStackNavigator } from 'utils/navigation'

import { MainNavigation } from './MainNavigation'
import type { MainStackParams } from './MainStack.types'

const Stack = createNativeStackNavigator<MainStackParams>()

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={links.MAIN_NAVIGATION} component={MainNavigation} />
    </Stack.Navigator>
  )
}
