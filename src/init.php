<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Registration Function 
*/
function gpb_blocks_register( $block, $options=array() ){
    return register_block_type(
        'gpb/' . $block,
        array_merge(
			array(
				'style'         => 'gpb-style-css',
				'editor_script' => 'gpb-block-js',
				'editor_style'  => 'gpb-editor-css',
			),
            $options
        )
    );
}

function gpb_blocks_init() {
	wp_register_style(
		'gpb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		is_admin() ? array( 'wp-editor' ) : null,
		null
	);

	wp_register_script(
		'gpb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);

	wp_register_style(
		'gpb-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		null
	);
	/**
	 * Single Block Registration 
	*/
	gpb_blocks_register('guten-popup');
	gpb_blocks_register('single-product');
}
add_action( 'init', 'gpb_blocks_init' );

/*
 * New Category
 * */
function guten_popup_blocks_new_cat( $categories ){
	return array_merge(
		$categories,
		array(
			array(
				'title' => 'Popup Blocks',
				'slug'  => 'popup-blocks'
			)
		)
	);
}
add_filter( 'block_categories', 'guten_popup_blocks_new_cat' );
/**
 * External Assets 
*/
function guten_popup_enqueue_blocks_assets_enqueue(){
	wp_enqueue_style( 'dashicons' );
	wp_enqueue_script( 'plugin-js', plugins_url( '../inc/js/plugin.js', __FILE__ ), array('jquery'), '1.0.0', true );
}
add_action( 'enqueue_block_assets', 'guten_popup_enqueue_blocks_assets_enqueue' );
