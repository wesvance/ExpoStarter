import { links } from 'utils/constants'
import { NavigatorScreenParams } from 'utils/navigation'

import { ProfileStackParams } from './ProfileStack'

export type MainNavigationParams = {
  [links.HOME_PAGE]: undefined
  [links.PROFILE_STACK]: NavigatorScreenParams<ProfileStackParams>
}
