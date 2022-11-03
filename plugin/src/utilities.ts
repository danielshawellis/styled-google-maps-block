import memoizeOne from 'memoize-one';
import { Loader as GoogleMapsLoader } from "@googlemaps/js-api-loader";
import { MapSettings } from './types';

interface MarkersMap extends google.maps.Map {
  markers?: google.maps.Marker[];
};

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

const loadScript = memoizeOne((url: string): Promise<HTMLScriptElement> => new Promise((resolve, reject) => {
  // Create the script element and set its source
  const script = document.createElement('script');
  script.async = true;
  script.setAttribute('src', url);

  // Connect the load and error events to the promise
  script.onload = () => resolve(script);
  script.onerror = reject;

  // Load the script into the DOM
  document.body.appendChild(script);
}));

export const getMapObject = memoizeOne(async (apiKey: string, element: HTMLElement, language: string, region: string) => {
  // Delete the Google Maps object from the window if it exists
  if (window?.google?.maps) console.warn('The google.maps window property was reset. This is normal in the editor, but it can break other Google maps integrations.');

  // Load the new script into the DOM, deleting out any existing identical scripts
  const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}${language ? '&language=' + language : ''}${region ? '&region=' + region : ''}`;
  await loadScript(scriptUrl);

  // Use the newly loaded script to create a map object
  return new window.google.maps.Map(element);
});

export const initializeMap = (map: MarkersMap, atts: Readonly<MapSettings>) => {
  // Define the position of the center of the map
  const center = { lat: parseFloat(atts.center.split(',')[0]), lng: parseFloat(atts.center.split(',')[1]) };

  // Set the base options and styles
  map.setOptions({
    center,
    zoom: atts.zoom,
    mapTypeId: atts.themedmaptype,
    disableDefaultUI: !atts.uivisibility,
    styles: JSON.parse(atts.styles)
  });

  // Remove any existing markers
  if (Array.isArray(map.markers)) {
    map.markers.forEach(marker => marker.setMap(null));
    map.markers = undefined;
  }

  // Add a new marker to the center of the map if necessary
  if (atts.markervisibility) {
    const marker = new google.maps.Marker({ 
      position: center, 
      map,
    });
    map.markers = [ ...(map.markers ?? []), marker ];
  };
};