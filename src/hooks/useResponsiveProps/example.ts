// ResponsiveProp types
type ResponsiveKey = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'

export type ResponsiveProp<T> = Record<ResponsiveKey, T>

// Box types
export interface BoxProps {
  children: JSX.Element
  style: Record<string, unknown>
  height: ResponsiveProp<number>
  width: ResponsiveProp<string>
}

// getResponsiveProps types; need to extend this a bit further
type FinalResponsiveProps<PropsType> = {
  [Key in keyof PropsType]: PropsType[Key] extends ResponsiveProp<unknown>
    ? PropsType[Key]['xxs']
    : PropsType[Key]
}

// Dont worry about this function
const isResponsiveProp = <T>(prop: T | ResponsiveProp<T>): prop is ResponsiveProp<T> => {
  if (!prop || typeof prop !== 'object') return false

  return 'xxs' in prop
}

// export const getResponsiveProps = <T>(responsiveProps: T): FinalResponsiveProps<T> =>
//   Object.entries(responsiveProps).reduce((acc, [key, value]) => {
//     // Dont worry about this, just need the type to be T
//     const trueValue = isResponsiveProp(value) ? value.xxs : value

//     return {
//       ...acc,
//       [key]: trueValue
//     }
//   }, {} as FinalResponsiveProps<T>)
