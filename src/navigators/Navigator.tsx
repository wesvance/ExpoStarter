import { NavigationContainer } from 'utils/navigation'

import { RootStack } from './RootStack'
import { linking } from './linking'

export const Navigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <RootStack />
    </NavigationContainer>
  )
}
