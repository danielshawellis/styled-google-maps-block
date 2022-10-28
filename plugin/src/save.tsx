/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { BlockSaveProps } from '@wordpress/blocks';
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
			<iframe src={ `https://www.google.com/maps/embed/v1/place?q=${ attributes.location }&maptype=${ attributes.maptype }&zoom=${ attributes.zoom }&key=${ attributes.key }` } width="100%" height={ attributes.height } style={{ border: 0 }} allowFullScreen={ true } loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};
export default save;
