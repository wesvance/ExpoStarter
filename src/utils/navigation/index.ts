import { links } from 'utils/constants'

import * as navLib from './lib'

export type {
  NavigatorScreenParams,
  LinkingOptions,
  DrawerContentComponentProps,
  BottomTabBarProps,
  DrawerScreenProps,
  BottomTabScreenProps,
  NativeStackScreenProps
} from './lib'

export const {
  NavigationContainer,
  createNativeStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  useRoute
} = navLib

export const useNavigation = () => navLib.useNavigation<any>()

export const goBackOrHome = (navigation: any) => {
  if (navigation?.canGoBack()) {
    navigation.goBack()
  } else {
    navigation.replace(links.MAIN_STACK)
  }
}
