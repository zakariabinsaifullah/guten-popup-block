const { Fragment } = wp.element;
import { BlockControls, InnerBlocks, InspectorControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl, SelectControl, TextControl, Toolbar } from '@wordpress/components';
const { __ } = wp.i18n;

const tags = [
    { label: 'h1', value: 'h1' },
    { label: 'h2', value: 'h2' },
    { label: 'h3', value: 'h3' },
    { label: 'h4', value: 'h4' },
    { label: 'h5', value: 'h5' },
    { label: 'h6', value: 'h6' },
];

const aligns = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
];

const Edit = ({ attributes, setAttributes, className }) => {
    const { showPopupContent, popupBtnLabel, popupBtnColor, popupBtnAlignment, popupBtnBg, popupBtnRadius, popupContentBg, popupHeading, headingColor, url, alt, id, imgMaxWidth } = attributes; 
    return(
        <Fragment>
            <InspectorControls>
                <PanelBody 
                    title={__("Popup Button Options")}
                    initialOpen= { true }
                >
                    <TextControl
                        label="Popup Button Label"
                        value={ popupBtnLabel }
                        onChange={ ( popupBtnLabel ) => setAttributes( { popupBtnLabel } ) }
                    />
                    <RangeControl
                        label="Popup Button Border Radius"
                        value={ popupBtnRadius }
                        onChange={ ( popupBtnRadius ) => setAttributes( { popupBtnRadius } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                    <SelectControl
                        label="Select Alignment"
                        value={ popupBtnAlignment }
                        options={ aligns }
                        onChange={ ( popupBtnAlignment ) => { setAttributes( { popupBtnAlignment } ) } }
                    />
                </PanelBody>
                <PanelColorSettings
                    title={ __( 'Popup Button Colors' ) }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: popupBtnColor,
                            onChange: ( colorValue ) => setAttributes( { popupBtnColor: colorValue } ),
                            label: __( 'Color' ),
                        },
                        {
                            value: popupBtnBg,
                            onChange: ( colorValue ) => setAttributes( { popupBtnBg: colorValue } ),
                            label: __( 'Background Color' ),
                        },
                    ] }
                />
                {/* <PanelBody 
                    title={__("Popup Content Heading Options")}
                    initialOpen= { false }
                >
                    <SelectControl
                        label="Select Heading Tag"
                        value={ headingTag }
                        options={ tags }
                        onChange={ ( headingTag ) => { setAttributes( { headingTag } ) } }
                    />
                </PanelBody> */}
                <PanelBody 
                    title={__("Popup Product Image Options")}
                    initialOpen= { false }
                >
                    <RangeControl
                        label="Set Maximum Width"
                        value={ imgMaxWidth }
                        onChange={ ( imgMaxWidth ) => setAttributes( { imgMaxWidth } ) }
                        min={ 1 }
                        max={ 1000 }
                    />
                </PanelBody>
                <PanelColorSettings
                    title={ __( 'Popup Content Heading Colors' ) }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: headingColor,
                            onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
                            label: __( 'Color' ),
                        },
                    ] }
                />
            </InspectorControls>
            <BlockControls>
                {
                url &&
                    <Toolbar>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                allowedTypes={["image"]}
                                value={id}
                                render={({ open }) => {
                                    return (
                                        <Button
                                            className="components-icon-button components-toolbar__control"
                                            label={__(
                                                "Edit Image"
                                            )}
                                            onClick={open}
                                            icon="edit"
                                        />
                                    );
                                }}
                            />
                        </MediaUploadCheck>
                        <Button
                            className="components-icon-button components-toolbar__control"
                            label={__(
                                "Delete Image"
                            )}
                            onClick={ () => setAttributes({ url:'', id: null, alt: '' }) }
                            icon="trash"
                        />
                    </Toolbar>
                }
            </BlockControls>
            <div className={`${className}`}>
                <div className="pop-btn" style={{ textAlign: popupBtnAlignment }}>
                    <button 
                        onClick={ () => setAttributes({ showPopupContent: true }) }
                        style={{
                            color: popupBtnColor,
                            backgroundColor: popupBtnBg,
                            borderRadius: popupBtnRadius
                        }}
                    >
                        { popupBtnLabel }
                    </button>
                </div>
                {
                    showPopupContent &&
                    <div className="popup-wrapper">
                        <div className="popup-container" style={{ backgroundColor: popupContentBg }}>
                            <div className="close-popup" onClick={ () => setAttributes({ showPopupContent: false }) }><span class="dashicons dashicons-no-alt"></span></div>
                            <div className="popup-content">
                                <div className="popup-heading">
                                    <RichText
                                        tagName="h4"
                                        value={ popupHeading }
                                        onChange={ ( popupHeading ) => setAttributes( { popupHeading } ) }
                                        style={{
                                            color: headingColor
                                        }}
                                    />
                                </div>
                                <div className="product-image">
                                {
                                    url ? (
                                        <img src={url} alt={alt} className="product-image" style={{ maxWidth: imgMaxWidth }} />
                                    ) : (
                                        <MediaPlaceholder
                                            icon="format-image"
                                            onSelect={ media => setAttributes({ 
                                                url:media.url, 
                                                id: media.id,
                                                alt: media.alt
                                            })}
                                            onFilesPreUpload={ media => setAttributes({ 
                                                url:media.url, 
                                                id: media.id,
                                                alt: media.alt
                                            })}
                                            onSelectURL={ url => setAttributes({ url })}
                                            allowedTypes={["image"]}
                                            labels = { { title: ' Product Image' } }
                                        />
                                    )
                                }
                                </div>
                                <div className="product-list">
                                    <InnerBlocks 
                                        allowedBlocks={['gpb/single-product']}
                                        template={[
                                            ['gpb/single-product']
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Fragment>
    );
}
export default Edit; 
