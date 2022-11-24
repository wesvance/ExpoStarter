import { links } from 'utils/constants'
import { NavigatorScreenParams } from 'utils/navigation'

import { MainNavigationParams } from './MainNavigation'

export type MainStackParams = {
  [links.MAIN_NAVIGATION]: NavigatorScreenParams<MainNavigationParams>
}
