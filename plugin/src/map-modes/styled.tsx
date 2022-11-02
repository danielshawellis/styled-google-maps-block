import { PanelRow, BaseControl, TextareaControl, RadioControl, RangeControl, CheckboxControl } from '@wordpress/components';
import { MapSettings } from '../types';

const styled = function ({ attributes, setAttributes }: { attributes: MapSettings, setAttributes: (atts: Partial<MapSettings>) => void }) {
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
          help="Sets initial zoom level of the map."
          value={ attributes.zoom }
          onChange={ ( zoom ) => setAttributes({ zoom }) }
          min={ 1 }
          max={ 21 }
        />
      </PanelRow>
      <PanelRow>
        <TextareaControl
          label="JSON-based Styles"
          help={ <div>
            <p>To generate map styles, open the <a href="https://mapstyle.withgoogle.com/" target="_blank" rel="noopener noreferrer"><strong>Google Maps Styling Wizard</strong></a>, click <strong>use the legacy JSON styling wizard</strong>, create your styles, click <strong>Finish</strong>, and then click <strong>Copy JSON</strong>. Paste copied the JSON above.</p>
            <p>A large number of pre-made styles are also available on <a href="https://snazzymaps.com/"><strong>Snazzy Maps</strong></a>. To use them, select a map, click <strong>Expand Code</strong>, copy the JSON code, and paste it above.</p>
          </div> }
          value={ attributes.styles }
          onChange={ (styles) => setAttributes({ styles }) }
        />
      </PanelRow>
      <PanelRow>
        <RadioControl
          label="Styled Map Type"
          help={ <span>Defines the type of map tiles to load. Some styles may not be applied when <strong>Hybrid</strong> or <strong>Satellite</strong> are selected.</span> }
          selected={ attributes.styledmaptype }
          options={ [
            { label: 'Roadmap', value: 'roadmap' },
            { label: 'Satellite', value: 'satellite' },
            { label: 'Hybrid', value: 'hybrid' },
            { label: 'Terrain', value: 'terrain' }
          ] }
          onChange={ ( styledmaptype: MapSettings['styledmaptype'] ) => setAttributes({ styledmaptype }) }
        />
      </PanelRow>
      <PanelRow>
        <CheckboxControl
          label="UI Visibility"
          help="Sets the visibility of the UI components in a styled map."
          checked={ attributes.uivisibility }
          onChange={ ( uivisibility: MapSettings['uivisibility'] ) => setAttributes({ uivisibility }) }
        />
      </PanelRow>
      <PanelRow>
        <CheckboxControl
          label="Marker Visibility"
          help="Sets the visibility of the location marker in a styled map."
          checked={ attributes.markervisibility }
          onChange={ ( markervisibility: MapSettings['markervisibility'] ) => setAttributes({ markervisibility }) }
        />
      </PanelRow>
    </>
  );
};

export default styled;