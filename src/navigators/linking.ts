import { externalLinks } from 'utils/constants'
import { LinkingOptions } from 'utils/navigation'

import { RootStackParams, linking as rootStackLinking } from './RootStack'

const prefixes = [externalLinks.localPath, externalLinks.localAppPath]

export const linking: LinkingOptions<RootStackParams> = {
  prefixes,
  config: rootStackLinking
}
