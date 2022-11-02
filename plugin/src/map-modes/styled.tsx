import { PanelRow, TextareaControl, RadioControl, RangeControl, CheckboxControl } from '@wordpress/components';
import { MapSettings } from '../types';

const styled = function ({ attributes, setAttributes }: { attributes: MapSettings, setAttributes: (atts: Partial<MapSettings>) => void }) {
  return (
    <>
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
    </>
  );
};

export default styled;