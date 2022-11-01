/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, BaseControl, TextControl, RadioControl } from '@wordpress/components';
import { useFocusableIframe } from '@wordpress/compose';
import { BlockEditProps } from '@wordpress/blocks';

import PlaceControls from './map-modes/place';
import ViewControls from './map-modes/view';
import DirectionsControls from './map-modes/directions';
import StreetviewControls from './map-modes/streetview';
import SearchControls from './map-modes/search';

import { MapSettings } from './types';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
const edit: React.ComponentType<BlockEditProps<MapSettings>> = function ({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const iframeRef = useFocusableIframe() as React.LegacyRef<HTMLIFrameElement>;

	const apiKeyHelp = <div>
		<p>Please create your own API key before publishing a map. This is a Google requirement.</p>
		<p>Here's how to create your own API key:</p>
		<ol>
			<li>Go to the <a href="https://console.cloud.google.com/project/_/google/maps-apis/credentials" target="_blank" rel="noopener noreferrer"><strong>Google Maps Platform &gt; Credentials</strong></a> page. If you haven't already, you may need to create an account and a Google Cloud project here.</li>
			<li>On the <strong>Credentials</strong> page, click <strong>Create credentials &gt; API key</strong>. The <strong>API key created</strong> dialog displays your newly created API key.</li>
			<li>Copy the new API key and paste it in the field above.</li>
			<li>Go to the <a href="https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com" target="_blank" rel="noopener noreferrer"><strong>Google Maps Embed API</strong></a> page, ensure that the correct project is selected, and click <strong>Enable</strong>.</li>
		</ol>
	</div>;

	const constructUrl = (acceptedParameters: (keyof Omit<MapSettings, 'mapmode' | 'height'>)[], atts: typeof attributes): string => {
		const url = new URL(`https://www.google.com/maps/embed/v1/${ atts.mapmode }`);
		acceptedParameters.forEach(parameter => {
			const value = atts[parameter];
			if (value !== '') url.searchParams.append(parameter, typeof value === 'number' ? value.toString() : value);
		});
		return url.href;
	};

	const getMapUrl = (atts: typeof attributes): string => {
		switch (atts.mapmode) {
			case 'place': return constructUrl(['key', 'q', 'zoom', 'maptype', 'language', 'region'], atts);
			case 'view': return constructUrl(['key', 'center', 'zoom', 'maptype', 'language', 'region'], atts);
			case 'directions': return constructUrl(['key', 'origin', 'destination', 'mode', 'units', 'zoom', 'maptype', 'language', 'region'], atts);
			case 'streetview': return constructUrl(['key', 'location', 'pano', 'heading', 'pitch', 'fov', 'language', 'region'], atts);
			case 'search': return constructUrl(['key', 'q', 'zoom', 'maptype', 'language', 'region'], atts);
		};
	};

	return (
		<>
			<div { ...blockProps }>
				<iframe ref={ iframeRef } src={ getMapUrl(attributes) } width="100%" height={ attributes.height } style={{ border: 0 }} allowFullScreen={ true } loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
								] }
								onChange={ ( mapmode: MapSettings['mapmode'] ) => setAttributes({ mapmode }) }
							/>
						</PanelRow>

						{ attributes.mapmode === 'place' && <PlaceControls attributes={ attributes } setAttributes={ setAttributes } /> }
						{ attributes.mapmode === 'view' && <ViewControls attributes={ attributes } setAttributes={ setAttributes } /> }
						{ attributes.mapmode === 'directions' && <DirectionsControls attributes={ attributes } setAttributes={ setAttributes } /> }
						{ attributes.mapmode === 'streetview' && <StreetviewControls attributes={ attributes } setAttributes={ setAttributes } /> }
						{ attributes.mapmode === 'search' && <SearchControls attributes={ attributes } setAttributes={ setAttributes } /> }

						<PanelRow>
							<TextControl
								label="Language"
								help={ <span>Defines the language to use for UI elements and for the display of labels on map tiles. By default, visitors will se a map in their own language. This parameter is only supported for some country tiles; if the specific language requested is not supported for the tile set, then the default language for that tileset will be used. Choose from <a href="https://developers.google.com/maps/faq#languagesupport" target="_blank" rel="noopener noreferrer"><strong>the language codes here</strong></a>.</span> }
								value={ attributes.language }
								onChange={ ( language ) => setAttributes({ language }) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Region"
								help={ <span>Defines the appropriate borders and labels to display, based on geo-political sensitivities. Choose from <a href="https://developers.google.com/maps/coverage" target="_blank" rel="noreferrer noopener"><strong>the region codes here</strong></a>.</span> }
								value={ attributes.region }
								onChange={ ( region ) => setAttributes({ region }) }
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
};
export default edit;
