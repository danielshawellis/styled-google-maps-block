import { PanelRow, BaseControl, TextControl, RangeControl, RadioControl } from '@wordpress/components';
import { MapSettings } from '../types';

const view = function ({ attributes, setAttributes }: { attributes: MapSettings, setAttributes: (atts: Partial<MapSettings>) => void }) {
  return (
    <>
      <PanelRow>
        <BaseControl 
          label="Center" 
          help={ <span>The longitude and latitude respectively of the center of the map. Open <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer"><strong>Google Maps</strong></a> and right click on any point to see its coordinates in decimal format.</span> } 
          id="center-control"
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              value={ parseFloat(attributes.center.split(',')[0]) } 
              onChange={ (event) => setAttributes({ center: `${event.target.value},${parseFloat(attributes.center.split(',')[1])}` }) } 
              type="number" 
              step={0.00001}
              min={-90}
              max={90}
              style={{ display: 'block', width: '100%', borderRadius: '2px' }}
            />
            <input 
              value={ parseFloat(attributes.center.split(',')[1]) } 
              onChange={ (event) => setAttributes({ center: `${parseFloat(attributes.center.split(',')[0])},${event.target.value}` }) } 
              type="number" 
              step={0.00001}
              min={-180}
              max={180}
              style={{ display: 'block', width: '100%', borderRadius: '2px' }}
            />
          </div>
        </BaseControl>
      </PanelRow>
      <PanelRow>
        <RangeControl
          label="Zoom"
          help="Sets the initial zoom level of the map. One displays the world, ten displays an entire city, and twenty displays individual buildings."
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

export default view;