import { registerRootComponent } from 'expo'
import 'expo-dev-client'

import { init } from 'utils/wdyr'

import App from './App'

init()

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
