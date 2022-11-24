import { pallet } from 'utils/constants'

export const base = {
  // Primary Colors
  primary: {
    base: pallet.forestGreen,
    foreground: pallet.bisque
  },
  secondary: {
    base: pallet.orange,
    foreground: pallet.whiteSmoke
  },
  tertiary: {
    base: pallet.mintGreen,
    foreground: pallet.bisque
  },
  /* 
    In the base theme this is the same as the flip of primary, but in other modes, 
    it wont be, so we need it to exist on its own here. 
  */
  quaternary: {
    base: pallet.bisque,
    foreground: pallet.forestGreen
  },

  quinary: {
    base: pallet.white,
    foreground: pallet.mintGreen
  },

  senary: {
    base: pallet.bisque,
    foreground: pallet.orange
  },

  // Used for error, warning, and info messages
  danger: {
    base: pallet.chileanFire,
    foreground: pallet.white
  },
  warning: {
    base: pallet.tangerineYellow,
    foreground: pallet.white
  },
  info: {
    base: pallet.dodgerBlue,
    foreground: pallet.white
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
  },
  transparent: '#00000000',
  white: pallet.white,
  black: pallet.black
}
