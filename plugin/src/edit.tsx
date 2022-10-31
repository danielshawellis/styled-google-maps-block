/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, RangeControl, RadioControl } from '@wordpress/components';
import { useFocusableIframe } from '@wordpress/compose';
import { BlockEditProps } from '@wordpress/blocks';
import { MapSettings } from './types';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import { Styler } from './styler';

import { useState } from 'react';

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
	const [stylerIsOpen, setStylerIsOpen] = useState(false);
	const getStylesQueryString = (styles: MapSettings['styles']): string => styles.reduce((accumulator, { featureType, elementType, stylers }) => {
		const stringComponents = [ 
			...[featureType && `feature:${ featureType }`],
			...[elementType && `element:${ elementType }`],
			...[stylers.visibility && `visibility:${ stylers.visibility }`],
			...[stylers.color && `color:${ stylers.color }`],
			...[stylers.weight && `weight:${ stylers.weight }`],
		];
		return `${ accumulator }&style=${ stringComponents.join('|') }`;
	}, '');

	return (
		<>
			<div { ...blockProps }>
				<iframe ref={ iframeRef } src={ `https://www.google.com/maps/embed/v1/${ attributes.mapmode }?q=${ attributes.q }&maptype=${ attributes.maptype }&zoom=${ attributes.zoom }&key=${ attributes.key }&language=${ attributes.language }&region=${ attributes.region }${ getStylesQueryString(attributes.styles) }` } width="100%" height={ attributes.height } style={{ border: 0 }} allowFullScreen={ true } loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>

			<InspectorControls>
				<Panel>
					<PanelBody title="General" initialOpen={ true }>
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
							<RangeControl
								label="Zoom"
								value={ attributes.zoom }
								onChange={ ( zoom ) => setAttributes({ zoom }) }
								min={ 1 }
								max={ 21 }
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
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody title="Styles" initialOpen={ true }>
						<PanelRow>
							<div className="p-fluid" style={{ width: '100%' }}>
								<Button label="Open Styler" onClick={ () => setStylerIsOpen(true) }/>
								<Styler visible={ stylerIsOpen } onHide={ () => setStylerIsOpen(false) } attributes={ attributes } setAttributes={ setAttributes } />
							</div>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
};
export default edit;
