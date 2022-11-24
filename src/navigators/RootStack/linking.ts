import { links } from 'utils/constants'

import { linking as mainStackLinking } from './MainStack'

export const linking = {
  screens: {
    ...mainStackLinking.screens,
    [links.LOGIN_PAGE]: '/login',
    [links.REGISTER_PAGE]: '/register'
  }
}
