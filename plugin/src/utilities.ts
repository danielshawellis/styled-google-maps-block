import memoize from 'memoize-one';
import { Loader as GoogleMapsLoader } from "@googlemaps/js-api-loader";
import { MapSettings } from './types';

const constructUrl = (acceptedParameters: (keyof Omit<MapSettings, 'mapmode' | 'height' | 'styles' | 'uivisibility' | 'markervisibility'>)[], atts: Readonly<MapSettings>): string => {
  const url = new URL(`https://www.google.com/maps/embed/v1/${ atts.mapmode }`);
  acceptedParameters.forEach(parameter => {
    const value = atts[parameter];
    if (value !== '') url.searchParams.append(parameter, typeof value === 'number' ? value.toString() : value);
  });
  return url.href;
};

export const getMapUrl = (atts: Readonly<MapSettings>): string => {
  switch (atts.mapmode) {
    case 'place': return constructUrl(['key', 'q', 'zoom', 'maptype', 'language', 'region'], atts);
    case 'view': return constructUrl(['key', 'center', 'zoom', 'maptype', 'language', 'region'], atts);
    case 'directions': return constructUrl(['key', 'origin', 'destination', 'mode', 'units', 'zoom', 'maptype', 'language', 'region'], atts);
    case 'streetview': return constructUrl(['key', 'location', 'pano', 'heading', 'pitch', 'fov', 'language', 'region'], atts);
    case 'search': return constructUrl(['key', 'q', 'zoom', 'maptype', 'language', 'region'], atts);
  };
};

export const getMapObject = memoize((apiKey: string, element: HTMLElement) => new GoogleMapsLoader({ apiKey }).load()
  .then(() => new google.maps.Map(element)));

export const initializeMap = (map: google.maps.Map, atts: Readonly<MapSettings>) => {
  // Define the position of the center of the map
  const center = { lat: parseFloat(atts.center.split(',')[0]), lng: parseFloat(atts.center.split(',')[1]) };

  // Set the base options and styles
  map.setOptions({
    center,
    zoom: atts.zoom,
    mapTypeId: atts.styledmaptype,
    disableDefaultUI: !atts.uivisibility,
    styles: JSON.parse(atts.styles)
  });
};