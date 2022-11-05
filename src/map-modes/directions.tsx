import { PanelRow, TextControl, RangeControl, RadioControl } from '@wordpress/components';
import { MapSettings } from '../types';

const directions = function ({ attributes, setAttributes }: { attributes: MapSettings, setAttributes: (atts: Partial<MapSettings>) => void }) {
  return (
    <>
      <PanelRow>
        <TextControl
          label="Origin"
          help={ <span>Defines the starting point from which to display directions. If necessary, a <a href="https://developers.google.com/maps/documentation/places/web-service/place-id#find-id" target="_blank" rel="noopener noreferrer"><strong>Google Maps Place ID</strong></a> prefixed with <strong>place_id:</strong> can be used to target a specific location.</span> }
          value={ attributes.origin }
          onChange={ ( origin ) => setAttributes({ origin }) }
        />
      </PanelRow>
      <PanelRow>
        <TextControl
          label="Destination"
          help={ <span>Defines the end point of the directions. If necessary, a <a href="https://developers.google.com/maps/documentation/places/web-service/place-id#find-id" target="_blank" rel="noopener noreferrer"><strong>Google Maps Place ID</strong></a> prefixed with <strong>place_id:</strong> can be used to target a specific location.</span> }
          value={ attributes.destination }
          onChange={ ( destination ) => setAttributes({ destination }) }
        />
      </PanelRow>
      <PanelRow>
        <RadioControl
          label="Mode"
          help="Defines the method of travel."
          selected={ attributes.mode }
          options={ [
            { label: 'Driving', value: 'driving' },
            { label: 'Walking', value: 'walking' },
            { label: 'Bicycling', value: 'bicycling' },
            { label: 'Transit', value: 'transit' },
            { label: 'Flying', value: 'flying' },
          ] }
          onChange={ ( mode: MapSettings['mode'] ) => setAttributes({ mode }) }
        />
      </PanelRow>
      <PanelRow>
        <RangeControl
          label="Zoom"
          help="Sets initial zoom level of the map."
          value={ attributes.zoom }
          onChange={ ( zoom ) => setAttributes({ zoom }) }
          min={ 1 }
          max={ 21 }
        />
      </PanelRow>
      <PanelRow>
        <RadioControl
          label="Map Type"
          help="Defines the type of map tiles to load."
          selected={ attributes.maptype }
          options={ [
            { label: 'Roadmap', value: 'roadmap' },
            { label: 'Satellite', value: 'satellite' },
          ] }
          onChange={ ( maptype: MapSettings['maptype'] ) => setAttributes({ maptype }) }
        />
      </PanelRow>
      <PanelRow>
        <RadioControl
          label="Units"
          help="Specifies measurement method when displaying distances in the results."
          selected={ attributes.units }
          options={ [
            { label: 'Default', value: '' },
            { label: 'Metric', value: 'metric' },
            { label: 'Imperial', value: 'imperial' },
          ] }
          onChange={ ( units: MapSettings['units'] ) => setAttributes({ units }) }
        />
      </PanelRow>
    </>
  );
};

export default directions;