import { ComponentPropsWithRef } from 'types/react'

import { Stack } from '../Stack'

type HStackProps = ComponentPropsWithRef<typeof Stack>

export const HStack = ({ children, ...props }: HStackProps) => {
  return (
    <Stack flexDirection='row' {...props}>
      {children}
    </Stack>
  )
}
