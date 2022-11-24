import React from 'react'

import { ComponentMeta, ComponentStory } from 'utils/storybook'

import { Icon as IconCompnent } from '../Icon'

export default {
  title: 'Atoms/Icon',
  component: IconCompnent,
  argTypes: {
    style: {
      control: false
    }
  }
} as ComponentMeta<typeof IconCompnent>

const Template: ComponentStory<typeof IconCompnent> = (args) => <IconCompnent {...args} />

export const Icon = Template.bind({})
Icon.args = {
  name: 'heart',
  color: 'primary',
  size: 'md',
  weight: 'regular'
}
