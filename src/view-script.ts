import { getMapObject, initializeMap } from "./utilities";
import { MapSettings } from './types';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('div.google-maps-gutenberg-block').forEach((element) => {
    const attributes = JSON.parse((element as HTMLDivElement).dataset.attributes) as MapSettings;
    getMapObject(attributes.key, element as HTMLDivElement, attributes.language, attributes.region).then(map => initializeMap(map, attributes));
  })
});