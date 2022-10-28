type MapBaseSettings = {
  key: string,
  height: string,
}

type PlaceMapMode = {
  q: string
  center?: string,
  zoom?: number,
  maptype?: 'roadmap' | 'satellite',
  language?: string,
  region?: string
}

type ViewMapMode = {
  center: string,
  zoom?: number,
  maptype?: 'roadmap' | 'satellite',
  language?: string,
  region?: string
}

type DirectionsMapMode = {
  origin: 'string',
  destination: 'string',
  waypoints?: string,
  mode?: 'driving' | 'walking' | 'bicycling' | 'transit' | 'flying'
  avoid?: string,
  units?: 'metric' | 'imperial',
  center?: string,
  zoom?: number,
  maptype?: 'roadmap' | 'satellite',
  language?: string,
  region?: string
}

type StreetviewMapMode = {
  location?: string,
  pano?: string,
  heading?: number,
  pitch?: number,
  fov?: number,
  center?: string,
  zoom?: number,
  maptype?: 'roadmap' | 'satellite',
  language?: string,
  region?: string
}

type SearchMapMode = {
  q: string
  center?: string,
  zoom?: number,
  maptype?: 'roadmap' | 'satellite',
  language?: string,
  region?: string
}

export type MapMode = PlaceMapMode | ViewMapMode | DirectionsMapMode | StreetviewMapMode | SearchMapMode

// export type MapSettings = MapBaseSettings & MapMode

export type MapSettings = {
  key: string,
  height: string,
  mapmode: 'place'| 'view'| 'directions'| 'streetview'| 'search',
  q: string,
  center: string,
  zoom: number,
  maptype: 'roadmap' | 'satellite',
  language: string,
  region: string,
  origin: 'string',
  destination: 'string',
  waypoints: string,
  mode: 'driving' | 'walking' | 'bicycling' | 'transit' | 'flying',
  avoid: string,
  units: 'metric' | 'imperial',
  location: string,
  pano: string,
  heading: number,
  pitch: number,
  fov: number,
  styles: {
    featureType?: string
    elementType?: string,
    stylers: Record<'hue' | 'lightness' | 'saturation' | 'gamma' | 'invert_lightness' | 'visibility' | 'color' | 'weight', string>
  }[]
}