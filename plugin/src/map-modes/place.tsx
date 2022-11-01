import { PanelRow, TextControl, RangeControl, RadioControl } from '@wordpress/components';
import { MapSettings } from '../types';

const place = function ({ attributes, setAttributes }: { attributes: MapSettings, setAttributes: (atts: Partial<MapSettings>) => void }) {
  return (
    <>
      <PanelRow>
        <TextControl
          label="Query"
          help={ <span>Defines the map marker's location. If necessary, a <a href="https://developers.google.com/maps/documentation/places/web-service/place-id#find-id" target="_blank" rel="noopener noreferrer"><strong>Google Maps Place ID</strong></a> can be used to target a specific location.</span> }
          value={ attributes.q }
          onChange={ ( q ) => setAttributes({ q }) }
        />
      </PanelRow>
      <PanelRow>
        <RangeControl
          label="Zoom"
          help="Sets the initial zoom level of the map."
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
    </>
  );
};

export default place;