import { ComponentPropsWithRef } from 'types/react'

import { Stack } from '../Stack'

type VStackProps = ComponentPropsWithRef<typeof Stack>

export const VStack = ({ children, ...props }: VStackProps) => {
  return (
    <Stack flexDirection='column' {...props}>
      {children}
    </Stack>
  )
}
