import { links } from 'utils/constants'

import { linking as profileStackLinking } from './ProfileStack'

export const linking = {
  screens: {
    [links.MAIN_NAVIGATION]: {
      screens: {
        [links.HOME_PAGE]: 'home',
        ...profileStackLinking
      }
    }
  }
}
