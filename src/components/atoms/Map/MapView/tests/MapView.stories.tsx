import React from 'react'

import { ComponentMeta, ComponentStory } from 'utils/storybook'

import { MapView as MapViewComponent } from '../MapView.web'

export default {
  title: 'Atoms/Map/Map View',
  component: MapViewComponent
} as ComponentMeta<typeof MapViewComponent>

const Template: ComponentStory<typeof MapViewComponent> = (args) => <MapViewComponent {...args} />

export const MapView = Template.bind({})
MapView.args = {
  width: '100%',
  height: 400
}
