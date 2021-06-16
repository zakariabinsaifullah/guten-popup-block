
//  Import CSS.
import { RichText } from '@wordpress/block-editor';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gpb/single-product', {

	title: __( 'Single Block' ),
	icon: {
		src: 'cart',
		foreground: '#cc7000', 
	},
	category: 'popup-blocks',
	keywords: [
		__( 'Single Product' ),
	],
	attributes, 
	edit, 
	save: ({ attributes }) => {
		const { className, productTitle, titleColor, price, priceColor, buyBtnLabel, buyBtnLink, btnColor, btnBg, btnRadius } = attributes; 
		return (
			<div className={`single-product ${className}`}>
                <div className="product-info">
                    <div className="product-title">
                        <RichText.Content
                            tagName="p"
                            value={ productTitle }
							style={{
                                color: titleColor
                            }}
                        />
                    </div>
                    <div className="product-price">
                        <RichText.Content
                            tagName="strong"
                            value={ price }
							style={{
                                color: priceColor
                            }}
                        />
                    </div>
                </div>
                <div className="product-cart-btn">
                    <a 
                        href={ buyBtnLink } 
                        target="_blank" 
                        rel="nofollow noopener"
                        style={{
                            backgroundColor: btnBg,
                            color: btnColor,
							borderRadius: btnRadius
                        }}
                    >
                        { buyBtnLabel }
                    </a>
                </div>
            </div>
		);
	},
} );
