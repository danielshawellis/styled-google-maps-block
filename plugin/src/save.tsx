/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { BlockSaveProps } from '@wordpress/blocks';

import { getMapUrl } from './utilities';

import { MapSettings } from './types';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 */
const save: React.ComponentType<BlockSaveProps<MapSettings>> = function ({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			{ attributes.mapmode === 'themed' ?
					attributes.key === 'AIzaSyCRspsEADhOoOF4c2LhYKu_IAB0orV9ExA' ?
						<section style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><p>You must set your own Google Maps API key and enable the Google Maps JavaScript API to use themed maps.</p></section> :
						<div className="google-maps-gutenberg-block" style={{ width: '100%', height: `${attributes.height}px` }} data-attributes={ JSON.stringify(attributes) } /> :
					<iframe src={ getMapUrl(attributes) } width="100%" height={ attributes.height } style={{ border: 0 }} allowFullScreen={ true } loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			}
		</div>
	);
};
export default save;
