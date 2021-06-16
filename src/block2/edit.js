const { Fragment } = wp.element;
import { InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl } from '@wordpress/components';
const { __ } = wp.i18n;

const Edit = ({ attributes, setAttributes, className }) => {
    const { productTitle, titleColor, price, priceColor, buyBtnLabel, buyBtnLink, btnColor, btnBg, btnRadius } = attributes; 
    return(
        <Fragment>
            <InspectorControls>
                <PanelColorSettings
                    title={ __( 'Product Info Colors' ) }
                    initialOpen={ true }
                    colorSettings={ [
                        {
                            value: titleColor,
                            onChange: ( colorValue ) => setAttributes( { titleColor: colorValue } ),
                            label: __( 'Product Title Color' ),
                        },
                        {
                            value: priceColor,
                            onChange: ( colorValue ) => setAttributes( { priceColor: colorValue } ),
                            label: __( 'Price Color' ),
                        },
                    ] }
                />
                <PanelBody 
                    title={__("Buy Button Options")}
                    initialOpen= { false }
                >
                    <TextControl
                        label="Button Label"
                        value={ buyBtnLabel }
                        onChange={ ( buyBtnLabel ) => setAttributes( { buyBtnLabel } ) }
                    />
                    <TextControl
                        label="Button Link"
                        value={ buyBtnLink }
                        onChange={ ( buyBtnLink ) => setAttributes( { buyBtnLink } ) }
                    />
                    <RangeControl
                        label="Button Border Radius"
                        value={ btnRadius }
                        onChange={ ( btnRadius ) => setAttributes( { btnRadius } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                </PanelBody>
                <PanelColorSettings
                    title={ __( 'Button Colors' ) }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: btnColor,
                            onChange: ( colorValue ) => setAttributes( { btnColor: colorValue } ),
                            label: __( 'Color' ),
                        },
                        {
                            value: btnBg,
                            onChange: ( colorValue ) => setAttributes( { btnBg: colorValue } ),
                            label: __( 'Backgrund Color' ),
                        },
                    ] }
                />
            </InspectorControls>
            
            <div className={`single-product ${className}`}>
                <div className="product-info">
                    <div className="product-title">
                        <RichText
                            tagName="p"
                            value={ productTitle }
                            onChange={ ( productTitle ) => setAttributes( { productTitle } ) }
                            style={{
                                color: titleColor
                            }}
                        />
                    </div>
                    <div className="product-price">
                        <RichText
                            tagName="strong"
                            value={ price }
                            onChange={ ( price ) => setAttributes( { price } ) }
                            style={{
                                color: priceColor
                            }}
                        />
                    </div>
                </div>
                <div className="product-cart-btn">
                    <a 
                        href={ buyBtnLink } 
                        target="_self" 
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
        </Fragment>
    );
}
export default Edit; 
