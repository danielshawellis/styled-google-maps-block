import { PanelRow, TextControl, RangeControl, RadioControl } from '@wordpress/components';
import { MapSettings } from '../types';

const search = function ({ attributes, setAttributes }: { attributes: MapSettings, setAttributes: (atts: Partial<MapSettings>) => void }) {
  return (
    <>
      <PanelRow>
        <TextControl
          label="Query"
          help={ <span>Defines the search term, which can include a geographic restriction such as <strong>in Seattle</strong> or <strong>near 98033</strong>. If no geographic restrictions are applied, the end user's location will be preferred.</span> }
          value={ attributes.q }
          onChange={ ( q ) => setAttributes({ q }) }
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
    </>
  );
};

export default search;