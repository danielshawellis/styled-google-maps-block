import { PanelRow, Dropdown, Button, BaseControl, TextControl, RangeControl } from '@wordpress/components';
import { MapSettings } from '../types';
import { useState } from 'react';

const streetview = function ({ attributes, setAttributes }: { attributes: MapSettings, setAttributes: (atts: Partial<MapSettings>) => void }) {
  const [panoramaUrl, setPanoramaUrl] = useState("");

  const panoramaIdFinder = <div style={{ minWidth: '320px', padding: '10px' }}>
    <p><strong>How to find the ID of a Google Maps panorama:</strong></p>
    <ol>
      <li>Open the panorama within Google Maps in a web browser.</li>
      <li>Copy the URL of the page and paste it into the text <strong>Panorama URL</strong> input below.</li>
      <li>The panorama's ID will appear in the <strong>Panorama ID</strong> input below.</li>
    </ol>
    <div style={{ display: 'flex', gap: '8px' }}>
      <TextControl
        label="Panorama URL"
        value={ panoramaUrl }
        onChange={ ( url ) => setPanoramaUrl( url ) }
      />
      <TextControl
        label="Panorama ID"
        value={ (panoramaUrl.includes("!1s") && panoramaUrl.includes("!2e")) ? panoramaUrl.split("!1s")[1].split("!2e")[0].replace(/%2F/g,'/') : "" }
        onChange={ ( id ) => {} }
      />
    </div>
  </div>;
  
  return (
    <>
      <PanelRow>
        <BaseControl 
          label="Location" 
          help={ <span>The longitude and latitude respectively of the location of the street view. Open <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer"><strong>Google Maps</strong></a> and right click on any point to see its coordinates in decimal format.</span> } 
          id="location-control"
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              value={ parseFloat(attributes.location.split(',')[0]) } 
              onChange={ (event) => setAttributes({ location: `${event.target.value},${parseFloat(attributes.location.split(',')[1])}` }) } 
              type="number" 
              step={0.00001}
              min={-90}
              max={90}
              style={{ display: 'block', width: '100%', borderRadius: '2px' }}
            />
            <input 
              value={ parseFloat(attributes.location.split(',')[1]) } 
              onChange={ (event) => setAttributes({ location: `${parseFloat(attributes.location.split(',')[0])},${event.target.value}` }) } 
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
        <TextControl
          label="Panorama ID"
          help={ <div>
            <p>The ID of a specific Google Maps panorama. If you specify a panorama ID you may also specify a location. The location will be only be used if the API cannot find the panorama ID.</p>
            <Dropdown
              renderToggle={ ( { isOpen, onToggle } ) => (
                <Button
                  variant="primary"
                  onClick={ onToggle }
                  aria-expanded={ isOpen }
                >
                  How to Find a Panorama's Id
                </Button>
              ) }
              renderContent={ () => panoramaIdFinder }
            />
          </div> }
          value={ attributes.pano }
          onChange={ ( pano ) => setAttributes({ pano }) }
        />
      </PanelRow>
      <PanelRow>
        <RangeControl
          label="Heading"
          help="Indicates the compass heading of the camera in degrees clockwise from North."
          value={ attributes.heading }
          onChange={ ( heading ) => setAttributes({ heading }) }
          min={ -180 }
          max={ 360 }
        />
      </PanelRow>
      <PanelRow>
        <RangeControl
          label="Pitch"
          help="Specifies the angle, up or down, of the camera. Positive values will angle the camera up, while negative values will angle the camera down. The default pitch of 0° is set based on on the position of the camera when the image was captured. Because of this, a pitch of 0° is often, but not always, horizontal. For example, an image taken on a hill will likely exhibit a default pitch that is not horizontal."
          value={ attributes.pitch }
          onChange={ ( pitch ) => setAttributes({ pitch }) }
          min={ -90 }
          max={ 90 }
        />
      </PanelRow>
      <PanelRow>
        <RangeControl
          label="Field of View"
          help="Determines the horizontal field of view of the image. It defaults to 90°. When dealing with a fixed-size viewport the field of view is can be considered the zoom level, with smaller numbers indicating a higher level of zoom."
          value={ attributes.fov }
          onChange={ ( fov ) => setAttributes({ fov }) }
          min={ 10 }
          max={ 100 }
        />
      </PanelRow>
    </>
  );
};

export default streetview;