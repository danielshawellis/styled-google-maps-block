// Import core WordPress dependencies
import { useBlockProps } from '@wordpress/block-editor';
import { BlockSaveProps } from '@wordpress/blocks';

// Import utilities
import { getMapUrl } from './utilities';

// Import types
import { MapSettings } from './types';

// Define the HTML outputted by the block on save
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
