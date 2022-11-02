import { getMapObject, initializeMap } from "./utilities";

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.google-maps-gutenberg-block').forEach(element => {
    const attributes = JSON.parse(element.dataset.attributes);
    getMapObject(attributes.key, element as HTMLDivElement).then(map => initializeMap(map, attributes));
  })
});