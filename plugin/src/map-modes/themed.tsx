import { PanelRow, BaseControl, TextareaControl, RadioControl, RangeControl, CheckboxControl, FormFileUpload, Button } from '@wordpress/components';

import { MapSettings } from '../types';

import standard from '../themes/standard.json';
import silver from '../themes/silver.json';
import retro from '../themes/retro.json';
import dark from '../themes/dark.json';
import night from '../themes/night.json';
import aubergine from '../themes/aubergine.json';

// @ts-ignore
import standardImage from '../images/standard.png';
// @ts-ignore
import silverImage from '../images/silver.png';
// @ts-ignore
import retroImage from '../images/retro.png';
// @ts-ignore
import darkImage from '../images/dark.png';
// @ts-ignore
import nightImage from '../images/night.png';
// @ts-ignore
import aubergineImage from '../images/aubergine.png';

const themes = [
  {
    name: "Standard",
    image: standardImage,
    styles: standard
  },
  {
    name: "Silver",
    image: silverImage,
    styles: silver
  },
  {
    name: "Retro",
    image: retroImage,
    styles: retro
  },
  {
    name: "Dark",
    image: darkImage,
    styles: dark
  },
  {
    name: "Night",
    image: nightImage,
    styles: night
  },
  {
    name: "Aubergine",
    image: aubergineImage,
    styles: aubergine
  }
];

const readFile = async (file: File): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader();  
  reader.onload = (event) => resolve(event.target.result as string); // Since the file upload accepts only JSON, assume that this is a string
  reader.onerror = reject;
  reader.readAsText(file);
});

const themed = function ({ attributes, setAttributes }: { attributes: MapSettings, setAttributes: (atts: Partial<MapSettings>) => void }) {
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
        <BaseControl 
          label="Select a Basic Theme" 
          help="Select from this list of basic map themes or create your own theme below."
          id="theme-select"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            { themes.map(theme => (
              <div style={{ border: "1px solid rgb(224, 224, 224)", cursor: "pointer" }} onClick={ () => setAttributes({ styles: JSON.stringify( theme.styles ) }) }>
                <img src={ theme.image } style={{ display: 'block', borderBottom: "1px solid rgb(224, 224, 224)" }}/>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <label style={{ padding: '4px', marginRight: 0 }}>{ theme.name }</label>
                </div>
              </div>
            )) }
          </div>
        </BaseControl>
      </PanelRow>
      <PanelRow>
        <TextareaControl
          label="Use a JSON-Based Theme"
          help={ <span>Create your own map theme with <a href="https://mapstyle.withgoogle.com/" target="_blank" rel="noopener noreferrer"><strong>Google's Map Styling Wizard</strong></a> or choose from thousands of pre-made themes on <a href="https://snazzymaps.com/" target="_blank" rel="noopener noreferrer"><strong>Snazzy Maps</strong></a>.</span> }
          value={ attributes.styles }
          onChange={ (styles) => setAttributes({ styles }) }
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
        <CheckboxControl
          label="UI Visibility"
          help="Sets the visibility of the UI components in a themed map."
          checked={ attributes.uivisibility }
          onChange={ ( uivisibility: MapSettings['uivisibility'] ) => setAttributes({ uivisibility }) }
        />
      </PanelRow>
      <PanelRow>
        <CheckboxControl
          label="Marker Visibility"
          help="Sets the visibility of the location marker in a themed map."
          checked={ attributes.markervisibility }
          onChange={ ( markervisibility: MapSettings['markervisibility'] ) => setAttributes({ markervisibility }) }
        />
      </PanelRow>
      <PanelRow>
        <RadioControl
          label="Themed Map Type"
          help={ <span>Defines the type of map tiles to load. Some styles may not be applied when <strong>Hybrid</strong> or <strong>Satellite</strong> are selected.</span> }
          selected={ attributes.themedmaptype }
          options={ [
            { label: 'Roadmap', value: 'roadmap' },
            { label: 'Satellite', value: 'satellite' },
            { label: 'Hybrid', value: 'hybrid' },
            { label: 'Terrain', value: 'terrain' }
          ] }
          onChange={ ( themedmaptype: MapSettings['themedmaptype'] ) => setAttributes({ themedmaptype }) }
        />
      </PanelRow>
    </>
  );
};

export default themed;