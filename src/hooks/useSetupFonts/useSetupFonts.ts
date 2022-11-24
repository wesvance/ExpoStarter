import { useFonts } from 'hooks/useFonts'

import { fonts } from 'utils/constants'

export const useSetupFonts = () => {
  const [loaded, error] = useFonts({
    [fonts.headingFontBold]: require(`../../../assets/fonts/gtwalsheim/GTWalsheim-Bd.otf`),
    [fonts.paragraphFont]: require(`../../../assets/fonts/barlow/Barlow-Regular.ttf`),
    [fonts.paragraphFontMedium]: require(`../../../assets/fonts/barlow/Barlow-Medium.ttf`),
    [fonts.paragraphFontBold]: require(`../../../assets/fonts/barlow/Barlow-Bold.ttf`),

    [fonts.faProThin]: require(`../../../assets/fonts/fontawesome/FA6Pro-Thin-100.otf`),
    [fonts.faProLight]: require(`../../../assets/fonts/fontawesome/FA6Pro-Light-300.otf`),
    [fonts.faProRegular]: require(`../../../assets/fonts/fontawesome/FA6Pro-Regular-400.otf`),
    [fonts.faProSolid]: require(`../../../assets/fonts/fontawesome/FA6Pro-Solid-900.otf`),
    [fonts.faBrandsRegular]: require(`../../../assets/fonts/fontawesome/FA6Brands-Regular-400.otf`)
  })

  return [loaded, error]
}
