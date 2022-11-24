import { pallet } from 'utils/constants'

import { base } from './base'

export const dark = {
  ...base,
  primary: {
    base: pallet.forestGreen,
    foreground: pallet.whiteSmoke
  },
  secondary: {
    base: pallet.coolGrey,
    foreground: pallet.whiteSmoke
  },

  tertiary: {
    base: pallet.slate,
    foreground: pallet.whiteSmoke
  },
  quaternary: {
    base: pallet.coolGrey,
    foreground: pallet.whiteSmoke
  },

  /* 
    The Base & Inverse colors are either a black or white shade, inverse is the oposite
    Commonly used for the background of the page
  */
  base: {
    base: pallet.slate,
    foreground: pallet.whiteSmoke
  },
  inverse: {
    base: pallet.whiteSmoke,
    foreground: pallet.slate
  }
}
