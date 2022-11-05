<?php
/**
 * Plugin Name:       Styled Google Maps Block
 * Description:       A highly-customizable Google Maps block. Supports custom themes, directions, and Google Street View.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Daniel Ellis
 * Author URI:				https://danielellisdevelopment.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       styled-google-maps-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_google_maps_gutenberg_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_google_maps_gutenberg_block_block_init' );
