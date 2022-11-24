import React from 'react'
import { StyleSheet } from 'react-native'

import { Box } from 'components/atoms/Box'

import { Mapbox } from '../lib'
import type { MapViewProps } from './MapView.types'

// Todo - set the access token from constants
Mapbox.setAccessToken('')

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

export const MapView = ({ onMapLoaded, onMapMove, width = '100%', height = 400 }: MapViewProps) => {
  const onRegionChange = () => {}

  // Todo (future) - Move the styleUrl to a constants
  return (
    <Box width={width} height={height}>
      <Mapbox.MapView
        style={styles.map}
        localizeLabels
        // Todo - Add your own styleURL from mapbox
        // styleURL='mapbox://styles/example/style_id_here'
        zoomEnabled
        onRegionIsChanging={onRegionChange}
      />
    </Box>
  )
}
