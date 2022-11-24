import React, { useEffect, useRef, useState } from 'react'

import { Mapbox } from '../lib/Mapbox.web'
import type { MapViewProps } from './MapView.types'

Mapbox.accessToken =
  'pk.eyJ1IjoiZXhwbG9yZWhlcmUiLCJhIjoiY2wwcHEzM2tjMjJtMTNqczVleGpxdGk4YyJ9.HxpE7ceCcve2VA7CTYumnQ'

export const MapView = ({ onMapLoaded, onMapMove, width = '100%', height = 400 }: MapViewProps) => {
  const mapNode = useRef(null)
  const [map, setMap] = useState<mapboxgl.Map>()

  const [lng, setLng] = useState(-118.2923)
  const [lat, setLat] = useState(36.5785)
  const [zoom, setZoom] = useState(9)
  const [bearing, setBearing] = useState(90)
  const [pitch, setPitch] = useState(45)

  useEffect(() => {
    const node = mapNode.current
    if (typeof window === 'undefined' || node === null) return undefined

    const mapboxMap = new Mapbox.Map({
      container: node,
      // Todo - define your own mapbox style
      style: 'mapbox://styles/',
      center: [lng, lat],
      zoom,
      pitch,
      bearing
    })

    mapboxMap.addControl(
      new Mapbox.NavigationControl({
        visualizePitch: true,
        showCompass: true,
        showZoom: true
      }),
      'top-right'
    )
    mapboxMap.addControl(new Mapbox.FullscreenControl())
    mapboxMap.addControl(
      new Mapbox.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      }),
      'top-left'
    )
    mapboxMap.addControl(new Mapbox.ScaleControl({ maxWidth: 80, unit: 'imperial' }))

    const markerHeight = 50
    const markerRadius = 10
    const linearOffset = 25
    const popupOffsets = {
      top: [0, 0],
      'top-left': [0, 0],
      'top-right': [0, 0],
      bottom: [0, -markerHeight],
      'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
      'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
      left: [markerRadius, (markerHeight - markerRadius) * -1],
      right: [-markerRadius, (markerHeight - markerRadius) * -1]
    }

    const popup = new Mapbox.Popup({
      offset: popupOffsets as any,
      className: 'my-class'
    })
      .setLngLat({
        lat,
        lng
      })
      .setHTML('<h1>Hello World!</h1>')
      .setMaxWidth('300px')
      .addTo(mapboxMap)

    const marker = new Mapbox.Marker({
      color: '#FFFFFF',
      draggable: true
    })
      .setLngLat({ lat, lng })
      .addTo(mapboxMap)

    mapboxMap.on('load', () => {
      mapboxMap.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2'
      })
    })

    setMap(mapboxMap)

    return () => {
      mapboxMap.remove()
    }

    // For Mapbox, we never want to reinitialize the map
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Setup map listeners
  useEffect(() => {
    if (!map) return

    if (onMapLoaded) map.once('load', onMapLoaded)

    map.on('move', () => {
      const center = map.getCenter()
      const latitude = center.lat
      const longitude = center.lng
      const currentZoom = map.getZoom()
      const currentBearing = map.getBearing()
      const currentPitch = map.getPitch()

      if (onMapMove)
        onMapMove({
          lat: latitude,
          lng: longitude,
          zoom: currentZoom,
          bearing: currentBearing,
          pitch: currentPitch
        })

      setLng(longitude)
      setLat(latitude)
      setZoom(currentZoom)
      setBearing(currentBearing)
      setPitch(currentPitch)
    })
  }, [map, onMapLoaded, onMapMove])

  return (
    <>
      <div ref={mapNode} style={{ width, height }} />
    </>
  )
}
