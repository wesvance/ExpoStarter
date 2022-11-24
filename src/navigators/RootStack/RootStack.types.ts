import { links } from 'utils/constants'
import { NavigatorScreenParams } from 'utils/navigation'

import { MainStackParams } from './MainStack'

export type RootStackParams = {
  [links.MAIN_STACK]: NavigatorScreenParams<MainStackParams>
  [links.LOGIN_PAGE]: undefined
  [links.REGISTER_PAGE]: undefined
}
