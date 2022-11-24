import { slate, whiteSmoke } from 'utils/constants/pallet'

export const hexToGrayscale = (hex: string) => {
  const rgb = hexToRGB(hex)
  if (!rgb) return null

  const { r, g, b } = rgb
  const grayscale = Math.round(0.299 * r + 0.587 * g + 0.114 * b)

  return rgbToHex(grayscale, grayscale, grayscale)
}

const hexToRGB = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return null

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }
}

const rgbToHex = (r: number, g: number, b: number) => {
  let red = r.toString(16)
  let green = g.toString(16)
  let blue = b.toString(16)

  if (red.length === 1) red = `0${red}`
  if (green.length === 1) green = `0${green}`
  if (blue.length === 1) blue = `0${blue}`

  return `#${red}${green}${blue}`
}

// Go lighter
export const computeTint = (hexColor: string, tintFactor = 0.25) => {
  const rgb = hexToRGB(hexColor)
  if (!rgb) return null

  const { r, g, b } = rgb

  const rTint = Math.round(r + (255 - r) * tintFactor)
  const gTint = Math.round(g + (255 - g) * tintFactor)
  const bTint = Math.round(b + (255 - b) * tintFactor)

  return rgbToHex(rTint, gTint, bTint)
}

export const computeShade = (hexColor: string, shadeFactor = 0.075) => {
  const rgb = hexToRGB(hexColor)
  if (!rgb) return null

  const { r, g, b } = rgb
  const rShade = Math.round(r * (1 - shadeFactor))
  const gShade = Math.round(g * (1 - shadeFactor))
  const bShade = Math.round(b * (1 - shadeFactor))
  const shadeHex = rgbToHex(rShade, gShade, bShade)
  return shadeHex
}

export const computeForeground = (hexColor: string) => {
  const rgb = hexToRGB(hexColor)
  if (!rgb) return null

  const { r, g, b } = rgb
  const yiq = (r * 299 + g * 587 + b * 114) / 1000

  return yiq >= 128 ? slate : whiteSmoke
}
