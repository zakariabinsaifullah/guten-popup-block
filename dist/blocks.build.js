!function(e){function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.components},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(3),n(8)},function(e,t,n){"use strict";var l=n(0),o=(n.n(l),n(4)),a=n(5),r=n(6),p=(n.n(r),n(7)),__=(n.n(p),wp.i18n.__);(0,wp.blocks.registerBlockType)("gpb/guten-popup",{title:__("Popup Block"),icon:{src:"format-gallery",foreground:"#cc7000"},category:"popup-blocks",keywords:[__("Popup Block")],attributes:o.a,edit:a.a,save:function(e){var t=e.attributes,n=t.className,o=t.popupBtnLabel,a=t.popupBtnColor,r=t.popupBtnAlignment,p=t.popupBtnBg,c=t.popupBtnRadius,i=t.popupContentBg,u=t.popupHeading,s=t.headingColor,m=t.url,d=t.alt,g=t.id,f=t.imgMaxWidth;return wp.element.createElement("div",{className:""+n},wp.element.createElement("div",{className:"pop-btn",style:{textAlign:r}},wp.element.createElement("button",{style:{color:a,backgroundColor:p,borderRadius:c}},o)),wp.element.createElement("div",{className:"popup-wrapper"},wp.element.createElement("div",{className:"popup-container",style:{backgroundColor:i}},wp.element.createElement("div",{className:"close-popup"},wp.element.createElement("span",{class:"dashicons dashicons-no-alt"})),wp.element.createElement("div",{className:"popup-content"},wp.element.createElement("div",{className:"popup-heading"},wp.element.createElement(l.RichText.Content,{tagName:"h4",value:u,style:{color:s}})),wp.element.createElement("div",{className:"product-image"},m&&wp.element.createElement("img",{src:m,alt:d,className:"product-image wp-image-"+g,style:{maxWidth:f}})),wp.element.createElement("div",{className:"product-list"},wp.element.createElement(l.InnerBlocks.Content,null))))))}})},function(e,t,n){"use strict";var l={showPopupContent:{type:"boolean",default:!1},popupBtnLabel:{type:"string",default:"Buy from Shops"},popupBtnColor:{type:"string",default:"#ffffff"},popupBtnAlignment:{type:"string",default:"center"},popupBtnBg:{type:"string",default:"#FE4A49 "},popupBtnRadius:{type:"number",default:15},popupContentBg:{type:"string",default:"#ffffff"},popupHeading:{type:"string",default:"Deals for Jordan Zion"},headingColor:{type:"string",default:"#262626"},url:{type:"string"},alt:{type:"string"},id:{type:"number"},imgMaxWidth:{type:"number",default:200}};t.a=l},function(e,t,n){"use strict";var l=n(0),o=(n.n(l),n(1)),a=(n.n(o),wp.element.Fragment),__=wp.i18n.__,r=[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],p=function(e){var t=e.attributes,n=e.setAttributes,p=e.className,c=t.showPopupContent,i=t.popupBtnLabel,u=t.popupBtnColor,s=t.popupBtnAlignment,m=t.popupBtnBg,d=t.popupBtnRadius,g=t.popupContentBg,f=t.popupHeading,b=t.headingColor,w=t.url,C=t.alt,E=t.id,v=t.imgMaxWidth;return wp.element.createElement(a,null,wp.element.createElement(l.InspectorControls,null,wp.element.createElement(o.PanelBody,{title:__("Popup Button Options"),initialOpen:!0},wp.element.createElement(o.TextControl,{label:"Popup Button Label",value:i,onChange:function(e){return n({popupBtnLabel:e})}}),wp.element.createElement(o.RangeControl,{label:"Popup Button Border Radius",value:d,onChange:function(e){return n({popupBtnRadius:e})},min:0,max:100}),wp.element.createElement(o.SelectControl,{label:"Select Alignment",value:s,options:r,onChange:function(e){n({popupBtnAlignment:e})}})),wp.element.createElement(l.PanelColorSettings,{title:__("Popup Button Colors"),initialOpen:!1,colorSettings:[{value:u,onChange:function(e){return n({popupBtnColor:e})},label:__("Color")},{value:m,onChange:function(e){return n({popupBtnBg:e})},label:__("Background Color")}]}),wp.element.createElement(o.PanelBody,{title:__("Popup Product Image Options"),initialOpen:!1},wp.element.createElement(o.RangeControl,{label:"Set Maximum Width",value:v,onChange:function(e){return n({imgMaxWidth:e})},min:1,max:1e3})),wp.element.createElement(l.PanelColorSettings,{title:__("Popup Content Heading Colors"),initialOpen:!1,colorSettings:[{value:b,onChange:function(e){return n({headingColor:e})},label:__("Color")}]})),wp.element.createElement(l.BlockControls,null,w&&wp.element.createElement(o.Toolbar,null,wp.element.createElement(l.MediaUploadCheck,null,wp.element.createElement(l.MediaUpload,{onSelect:function(e){return n({url:e.url,id:e.id,alt:e.alt})},allowedTypes:["image"],value:E,render:function(e){var t=e.open;return wp.element.createElement(o.Button,{className:"components-icon-button components-toolbar__control",label:__("Edit Image"),onClick:t,icon:"edit"})}})),wp.element.createElement(o.Button,{className:"components-icon-button components-toolbar__control",label:__("Delete Image"),onClick:function(){return n({url:"",id:null,alt:""})},icon:"trash"}))),wp.element.createElement("div",{className:""+p},wp.element.createElement("div",{className:"pop-btn",style:{textAlign:s}},wp.element.createElement("button",{onClick:function(){return n({showPopupContent:!0})},style:{color:u,backgroundColor:m,borderRadius:d}},i)),c&&wp.element.createElement("div",{className:"popup-wrapper"},wp.element.createElement("div",{className:"popup-container",style:{backgroundColor:g}},wp.element.createElement("div",{className:"close-popup",onClick:function(){return n({showPopupContent:!1})}},wp.element.createElement("span",{class:"dashicons dashicons-no-alt"})),wp.element.createElement("div",{className:"popup-content"},wp.element.createElement("div",{className:"popup-heading"},wp.element.createElement(l.RichText,{tagName:"h4",value:f,onChange:function(e){return n({popupHeading:e})},style:{color:b}})),wp.element.createElement("div",{className:"product-image"},w?wp.element.createElement("img",{src:w,alt:C,className:"product-image",style:{maxWidth:v}}):wp.element.createElement(l.MediaPlaceholder,{icon:"format-image",onSelect:function(e){return n({url:e.url,id:e.id,alt:e.alt})},onFilesPreUpload:function(e){return n({url:e.url,id:e.id,alt:e.alt})},onSelectURL:function(e){return n({url:e})},allowedTypes:["image"],labels:{title:" Product Image"}})),wp.element.createElement("div",{className:"product-list"},wp.element.createElement(l.InnerBlocks,{allowedBlocks:["gpb/single-product"],template:[["gpb/single-product"]]})))))))};t.a=p},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(0),o=(n.n(l),n(9)),a=n(10),r=n(11),p=(n.n(r),n(12)),__=(n.n(p),wp.i18n.__);(0,wp.blocks.registerBlockType)("gpb/single-product",{title:__("Single Block"),icon:{src:"cart",foreground:"#cc7000"},category:"popup-blocks",keywords:[__("Single Product")],attributes:o.a,edit:a.a,save:function(e){var t=e.attributes,n=t.className,o=t.productTitle,a=t.titleColor,r=t.price,p=t.priceColor,c=t.buyBtnLabel,i=t.buyBtnLink,u=t.btnColor,s=t.btnBg,m=t.btnRadius;return wp.element.createElement("div",{className:"single-product "+n},wp.element.createElement("div",{className:"product-info"},wp.element.createElement("div",{className:"product-title"},wp.element.createElement(l.RichText.Content,{tagName:"p",value:o,style:{color:a}})),wp.element.createElement("div",{className:"product-price"},wp.element.createElement(l.RichText.Content,{tagName:"strong",value:r,style:{color:p}}))),wp.element.createElement("div",{className:"product-cart-btn"},wp.element.createElement("a",{href:i,target:"_blank",rel:"nofollow noopener",style:{backgroundColor:s,color:u,borderRadius:m}},c)))}})},function(e,t,n){"use strict";var l={productTitle:{type:"string",default:"NIKO"},titleColor:{type:"string",default:"#262626"},price:{type:"string",default:"$120"},priceColor:{type:"string",default:"#262626"},buyBtnLabel:{type:"string",default:"Buy Now"},buyBtnLink:{type:"string",default:"#"},btnColor:{type:"string",default:"#ffffff"},btnBg:{type:"string",default:"#FE4A49 "},btnRadius:{type:"number",default:15}};t.a=l},function(e,t,n){"use strict";var l=n(0),o=(n.n(l),n(1)),a=(n.n(o),wp.element.Fragment),__=wp.i18n.__,r=function(e){var t=e.attributes,n=e.setAttributes,r=e.className,p=t.productTitle,c=t.titleColor,i=t.price,u=t.priceColor,s=t.buyBtnLabel,m=t.buyBtnLink,d=t.btnColor,g=t.btnBg,f=t.btnRadius;return wp.element.createElement(a,null,wp.element.createElement(l.InspectorControls,null,wp.element.createElement(l.PanelColorSettings,{title:__("Product Info Colors"),initialOpen:!0,colorSettings:[{value:c,onChange:function(e){return n({titleColor:e})},label:__("Product Title Color")},{value:u,onChange:function(e){return n({priceColor:e})},label:__("Price Color")}]}),wp.element.createElement(o.PanelBody,{title:__("Buy Button Options"),initialOpen:!1},wp.element.createElement(o.TextControl,{label:"Button Label",value:s,onChange:function(e){return n({buyBtnLabel:e})}}),wp.element.createElement(o.TextControl,{label:"Button Link",value:m,onChange:function(e){return n({buyBtnLink:e})}}),wp.element.createElement(o.RangeControl,{label:"Button Border Radius",value:f,onChange:function(e){return n({btnRadius:e})},min:0,max:100})),wp.element.createElement(l.PanelColorSettings,{title:__("Button Colors"),initialOpen:!1,colorSettings:[{value:d,onChange:function(e){return n({btnColor:e})},label:__("Color")},{value:g,onChange:function(e){return n({btnBg:e})},label:__("Backgrund Color")}]})),wp.element.createElement("div",{className:"single-product "+r},wp.element.createElement("div",{className:"product-info"},wp.element.createElement("div",{className:"product-title"},wp.element.createElement(l.RichText,{tagName:"p",value:p,onChange:function(e){return n({productTitle:e})},style:{color:c}})),wp.element.createElement("div",{className:"product-price"},wp.element.createElement(l.RichText,{tagName:"strong",value:i,onChange:function(e){return n({price:e})},style:{color:u}}))),wp.element.createElement("div",{className:"product-cart-btn"},wp.element.createElement("a",{href:m,target:"_self",rel:"nofollow noopener",style:{backgroundColor:g,color:d,borderRadius:f}},s))))};t.a=r},function(e,t){},function(e,t){}]);