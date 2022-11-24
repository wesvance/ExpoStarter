import { Profile } from 'components/pages/Profile'

import { links } from 'utils/constants'
import { createNativeStackNavigator } from 'utils/navigation'

const Stack = createNativeStackNavigator()

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={links.PROFILE_PAGE} component={Profile} />
    </Stack.Navigator>
  )
}
