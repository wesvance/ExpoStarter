import { pallet } from 'utils/constants'

import { base } from './base'

export const light = {
  ...base,
  primary: {
    base: pallet.mintGreen,
    foreground: pallet.whiteSmoke
  },
  secondary: {
    base: pallet.tan,
    foreground: pallet.slate
  },

  tertiary: {
    base: pallet.whiteSmoke,
    foreground: pallet.slate
  },

  /* 
    The Base & Inverse colors are either a black or white shade, inverse is the oposite
    Commonly used for the background of the page
  */
  base: {
    base: pallet.whiteSmoke,
    foreground: pallet.slate
  },
  inverse: {
    base: pallet.slate,
    foreground: pallet.whiteSmoke
  }
}
