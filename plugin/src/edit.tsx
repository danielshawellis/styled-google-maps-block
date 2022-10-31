/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, BaseControl, TextControl, RangeControl, RadioControl, CheckboxControl } from '@wordpress/components';
import { useFocusableIframe } from '@wordpress/compose';
import { BlockEditProps } from '@wordpress/blocks';
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

	const makeUrlGetter = (mapMode: MapSettings['mapmode'], acceptedParameters: (keyof Omit<MapSettings, 'mapmode' | 'height'>)[]) => (_attributes: typeof attributes) => Object.entries(_attributes).reduce((accumulator, [key, value]) => {
		if (acceptedParameters.includes(key) && value !== '') accumulator.searchParams.append(key, typeof value === 'number' ? value.toString() : value);
		return accumulator;
	}, new URL(`https://www.google.com/maps/embed/v1/${ mapMode }`)).href;

	const getMapUrl = (_attributes: typeof attributes): string => {
		switch (attributes.mapmode) {
			case 'place': return makeUrlGetter('place', ['key', 'q', 'zoom', 'maptype', 'language', 'region'])(attributes);
			case 'view': return makeUrlGetter('view', ['key', 'center', 'zoom', 'maptype', 'language', 'region'])(attributes);
			case 'directions': return makeUrlGetter('directions', ['key', 'origin', 'destination', 'mode', 'units', 'zoom', 'maptype', 'language', 'region'])(attributes);
			case 'streetview': return makeUrlGetter('streetview', ['key', 'location', 'pano', 'heading', 'pitch', 'fov', 'language', 'region'])(attributes);
			case 'search': return makeUrlGetter('search', ['key', 'q', 'zoom', 'maptype', 'language', 'region'])(attributes);
		};
	}; 

	return (
		<>
			<div { ...blockProps }>
				<iframe ref={ iframeRef } src={ getMapUrl(attributes) } width="100%" height={ attributes.height } style={{ border: 0 }} allowFullScreen={ true } loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>

			<InspectorControls>
				<Panel>
					<PanelBody title="General" initialOpen={ true }>
						<PanelRow>
							<TextControl
								label="API Key"
								help={ <p>Test content</p> }
								value={ attributes.key }
								onChange={ ( key ) => setAttributes({ key }) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Height"
								value={ attributes.height }
								onChange={ ( height ) => setAttributes({ height }) }
							/>
						</PanelRow>
						<PanelRow>
							<RadioControl
								label="Map Mode"
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
						<PanelRow>
							<TextControl
								label="Query"
								value={ attributes.q }
								onChange={ ( q ) => setAttributes({ q }) }
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl label="Center" id="center-control">
								<div style={{ display: 'flex', gap: '10px' }}>
									<div>
										<label style={{ display: 'block', marginBottom: '8px' }} htmlFor="center-latitude">Latitude</label>
										<input 
											value={ parseFloat(attributes.center.split(',')[0]) } 
											onChange={ (event) => setAttributes({ center: `${event.target.value},${parseFloat(attributes.center.split(',')[1])}` }) } 
											type="number" 
											step={0.0001}
											min={-90}
											max={90}
											size={8}
											style={{ display: 'block', width: '100%' }}
											id="center-latitude"
										/>
									</div>
									<div>
										<label style={{ display: 'block', marginBottom: '8px' }} htmlFor="center-longitude">Longitude</label>
										<input 
											value={ parseFloat(attributes.center.split(',')[1]) } 
											onChange={ (event) => setAttributes({ center: `${parseFloat(attributes.center.split(',')[0])},${event.target.value}` }) } 
											type="number" 
											step={0.0001}
											min={-180}
											max={180}
											size={8}
											style={{ display: 'block', width: '100%' }}
											id="center-longitude"
										/>
									</div>
								</div>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label="Zoom"
								value={ attributes.zoom }
								onChange={ ( zoom ) => setAttributes({ zoom }) }
								min={ 1 }
								max={ 21 }
							/>
						</PanelRow>
						<PanelRow>
							<RadioControl
								label="Map Type"
								selected={ attributes.maptype }
								options={ [
									{ label: 'Roadmap', value: 'roadmap' },
									{ label: 'Satellite', value: 'satellite' },
								] }
								onChange={ ( maptype: MapSettings['maptype'] ) => setAttributes({ maptype }) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Language"
								value={ attributes.language }
								onChange={ ( language ) => setAttributes({ language }) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Region"
								value={ attributes.region }
								onChange={ ( region ) => setAttributes({ region }) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Origin"
								value={ attributes.origin }
								onChange={ ( origin ) => setAttributes({ origin }) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Destination"
								value={ attributes.destination }
								onChange={ ( destination ) => setAttributes({ destination }) }
							/>
						</PanelRow>
						<PanelRow>
							<RadioControl
								label="Mode"
								selected={ attributes.mode }
								options={ [
									{ label: 'Driving', value: 'driving' },
									{ label: 'Walking', value: 'walking' },
									{ label: 'Bicycling', value: 'bycicling' },
									{ label: 'Transit', value: 'transit' },
									{ label: 'Flying', value: 'flying' },
								] }
								onChange={ ( maptype: MapSettings['maptype'] ) => setAttributes({ maptype }) }
							/>
						</PanelRow>
						<PanelRow>
							<RadioControl
								label="Units"
								selected={ attributes.units }
								options={ [
									{ label: 'Metric', value: 'metric' },
									{ label: 'Imperial', value: 'imperial' },
								] }
								onChange={ ( units: MapSettings['units'] ) => setAttributes({ units }) }
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl label="Location" id="location-control">
								<div style={{ display: 'flex', gap: '10px' }}>
									<div>
										<label style={{ display: 'block', marginBottom: '8px' }} htmlFor="location-latitude">Latitude</label>
										<input 
											value={ parseFloat(attributes.location.split(',')[0]) } 
											onChange={ (event) => setAttributes({ location: `${event.target.value},${parseFloat(attributes.location.split(',')[1])}` }) } 
											type="number" 
											step={0.0001}
											min={-90}
											max={90}
											size={8}
											style={{ display: 'block', width: '100%' }}
											id="location-latitude"
										/>
									</div>
									<div>
										<label style={{ display: 'block', marginBottom: '8px' }} htmlFor="location-longitude">Longitude</label>
										<input 
											value={ parseFloat(attributes.location.split(',')[1]) } 
											onChange={ (event) => setAttributes({ location: `${parseFloat(attributes.location.split(',')[0])},${event.target.value}` }) } 
											type="number" 
											step={0.0001}
											min={-180}
											max={180}
											size={8}
											style={{ display: 'block', width: '100%' }}
											id="location-longitude"
										/>
									</div>
								</div>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Panorama ID"
								value={ attributes.pano }
								onChange={ ( pano ) => setAttributes({ pano }) }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label="Heading"
								value={ attributes.heading }
								onChange={ ( heading ) => setAttributes({ heading }) }
								min={ -180 }
								max={ 180 }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label="Pitch"
								value={ attributes.pitch }
								onChange={ ( pitch ) => setAttributes({ pitch }) }
								min={ -90 }
								max={ 90 }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label="Field of View"
								value={ attributes.fov }
								onChange={ ( fov ) => setAttributes({ fov }) }
								min={ 10 }
								max={ 100 }
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
};
export default edit;
