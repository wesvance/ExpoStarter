import { useWindow } from 'contexts/window'

import { Breakpoints, ResponsiveProp } from 'utils/theme'

export const useResponsiveProp = <T>(prop?: ResponsiveProp<T>): T | undefined => {
  const { breakpoint } = useWindow()

  const { index } = breakpoint

  if (!prop || prop === undefined) {
    return prop
  }

  if (
    typeof prop !== 'object' ||
    (!('xss' in prop) &&
      !('xs' in prop) &&
      !('sm' in prop) &&
      !('md' in prop) &&
      !('lg' in prop) &&
      !('xl' in prop) &&
      !('xxl' in prop))
  ) {
    return prop as T
  }

  if (Array.isArray(prop)) {
    if (index > prop.length - 1) return prop[prop.length - 1]
    return prop[breakpoint?.index]
  }

  const exampleObject = {
    none: undefined,
    xxs: undefined,
    xs: undefined,
    sm: undefined,
    md: undefined,
    lg: undefined,
    xl: undefined,
    xxl: undefined
  }

  const finalObject = { ...exampleObject, ...prop }
  const finalObjectKeys = Object.keys(finalObject) as Breakpoints[]
  finalObjectKeys.forEach((_key, exampleIndex) => {
    // If index === 0, do nothing
    if (!exampleIndex) return

    const isPreviousSame =
      finalObject[finalObjectKeys[exampleIndex]] === finalObject[finalObjectKeys[exampleIndex - 1]]

    const isCurrentNullOrUndefined =
      finalObject[finalObjectKeys[exampleIndex]] === null ||
      finalObject[finalObjectKeys[exampleIndex]] === undefined

    // If the previous isnt the same, and the current is null; then fill it in with the previous value!
    if (!isPreviousSame && isCurrentNullOrUndefined) {
      finalObject[finalObjectKeys[exampleIndex]] = finalObject[finalObjectKeys[exampleIndex - 1]]
    }
  })

  const propKeys = Object.keys(prop) as Breakpoints[]

  // Otherwise, if the index > lastPropIndex; then return the lastProp
  const lastPropIndex = Object.keys(exampleObject).indexOf(propKeys[propKeys?.length - 1])
  if (index > lastPropIndex) return prop[propKeys[propKeys?.length - 1]]

  return finalObject[breakpoint?.readable]
}
