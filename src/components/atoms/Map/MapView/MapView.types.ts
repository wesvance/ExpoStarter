export type MapViewProps = {
  onMapLoaded?: () => void
  onMapMove?: (data: MapLocation) => void
  width?: string | number
  height?: string | number
}

type MapLocation = {
  lat: number
  lng: number
  zoom: number
  bearing: number
  pitch: number
}
