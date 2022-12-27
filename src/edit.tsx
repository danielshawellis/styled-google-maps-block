// Import core WordPress and React dependencies
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, Dropdown, Button, BaseControl, TextControl, RadioControl, ComboboxControl } from '@wordpress/components';
import { useFocusableIframe } from '@wordpress/compose';
import { BlockEditProps } from '@wordpress/blocks';
import { useRef, useEffect } from 'react';

// Import utilities
import { getMapUrl, getMapObject, initializeMap } from './utilities';

// Import types
import { MapSettings } from './types';

// Import option templates for each map mode
import PlaceControls from './map-modes/place';
import ViewControls from './map-modes/view';
import DirectionsControls from './map-modes/directions';
import StreetviewControls from './map-modes/streetview';
import SearchControls from './map-modes/search';
import ThemedControls from './map-modes/themed';

// Import options for comboboxes
import languageOptions from './options/languages';
import regionOptions from './options/regions';

// Import styles
import './editor.scss';

// Define the block's interface in the editor
const edit: React.ComponentType<BlockEditProps<MapSettings>> = function ({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const iframeRef = useFocusableIframe() as React.LegacyRef<HTMLIFrameElement>;
	const containerRef = useRef<HTMLDivElement | null>(null);

	const apiKeyHelpInner = <div style={{ minWidth: '320px', padding: '10px' }}>
		<p><strong>Here's how to create your own API key:</strong></p>
		<ol>
			<li>Go to the <a href="https://console.cloud.google.com/project/_/google/maps-apis/credentials" target="_blank" rel="noopener noreferrer"><strong>Google Maps Platform &gt; Credentials</strong></a> page. If you haven't already, you may need to create an account and a Google Cloud project here.</li>
			<li>On the <strong>Credentials</strong> page, click <strong>Create credentials &gt; API key</strong>. The <strong>API key created</strong> dialog displays your newly created API key.</li>
			<li>Copy the new API key and paste it in the field above.</li>
			<li>Go to the <a href="https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com" target="_blank" rel="noopener noreferrer"><strong>Google Maps Embed API</strong></a> page, ensure that the correct project is selected, and click <strong>Enable</strong>.</li>
			<li>If you're using the <strong>themed</strong> map mode, go to the <a href="https://console.cloud.google.com/apis/library/maps-backend.googleapis.com" target="_blank" rel="noopener noreferrer"><strong>Google Maps JavaScript API</strong></a> page, ensure that the correct project is selected, and click <strong>Enable</strong>. This is a pay-as-you-go API, so be aware that <a href="https://developers.google.com/maps/documentation/javascript/usage-and-billing" target="_blank" rel="noopener noreferrer"><strong>you may incur charges</strong></a>.</li>
			<li>Optionally, you can <a href="https://developers.google.com/maps/documentation/embed/get-api-key#restrict_key" target="_blank" rel="noopener noreferrer"><strong>restrict your API keys</strong></a> to improve security. Google strongly recommends this.</li>
		</ol>
		<p><i>*Loading multiple maps with different API keys onto the same web page may cause errors.</i></p>
	</div>

	const apiKeyHelp = <div>
		<p>Please create your own API key before publishing a map. This is a Google requirement, and themed maps won't work without it.</p>
		<Dropdown
			renderToggle={ ( { isOpen, onToggle } ) => (
				<Button
					variant="primary"
					onClick={ onToggle }
					aria-expanded={ isOpen }
				>
					How to Create an API Key
				</Button>
			) }
			renderContent={ () => apiKeyHelpInner }
		/>		
	</div>;

	useEffect(() => {
		if (containerRef.current) getMapObject(attributes.key, containerRef.current, attributes.language, attributes.region)
			.then(map => initializeMap(map, attributes));
	});

	return (
		<>
			<div { ...blockProps }>
				{ attributes.mapmode === 'themed' ?
						attributes.key === 'AIzaSyCRspsEADhOoOF4c2LhYKu_IAB0orV9ExA' ?
							<section style={{ display: "flex", alignItems: "center", justifyContent: "center", height: `${attributes.height}px`, textAlign: 'center', backgroundColor: 'rgb(240, 240, 240)' }}><p style={{ padding: '20px' }}>You must set your own Google Maps API key and enable the Google Maps JavaScript API to use themed maps.</p></section> :
							<div className="styled-google-maps-block" ref={ containerRef } style={{ width: '100%', height: `${attributes.height}px` }} data-attributes={ JSON.stringify(attributes) } /> :
						<iframe ref={ iframeRef } src={ getMapUrl(attributes) } width="100%" height={ attributes.height } style={{ border: 0 }} allowFullScreen={ true } loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				}
			</div>

			<InspectorControls>
				<Panel>
					<PanelBody title="Settings" initialOpen={ true }>
						<PanelRow>
							<TextControl
								label="API Key"
								help={ apiKeyHelp }
								value={ attributes.key }
								onChange={ ( key ) => setAttributes({ key }) }
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl label="Height" help="The height in pixels of the Google Maps embed." id="height-input">
								<input 
									value={ attributes.height } 
									onChange={ (event) => setAttributes({ height: parseInt(event.target.value) }) } 
									type="number" 
									min={0}
									style={{ display: 'block', width: '100%', borderRadius: '2px' }}
								/>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<RadioControl
								label="Map Mode"
								help="The format of the map embed. A number of other settings are dependent on this one."
								selected={ attributes.mapmode }
								options={ [
									{ label: 'Place', value: 'place' },
									{ label: 'View', value: 'view' },
									{ label: 'Directions', value: 'directions' },
									{ label: 'Street View', value: 'streetview' },
									{ label: 'Search', value: 'search' },
									{ label: 'Themed', value: 'themed' },
								] }
								onChange={ ( mapmode: MapSettings['mapmode'] ) => setAttributes({ mapmode }) }
							/>
						</PanelRow>

						{ attributes.mapmode === 'place' && <PlaceControls attributes={ attributes } setAttributes={ setAttributes } /> }
						{ attributes.mapmode === 'view' && <ViewControls attributes={ attributes } setAttributes={ setAttributes } /> }
						{ attributes.mapmode === 'directions' && <DirectionsControls attributes={ attributes } setAttributes={ setAttributes } /> }
						{ attributes.mapmode === 'streetview' && <StreetviewControls attributes={ attributes } setAttributes={ setAttributes } /> }
						{ attributes.mapmode === 'search' && <SearchControls attributes={ attributes } setAttributes={ setAttributes } /> }
						{ attributes.mapmode === 'themed' && <ThemedControls attributes={ attributes } setAttributes={ setAttributes } /> }

						<PanelRow>
							<ComboboxControl
								label="Language"
								help={ <div>
									<p>Defines the language to use for UI elements and for the display of labels on map tiles. By default, visitors will see a map in their own language.</p>
									<p><i>*Loading multiple maps with different language settings onto the same web page may cause errors.</i></p>
								</div> }
								value={ attributes.language }
								onChange={ ( language ) => setAttributes({ language: language ?? '' }) }
								options={ languageOptions }
							/>
						</PanelRow>
						<PanelRow>
							<ComboboxControl
								label="Region"
								help={ <div>
									<p>Defines the appropriate borders and labels to display, based on geo-political sensitivities. <a href="https://developers.google.com/maps/coverage" target="_blank" rel="noreferrer noopener"><strong>Google's coverage</strong></a> varies by region</p>
									<p><i>*Loading multiple maps with different region settings onto the same web page may cause errors.</i></p>
								</div> }
								value={ attributes.region }
								onChange={ ( region ) => setAttributes({ region: region ?? '' }) }
								options={ regionOptions }
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
};
export default edit;
