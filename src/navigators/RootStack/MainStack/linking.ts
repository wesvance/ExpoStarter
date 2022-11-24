import { links } from 'utils/constants'

import { linking as mainNavigationLinking } from './MainNavigation'

export const linking = {
  screens: {
    [links.MAIN_STACK]: mainNavigationLinking
  }
}
