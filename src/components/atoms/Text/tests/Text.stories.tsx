import React from 'react'

import { ComponentMeta, ComponentStory } from 'utils/storybook'

import { Text as TextComponent } from '../Text'

export default {
  title: 'Atoms/Text',
  component: TextComponent,
  argTypes: {
    children: {
      control: false
    }
  },
  parameters: { controls: { sort: 'requiredFirst' } }
} as ComponentMeta<typeof TextComponent>

const Template: ComponentStory<typeof TextComponent> = (args) => <TextComponent {...args} />

export const Text = Template.bind({})
Text.args = {
  size: 'md',
  color: 'primary',
  weight: 'normal',
  children: <>Welcome to the Starter</>
}
