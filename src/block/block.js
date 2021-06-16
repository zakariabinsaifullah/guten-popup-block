
//  Import CSS.
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gpb/guten-popup', {

	title: __( 'Popup Block' ),
	icon: {
		src: 'format-gallery',
		foreground: '#cc7000', 
	},
	category: 'popup-blocks',
	keywords: [
		__( 'Popup Block' ),
	],
	attributes, 
	edit, 
	save: ({ attributes }) => {
		const { className, popupBtnLabel, popupBtnColor, popupBtnAlignment, popupBtnBg, popupBtnRadius, popupContentBg, popupHeading, headingColor, url, alt, id, imgMaxWidth } = attributes; 
		return (
			<div className={`${className}`}>
                <div className="pop-btn" style={{ textAlign: popupBtnAlignment }}>
                    <button
                        style={{
                            color: popupBtnColor,
                            backgroundColor: popupBtnBg,
                            borderRadius: popupBtnRadius
                        }}
                    >
                        { popupBtnLabel }
                    </button>
                </div>
				<div className="popup-wrapper">
					<div className="popup-container" style={{ backgroundColor: popupContentBg }}>
						<div className="close-popup"><span class="dashicons dashicons-no-alt"></span></div>
						<div className="popup-content">
							<div className="popup-heading">
								<RichText.Content
									tagName="h4"
									value={ popupHeading }
									style={{
										color: headingColor
									}}
								/>
							</div>
							<div className="product-image">
							{
								url &&
									<img src={url} alt={alt} className={`product-image wp-image-${id}`} style={{ maxWidth: imgMaxWidth }}  />
							}
							</div>
							<div className="product-list">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
            </div>
		);
	},
} );
