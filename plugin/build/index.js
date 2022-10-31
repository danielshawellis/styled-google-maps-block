/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.tsx":
/*!**********************!*\
  !*** ./src/edit.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var _styler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styler */ "./src/styler.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */







/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
const edit = function (_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const iframeRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusableIframe)();
  const [stylerIsOpen, setStylerIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const getStylesQueryString = styles => styles.reduce((accumulator, _ref2) => {
    let {
      featureType,
      elementType,
      stylers
    } = _ref2;
    const stringComponents = [...[featureType && `feature:${featureType}`], ...[elementType && `element:${elementType}`], ...[stylers.visibility && `visibility:${stylers.visibility}`], ...[stylers.color && `color:${stylers.color}`], ...[stylers.weight && `weight:${stylers.weight}`]];
    return `${accumulator}&style=${stringComponents.join('|')}`;
  }, '');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    ref: iframeRef,
    src: `https://www.google.com/maps/embed/v1/${attributes.mapmode}?q=${attributes.q}&maptype=${attributes.maptype}&zoom=${attributes.zoom}&key=${attributes.key}&language=${attributes.language}&region=${attributes.region}${getStylesQueryString(attributes.styles)}`,
    width: "100%",
    height: attributes.height,
    style: {
      border: 0
    },
    allowFullScreen: true,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "General",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: "Map Mode",
    selected: attributes.mapmode,
    options: [{
      label: 'Place',
      value: 'place'
    }, {
      label: 'View',
      value: 'view'
    }, {
      label: 'Directions',
      value: 'directions'
    }, {
      label: 'Street View',
      value: 'streetview'
    }, {
      label: 'Search',
      value: 'search'
    }],
    onChange: mapmode => setAttributes({
      mapmode
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Query",
    value: attributes.q,
    onChange: q => setAttributes({
      q
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: "Zoom",
    value: attributes.zoom,
    onChange: zoom => setAttributes({
      zoom
    }),
    min: 1,
    max: 21
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Height",
    value: attributes.height,
    onChange: height => setAttributes({
      height
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: "Map Type",
    selected: attributes.maptype,
    options: [{
      label: 'Roadmap',
      value: 'roadmap'
    }, {
      label: 'Satellite',
      value: 'satellite'
    }],
    onChange: maptype => setAttributes({
      maptype
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Language",
    value: attributes.language,
    onChange: language => setAttributes({
      language
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Region",
    value: attributes.region,
    onChange: region => setAttributes({
      region
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Styles",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-fluid",
    style: {
      width: '100%'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    label: "Open Styler",
    onClick: () => setStylerIsOpen(true)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styler__WEBPACK_IMPORTED_MODULE_5__.Styler, {
    visible: stylerIsOpen,
    onHide: () => setStylerIsOpen(false),
    attributes: attributes,
    setAttributes: setAttributes
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/resources/themes/lara-light-indigo/theme.css */ "./node_modules/primereact/resources/themes/lara-light-indigo/theme.css");
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/resources/primereact.min.css */ "./node_modules/primereact/resources/primereact.min.css");
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeicons/primeicons.css */ "./node_modules/primeicons/primeicons.css");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeflex/primeflex.css */ "./node_modules/primeflex/primeflex.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit */ "./src/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./save */ "./src/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * PrimeReact styles
 */
 //theme
 //core css
 //icons
 //flex utility

/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
// @ts-ignore TODO: Fix the typing here
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_8__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_6__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./src/save.tsx":
/*!**********************!*\
  !*** ./src/save.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 */
const save = function (_ref) {
  let {
    attributes
  } = _ref;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: `https://www.google.com/maps/embed/v1/place?q=${attributes.location}&maptype=${attributes.maptype}&zoom=${attributes.zoom}&key=${attributes.key}`,
    width: "100%",
    height: attributes.height,
    style: {
      border: 0
    },
    allowFullScreen: true,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/styler.tsx":
/*!************************!*\
  !*** ./src/styler.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Styler": function() { return /* binding */ Styler; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/dialog */ "./node_modules/primereact/dialog/dialog.esm.js");
/* harmony import */ var primereact_treeselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/treeselect */ "./node_modules/primereact/treeselect/treeselect.esm.js");
/* harmony import */ var primereact_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/divider */ "./node_modules/primereact/divider/divider.esm.js");
/* harmony import */ var primereact_colorpicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/colorpicker */ "./node_modules/primereact/colorpicker/colorpicker.esm.js");
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/inputnumber */ "./node_modules/primereact/inputnumber/inputnumber.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);











const featureNodes = [{
  "key": "all",
  "label": "All"
}, {
  "key": "administrative",
  "label": "Administrative",
  "children": [{
    "key": "administrative.country",
    "label": "Country"
  }, {
    "key": "administrative.land_parcel",
    "label": "Land Parcel"
  }, {
    "key": "administrative.locality",
    "label": "Locality"
  }, {
    "key": "administrative.neighborhood",
    "label": "Neighborhood"
  }, {
    "key": "administrative.province",
    "label": "Province"
  }]
}];
const elementNodes = [{
  key: "all",
  label: "All"
}, {
  key: "geometry",
  label: "Geometry",
  children: [{
    key: "geometry.fill",
    label: "Geometry Fill"
  }, {
    key: "geometry.stroke",
    label: "Geometry Stroke"
  }]
}, {
  key: "labels",
  label: "Labels",
  children: [{
    key: "labels.icon",
    label: "Label Icons"
  }, {
    key: "labels.text",
    label: "Label Text",
    children: [{
      key: "labels.text.fill",
      label: "Label Text Fill"
    }, {
      key: "labels.text.stroke",
      label: "Label Text Stroke"
    }]
  }]
}];
const visibilityOptions = [{
  label: 'Hidden',
  value: 'hidden'
}, {
  label: 'Simplified',
  value: 'simplified'
}, {
  label: 'Shown',
  value: 'shown'
}];
const Styler = _ref => {
  let {
    visible,
    onHide,
    attributes,
    setAttributes
  } = _ref;
  // Set up component state
  const [stylerIsOpen, setStylerIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
  const [featureType, setFeatureType] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("all");
  const [elementType, setElementType] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("all");
  const [visibility, setVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
  const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
  const [weight, setWeight] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
  const [saturation, setSaturation] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
  const [lightness, setLightness] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);

  // Define inner templates
  const header = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-d-flex p-jc-between p-ai-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    className: "p-mr-3"
  }, "Styles"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    label: "Add New Style",
    icon: "pi pi-plus",
    onClick: () => setStylerIsOpen(true)
  }));
  const fetureTypeTemplate = rowData => {
    var _rowData$featureType;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (_rowData$featureType = rowData.featureType) !== null && _rowData$featureType !== void 0 ? _rowData$featureType : 'all');
  };
  const elementTypeTemplate = rowData => {
    var _rowData$elementType;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (_rowData$elementType = rowData.elementType) !== null && _rowData$elementType !== void 0 ? _rowData$elementType : 'all');
  };
  const buttonsTemplate = rowData => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    label: "Edit",
    icon: "pi pi-pencil",
    className: "p-mr-2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    label: "Delete",
    icon: "pi pi-trash",
    className: "p-button-danger"
  }));

  // Define the save funcation
  const save = () => {
    const _featureType = featureType;
    const _elementType = elementType;
    if (!featureType || !elementType) return;
    setAttributes({
      styles: [...attributes.styles, {
        featureType: _featureType,
        elementType: _elementType,
        stylers: {
          ...(visibility && {
            visibility
          })
        }
      }]
    });
    console.log(attributes);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    visible: visible,
    onHide: onHide,
    maximizable: true
  }, !stylerIsOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_datatable__WEBPACK_IMPORTED_MODULE_1__.DataTable, {
    value: attributes.styles,
    header: header,
    emptyMessage: "No styles are currently set"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
    header: "Feature Type",
    body: fetureTypeTemplate
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
    header: "Element Type",
    body: elementTypeTemplate
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
    body: buttonsTemplate
  })), stylerIsOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-fluid p-formgrid p-grid"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-field p-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "feature-type-select"
  }, "Feture Type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_treeselect__WEBPACK_IMPORTED_MODULE_6__.TreeSelect, {
    value: featureType,
    options: featureNodes,
    filter: true,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setFeatureType(value);
    },
    inputId: "feature-type-select"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-field p-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "element-type-select"
  }, "Element Type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_treeselect__WEBPACK_IMPORTED_MODULE_6__.TreeSelect, {
    value: elementType,
    options: elementNodes,
    filter: true,
    onChange: _ref3 => {
      let {
        value
      } = _ref3;
      return setElementType(value);
    },
    inputId: "element-type-select"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_divider__WEBPACK_IMPORTED_MODULE_7__.Divider, {
    align: "center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Styles")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-fluid p-formgrid p-grid"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-field p-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "visibility-dropdown"
  }, "Visibility"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    value: visibility,
    options: visibilityOptions,
    onChange: _ref4 => {
      let {
        value
      } = _ref4;
      return setVisibility(value);
    },
    placeholder: "Inherit Visibility",
    showClear: true,
    inputId: "visibility-dropdown"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-field p-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "color-input"
  }, "Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_8__.ColorPicker, {
    value: color,
    onChange: _ref5 => {
      let {
        value
      } = _ref5;
      return setColor(value);
    },
    inputId: "color-input"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-field p-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "weight-input"
  }, "Weight"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumber, {
    value: weight,
    onChange: _ref6 => {
      let {
        value
      } = _ref6;
      return setWeight(value);
    },
    id: "weight-input"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    label: "Save",
    onClick: save
  }))));
};

/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addClass; }
/* harmony export */ });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hasClass; }
/* harmony export */ });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeClass; }
/* harmony export */ });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/primeflex/primeflex.css":
/*!**********************************************!*\
  !*** ./node_modules/primeflex/primeflex.css ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/primeicons/primeicons.css":
/*!************************************************!*\
  !*** ./node_modules/primeicons/primeicons.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/primereact/resources/primereact.min.css":
/*!**************************************************************!*\
  !*** ./node_modules/primereact/resources/primereact.min.css ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/primereact/resources/themes/lara-light-indigo/theme.css":
/*!******************************************************************************!*\
  !*** ./node_modules/primereact/resources/themes/lara-light-indigo/theme.css ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/primereact/api/api.esm.js":
/*!************************************************!*\
  !*** ./node_modules/primereact/api/api.esm.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMatchMode": function() { return /* binding */ FilterMatchMode; },
/* harmony export */   "FilterOperator": function() { return /* binding */ FilterOperator; },
/* harmony export */   "FilterService": function() { return /* binding */ FilterService; },
/* harmony export */   "MessageSeverity": function() { return /* binding */ MessageSeverity; },
/* harmony export */   "PrimeIcons": function() { return /* binding */ PrimeIcons; },
/* harmony export */   "SortOrder": function() { return /* binding */ SortOrder; },
/* harmony export */   "addLocale": function() { return /* binding */ addLocale; },
/* harmony export */   "ariaLabel": function() { return /* binding */ ariaLabel; },
/* harmony export */   "default": function() { return /* binding */ PrimeReact; },
/* harmony export */   "locale": function() { return /* binding */ locale; },
/* harmony export */   "localeOption": function() { return /* binding */ localeOption; },
/* harmony export */   "localeOptions": function() { return /* binding */ localeOptions; },
/* harmony export */   "updateLocaleOption": function() { return /* binding */ updateLocaleOption; },
/* harmony export */   "updateLocaleOptions": function() { return /* binding */ updateLocaleOptions; }
/* harmony export */ });
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");


var FilterMatchMode = Object.freeze({
  STARTS_WITH: 'startsWith',
  CONTAINS: 'contains',
  NOT_CONTAINS: 'notContains',
  ENDS_WITH: 'endsWith',
  EQUALS: 'equals',
  NOT_EQUALS: 'notEquals',
  IN: 'in',
  LESS_THAN: 'lt',
  LESS_THAN_OR_EQUAL_TO: 'lte',
  GREATER_THAN: 'gt',
  GREATER_THAN_OR_EQUAL_TO: 'gte',
  BETWEEN: 'between',
  DATE_IS: 'dateIs',
  DATE_IS_NOT: 'dateIsNot',
  DATE_BEFORE: 'dateBefore',
  DATE_AFTER: 'dateAfter',
  CUSTOM: 'custom'
});

var FilterOperator = Object.freeze({
  AND: 'and',
  OR: 'or'
});

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var FilterService = {
  filter: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    var filteredItems = [];

    if (!value) {
      return filteredItems;
    }

    var _iterator = _createForOfIteratorHelper(value),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (typeof item === 'string') {
          if (this.filters[filterMatchMode](item, filterValue, filterLocale)) {
            filteredItems.push(item);
            continue;
          }
        } else {
          var _iterator2 = _createForOfIteratorHelper(fields),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var field = _step2.value;
              var fieldValue = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.resolveFieldData(item, field);

              if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                filteredItems.push(item);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return filteredItems;
  },
  filters: {
    startsWith: function startsWith(value, filter, filterLocale) {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      var filterValue = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: function contains(value, filter, filterLocale) {
      if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      var filterValue = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: function notContains(value, filter, filterLocale) {
      if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      var filterValue = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: function endsWith(value, filter, filterLocale) {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      var filterValue = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: function equals(value, filter, filterLocale) {
      if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();else return primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) === primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: function notEquals(value, filter, filterLocale) {
      if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
        return false;
      }

      if (value === undefined || value === null) {
        return true;
      }

      if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();else return primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) !== primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    "in": function _in(value, filter) {
      if (filter === undefined || filter === null || filter.length === 0) {
        return true;
      }

      for (var i = 0; i < filter.length; i++) {
        if (primereact_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.equals(value, filter[i])) {
          return true;
        }
      }

      return false;
    },
    between: function between(value, filter) {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();else return filter[0] <= value && value <= filter[1];
    },
    lt: function lt(value, filter) {
      if (filter === undefined || filter === null) {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();else return value < filter;
    },
    lte: function lte(value, filter) {
      if (filter === undefined || filter === null) {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();else return value <= filter;
    },
    gt: function gt(value, filter) {
      if (filter === undefined || filter === null) {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();else return value > filter;
    },
    gte: function gte(value, filter) {
      if (filter === undefined || filter === null) {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();else return value >= filter;
    },
    dateIs: function dateIs(value, filter) {
      if (filter === undefined || filter === null) {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: function dateIsNot(value, filter) {
      if (filter === undefined || filter === null) {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: function dateBefore(value, filter) {
      if (filter === undefined || filter === null) {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return value.getTime() < filter.getTime();
    },
    dateAfter: function dateAfter(value, filter) {
      if (filter === undefined || filter === null) {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return value.getTime() > filter.getTime();
    }
  },
  register: function register(rule, fn) {
    this.filters[rule] = fn;
  }
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var PrimeReact = /*#__PURE__*/_createClass(function PrimeReact() {
  _classCallCheck(this, PrimeReact);
});

_defineProperty(PrimeReact, "ripple", false);

_defineProperty(PrimeReact, "inputStyle", 'outlined');

_defineProperty(PrimeReact, "locale", 'en');

_defineProperty(PrimeReact, "appendTo", null);

_defineProperty(PrimeReact, "cssTransition", true);

_defineProperty(PrimeReact, "autoZIndex", true);

_defineProperty(PrimeReact, "nonce", null);

_defineProperty(PrimeReact, "nullSortOrder", 1);

_defineProperty(PrimeReact, "zIndex", {
  modal: 1100,
  overlay: 1000,
  menu: 1000,
  tooltip: 1100,
  toast: 1200
});

_defineProperty(PrimeReact, "filterMatchModeOptions", {
  text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
  numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
  date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var locales = {
  en: {
    startsWith: 'Starts with',
    contains: 'Contains',
    notContains: 'Not contains',
    endsWith: 'Ends with',
    equals: 'Equals',
    notEquals: 'Not equals',
    noFilter: 'No Filter',
    filter: 'Filter',
    lt: 'Less than',
    lte: 'Less than or equal to',
    gt: 'Greater than',
    gte: 'Greater than or equal to',
    dateIs: 'Date is',
    dateIsNot: 'Date is not',
    dateBefore: 'Date is before',
    dateAfter: 'Date is after',
    custom: 'Custom',
    clear: 'Clear',
    close: 'Close',
    apply: 'Apply',
    matchAll: 'Match All',
    matchAny: 'Match Any',
    addRule: 'Add Rule',
    removeRule: 'Remove Rule',
    accept: 'Yes',
    reject: 'No',
    choose: 'Choose',
    upload: 'Upload',
    cancel: 'Cancel',
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    weekHeader: 'Wk',
    firstDayOfWeek: 0,
    dateFormat: 'mm/dd/yy',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    passwordPrompt: 'Enter a password',
    emptyFilterMessage: 'No available options',
    emptyMessage: 'No results found',
    aria: {
      trueLabel: 'True',
      falseLabel: 'False',
      nullLabel: 'Not Selected',
      pageLabel: 'Page',
      firstPageLabel: 'First Page',
      lastPageLabel: 'Last Page',
      nextPageLabel: 'Next Page',
      previousPageLabel: 'Previous Page',
      selectLabel: 'Select',
      unselectLabel: 'Unselect',
      expandLabel: 'Expand',
      collapseLabel: 'Collapse'
    }
  }
};

function locale(locale) {
  locale && (PrimeReact.locale = locale);
  return {
    locale: PrimeReact.locale,
    options: locales[PrimeReact.locale]
  };
}

function addLocale(locale, options) {
  locales[locale] = _objectSpread(_objectSpread({}, locales['en']), options);
}

function updateLocaleOption(key, value, locale) {
  localeOptions(locale)[key] = value;
}

function updateLocaleOptions(options, locale) {
  var _locale = locale || PrimeReact.locale;

  locales[_locale] = _objectSpread(_objectSpread({}, locales[_locale]), options);
}

function localeOption(key, locale) {
  var _locale = locale || PrimeReact.locale;

  try {
    return localeOptions(_locale)[key];
  } catch (error) {
    throw new Error("The ".concat(key, " option is not found in the current locale('").concat(_locale, "')."));
  }
}

function ariaLabel(key) {
  var _locale = PrimeReact.locale;

  try {
    return localeOptions(_locale)['aria'][key];
  } catch (error) {
    throw new Error("The ".concat(key, " option is not found in the current locale('").concat(_locale, "')."));
  }
}

function localeOptions(locale) {
  var _locale = locale || PrimeReact.locale;

  return locales[_locale];
}

var MessageSeverity = Object.freeze({
  SUCCESS: 'success',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error'
});

var PrimeIcons = Object.freeze({
  ALIGN_CENTER: 'pi pi-align-center',
  ALIGN_JUSTIFY: 'pi pi-align-justify',
  ALIGN_LEFT: 'pi pi-align-left',
  ALIGN_RIGHT: 'pi pi-align-right',
  AMAZON: 'pi pi-amazon',
  ANDROID: 'pi pi-android',
  ANGLE_DOUBLE_DOWN: 'pi pi-angle-double-down',
  ANGLE_DOUBLE_LEFT: 'pi pi-angle-double-left',
  ANGLE_DOUBLE_RIGHT: 'pi pi-angle-double-right',
  ANGLE_DOUBLE_UP: 'pi pi-angle-double-up',
  ANGLE_DOWN: 'pi pi-angle-down',
  ANGLE_LEFT: 'pi pi-angle-left',
  ANGLE_RIGHT: 'pi pi-angle-right',
  ANGLE_UP: 'pi pi-angle-up',
  APPLE: 'pi pi-apple',
  ARROW_CIRCLE_DOWN: 'pi pi-arrow-circle-down',
  ARROW_CIRCLE_LEFT: 'pi pi-arrow-circle-left',
  ARROW_CIRCLE_RIGHT: 'pi pi-arrow-circle-right',
  ARROW_CIRCLE_UP: 'pi pi-arrow-circle-up',
  ARROW_DOWN: 'pi pi-arrow-down',
  ARROW_DOWN_LEFT: 'pi pi-arrow-down-left',
  ARROW_DOWN_RIGHT: 'pi pi-arrow-down-right',
  ARROW_LEFT: 'pi pi-arrow-left',
  ARROW_RIGHT: 'pi pi-arrow-right',
  ARROW_UP: 'pi pi-arrow-up',
  ARROW_UP_LEFT: 'pi pi-arrow-up-left',
  ARROW_UP_RIGHT: 'pi pi-arrow-up-right',
  ARROWS_H: 'pi pi-arrows-h',
  ARROWS_V: 'pi pi-arrows-v',
  AT: 'pi pi-at',
  BACKWARD: 'pi pi-backward',
  BAN: 'pi pi-ban',
  BARS: 'pi pi-bars',
  BELL: 'pi pi-bell',
  BOLT: 'pi pi-bolt',
  BOOK: 'pi pi-book',
  BOOKMARK: 'pi pi-bookmark',
  BOOKMARK_FILL: 'pi pi-bookmark-fill',
  BOX: 'pi pi-box',
  BRIEFCASE: 'pi pi-briefcase',
  BUILDING: 'pi pi-building',
  CALENDAR: 'pi pi-calendar',
  CALENDAR_MINUS: 'pi pi-calendar-minus',
  CALENDAR_PLUS: 'pi pi-calendar-plus',
  CALENDAR_TIMES: 'pi pi-calendar-times',
  CAMERA: 'pi pi-camera',
  CAR: 'pi pi-car',
  CARET_DOWN: 'pi pi-caret-down',
  CARET_LEFT: 'pi pi-caret-left',
  CARET_RIGHT: 'pi pi-caret-right',
  CARET_UP: 'pi pi-caret-up',
  CHART_BAR: 'pi pi-chart-bar',
  CHART_LINE: 'pi pi-chart-line',
  CHART_PIE: 'pi pi-chart-pie',
  CHECK: 'pi pi-check',
  CHECK_CIRCLE: 'pi pi-check-circle',
  CHECK_SQUARE: 'pi pi-check-square',
  CHEVRON_CIRCLE_DOWN: 'pi pi-chevron-circle-down',
  CHEVRON_CIRCLE_LEFT: 'pi pi-chevron-circle-left',
  CHEVRON_CIRCLE_RIGHT: 'pi pi-chevron-circle-right',
  CHEVRON_CIRCLE_UP: 'pi pi-chevron-circle-up',
  CHEVRON_DOWN: 'pi pi-chevron-down',
  CHEVRON_LEFT: 'pi pi-chevron-left',
  CHEVRON_RIGHT: 'pi pi-chevron-right',
  CHEVRON_UP: 'pi pi-chevron-up',
  CIRCLE: 'pi pi-circle',
  CIRCLE_FILL: 'pi pi-circle-fill',
  CLOCK: 'pi pi-clock',
  CLONE: 'pi pi-clone',
  CLOUD: 'pi pi-cloud',
  CLOUD_DOWNLOAD: 'pi pi-cloud-download',
  CLOUD_UPLOAD: 'pi pi-cloud-upload',
  CODE: 'pi pi-code',
  COG: 'pi pi-cog',
  COMMENT: 'pi pi-comment',
  COMMENTS: 'pi pi-comments',
  COMPASS: 'pi pi-compass',
  COPY: 'pi pi-copy',
  CREDIT_CARD: 'pi pi-credit-card',
  DATABASE: 'pi pi-database',
  DESKTOP: 'pi pi-desktop',
  DIRECTIONS: 'pi pi-directions',
  DIRECTIONS_ALT: 'pi pi-directions-alt',
  DISCORD: 'pi pi-discord',
  DOLLAR: 'pi pi-dollar',
  DOWNLOAD: 'pi pi-download',
  EJECT: 'pi pi-eject',
  ELLIPSIS_H: 'pi pi-ellipsis-h',
  ELLIPSIS_V: 'pi pi-ellipsis-v',
  ENVELOPE: 'pi pi-envelope',
  EURO: 'pi pi-euro',
  EXCLAMATION_CIRCLE: 'pi pi-exclamation-circle',
  EXCLAMATION_TRIANGLE: 'pi pi-exclamation-triangle',
  EXTERNAL_LINK: 'pi pi-external-link',
  EYE: 'pi pi-eye',
  EYE_SLASH: 'pi pi-eye-slash',
  FACEBOOK: 'pi pi-facebook',
  FAST_BACKWARD: 'pi pi-fast-backward',
  FAST_FORWARD: 'pi pi-fast-forward',
  FILE: 'pi pi-file',
  FILE_EXCEL: 'pi pi-file-excel',
  FILE_PDF: 'pi pi-file-pdf',
  FILTER: 'pi pi-filter',
  FILTER_FILL: 'pi pi-filter-fill',
  FILTER_SLASH: 'pi pi-filter-slash',
  FLAG: 'pi pi-flag',
  FLAG_FILL: 'pi pi-flag-fill',
  FOLDER: 'pi pi-folder',
  FOLDER_OPEN: 'pi pi-folder-open',
  FORWARD: 'pi pi-forward',
  GITHUB: 'pi pi-github',
  GLOBE: 'pi pi-globe',
  GOOGLE: 'pi pi-google',
  HASHTAG: 'pi pi-hashtag',
  HEART: 'pi pi-heart',
  HEART_FILL: 'pi pi-heart-fill',
  HISTORY: 'pi pi-history',
  HOME: 'pi pi-home',
  ID_CARD: 'pi pi-id-card',
  IMAGE: 'pi pi-image',
  IMAGES: 'pi pi-images',
  INBOX: 'pi pi-inbox',
  INFO: 'pi pi-info',
  INFO_CIRCLE: 'pi pi-info-circle',
  INSTAGRAM: 'pi pi-instagram',
  KEY: 'pi pi-key',
  LINK: 'pi pi-link',
  LINKEDIN: 'pi pi-linkedin',
  LIST: 'pi pi-list',
  LOCK: 'pi pi-lock',
  LOCK_OPEN: 'pi pi-lock-open',
  MAP: 'pi pi-map',
  MAP_MARKER: 'pi pi-map-marker',
  MICROSOFT: 'pi pi-microsoft',
  MINUS: 'pi pi-minus',
  MINUS_CIRCLE: 'pi pi-minus-circle',
  MOBILE: 'pi pi-mobile',
  MONEY_BILL: 'pi pi-money-bill',
  MOON: 'pi pi-moon',
  PALETTE: 'pi pi-palette',
  PAPERCLIP: 'pi pi-paperclip',
  PAUSE: 'pi pi-pause',
  PAYPAL: 'pi pi-paypal',
  PENCIL: 'pi pi-pencil',
  PERCENTAGE: 'pi pi-percentage',
  PHONE: 'pi pi-phone',
  PLAY: 'pi pi-play',
  PLUS: 'pi pi-plus',
  PLUS_CIRCLE: 'pi pi-plus-circle',
  POUND: 'pi pi-pound',
  POWER_OFF: 'pi pi-power-off',
  PRIME: 'pi pi-prime',
  PRINT: 'pi pi-print',
  QRCODE: 'pi pi-qrcode',
  QUESTION: 'pi pi-question',
  QUESTION_CIRCLE: 'pi pi-question-circle',
  REDDIT: 'pi pi-reddit',
  REFRESH: 'pi pi-refresh',
  REPLAY: 'pi pi-replay',
  REPLY: 'pi pi-reply',
  SAVE: 'pi pi-save',
  SEARCH: 'pi pi-search',
  SEARCH_MINUS: 'pi pi-search-minus',
  SEARCH_PLUS: 'pi pi-search-plus',
  SEND: 'pi pi-send',
  SERVER: 'pi pi-server',
  SHARE_ALT: 'pi pi-share-alt',
  SHIELD: 'pi pi-shield',
  SHOPPING_BAG: 'pi pi-shopping-bag',
  SHOPPING_CART: 'pi pi-shopping-cart',
  SIGN_IN: 'pi pi-sign-in',
  SIGN_OUT: 'pi pi-sign-out',
  SITEMAP: 'pi pi-sitemap',
  SLACK: 'pi pi-slack',
  SLIDERS_H: 'pi pi-sliders-h',
  SLIDERS_V: 'pi pi-sliders-v',
  SORT: 'pi pi-sort',
  SORT_ALPHA_DOWN: 'pi pi-sort-alpha-down',
  SORT_ALPHA_ALT_DOWN: 'pi pi-sort-alpha-alt-down',
  SORT_ALPHA_UP: 'pi pi-sort-alpha-up',
  SORT_ALPHA_ALT_UP: 'pi pi-sort-alpha-alt-up',
  SORT_ALT: 'pi pi-sort-alt',
  SORT_ALT_SLASH: 'pi pi-sort-slash',
  SORT_AMOUNT_DOWN: 'pi pi-sort-amount-down',
  SORT_AMOUNT_DOWN_ALT: 'pi pi-sort-amount-down-alt',
  SORT_AMOUNT_UP: 'pi pi-sort-amount-up',
  SORT_AMOUNT_UP_ALT: 'pi pi-sort-amount-up-alt',
  SORT_DOWN: 'pi pi-sort-down',
  SORT_NUMERIC_DOWN: 'pi pi-sort-numeric-down',
  SORT_NUMERIC_ALT_DOWN: 'pi pi-sort-numeric-alt-down',
  SORT_NUMERIC_UP: 'pi pi-sort-numeric-up',
  SORT_NUMERIC_ALT_UP: 'pi pi-sort-numeric-alt-up',
  SORT_UP: 'pi pi-sort-up',
  SPINNER: 'pi pi-spinner',
  STAR: 'pi pi-star',
  STAR_FILL: 'pi pi-star-fill',
  STEP_BACKWARD: 'pi pi-step-backward',
  STEP_BACKWARD_ALT: 'pi pi-step-backward-alt',
  STEP_FORWARD: 'pi pi-step-forward',
  STEP_FORWARD_ALT: 'pi pi-step-forward-alt',
  STOP: 'pi pi-stop',
  STOP_CIRCLE: 'pi pi-stop-circle',
  SUN: 'pi pi-sun',
  SYNC: 'pi pi-sync',
  TABLE: 'pi pi-table',
  TABLET: 'pi pi-tablet',
  TAG: 'pi pi-tag',
  TAGS: 'pi pi-tags',
  TELEGRAM: 'pi pi-telegram',
  TH_LARGE: 'pi pi-th-large',
  THUMBS_DOWN: 'pi pi-thumbs-down',
  THUMBS_UP: 'pi pi-thumbs-up',
  TICKET: 'pi pi-ticket',
  TIMES: 'pi pi-times',
  TIMES_CIRCLE: 'pi pi-times-circle',
  TRASH: 'pi pi-trash',
  TWITTER: 'pi pi-twitter',
  UNDO: 'pi pi-undo',
  UNLOCK: 'pi pi-unlock',
  UPLOAD: 'pi pi-upload',
  USER: 'pi pi-user',
  USER_EDIT: 'pi pi-user-edit',
  USER_MINUS: 'pi pi-user-minus',
  USER_PLUS: 'pi pi-user-plus',
  USERS: 'pi pi-users',
  VIDEO: 'pi pi-video',
  VIMEO: 'pi pi-vimeo',
  VOLUME_DOWN: 'pi pi-volume-down',
  VOLUME_OFF: 'pi pi-volume-off',
  VOLUME_UP: 'pi pi-volume-up',
  WALLET: 'pi pi-wallet',
  WHATSAPP: 'pi pi-whatsapp',
  WIFI: 'pi pi-wifi',
  WINDOW_MAXIMIZE: 'pi pi-window-maximize',
  WINDOW_MINIMIZE: 'pi pi-window-minimize',
  YOUTUBE: 'pi pi-youtube'
});

var SortOrder = Object.freeze({
  DESC: -1,
  UNSORTED: 0,
  ASC: 1
});




/***/ }),

/***/ "./node_modules/primereact/button/button.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primereact/button/button.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(ref);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);

  if (props.visible === false) {
    return null;
  }

  var createIcon = function createIcon() {
    var icon = props.loading ? props.loadingIcon : props.icon;
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_3__.classNames)('p-button-icon p-c', _defineProperty({
      'p-button-loading-icon': props.loading
    }, "p-button-icon-".concat(props.iconPos), props.label));
    return primereact_utils__WEBPACK_IMPORTED_MODULE_3__.IconUtils.getJSXIcon(icon, {
      className: className
    }, {
      props: props
    });
  };

  var createLabel = function createLabel() {
    if (props.label) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-button-label p-c"
      }, props.label);
    }

    return !props.children && !props.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "p-button-label p-c",
      dangerouslySetInnerHTML: {
        __html: '&nbsp;'
      }
    });
  };

  var createBadge = function createBadge() {
    if (props.badge) {
      var badgeClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_3__.classNames)('p-badge', props.badgeClassName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: badgeClassName
      }, props.badge);
    }

    return null;
  };

  var hasTooltip = primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(props.tooltip);
  var disabled = props.disabled || props.loading;
  var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.findDiffKeys(props, Button.defaultProps);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_3__.classNames)('p-button p-component', props.className, _defineProperty({
    'p-button-icon-only': (props.icon || props.loading && props.loadingIcon) && !props.label && !props.children,
    'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
    'p-disabled': disabled,
    'p-button-loading': props.loading,
    'p-button-loading-label-only': props.loading && !props.icon && props.label
  }, "p-button-loading-".concat(props.iconPos), props.loading && props.loadingIcon && props.label));
  var icon = createIcon();
  var label = createLabel();
  var badge = createBadge();
  var defaultAriaLabel = props.label ? props.label + (props.badge ? ' ' + props.badge : '') : props['aria-label'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", _extends({
    ref: elementRef,
    "aria-label": defaultAriaLabel
  }, otherProps, {
    className: className,
    disabled: disabled
  }), icon, label, props.children, badge, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_1__.Ripple, null)), hasTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
Button.displayName = 'Button';
Button.defaultProps = {
  __TYPE: 'Button',
  label: null,
  icon: null,
  iconPos: 'left',
  badge: null,
  badgeClassName: null,
  tooltip: null,
  tooltipOptions: null,
  disabled: false,
  loading: false,
  loadingIcon: 'pi pi-spinner pi-spin',
  visible: true
};




/***/ }),

/***/ "./node_modules/primereact/colorpicker/colorpicker.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/primereact/colorpicker/colorpicker.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPicker": function() { return /* binding */ ColorPicker; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_overlayservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/overlayservice */ "./node_modules/primereact/overlayservice/overlayservice.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_csstransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/csstransition */ "./node_modules/primereact/csstransition/csstransition.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");









function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var ColorPickerPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var createElement = function createElement() {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-colorpicker-panel', {
      'p-colorpicker-overlay-panel': !props.inline,
      'p-disabled': props.disabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_csstransition__WEBPACK_IMPORTED_MODULE_6__.CSSTransition, {
      nodeRef: ref,
      classNames: "p-connected-overlay",
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: props.onEnter,
      onEntered: props.onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: ref,
      className: className,
      onClick: props.onClick
    }, props.children));
  };

  var element = createElement();
  return props.inline ? element : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_7__.Portal, {
    element: element,
    appendTo: props.appendTo
  });
});
ColorPickerPanel.displayName = 'ColorPickerPanel';

var ColorPicker = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      overlayVisibleState = _React$useState2[0],
      setOverlayVisibleState = _React$useState2[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var overlayRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props.inputRef);
  var colorSelectorRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var colorHandleRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var hueHandleRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var hueViewRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var hueDragging = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var hsbValue = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var colorDragging = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);

  var _useOverlayListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useOverlayListener)({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var valid = _ref.valid;
      valid && hide();
    },
    when: overlayVisibleState
  }),
      _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2),
      bindOverlayListener = _useOverlayListener2[0],
      unbindOverlayListener = _useOverlayListener2[1];

  var _useEventListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useEventListener)({
    type: 'mousemove',
    listener: function listener(event) {
      colorDragging.current && pickColor(event);
      hueDragging.current && pickHue(event);
    }
  }),
      _useEventListener2 = _slicedToArray(_useEventListener, 2),
      bindDocumentMouseMoveListener = _useEventListener2[0],
      unbindDocumentMouseMoveListener = _useEventListener2[1];

  var _useEventListener3 = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useEventListener)({
    type: 'mouseup',
    listener: function listener() {
      colorDragging.current = hueDragging.current = false;
      primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.removeClass(elementRef.current, 'p-colorpicker-dragging');
      unbindDocumentMouseMoveListener();
      unbindDocumentMouseUpListener();
    }
  }),
      _useEventListener4 = _slicedToArray(_useEventListener3, 2),
      bindDocumentMouseUpListener = _useEventListener4[0],
      unbindDocumentMouseUpListener = _useEventListener4[1];

  var onPanelClick = function onPanelClick(event) {
    if (!props.inline) {
      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_3__.OverlayService.emit('overlay-click', {
        originalEvent: event,
        target: elementRef.current
      });
    }
  };

  var onHueMousedown = function onHueMousedown(event) {
    if (props.disabled) {
      return;
    }

    bindDragListeners();
    onHueDragStart(event);
  };

  var onHueDragStart = function onHueDragStart(event) {
    if (props.disabled) {
      return;
    }

    hueDragging.current = true;
    pickHue(event);
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(elementRef.current, 'p-colorpicker-dragging');
  };

  var pickHue = function pickHue(event) {
    var top = hueViewRef.current.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    hsbValue.current = validateHSB({
      h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY || event.changedTouches[0].pageY) - top))) / 150),
      s: 100,
      b: 100
    });
    updateColorSelector();
    updateHue();
    updateModel();
  };

  var onColorMousedown = function onColorMousedown(event) {
    if (props.disabled) {
      return;
    }

    bindDragListeners();
    onColorDragStart(event);
  };

  var onColorDragStart = function onColorDragStart(event) {
    if (props.disabled) {
      return;
    }

    colorDragging.current = true;
    pickColor(event);
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(elementRef.current, 'p-colorpicker-dragging');
    event.preventDefault();
  };

  var onDrag = function onDrag(event) {
    if (colorDragging.current) {
      pickColor(event);
      event.preventDefault();
    }

    if (hueDragging.current) {
      pickHue(event);
      event.preventDefault();
    }
  };

  var onDragEnd = function onDragEnd() {
    colorDragging.current = false;
    hueDragging.current = false;
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.removeClass(elementRef.current, 'p-colorpicker-dragging');
    unbindDragListeners();
  };

  var bindDragListeners = function bindDragListeners() {
    bindDocumentMouseMoveListener();
    bindDocumentMouseUpListener();
  };

  var unbindDragListeners = function unbindDragListeners() {
    unbindDocumentMouseMoveListener();
    unbindDocumentMouseUpListener();
  };

  var pickColor = function pickColor(event) {
    var rect = colorSelectorRef.current.getBoundingClientRect();
    var top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    var left = rect.left + document.body.scrollLeft;
    var saturation = Math.floor(100 * Math.max(0, Math.min(150, (event.pageX || event.changedTouches[0].pageX) - left)) / 150);
    var brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY || event.changedTouches[0].pageY) - top))) / 150);
    hsbValue.current = validateHSB({
      h: hsbValue.current.h,
      s: saturation,
      b: brightness
    });
    updateColorHandle();
    updateInput();
    updateModel();
  };

  var updateModel = function updateModel() {
    switch (props.format) {
      case 'hex':
        onChange(HSBtoHEX(hsbValue.current));
        break;

      case 'rgb':
        onChange(HSBtoRGB(hsbValue.current));
        break;

      case 'hsb':
        onChange(hsbValue.current);
        break;
    }
  };

  var toHSB = function toHSB(value) {
    var hsb;

    if (value) {
      switch (props.format) {
        case 'hex':
          hsb = HEXtoHSB(value);
          break;

        case 'rgb':
          hsb = RGBtoHSB(value);
          break;

        case 'hsb':
          hsb = value;
          break;
      }
    } else {
      hsb = HEXtoHSB(props.defaultColor);
    }

    return hsb;
  };

  var updateHSBValue = function updateHSBValue(value) {
    hsbValue.current = toHSB(value);
  };

  var onChange = function onChange(value) {
    if (props.onChange) {
      props.onChange({
        value: value,
        stopPropagation: function stopPropagation() {},
        preventDefault: function preventDefault() {},
        target: {
          name: props.name,
          id: props.id,
          value: value
        }
      });
    }
  };

  var updateColorSelector = function updateColorSelector() {
    if (colorSelectorRef.current) {
      var newHsbValue = validateHSB({
        h: hsbValue.current.h,
        s: 100,
        b: 100
      });
      colorSelectorRef.current.style.backgroundColor = '#' + HSBtoHEX(newHsbValue);
    }
  };

  var updateColorHandle = function updateColorHandle() {
    if (colorHandleRef.current) {
      colorHandleRef.current.style.left = Math.floor(150 * hsbValue.current.s / 100) + 'px';
      colorHandleRef.current.style.top = Math.floor(150 * (100 - hsbValue.current.b) / 100) + 'px';
    }
  };

  var updateHue = function updateHue() {
    if (hueHandleRef.current) {
      hueHandleRef.current.style.top = Math.floor(150 - 150 * hsbValue.current.h / 360) + 'px';
    }
  };

  var updateInput = function updateInput() {
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = '#' + HSBtoHEX(hsbValue.current);
    }
  };

  var show = function show() {
    setOverlayVisibleState(true);
  };

  var hide = function hide() {
    setOverlayVisibleState(false);
  };

  var onOverlayEnter = function onOverlayEnter() {
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.set('overlay', overlayRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].autoZIndex, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].zIndex.overlay);
    alignOverlay();
  };

  var onOverlayEntered = function onOverlayEntered() {
    bindOverlayListener();
    props.onShow && props.onShow();
  };

  var onOverlayExit = function onOverlayExit() {
    unbindOverlayListener();
  };

  var onOverlayExited = function onOverlayExited() {
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };

  var onInputClick = function onInputClick() {
    togglePanel();
  };

  var togglePanel = function togglePanel() {
    overlayVisibleState ? hide() : show();
  };

  var onInputKeydown = function onInputKeydown(event) {
    switch (event.which) {
      //space
      case 32:
        togglePanel();
        event.preventDefault();
        break;
      //escape and tab

      case 27:
      case 9:
        hide();
        break;
    }
  };

  var validateHSB = function validateHSB(hsb) {
    return {
      h: Math.min(360, Math.max(0, hsb.h)),
      s: Math.min(100, Math.max(0, hsb.s)),
      b: Math.min(100, Math.max(0, hsb.b))
    };
  };

  var HEXtoRGB = function HEXtoRGB(hex) {
    var hexValue = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
    return {
      r: hexValue >> 16,
      g: (hexValue & 0x00ff00) >> 8,
      b: hexValue & 0x0000ff
    };
  };

  var HEXtoHSB = function HEXtoHSB(hex) {
    return RGBtoHSB(HEXtoRGB(hex));
  };

  var RGBtoHSB = function RGBtoHSB(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max !== 0 ? 255 * delta / max : 0;

    if (hsb.s !== 0) {
      if (rgb.r === max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g === max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
      }
    } else {
      hsb.h = -1;
    }

    hsb.h *= 60;

    if (hsb.h < 0) {
      hsb.h += 360;
    }

    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  };

  var HSBtoRGB = function HSBtoRGB(hsb) {
    var rgb = {
      r: null,
      g: null,
      b: null
    };
    var h = Math.round(hsb.h);
    var s = Math.round(hsb.s * 255 / 100);
    var v = Math.round(hsb.b * 255 / 100);

    if (s === 0) {
      rgb = {
        r: v,
        g: v,
        b: v
      };
    } else {
      var t1 = v;
      var t2 = (255 - s) * v / 255;
      var t3 = (t1 - t2) * (h % 60) / 60;
      if (h === 360) h = 0;

      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }

    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b)
    };
  };

  var RGBtoHEX = function RGBtoHEX(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];

    for (var key in hex) {
      if (hex[key].length === 1) {
        hex[key] = '0' + hex[key];
      }
    }

    return hex.join('');
  };

  var HSBtoHEX = function HSBtoHEX(hsb) {
    return RGBtoHEX(HSBtoRGB(hsb));
  };

  var updateUI = function updateUI() {
    updateHue();
    updateColorHandle();
    updateInput();
    updateColorSelector();
  };

  var alignOverlay = function alignOverlay() {
    if (inputRef.current) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].appendTo);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      show: show,
      hide: hide,
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useMountEffect)(function () {
    updateHSBValue(props.value);
    updateUI();
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (!colorDragging.current && !hueDragging.current) {
      updateHSBValue(props.value);
    }
  }, [props.value]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    updateUI();
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnmountEffect)(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(overlayRef.current);
  });

  var createColorSelector = function createColorSelector() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: colorSelectorRef,
      className: "p-colorpicker-color-selector",
      onMouseDown: onColorMousedown,
      onTouchStart: onColorDragStart,
      onTouchMove: onDrag,
      onTouchEnd: onDragEnd
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-colorpicker-color"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: colorHandleRef,
      className: "p-colorpicker-color-handle"
    })));
  };

  var createHue = function createHue() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: hueViewRef,
      className: "p-colorpicker-hue",
      onMouseDown: onHueMousedown,
      onTouchStart: onHueDragStart,
      onTouchMove: onDrag,
      onTouchEnd: onDragEnd
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: hueHandleRef,
      className: "p-colorpicker-hue-handle"
    }));
  };

  var createContent = function createContent() {
    var colorSelector = createColorSelector();
    var hue = createHue();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-colorpicker-content"
    }, colorSelector, hue);
  };

  var createInput = function createInput() {
    if (!props.inline) {
      var inputClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-colorpicker-preview p-inputtext', {
        'p-disabled': props.disabled
      });
      var inputProps = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.findDiffKeys(props, ColorPicker.defaultProps);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
        ref: inputRef,
        type: "text",
        className: inputClassName,
        readOnly: true,
        id: props.inputId,
        tabIndex: props.tabIndex,
        disabled: props.disabled,
        onClick: onInputClick,
        onKeyDown: onInputKeydown
      }, inputProps));
    }

    return null;
  };

  var hasTooltip = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.findDiffKeys(props, ColorPicker.defaultProps);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-colorpicker p-component', {
    'p-colorpicker-overlay': !props.inline
  }, props.className);
  var content = createContent();
  var input = createInput();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: elementRef,
    id: props.id,
    style: props.style,
    className: className
  }, otherProps), input, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorPickerPanel, {
    ref: overlayRef,
    appendTo: props.appendTo,
    inline: props.inline,
    disabled: props.disabled,
    onClick: onPanelClick,
    "in": props.inline || overlayVisibleState,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    transitionOptions: props.transitionOptions
  }, content)), hasTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
ColorPicker.displayName = 'ColorPicker';
ColorPicker.defaultProps = {
  __TYPE: 'ColorPicker',
  id: null,
  inputRef: null,
  value: null,
  style: null,
  className: null,
  defaultColor: 'ff0000',
  inline: false,
  format: 'hex',
  appendTo: null,
  disabled: false,
  tabIndex: null,
  inputId: null,
  tooltip: null,
  tooltipOptions: null,
  transitionOptions: null,
  onChange: null,
  onShow: null,
  onHide: null
};




/***/ }),

/***/ "./node_modules/primereact/column/column.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primereact/column/column.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": function() { return /* binding */ Column; }
/* harmony export */ });
var Column = function Column() {};
Column.displayName = 'Column';
Column.defaultProps = {
  __TYPE: 'Column',
  align: null,
  alignFrozen: 'left',
  alignHeader: null,
  body: null,
  bodyClassName: null,
  bodyStyle: null,
  cellEditValidator: null,
  cellEditValidatorEvent: 'click',
  className: null,
  colSpan: null,
  columnKey: null,
  dataType: 'text',
  editor: null,
  excludeGlobalFilter: false,
  expander: false,
  exportField: null,
  exportable: true,
  field: null,
  filter: false,
  filterApply: null,
  filterClear: null,
  filterElement: null,
  filterField: null,
  filterFooter: null,
  filterFunction: null,
  filterHeader: null,
  filterHeaderClassName: null,
  filterHeaderStyle: null,
  filterMatchMode: null,
  filterMatchModeOptions: null,
  filterMaxLength: null,
  filterMenuClassName: null,
  filterMenuStyle: null,
  filterPlaceholder: null,
  filterType: 'text',
  footer: null,
  footerClassName: null,
  footerStyle: null,
  frozen: false,
  header: null,
  headerClassName: null,
  headerStyle: null,
  headerTooltip: null,
  headerTooltipOptions: null,
  hidden: false,
  maxConstraints: 2,
  onBeforeCellEditHide: null,
  onBeforeCellEditShow: null,
  onCellEditCancel: null,
  onCellEditComplete: null,
  onCellEditInit: null,
  onFilterApplyClick: null,
  onFilterClear: null,
  onFilterConstraintAdd: null,
  onFilterConstraintRemove: null,
  onFilterMatchModeChange: null,
  onFilterOperatorChange: null,
  reorderable: true,
  resizeable: true,
  rowEditor: false,
  rowReorder: false,
  rowReorderIcon: 'pi pi-bars',
  rowSpan: null,
  selectionMode: null,
  showAddButton: true,
  showApplyButton: true,
  showClearButton: true,
  showFilterMatchModes: true,
  showFilterMenu: true,
  showFilterMenuOptions: true,
  showFilterOperator: true,
  sortField: null,
  sortFunction: null,
  sortable: false,
  sortableDisabled: false,
  style: null
};




/***/ }),

/***/ "./node_modules/primereact/csstransition/csstransition.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/primereact/csstransition/csstransition.esm.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSTransition": function() { return /* binding */ CSSTransition; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");






function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var CSSTransition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var disabled = props.disabled || props.options && props.options.disabled || !primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].cssTransition;

  var onEnter = function onEnter(node, isAppearing) {
    props.onEnter && props.onEnter(node, isAppearing); // component

    props.options && props.options.onEnter && props.options.onEnter(node, isAppearing); // user option
  };

  var onEntering = function onEntering(node, isAppearing) {
    props.onEntering && props.onEntering(node, isAppearing); // component

    props.options && props.options.onEntering && props.options.onEntering(node, isAppearing); // user option
  };

  var onEntered = function onEntered(node, isAppearing) {
    props.onEntered && props.onEntered(node, isAppearing); // component

    props.options && props.options.onEntered && props.options.onEntered(node, isAppearing); // user option
  };

  var onExit = function onExit(node) {
    props.onExit && props.onExit(node); // component

    props.options && props.options.onExit && props.options.onExit(node); // user option
  };

  var onExiting = function onExiting(node) {
    props.onExiting && props.onExiting(node); // component

    props.options && props.options.onExiting && props.options.onExiting(node); // user option
  };

  var onExited = function onExited(node) {
    props.onExited && props.onExited(node); // component

    props.options && props.options.onExited && props.options.onExited(node); // user option
  };

  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (disabled) {
      // no animation
      var node = primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.getRefElement(props.nodeRef);

      if (props["in"]) {
        onEnter(node, true);
        onEntering(node, true);
        onEntered(node, true);
      } else {
        onExit(node);
        onExiting(node);
        onExited(node);
      }
    }
  }, [props["in"]]);

  if (disabled) {
    return props["in"] ? props.children : null;
  } else {
    var immutableProps = {
      nodeRef: props.nodeRef,
      "in": props["in"],
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited
    };
    var mutableProps = {
      classNames: props.classNames,
      timeout: props.timeout,
      unmountOnExit: props.unmountOnExit
    };

    var mergedProps = _objectSpread(_objectSpread(_objectSpread({}, mutableProps), props.options || {}), immutableProps);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["default"], mergedProps, props.children);
  }
});
CSSTransition.displayName = 'CSSTransition';
CSSTransition.defaultProps = {
  __TYPE: 'CSSTransition'
};




/***/ }),

/***/ "./node_modules/primereact/datatable/datatable.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/datatable/datatable.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTable": function() { return /* binding */ DataTable; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/paginator */ "./node_modules/primereact/paginator/paginator.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/virtualscroller */ "./node_modules/primereact/virtualscroller/virtualscroller.esm.js");
/* harmony import */ var primereact_overlayservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/overlayservice */ "./node_modules/primereact/overlayservice/overlayservice.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_csstransition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/csstransition */ "./node_modules/primereact/csstransition/csstransition.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");















function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var RowCheckbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusedState = _React$useState2[0],
      setFocusedState = _React$useState2[1];

  var onFocus = function onFocus() {
    setFocusedState(true);
  };

  var onBlur = function onBlur() {
    setFocusedState(false);
  };

  var onClick = function onClick(event) {
    if (!props.disabled) {
      setFocusedState(true);
      props.onChange(event);
    }
  };

  var onKeyDown = function onKeyDown(event) {
    if (event.code === 'Space') {
      onClick(event);
      event.preventDefault();
    }
  };

  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-checkbox p-component', {
    'p-checkbox-focused': focusedState
  });
  var boxClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-checkbox-box p-component', {
    'p-highlight': props.checked,
    'p-disabled': props.disabled,
    'p-focus': focusedState
  });
  var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-checkbox-icon', {
    'pi pi-check': props.checked
  });
  var tabIndex = props.disabled ? null : '0';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: boxClassName,
    role: "checkbox",
    "aria-checked": props.checked,
    tabIndex: tabIndex,
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-label": props.ariaLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: iconClassName
  })));
});
RowCheckbox.displayName = 'RowCheckbox';

var RowRadioButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusedState = _React$useState2[0],
      setFocusedState = _React$useState2[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var onFocus = function onFocus() {
    setFocusedState(true);
  };

  var onBlur = function onBlur() {
    setFocusedState(false);
  };

  var onClick = function onClick(event) {
    if (!props.disabled) {
      props.onChange(event);
      primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(inputRef.current);
    }
  };

  var onKeyDown = function onKeyDown(event) {
    if (event.code === 'Space') {
      onClick(event);
      event.preventDefault();
    }
  };

  var onChange = function onChange(event) {
    onClick(event);
  };

  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-radiobutton p-component', {
    'p-radiobutton-focused': focusedState
  });
  var boxClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-radiobutton-box p-component', {
    'p-highlight': props.checked,
    'p-focus': focusedState,
    'p-disabled': props.disabled
  });
  var name = "".concat(props.tableSelector, "_dt_radio");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-hidden-accessible"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    name: name,
    ref: inputRef,
    type: "radio",
    checked: props.checked,
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: onChange,
    onKeyDown: onKeyDown,
    "aria-label": props.ariaLabel
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: boxClassName,
    onClick: onClick,
    role: "radio",
    "aria-checked": props.checked
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-radiobutton-icon"
  })));
});
RowRadioButton.displayName = 'RowRadioButton';

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var BodyCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.editing),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      editingState = _React$useState2[0],
      setEditingState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.rowData),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      editingRowDataState = _React$useState4[0],
      setEditingRowDataState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      styleObjectState = _React$useState6[0],
      setStyleObjectState = _React$useState6[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var keyHelperRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var overlayEventListener = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var selfClick = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var tabindexTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var initFocusTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var getColumnProp = function getColumnProp(prop) {
    return props.column ? props.column.props[prop] : null;
  };

  var field = getColumnProp('field') || "field_".concat(props.index);
  var editingKey = props.dataKey ? props.rowData[props.dataKey] || props.rowIndex : props.rowIndex;

  var _useEventListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useEventListener)({
    type: 'click',
    listener: function listener(e) {
      if (!selfClick.current && isOutsideClicked(e.target)) {
        switchCellToViewMode(e, true);
      }

      selfClick.current = false;
    },
    options: true
  }),
      _useEventListener2 = _slicedToArray(_useEventListener, 2),
      bindDocumentClickListener = _useEventListener2[0],
      unbindDocumentClickListener = _useEventListener2[1];

  if (props.editMode === 'row' && props.editing !== editingState) {
    setEditingState(props.editing);
  }

  var isEditable = function isEditable() {
    return getColumnProp('editor');
  };

  var isSelected = function isSelected() {
    return props.selection ? props.selection instanceof Array ? findIndex(props.selection) > -1 : equals(props.selection) : false;
  };

  var equalsData = function equalsData(data) {
    return props.compareSelectionBy === 'equals' ? data === props.rowData : primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(data, props.rowData, props.dataKey);
  };

  var equals = function equals(selectedCell) {
    return (selectedCell.rowIndex === props.rowIndex || equalsData(selectedCell.rowData)) && (selectedCell.field === field || selectedCell.cellIndex === props.index);
  };

  var isOutsideClicked = function isOutsideClicked(target) {
    return elementRef.current && !(elementRef.current.isSameNode(target) || elementRef.current.contains(target));
  };

  var getVirtualScrollerOption = function getVirtualScrollerOption(option) {
    return props.virtualScrollerOptions ? props.virtualScrollerOptions[option] : null;
  };

  var getStyle = function getStyle() {
    var bodyStyle = getColumnProp('bodyStyle');
    var columnStyle = getColumnProp('style');
    return getColumnProp('frozen') ? Object.assign({}, columnStyle, bodyStyle, styleObjectState) : Object.assign({}, columnStyle, bodyStyle);
  };

  var getCellParams = function getCellParams() {
    return {
      value: resolveFieldData(),
      field: field,
      rowData: props.rowData,
      rowIndex: props.rowIndex,
      cellIndex: props.index,
      selected: isSelected(),
      column: props.column,
      props: props
    };
  };

  var getCellCallbackParams = function getCellCallbackParams(event) {
    var params = getCellParams();
    return _objectSpread$7({
      originalEvent: event
    }, params);
  };

  var resolveFieldData = function resolveFieldData(data) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(data || props.rowData, field);
  };

  var getEditingRowData = function getEditingRowData() {
    return props.editingMeta && props.editingMeta[editingKey] ? props.editingMeta[editingKey].data : props.rowData;
  };

  var getTabIndex = function getTabIndex(cellSelected) {
    return props.allowCellSelection ? cellSelected ? 0 : props.rowIndex === 0 && props.index === 0 ? props.tabIndex : -1 : null;
  };

  var findIndex = function findIndex(collection) {
    return (collection || []).findIndex(function (data) {
      return equals(data);
    });
  };

  var closeCell = function closeCell(event) {
    var params = getCellCallbackParams(event);
    var onBeforeCellEditHide = getColumnProp('onBeforeCellEditHide');

    if (onBeforeCellEditHide) {
      onBeforeCellEditHide(params);
    }
    /* When using the 'tab' key, the focus event of the next cell is not called in IE. */


    setTimeout(function () {
      setEditingState(false);
      unbindDocumentClickListener();
      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_6__.OverlayService.off('overlay-click', overlayEventListener.current);
      overlayEventListener.current = null;
      selfClick.current = false;
    }, 1);
  };

  var switchCellToViewMode = function switchCellToViewMode(event, submit) {
    var callbackParams = getCellCallbackParams(event);
    var newRowData = editingRowDataState;
    var newValue = resolveFieldData(newRowData);

    var params = _objectSpread$7(_objectSpread$7({}, callbackParams), {}, {
      newRowData: newRowData,
      newValue: newValue
    });

    var onCellEditCancel = getColumnProp('onCellEditCancel');
    var cellEditValidator = getColumnProp('cellEditValidator');
    var onCellEditComplete = getColumnProp('onCellEditComplete');

    if (!submit && onCellEditCancel) {
      onCellEditCancel(params);
    }

    var valid = true;

    if (cellEditValidator) {
      valid = cellEditValidator(params);
    }

    if (valid) {
      if (submit && onCellEditComplete) {
        onCellEditComplete(params);
      }

      closeCell(event);
    } else {
      event.preventDefault();
    }
  };

  var findNextSelectableCell = function findNextSelectableCell(cell) {
    var nextCell = cell.nextElementSibling;
    return nextCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(nextCell, 'p-selectable-cell') ? nextCell : findNextSelectableCell(nextCell) : null;
  };

  var findPrevSelectableCell = function findPrevSelectableCell(cell) {
    var prevCell = cell.previousElementSibling;
    return prevCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(prevCell, 'p-selectable-cell') ? prevCell : findPrevSelectableCell(prevCell) : null;
  };

  var findDownSelectableCell = function findDownSelectableCell(cell) {
    var downRow = cell.parentElement.nextElementSibling;
    var downCell = downRow ? downRow.children[props.index] : null;
    return downRow && downCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(downRow, 'p-selectable-row') && primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(downCell, 'p-selectable-cell') ? downCell : findDownSelectableCell(downCell) : null;
  };

  var findUpSelectableCell = function findUpSelectableCell(cell) {
    var upRow = cell.parentElement.previousElementSibling;
    var upCell = upRow ? upRow.children[props.index] : null;
    return upRow && upCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(upRow, 'p-selectable-row') && primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(upCell, 'p-selectable-cell') ? upCell : findUpSelectableCell(upCell) : null;
  };

  var changeTabIndex = function changeTabIndex(currentCell, nextCell) {
    if (currentCell && nextCell) {
      currentCell.tabIndex = -1;
      nextCell.tabIndex = props.tabIndex;
    }
  };

  var focusOnElement = function focusOnElement() {
    clearTimeout(tabindexTimeout.current);
    tabindexTimeout.current = setTimeout(function () {
      if (editingState) {
        var focusableEl = props.editMode === 'cell' ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getFirstFocusableElement(elementRef.current, ':not(.p-cell-editor-key-helper)') : primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(elementRef.current, '.p-row-editor-save');
        focusableEl && focusableEl.focus();
      }

      keyHelperRef.current && (keyHelperRef.current.tabIndex = editingState ? -1 : 0);
    }, 1);
  };

  var focusOnInit = function focusOnInit() {
    clearTimeout(initFocusTimeout.current);
    initFocusTimeout.current = setTimeout(function () {
      var focusableEl = props.editMode === 'row' ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(elementRef.current, '.p-row-editor-init') : null;
      focusableEl && focusableEl.focus();
    }, 1);
  };

  var updateStickyPosition = function updateStickyPosition() {
    if (getColumnProp('frozen')) {
      var styleObject = _objectSpread$7({}, styleObjectState);

      var align = getColumnProp('alignFrozen');

      if (align === 'right') {
        var right = 0;
        var next = elementRef.current.nextElementSibling;

        if (next) {
          right = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
        }

        styleObject['right'] = right + 'px';
      } else {
        var left = 0;
        var prev = elementRef.current.previousElementSibling;

        if (prev) {
          left = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
        }

        styleObject['left'] = left + 'px';
      }

      var isSameStyle = styleObjectState['left'] === styleObject['left'] && styleObjectState['right'] === styleObject['right'];
      !isSameStyle && setStyleObjectState(styleObject);
    }
  };

  var editorCallback = function editorCallback(val) {
    var editingRowData = _objectSpread$7({}, editingRowDataState);

    editingRowData[field] = val;
    setEditingRowDataState(editingRowData); // update editing meta for complete methods on row mode

    props.editingMeta[editingKey].data[field] = val;
  };

  var onClick = function onClick(event) {
    var params = getCellCallbackParams(event);

    if (props.editMode !== 'row' && isEditable() && !editingState && (props.selectOnEdit || !props.selectOnEdit && props.selected)) {
      selfClick.current = true;
      var onBeforeCellEditShow = getColumnProp('onBeforeCellEditShow');
      var onCellEditInit = getColumnProp('onCellEditInit');
      var cellEditValidatorEvent = getColumnProp('cellEditValidatorEvent');

      if (onBeforeCellEditShow) {
        onBeforeCellEditShow(params);
      } // If the data is sorted using sort icon, it has been added to wait for the sort operation when any cell is wanted to be opened.


      setTimeout(function () {
        setEditingState(true);

        if (onCellEditInit) {
          onCellEditInit(params);
        }

        if (cellEditValidatorEvent === 'click') {
          bindDocumentClickListener();

          overlayEventListener.current = function (e) {
            if (!isOutsideClicked(e.target)) {
              selfClick.current = true;
            }
          };

          primereact_overlayservice__WEBPACK_IMPORTED_MODULE_6__.OverlayService.on('overlay-click', overlayEventListener.current);
        }
      }, 1);
    }

    if (props.allowCellSelection && props.onClick) {
      props.onClick(params);
    }
  };

  var onMouseDown = function onMouseDown(event) {
    var params = getCellCallbackParams(event);
    props.onMouseDown && props.onMouseDown(params);
  };

  var onMouseUp = function onMouseUp(event) {
    var params = getCellCallbackParams(event);
    props.onMouseUp && props.onMouseUp(params);
  };

  var onKeyDown = function onKeyDown(event) {
    if (props.editMode !== 'row') {
      if (event.which === 13 || event.which === 9) {
        // tab || enter
        switchCellToViewMode(event, true);
      }

      if (event.which === 27) {
        // escape
        switchCellToViewMode(event, false);
      }
    }

    if (props.allowCellSelection) {
      var target = event.target,
          cell = event.currentTarget;

      switch (event.which) {
        //left arrow
        case 37:
          var prevCell = findPrevSelectableCell(cell);

          if (prevCell) {
            changeTabIndex(cell, prevCell);
            prevCell.focus();
          }

          event.preventDefault();
          break;
        //right arrow

        case 39:
          var nextCell = findNextSelectableCell(cell);

          if (nextCell) {
            changeTabIndex(cell, nextCell);
            nextCell.focus();
          }

          event.preventDefault();
          break;
        //up arrow

        case 38:
          var upCell = findUpSelectableCell(cell);

          if (upCell) {
            changeTabIndex(cell, upCell);
            upCell.focus();
          }

          event.preventDefault();
          break;
        //down arrow

        case 40:
          var downCell = findDownSelectableCell(cell);

          if (downCell) {
            changeTabIndex(cell, downCell);
            downCell.focus();
          }

          event.preventDefault();
          break;
        //enter

        case 13:
          // @deprecated
          if (!primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.isClickable(target)) {
            onClick(event);
            event.preventDefault();
          }

          break;
        //space

        case 32:
          if (!primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.isClickable(target) && !target.readOnly) {
            onClick(event);
            event.preventDefault();
          }

          break;
      }
    }
  };

  var onBlur = function onBlur(event) {
    selfClick.current = false;

    if (props.editMode !== 'row' && editingState && getColumnProp('cellEditValidatorEvent') === 'blur') {
      switchCellToViewMode(event, true);
    }
  };

  var onEditorFocus = function onEditorFocus(event) {
    onClick(event);
  };

  var onRadioChange = function onRadioChange(event) {
    props.onRadioChange({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };

  var onCheckboxChange = function onCheckboxChange(event) {
    props.onCheckboxChange({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };

  var onRowToggle = function onRowToggle(event) {
    props.onRowToggle({
      originalEvent: event,
      data: props.rowData
    });
    event.preventDefault();
  };

  var onRowEditInit = function onRowEditInit(event) {
    props.onRowEditInit({
      originalEvent: event,
      data: props.rowData,
      newData: getEditingRowData(),
      field: field,
      index: props.rowIndex
    });
  };

  var onRowEditSave = function onRowEditSave(event) {
    props.onRowEditSave({
      originalEvent: event,
      data: props.rowData,
      newData: getEditingRowData(),
      field: field,
      index: props.rowIndex
    });
    focusOnInit();
  };

  var onRowEditCancel = function onRowEditCancel(event) {
    props.onRowEditCancel({
      originalEvent: event,
      data: props.rowData,
      newData: getEditingRowData(),
      field: field,
      index: props.rowIndex
    });
    focusOnInit();
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (getColumnProp('frozen')) {
      updateStickyPosition();
    }

    if (props.editMode === 'cell' || props.editMode === 'row') {
      focusOnElement();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (props.editMode === 'cell' || props.editMode === 'row') {
      setEditingRowDataState(getEditingRowData());
    }
  }, [props.editingMeta]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (props.editMode === 'cell' || props.editMode === 'row') {
      var callbackParams = getCellCallbackParams();

      var params = _objectSpread$7(_objectSpread$7({}, callbackParams), {}, {
        editing: editingState,
        editingKey: editingKey
      });

      props.onEditingMetaChange(params);
    }
  }, [editingState]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnmountEffect)(function () {
    if (overlayEventListener.current) {
      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_6__.OverlayService.off('overlay-click', overlayEventListener.current);
      overlayEventListener.current = null;
    }
  });

  var createLoading = function createLoading() {
    var options = getVirtualScrollerOption('getLoaderOptions')(props.rowIndex, {
      cellIndex: props.index,
      cellFirst: props.index === 0,
      cellLast: props.index === getVirtualScrollerOption('columns').length - 1,
      cellEven: props.index % 2 === 0,
      cellOdd: props.index % 2 !== 0,
      column: props.column,
      field: field
    });
    var content = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(getVirtualScrollerOption('loadingTemplate'), options);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, content);
  };

  var createElement = function createElement() {
    var content, editorKeyHelper;
    var cellSelected = props.allowCellSelection && isSelected();
    var isRowEditor = props.editMode === 'row';
    var tabIndex = getTabIndex(cellSelected);
    var selectionMode = getColumnProp('selectionMode');
    var rowReorder = getColumnProp('rowReorder');
    var rowEditor = getColumnProp('rowEditor');
    var header = getColumnProp('header');
    var body = getColumnProp('body');
    var editor = getColumnProp('editor');
    var frozen = getColumnProp('frozen');
    var align = getColumnProp('align');
    var value = resolveFieldData();
    var columnBodyOptions = {
      column: props.column,
      field: field,
      rowIndex: props.rowIndex,
      frozenRow: props.frozenRow,
      props: props.tableProps
    };
    var expander = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getPropValue(getColumnProp('expander'), props.rowData, columnBodyOptions);
    var cellClassName = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getPropValue(props.cellClassName, value, columnBodyOptions);
    var bodyClassName = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getPropValue(getColumnProp('bodyClassName'), props.rowData, columnBodyOptions);
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(bodyClassName, getColumnProp('className'), cellClassName, _defineProperty({
      'p-selection-column': selectionMode !== null,
      'p-editable-column': editor,
      'p-cell-editing': editor && editingState,
      'p-frozen-column': frozen,
      'p-selectable-cell': props.allowCellSelection && props.isSelectable({
        data: getCellParams(),
        index: props.rowIndex
      }),
      'p-highlight': cellSelected
    }, "p-align-".concat(align), !!align));
    var style = getStyle();
    var title = props.responsiveLayout === 'stack' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "p-column-title"
    }, primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(header, {
      props: props.tableProps
    }));

    if (selectionMode) {
      var showSelection = props.showSelectionElement ? props.showSelectionElement(props.rowData, {
        rowIndex: props.rowIndex,
        props: props.tableProps
      }) : true;
      var label;

      if (showSelection) {
        var ariaLabelField = props.selectionAriaLabel || props.tableProps.dataKey;
        var ariaLabelText = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(props.rowData, ariaLabelField);
        label = "".concat(props.selected ? (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.ariaLabel)('unselectLabel') : (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.ariaLabel)('selectLabel'), " ").concat(ariaLabelText);
      }

      content = showSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, selectionMode === 'single' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowRadioButton, {
        checked: props.selected,
        onChange: onRadioChange,
        tabIndex: props.tabIndex,
        tableSelector: props.tableSelector,
        ariaLabel: label
      }), selectionMode === 'multiple' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowCheckbox, {
        checked: props.selected,
        onChange: onCheckboxChange,
        tabIndex: props.tabIndex,
        ariaLabel: label
      }));
    } else if (rowReorder) {
      var showReorder = props.showRowReorderElement ? props.showRowReorderElement(props.rowData, {
        rowIndex: props.rowIndex,
        props: props.tableProps
      }) : true;
      content = showReorder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-datatable-reorderablerow-handle', getColumnProp('rowReorderIcon'))
      });
    } else if (expander) {
      var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-row-toggler-icon', props.expanded ? props.expandedRowIcon : props.collapsedRowIcon);
      var ariaControls = "".concat(props.tableSelector, "_content_").concat(props.rowIndex, "_expanded");

      var _ariaLabelField = props.selectionAriaLabel || props.tableProps.dataKey;

      var _ariaLabelText = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(props.rowData, _ariaLabelField);

      var _label = "".concat(props.expanded ? (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.ariaLabel)('collapseLabel') : (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.ariaLabel)('expandLabel'), " ").concat(_ariaLabelText);

      var expanderProps = {
        onClick: onRowToggle,
        className: 'p-row-toggler p-link',
        iconClassName: iconClassName
      };
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: expanderProps.className,
        onClick: expanderProps.onClick,
        type: "button",
        "aria-expanded": props.expanded,
        "aria-controls": ariaControls,
        tabIndex: props.tabIndex,
        "aria-label": _label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: expanderProps.iconClassName,
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, null));

      if (body) {
        expanderProps['element'] = content;
        content = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(body, props.rowData, {
          column: props.column,
          field: field,
          rowIndex: props.rowIndex,
          frozenRow: props.frozenRow,
          props: props.tableProps,
          expander: expanderProps
        });
      }
    } else if (isRowEditor && rowEditor) {
      var rowEditorProps = {};

      if (editingState) {
        rowEditorProps = {
          editing: true,
          onSaveClick: onRowEditSave,
          saveClassName: 'p-row-editor-save p-link',
          saveIconClassName: 'p-row-editor-save-icon pi pi-fw pi-check',
          onCancelClick: onRowEditCancel,
          cancelClassName: 'p-row-editor-cancel p-link',
          cancelIconClassName: 'p-row-editor-cancel-icon pi pi-fw pi-times'
        };
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          type: "button",
          name: "row-save",
          onClick: rowEditorProps.onSaveClick,
          className: rowEditorProps.saveClassName,
          tabIndex: props.tabIndex
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: rowEditorProps.saveIconClassName
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          type: "button",
          name: "row-cancel",
          onClick: rowEditorProps.onCancelClick,
          className: rowEditorProps.cancelClassName,
          tabIndex: props.tabIndex
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: rowEditorProps.cancelIconClassName
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, null)));
      } else {
        rowEditorProps = {
          editing: false,
          onInitClick: onRowEditInit,
          initClassName: 'p-row-editor-init p-link',
          initIconClassName: 'p-row-editor-init-icon pi pi-fw pi-pencil'
        };
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          type: "button",
          name: "row-edit",
          onClick: rowEditorProps.onInitClick,
          className: rowEditorProps.initClassName,
          tabIndex: props.tabIndex
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: rowEditorProps.initIconClassName
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, null));
      }

      if (body) {
        rowEditorProps['element'] = content;
        content = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(body, props.rowData, {
          column: props.column,
          field: field,
          rowIndex: props.rowIndex,
          frozenRow: props.frozenRow,
          props: props.tableProps,
          rowEditor: rowEditorProps
        });
      }
    } else if (body && (!editingState || !editor)) {
      content = body ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(body, props.rowData, {
        column: props.column,
        field: field,
        rowIndex: props.rowIndex,
        frozenRow: props.frozenRow,
        props: props.tableProps
      }) : value;
    } else if (editor && editingState) {
      content = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(editor, {
        rowData: editingRowDataState,
        value: resolveFieldData(editingRowDataState),
        column: props.column,
        field: field,
        rowIndex: props.rowIndex,
        frozenRow: props.frozenRow,
        props: props.tableProps,
        editorCallback: editorCallback
      });
    } else {
      content = value;
    }

    if (!isRowEditor && editor) {
      /* eslint-disable */
      editorKeyHelper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        tabIndex: "0",
        ref: keyHelperRef,
        className: "p-cell-editor-key-helper p-hidden-accessible",
        onFocus: onEditorFocus
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null));
      /* eslint-enable */
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      ref: elementRef,
      style: style,
      className: className,
      rowSpan: props.rowSpan,
      tabIndex: tabIndex,
      role: "cell",
      onClick: onClick,
      onKeyDown: onKeyDown,
      onBlur: onBlur,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp
    }, editorKeyHelper, title, content);
  };

  return getVirtualScrollerOption('loading') ? createLoading() : createElement();
});
BodyCell.displayName = 'BodyCell';

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var BodyRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      editingState = _React$useState2[0],
      setEditingState = _React$useState2[1];

  var editing = props.onRowEditChange ? props.editing : editingState;

  var isFocusable = function isFocusable() {
    return props.selectionMode && props.selectionModeInColumn !== 'single' && props.selectionModeInColumn !== 'multiple';
  };

  var isGrouped = function isGrouped(column) {
    if (props.groupRowsBy && getColumnProp(column, 'field')) {
      return Array.isArray(props.groupRowsBy) ? props.groupRowsBy.indexOf(column.props.field) > -1 : props.groupRowsBy === column.props.field;
    }

    return false;
  };

  var equals = function equals(data1, data2) {
    return props.compareSelectionBy === 'equals' ? data1 === data2 : primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(data1, data2, props.dataKey);
  };

  var getColumnProp = function getColumnProp(col, prop) {
    return col ? col.props[prop] : null;
  };

  var getTabIndex = function getTabIndex() {
    return isFocusable() && !props.allowCellSelection ? props.index === 0 ? props.tabIndex : -1 : null;
  };

  var findIndex = function findIndex(collection, rowData) {
    return (collection || []).findIndex(function (data) {
      return equals(rowData, data);
    });
  };

  var changeTabIndex = function changeTabIndex(currentRow, nextRow) {
    if (currentRow && nextRow) {
      currentRow.tabIndex = -1;
      nextRow.tabIndex = props.tabIndex;
    }
  };

  var findNextSelectableRow = function findNextSelectableRow(row) {
    var nextRow = row.nextElementSibling;
    return nextRow ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(nextRow, 'p-selectable-row') ? nextRow : findNextSelectableRow(nextRow) : null;
  };

  var findPrevSelectableRow = function findPrevSelectableRow(row) {
    var prevRow = row.previousElementSibling;
    return prevRow ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(prevRow, 'p-selectable-row') ? prevRow : findPrevSelectableRow(prevRow) : null;
  };

  var shouldRenderBodyCell = function shouldRenderBodyCell(value, column, i) {
    if (getColumnProp(column, 'hidden')) {
      return false;
    } else if (props.rowGroupMode && props.rowGroupMode === 'rowspan' && isGrouped(column)) {
      var prevRowData = value[i - 1];

      if (prevRowData) {
        var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(value[i], getColumnProp(column, 'field'));
        var previousRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(prevRowData, getColumnProp(column, 'field'));
        return currentRowFieldData !== previousRowFieldData;
      }
    }

    return true;
  };

  var calculateRowGroupSize = function calculateRowGroupSize(value, column, index) {
    if (isGrouped(column)) {
      var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(value[index], getColumnProp(column, 'field'));
      var nextRowFieldData = currentRowFieldData;
      var groupRowSpan = 0;

      while (currentRowFieldData === nextRowFieldData) {
        groupRowSpan++;
        var nextRowData = value[++index];

        if (nextRowData) {
          nextRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(nextRowData, getColumnProp(column, 'field'));
        } else {
          break;
        }
      }

      return groupRowSpan === 1 ? null : groupRowSpan;
    } else {
      return null;
    }
  };

  var onClick = function onClick(event) {
    props.onRowClick({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onDoubleClick = function onDoubleClick(event) {
    props.onRowDoubleClick({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onRightClick = function onRightClick(event) {
    props.onRowRightClick({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onTouchEnd = function onTouchEnd(event) {
    props.onRowTouchEnd(event);
  };

  var onKeyDown = function onKeyDown(event) {
    if (isFocusable() && !props.allowCellSelection) {
      var target = event.target,
          row = event.currentTarget;

      switch (event.which) {
        //down arrow
        case 40:
          var nextRow = findNextSelectableRow(row);

          if (nextRow) {
            changeTabIndex(row, nextRow);
            nextRow.focus();
          }

          event.preventDefault();
          break;
        //up arrow

        case 38:
          var prevRow = findPrevSelectableRow(row);

          if (prevRow) {
            changeTabIndex(row, prevRow);
            prevRow.focus();
          }

          event.preventDefault();
          break;
        //enter

        case 13:
          // @deprecated
          if (!primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.isClickable(target)) {
            onClick(event);
            event.preventDefault();
          }

          break;
        //space

        case 32:
          if (!primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.isClickable(target) && !target.readOnly) {
            onClick(event);
            event.preventDefault();
          }

          break;
      }
    }
  };

  var onMouseDown = function onMouseDown(event) {
    props.onRowMouseDown({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onMouseUp = function onMouseUp(event) {
    props.onRowMouseUp({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onDragStart = function onDragStart(event) {
    props.onRowDragStart({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onDragOver = function onDragOver(event) {
    props.onRowDragOver({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onDragLeave = function onDragLeave(event) {
    props.onRowDragLeave({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onDragEnd = function onDragEnd(event) {
    props.onRowDragEnd({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onDrop = function onDrop(event) {
    props.onRowDrop({
      originalEvent: event,
      data: props.rowData,
      index: props.index
    });
  };

  var onEditChange = function onEditChange(e, isEditing) {
    if (props.onRowEditChange) {
      var editingRows;
      var dataKey = props.dataKey;
      var originalEvent = e.originalEvent,
          data = e.data,
          index = e.index,
          newData = e.newData;

      if (dataKey) {
        var dataKeyValue = String(primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(data, dataKey));
        editingRows = props.editingRows ? _objectSpread$6({}, props.editingRows) : {};

        if (!isEditing) {
          delete editingRows[dataKeyValue]; // if the key value was changed, stop editing for the new key value too

          var newDataKeyValue = String(primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(newData, dataKey));
          delete editingRows[newDataKeyValue];
        } else {
          editingRows[dataKeyValue] = true;
        }
      } else {
        var editingRowIndex = findIndex(props.editingRows, data);
        editingRows = props.editingRows ? _toConsumableArray(props.editingRows) : [];
        if (editingRowIndex !== -1) editingRows = editingRows.filter(function (val, i) {
          return i !== editingRowIndex;
        });else editingRows.push(data);
      }

      props.onRowEditChange({
        originalEvent: originalEvent,
        data: editingRows,
        index: index
      });
    } else {
      setEditingState(isEditing);
    }
  };

  var onEditInit = function onEditInit(e) {
    var event = e.originalEvent;

    if (props.onRowEditInit) {
      props.onRowEditInit({
        originalEvent: event,
        data: props.rowData,
        index: props.index
      });
    }

    onEditChange(e, true);
    event.preventDefault();
  };

  var onEditSave = function onEditSave(e) {
    var event = e.originalEvent,
        newData = e.newData;
    var valid = props.rowEditValidator ? props.rowEditValidator(newData, {
      props: props.tableProps
    }) : true;

    if (props.onRowEditSave) {
      props.onRowEditSave({
        originalEvent: event,
        data: props.rowData,
        index: props.index,
        valid: valid
      });
    }

    if (valid) {
      if (props.onRowEditComplete) {
        props.onRowEditComplete(e);
      }

      onEditChange(e, false);
    }

    event.preventDefault();
  };

  var onEditCancel = function onEditCancel(e) {
    var event = e.originalEvent;

    if (props.onRowEditCancel) {
      props.onRowEditCancel({
        originalEvent: event,
        data: props.rowData,
        index: props.index
      });
    }

    onEditChange(e, false);
    event.preventDefault();
  };

  var createContent = function createContent() {
    return props.columns.map(function (col, i) {
      if (shouldRenderBodyCell(props.value, col, props.index)) {
        var key = "".concat(getColumnProp(col, 'columnKey') || getColumnProp(col, 'field'), "_").concat(i);
        var rowSpan = props.rowGroupMode === 'rowspan' ? calculateRowGroupSize(props.value, col, props.index) : null;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BodyCell, {
          key: key,
          value: props.value,
          tableProps: props.tableProps,
          tableSelector: props.tableSelector,
          column: col,
          rowData: props.rowData,
          rowIndex: props.index,
          index: i,
          rowSpan: rowSpan,
          dataKey: props.dataKey,
          editing: editing,
          editingMeta: props.editingMeta,
          editMode: props.editMode,
          onRowEditInit: onEditInit,
          onRowEditSave: onEditSave,
          onRowEditCancel: onEditCancel,
          onEditingMetaChange: props.onEditingMetaChange,
          onRowToggle: props.onRowToggle,
          selection: props.selection,
          selectionAriaLabel: props.tableProps.selectionAriaLabel,
          allowCellSelection: props.allowCellSelection,
          compareSelectionBy: props.compareSelectionBy,
          selectOnEdit: props.selectOnEdit,
          selected: props.selected,
          onClick: props.onCellClick,
          onMouseDown: props.onCellMouseDown,
          onMouseUp: props.onCellMouseUp,
          tabIndex: props.tabIndex,
          cellClassName: props.cellClassName,
          responsiveLayout: props.responsiveLayout,
          frozenRow: props.frozenRow,
          isSelectable: props.isSelectable,
          showSelectionElement: props.showSelectionElement,
          showRowReorderElement: props.showRowReorderElement,
          onRadioChange: props.onRadioChange,
          onCheckboxChange: props.onCheckboxChange,
          expanded: props.expanded,
          expandedRowIcon: props.expandedRowIcon,
          collapsedRowIcon: props.collapsedRowIcon,
          virtualScrollerOptions: props.virtualScrollerOptions
        });
      }

      return null;
    });
  };

  var rowClassName = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getPropValue(props.rowClassName, props.rowData, {
    props: props.tableProps
  });
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(rowClassName, {
    'p-highlight': !props.allowCellSelection && props.selected,
    'p-highlight-contextmenu': props.contextMenuSelected,
    'p-selectable-row': props.allowRowSelection && props.isSelectable({
      data: props.rowData,
      index: props.index
    }),
    'p-row-odd': props.index % 2 !== 0
  });
  var style = {
    height: props.virtualScrollerOptions ? props.virtualScrollerOptions.itemSize : undefined
  };
  var content = createContent();
  var tabIndex = getTabIndex();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    role: "row",
    tabIndex: tabIndex,
    className: className,
    style: style,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    onContextMenu: onRightClick,
    onTouchEnd: onTouchEnd,
    onKeyDown: onKeyDown,
    onDragStart: onDragStart,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave,
    onDragEnd: onDragEnd,
    onDrop: onDrop
  }, content);
});
BodyRow.displayName = 'BodyRow';

var RowTogglerButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var onClick = function onClick(event) {
    props.onClick({
      originalEvent: event,
      data: props.rowData
    });
  };

  var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-row-toggler-icon', props.expanded ? props.expandedRowIcon : props.collapsedRowIcon);
  var label = props.expanded ? (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.ariaLabel)('collapseLabel') : (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.ariaLabel)('expandLabel');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    onClick: onClick,
    className: "p-row-toggler p-link",
    tabIndex: props.tabIndex,
    "aria-label": label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: iconClassName,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, null));
});
RowTogglerButton.displayName = 'RowTogglerButton';

var _excluded = ["originalEvent"];

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var TableBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rowGroupHeaderStyleObjectState = _React$useState2[0],
      setRowGroupHeaderStyleObjectState = _React$useState2[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var refCallback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (el) {
    elementRef.current = el;
    props.virtualScrollerContentRef && props.virtualScrollerContentRef(el);
  }, [props]);
  var dragSelectionHelper = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var initialDragPosition = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var anchorRowIndex = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var anchorCellIndex = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var rangeRowIndex = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var anchorRowFirst = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var rowTouched = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var rowDragging = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var draggedRowIndex = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var droppedRowIndex = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var prevVirtualScrollerOptions = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(props.virtualScrollerOptions);
  var isSubheaderGrouping = props.rowGroupMode && props.rowGroupMode === 'subheader';
  var isRadioSelectionMode = props.selectionMode === 'radiobutton';
  var isCheckboxSelectionMode = props.selectionMode === 'checkbox';
  var isRadioSelectionModeInColumn = props.selectionModeInColumn === 'single';
  var isCheckboxSelectionModeInColumn = props.selectionModeInColumn === 'multiple';

  var equals = function equals(data1, data2) {
    if (allowCellSelection()) return (data1.rowIndex === data2.rowIndex || data1.rowData === data2.rowData) && (data1.field === data2.field || data1.cellIndex === data2.cellIndex);else return props.compareSelectionBy === 'equals' ? data1 === data2 : primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(data1, data2, props.dataKey);
  };

  var isSelectionEnabled = function isSelectionEnabled() {
    return props.selectionMode || props.selectionModeInColumn !== null || props.columns && props.columns.some(function (col) {
      return col && !!col.props.selectionMode;
    });
  };

  var isSingleSelection = function isSingleSelection() {
    return props.selectionMode === 'single' && !isCheckboxSelectionModeInColumn || !isRadioSelectionMode && isRadioSelectionModeInColumn;
  };

  var isMultipleSelection = function isMultipleSelection() {
    return props.selectionMode === 'multiple' && !isRadioSelectionModeInColumn || isCheckboxSelectionModeInColumn;
  };

  var isRadioOnlySelection = function isRadioOnlySelection() {
    return isRadioSelectionMode && isRadioSelectionModeInColumn;
  };

  var isCheckboxOnlySelection = function isCheckboxOnlySelection() {
    return isCheckboxSelectionMode && isCheckboxSelectionModeInColumn;
  };

  var isSelected = function isSelected(rowData) {
    if (rowData && props.selection) {
      return props.selection instanceof Array ? findIndex(props.selection, rowData) > -1 : equals(rowData, props.selection);
    }

    return false;
  };

  var isContextMenuSelected = function isContextMenuSelected(rowData) {
    if (rowData && props.contextMenuSelection) {
      return equals(rowData, props.contextMenuSelection);
    }

    return false;
  };

  var isSelectable = function isSelectable(options) {
    return props.isDataSelectable ? props.isDataSelectable(options) : true;
  };

  var isRowExpanded = function isRowExpanded(rowData) {
    if (rowData && props.expandedRows) {
      if (isSubheaderGrouping && props.expandableRowGroups) {
        return isRowGroupExpanded(rowData);
      } else {
        if (props.dataKey) return props.expandedRows ? props.expandedRows[primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(rowData, props.dataKey)] !== undefined : false;else return findIndex(props.expandedRows, rowData) !== -1;
      }
    }

    return false;
  };

  var isRowGroupExpanded = function isRowGroupExpanded(rowData) {
    if (props.dataKey === props.groupRowsBy) return Object.keys(props.expandedRows).some(function (data) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(data, primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(rowData, props.dataKey));
    });else return props.expandedRows.some(function (data) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(data, rowData, props.groupRowsBy);
    });
  };

  var isRowEditing = function isRowEditing(rowData) {
    if (props.editMode === 'row' && rowData && props.editingRows) {
      if (props.dataKey) return props.editingRows ? props.editingRows[primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(rowData, props.dataKey)] !== undefined : false;else return findIndex(props.editingRows, rowData) !== -1;
    }

    return false;
  };

  var allowDrag = function allowDrag(event) {
    return props.dragSelection && isMultipleSelection() && !event.originalEvent.shiftKey;
  };

  var allowRowDrag = function allowRowDrag(event) {
    return !allowCellSelection() && allowDrag(event) || props.reorderableRows;
  };

  var allowCellDrag = function allowCellDrag(event) {
    return allowCellSelection() && allowDrag(event);
  };

  var allowSelection = function allowSelection(event) {
    return !primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.isClickable(event.originalEvent.target);
  };

  var allowMetaKeySelection = function allowMetaKeySelection(event) {
    return !rowTouched.current && (!props.metaKeySelection || props.metaKeySelection && (event.originalEvent.metaKey || event.originalEvent.ctrlKey));
  };

  var allowRangeSelection = function allowRangeSelection(event) {
    return isMultipleSelection() && event.originalEvent.shiftKey && anchorRowIndex.current !== null;
  };

  var allowRowSelection = function allowRowSelection() {
    return (props.selectionMode || props.selectionModeInColumn) && !isRadioOnlySelection() && !isCheckboxOnlySelection();
  };

  var allowCellSelection = function allowCellSelection() {
    return props.cellSelection && !isRadioSelectionModeInColumn && !isCheckboxSelectionModeInColumn;
  };

  var getColumnsLength = function getColumnsLength() {
    return props.columns ? props.columns.length : 0;
  };

  var getVirtualScrollerOption = function getVirtualScrollerOption(option, options) {
    options = options || props.virtualScrollerOptions;
    return options ? options[option] : null;
  };

  var findIndex = function findIndex(collection, rowData) {
    return (collection || []).findIndex(function (data) {
      return equals(rowData, data);
    });
  };

  var rowGroupHeaderStyle = function rowGroupHeaderStyle() {
    if (props.scrollable) {
      return {
        top: rowGroupHeaderStyleObjectState['top']
      };
    }

    return null;
  };

  var getRowKey = function getRowKey(rowData, index) {
    return props.dataKey ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(rowData, props.dataKey) + '_' + index : index;
  };

  var shouldRenderRowGroupHeader = function shouldRenderRowGroupHeader(value, rowData, i) {
    var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(rowData, props.groupRowsBy);
    var prevRowData = value[i - 1];

    if (prevRowData) {
      var previousRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(prevRowData, props.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  };

  var shouldRenderRowGroupFooter = function shouldRenderRowGroupFooter(value, rowData, i, expanded) {
    if (props.expandableRowGroups && !expanded) {
      return false;
    } else {
      var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(rowData, props.groupRowsBy);
      var nextRowData = value[i + 1];

      if (nextRowData) {
        var nextRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(nextRowData, props.groupRowsBy);
        return currentRowFieldData !== nextRowFieldData;
      } else {
        return true;
      }
    }
  };

  var updateFrozenRowStickyPosition = function updateFrozenRowStickyPosition() {
    elementRef.current.style.top = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(elementRef.current.previousElementSibling) + 'px';
  };

  var updateFrozenRowGroupHeaderStickyPosition = function updateFrozenRowGroupHeaderStickyPosition() {
    var tableHeaderHeight = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(elementRef.current.previousElementSibling);
    var top = tableHeaderHeight + 'px';

    if (rowGroupHeaderStyleObjectState.top !== top) {
      setRowGroupHeaderStyleObjectState({
        top: top
      });
    }
  };

  var updateVirtualScrollerPosition = function updateVirtualScrollerPosition() {
    var tableHeaderHeight = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(elementRef.current.previousElementSibling);
    elementRef.current.style.top = (elementRef.current.style.top || 0) + tableHeaderHeight + 'px';
  };

  var onSingleSelection = function onSingleSelection(_ref) {
    var originalEvent = _ref.originalEvent,
        data = _ref.data,
        index = _ref.index,
        toggleable = _ref.toggleable,
        type = _ref.type;

    if (!isSelectable({
      data: data,
      index: index
    })) {
      return;
    }

    var selected = isSelected(data);
    var selection = props.selection;

    if (selected) {
      if (toggleable) {
        selection = null;
        onUnselect({
          originalEvent: originalEvent,
          data: data,
          type: type
        });
      }
    } else {
      selection = data;
      onSelect({
        originalEvent: originalEvent,
        data: data,
        type: type
      });
    }

    focusOnElement(originalEvent, true);

    if (props.onSelectionChange && selection !== props.selection) {
      props.onSelectionChange({
        originalEvent: originalEvent,
        value: selection,
        type: type
      });
    }
  };

  var onMultipleSelection = function onMultipleSelection(_ref2) {
    var originalEvent = _ref2.originalEvent,
        data = _ref2.data,
        index = _ref2.index,
        toggleable = _ref2.toggleable,
        type = _ref2.type;

    if (!isSelectable({
      data: data,
      index: index
    })) {
      return;
    }

    var selected = isSelected(data);
    var selection = props.selection || [];

    if (selected) {
      if (toggleable) {
        var selectionIndex = findIndex(selection, data);
        selection = props.selection.filter(function (val, i) {
          return i !== selectionIndex;
        });
        onUnselect({
          originalEvent: originalEvent,
          data: data,
          type: type
        });
      } else if (selection.length) {
        props.selection.forEach(function (d) {
          return onUnselect({
            originalEvent: originalEvent,
            data: d,
            type: type
          });
        });
        selection = [data];
        onSelect({
          originalEvent: originalEvent,
          data: data,
          type: type
        });
      }
    } else {
      selection = toggleable && isMultipleSelection() ? [].concat(_toConsumableArray(selection), [data]) : [data];
      onSelect({
        originalEvent: originalEvent,
        data: data,
        type: type
      });
    }

    focusOnElement(originalEvent, true);

    if (props.onSelectionChange && selection !== props.selection) {
      props.onSelectionChange({
        originalEvent: originalEvent,
        value: selection,
        type: type
      });
    }
  };

  var onRangeSelection = function onRangeSelection(event, type) {
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
    rangeRowIndex.current = allowCellSelection() ? event.rowIndex : event.index;
    var selection = selectRange(event);

    if (props.onSelectionChange && selection !== props.selection) {
      props.onSelectionChange({
        originalEvent: event.originalEvent,
        value: selection,
        type: type
      });
    }

    anchorRowIndex.current = rangeRowIndex.current;
    anchorCellIndex.current = event.cellIndex;
    focusOnElement(event.originalEvent, false);
  };

  var selectRange = function selectRange(event) {
    var rangeStart, rangeEnd;

    if (rangeRowIndex.current > anchorRowIndex.current) {
      rangeStart = anchorRowIndex.current;
      rangeEnd = rangeRowIndex.current;
    } else if (rangeRowIndex.current < anchorRowIndex.current) {
      rangeStart = rangeRowIndex.current;
      rangeEnd = anchorRowIndex.current;
    } else {
      rangeStart = rangeEnd = rangeRowIndex.current;
    }

    if (props.paginator) {
      rangeStart = Math.max(rangeStart - props.first, 0);
      rangeEnd -= props.first;
    }

    return allowCellSelection() ? selectRangeOnCell(event, rangeStart, rangeEnd) : selectRangeOnRow(event, rangeStart, rangeEnd);
  };

  var selectRangeOnRow = function selectRangeOnRow(event, rowRangeStart, rowRangeEnd) {
    var value = props.value;
    var selection = [];

    for (var i = rowRangeStart; i <= rowRangeEnd; i++) {
      var rangeRowData = value[i];

      if (!isSelectable({
        data: rangeRowData,
        index: i
      })) {
        continue;
      }

      selection.push(rangeRowData);
      onSelect({
        originalEvent: event.originalEvent,
        data: rangeRowData,
        type: 'row'
      });
    }

    return selection;
  };

  var selectRangeOnCell = function selectRangeOnCell(event, rowRangeStart, rowRangeEnd) {
    var cellRangeStart,
        cellRangeEnd,
        cellIndex = event.cellIndex;

    if (cellIndex > anchorCellIndex.current) {
      cellRangeStart = anchorCellIndex.current;
      cellRangeEnd = cellIndex;
    } else if (cellIndex < anchorCellIndex.current) {
      cellRangeStart = cellIndex;
      cellRangeEnd = anchorCellIndex.current;
    } else {
      cellRangeStart = cellRangeEnd = cellIndex;
    }

    var value = props.value;
    var selection = [];

    for (var i = rowRangeStart; i <= rowRangeEnd; i++) {
      var rowData = value[i];
      var columns = props.columns;
      var rowIndex = props.paginator ? i + props.first : i;

      for (var j = cellRangeStart; j <= cellRangeEnd; j++) {
        var field = columns[j].props.field;

        var _value = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(rowData, field);

        var rangeRowData = {
          value: _value,
          field: field,
          rowData: rowData,
          rowIndex: rowIndex,
          cellIndex: j,
          selected: true
        };

        if (!isSelectable({
          data: rangeRowData,
          index: i
        })) {
          continue;
        }

        selection.push(rangeRowData);
        onSelect({
          originalEvent: event.originalEvent,
          data: rangeRowData,
          type: 'cell'
        });
      }
    }

    return selection;
  };

  var onSelect = function onSelect(event) {
    if (allowCellSelection()) props.onCellSelect && props.onCellSelect(_objectSpread$5(_objectSpread$5({
      originalEvent: event.originalEvent
    }, event.data), {}, {
      type: event.type
    }));else props.onRowSelect && props.onRowSelect(event);
  };

  var onUnselect = function onUnselect(event) {
    if (allowCellSelection()) props.onCellUnselect && props.onCellUnselect(_objectSpread$5(_objectSpread$5({
      originalEvent: event.originalEvent
    }, event.data), {}, {
      type: event.type
    }));else props.onRowUnselect && props.onRowUnselect(event);
  };

  var enableDragSelection = function enableDragSelection(event) {
    if (props.dragSelection && !dragSelectionHelper.current) {
      dragSelectionHelper.current = document.createElement('div');
      primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(dragSelectionHelper.current, 'p-datatable-drag-selection-helper');
      initialDragPosition.current = {
        x: event.clientX,
        y: event.clientY
      };
      dragSelectionHelper.current.style.top = "".concat(event.pageY, "px");
      dragSelectionHelper.current.style.left = "".concat(event.pageX, "px");
      bindDragSelectionEvents();
    }
  };

  var focusOnElement = function focusOnElement(event, isFocused) {
    var target = event.currentTarget;

    if (!allowCellSelection() && props.selectionAutoFocus) {
      if (isCheckboxSelectionModeInColumn) {
        var checkbox = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(target, 'td.p-selection-column .p-checkbox-box');
        checkbox && checkbox.focus();
      } else if (isRadioSelectionModeInColumn) {
        var radio = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(target, 'td.p-selection-column input[type="radio"]');
        radio && radio.focus();
      }
    }

    !isFocused && target && target.focus();
  };

  var changeTabIndex = function changeTabIndex(event, type) {
    var target = event.currentTarget;
    var isSelectable = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(target, type === 'cell' ? 'p-selectable-cell' : 'p-selectable-row');

    if (isSelectable) {
      var selector = type === 'cell' ? 'tr > td' : 'tr';
      var tabbableEl = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(elementRef.current, "".concat(selector, "[tabindex=\"").concat(props.tabIndex, "\"]"));

      if (tabbableEl && target) {
        tabbableEl.tabIndex = -1;
        target.tabIndex = props.tabIndex;
      }
    }
  };

  var onRowClick = function onRowClick(event) {
    if (allowCellSelection() || !allowSelection(event)) {
      return;
    }

    props.onRowClick && props.onRowClick(event);

    if (allowRowSelection()) {
      if (allowRangeSelection(event)) {
        onRangeSelection(event, 'row');
      } else {
        var toggleable = isRadioSelectionModeInColumn || isCheckboxSelectionModeInColumn || allowMetaKeySelection(event);
        anchorRowIndex.current = event.index;
        rangeRowIndex.current = event.index;
        anchorRowFirst.current = props.first;

        if (isSingleSelection()) {
          onSingleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
            toggleable: toggleable,
            type: 'row'
          }));
        } else {
          onMultipleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
            toggleable: toggleable,
            type: 'row'
          }));
        }
      }

      changeTabIndex(event.originalEvent, 'row');
    } else {
      focusOnElement(event.originalEvent);
    }

    rowTouched.current = false;
  };

  var onRowDoubleClick = function onRowDoubleClick(e) {
    var event = e.originalEvent;

    if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.isClickable(event.target)) {
      return;
    }

    if (props.onRowDoubleClick) {
      props.onRowDoubleClick(e);
    }
  };

  var onRowRightClick = function onRowRightClick(event) {
    if (props.onContextMenu || props.onContextMenuSelectionChange) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();

      if (props.onContextMenuSelectionChange) {
        props.onContextMenuSelectionChange({
          originalEvent: event.originalEvent,
          value: event.data
        });
      }

      if (props.onContextMenu) {
        props.onContextMenu({
          originalEvent: event.originalEvent,
          data: event.data
        });
      }

      event.originalEvent.preventDefault();
    }
  };

  var onRowTouchEnd = function onRowTouchEnd() {
    rowTouched.current = true;
  };

  var onRowMouseDown = function onRowMouseDown(e) {
    var event = e.originalEvent;
    if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle')) event.currentTarget.draggable = true;else event.currentTarget.draggable = false;

    if (allowRowDrag(e)) {
      enableDragSelection(event);
      anchorRowIndex.current = e.index;
      rangeRowIndex.current = e.index;
      anchorRowFirst.current = props.first;
    }
  };

  var onRowMouseUp = function onRowMouseUp(event) {
    var isSameRow = event.index === anchorRowIndex.current;

    if (allowRowDrag(event) && !isSameRow) {
      onRangeSelection(event, 'row');
    }
  };

  var onRowToggle = function onRowToggle(event) {
    var expandedRows;
    var dataKey = props.dataKey;
    var hasDataKey = props.groupRowsBy ? dataKey === props.groupRowsBy : !!dataKey;

    if (hasDataKey) {
      var dataKeyValue = String(primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(event.data, dataKey));
      expandedRows = props.expandedRows ? _objectSpread$5({}, props.expandedRows) : {};

      if (expandedRows[dataKeyValue] != null) {
        delete expandedRows[dataKeyValue];

        if (props.onRowCollapse) {
          props.onRowCollapse({
            originalEvent: event,
            data: event.data
          });
        }
      } else {
        expandedRows[dataKeyValue] = true;

        if (props.onRowExpand) {
          props.onRowExpand({
            originalEvent: event,
            data: event.data
          });
        }
      }
    } else {
      var expandedRowIndex = findIndex(props.expandedRows, event.data);
      expandedRows = props.expandedRows ? _toConsumableArray(props.expandedRows) : [];

      if (expandedRowIndex !== -1) {
        expandedRows = expandedRows.filter(function (_, i) {
          return i !== expandedRowIndex;
        });

        if (props.onRowCollapse) {
          props.onRowCollapse({
            originalEvent: event,
            data: event.data
          });
        }
      } else {
        expandedRows.push(event.data);

        if (props.onRowExpand) {
          props.onRowExpand({
            originalEvent: event,
            data: event.data
          });
        }
      }
    }

    if (props.onRowToggle) {
      props.onRowToggle({
        data: expandedRows
      });
    }
  };

  var onRowDragStart = function onRowDragStart(e) {
    var event = e.originalEvent,
        index = e.index;

    if (allowRowDrag(event)) {
      rowDragging.current = true;
      draggedRowIndex.current = index;
      event.dataTransfer.setData('text', 'b'); // For firefox
    }
  };

  var onRowDragOver = function onRowDragOver(e) {
    var event = e.originalEvent,
        index = e.index;

    if (rowDragging.current && draggedRowIndex.current !== index) {
      var rowElement = event.currentTarget;
      var rowY = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(rowElement).top + primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getWindowScrollTop();
      var pageY = event.pageY + window.scrollY;
      var rowMidY = rowY + primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(rowElement) / 2;
      var prevRowElement = rowElement.previousElementSibling;

      if (pageY < rowMidY) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
        droppedRowIndex.current = index;
        if (prevRowElement) primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
      } else {
        if (prevRowElement) primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
        droppedRowIndex.current = index + 1;
        primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
      }
    }

    event.preventDefault();
  };

  var onRowDragLeave = function onRowDragLeave(e) {
    var event = e.originalEvent;
    var rowElement = event.currentTarget;
    var prevRowElement = rowElement.previousElementSibling;

    if (prevRowElement) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
    }

    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
  };

  var onRowDragEnd = function onRowDragEnd(e) {
    var event = e.originalEvent;
    rowDragging.current = false;
    draggedRowIndex.current = null;
    droppedRowIndex.current = null;
    event.currentTarget.draggable = false;
  };

  var onRowDrop = function onRowDrop(e) {
    var event = e.originalEvent;

    if (droppedRowIndex.current != null) {
      var dropIndex = draggedRowIndex.current > droppedRowIndex.current ? droppedRowIndex.current : droppedRowIndex.current === 0 ? 0 : droppedRowIndex.current - 1;

      var val = _toConsumableArray(props.value);

      primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.reorderArray(val, draggedRowIndex.current, dropIndex);

      if (props.onRowReorder) {
        props.onRowReorder({
          originalEvent: event,
          value: val,
          dragIndex: draggedRowIndex.current,
          dropIndex: droppedRowIndex.current
        });
      }
    } //cleanup


    onRowDragLeave(e);
    onRowDragEnd(e);
    event.preventDefault();
  };

  var onRadioChange = function onRadioChange(event) {
    onSingleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
      toggleable: true,
      type: 'radio'
    }));
  };

  var onCheckboxChange = function onCheckboxChange(event) {
    onMultipleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
      toggleable: true,
      type: 'checkbox'
    }));
  };

  var onDragSelectionMouseMove = function onDragSelectionMouseMove(event) {
    var _initialDragPosition$ = initialDragPosition.current,
        x = _initialDragPosition$.x,
        y = _initialDragPosition$.y;
    var dx = event.clientX - x;
    var dy = event.clientY - y;
    if (dy < 0) dragSelectionHelper.current.style.top = "".concat(event.pageY + 5, "px");
    if (dx < 0) dragSelectionHelper.current.style.left = "".concat(event.pageX + 5, "px");
    dragSelectionHelper.current.style.height = "".concat(Math.abs(dy), "px");
    dragSelectionHelper.current.style.width = "".concat(Math.abs(dx), "px");
    event.preventDefault();
  };

  var onDragSelectionMouseUp = function onDragSelectionMouseUp() {
    if (dragSelectionHelper.current) {
      dragSelectionHelper.current.remove();
      dragSelectionHelper.current = null;
    }

    document.removeEventListener('mousemove', onDragSelectionMouseMove);
    document.removeEventListener('mouseup', onDragSelectionMouseUp);
  };

  var onCellClick = function onCellClick(event) {
    if (!allowSelection(event)) {
      return;
    }

    props.onCellClick && props.onCellClick(event);

    if (allowCellSelection()) {
      if (allowRangeSelection(event)) {
        onRangeSelection(event, 'cell');
      } else {
        var toggleable = allowMetaKeySelection(event);

        var originalEvent = event.originalEvent,
            data = _objectWithoutProperties(event, _excluded);

        anchorRowIndex.current = event.rowIndex;
        rangeRowIndex.current = event.rowIndex;
        anchorRowFirst.current = props.first;
        anchorCellIndex.current = event.cellIndex;

        if (isSingleSelection()) {
          onSingleSelection({
            originalEvent: originalEvent,
            data: data,
            index: event.rowIndex,
            toggleable: toggleable,
            type: 'cell'
          });
        } else {
          onMultipleSelection({
            originalEvent: originalEvent,
            data: data,
            index: event.rowIndex,
            toggleable: toggleable,
            type: 'cell'
          });
        }
      }

      changeTabIndex(event.originalEvent, 'cell');
    }

    rowTouched.current = false;
  };

  var onCellMouseDown = function onCellMouseDown(event) {
    if (allowCellDrag(event)) {
      enableDragSelection(event.originalEvent);
      anchorRowIndex.current = event.rowIndex;
      rangeRowIndex.current = event.rowIndex;
      anchorRowFirst.current = props.first;
      anchorCellIndex.current = event.cellIndex;
    }
  };

  var onCellMouseUp = function onCellMouseUp(event) {
    var isSameCell = event.rowIndex === anchorRowIndex.current && event.cellIndex === anchorCellIndex.current;

    if (allowCellDrag(event) && !isSameCell) {
      onRangeSelection(event, 'cell');
    }
  };

  var bindDragSelectionEvents = function bindDragSelectionEvents() {
    document.addEventListener('mousemove', onDragSelectionMouseMove);
    document.addEventListener('mouseup', onDragSelectionMouseUp);
    document.body.appendChild(dragSelectionHelper.current);
  };

  var unbindDragSelectionEvents = function unbindDragSelectionEvents() {
    onDragSelectionMouseUp();
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (props.frozenRow) {
      updateFrozenRowStickyPosition();
    }

    if (props.scrollable && props.rowGroupMode === 'subheader') {
      updateFrozenRowGroupHeaderStickyPosition();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useMountEffect)(function () {
    if (!props.isVirtualScrollerDisabled && getVirtualScrollerOption('vertical')) {
      updateVirtualScrollerPosition();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (!props.isVirtualScrollerDisabled && getVirtualScrollerOption('vertical') && getVirtualScrollerOption('itemSize', prevVirtualScrollerOptions) !== getVirtualScrollerOption('itemSize')) {
      updateVirtualScrollerPosition();
    }
  }, [props.virtualScrollerOptions]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (props.paginator && isMultipleSelection()) {
      anchorRowIndex.current = null;
    }
  }, [props.first]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnmountEffect)(function () {
    if (props.dragSelection) {
      unbindDragSelectionEvents();
    }
  });

  var createEmptyContent = function createEmptyContent() {
    if (!props.loading) {
      var colSpan = getColumnsLength();

      var _content = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(props.emptyMessage, {
        props: props.tableProps,
        frozen: props.frozenRow
      }) || (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('emptyMessage');

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        className: "p-datatable-emptymessage",
        role: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colSpan: colSpan,
        role: "cell"
      }, _content));
    }

    return null;
  };

  var createGroupHeader = function createGroupHeader(rowData, index, expanded, colSpan) {
    if (isSubheaderGrouping && shouldRenderRowGroupHeader(props.value, rowData, index - props.first)) {
      var style = rowGroupHeaderStyle();
      var toggler = props.expandableRowGroups && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowTogglerButton, {
        onClick: onRowToggle,
        rowData: rowData,
        expanded: expanded,
        expandedRowIcon: props.expandedRowIcon,
        collapsedRowIcon: props.collapsedRowIcon
      });

      var _content2 = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(props.rowGroupHeaderTemplate, rowData, {
        index: index,
        props: props.tableProps
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        className: "p-rowgroup-header",
        style: style,
        role: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colSpan: colSpan
      }, toggler, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-rowgroup-header-name"
      }, _content2)));
    }

    return null;
  };

  var createRow = function createRow(rowData, index, expanded) {
    if (!props.expandableRowGroups || expanded) {
      var selected = isSelectionEnabled() ? isSelected(rowData) : false;
      var contextMenuSelected = isContextMenuSelected(rowData);

      var _allowRowSelection = allowRowSelection();

      var _allowCellSelection = allowCellSelection();

      var editing = isRowEditing(rowData);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BodyRow, {
        tableProps: props.tableProps,
        tableSelector: props.tableSelector,
        value: props.value,
        columns: props.columns,
        rowData: rowData,
        index: index,
        selected: selected,
        contextMenuSelected: contextMenuSelected,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick,
        tabIndex: props.tabIndex,
        isSelectable: isSelectable,
        onRowTouchEnd: onRowTouchEnd,
        onRowMouseDown: onRowMouseDown,
        onRowMouseUp: onRowMouseUp,
        onRowToggle: onRowToggle,
        onRowDragStart: onRowDragStart,
        onRowDragOver: onRowDragOver,
        onRowDragLeave: onRowDragLeave,
        onRowDragEnd: onRowDragEnd,
        onRowDrop: onRowDrop,
        onRadioChange: onRadioChange,
        onCheckboxChange: onCheckboxChange,
        onCellClick: onCellClick,
        onCellMouseDown: onCellMouseDown,
        onCellMouseUp: onCellMouseUp,
        editing: editing,
        editingRows: props.editingRows,
        editingMeta: props.editingMeta,
        editMode: props.editMode,
        onRowEditChange: props.onRowEditChange,
        onEditingMetaChange: props.onEditingMetaChange,
        groupRowsBy: props.groupRowsBy,
        compareSelectionBy: props.compareSelectionBy,
        dataKey: props.dataKey,
        rowGroupMode: props.rowGroupMode,
        onRowEditInit: props.onRowEditInit,
        rowEditValidator: props.rowEditValidator,
        onRowEditSave: props.onRowEditSave,
        onRowEditComplete: props.onRowEditComplete,
        onRowEditCancel: props.onRowEditCancel,
        selection: props.selection,
        allowRowSelection: _allowRowSelection,
        allowCellSelection: _allowCellSelection,
        selectOnEdit: props.selectOnEdit,
        selectionMode: props.selectionMode,
        selectionModeInColumn: props.selectionModeInColumn,
        cellClassName: props.cellClassName,
        responsiveLayout: props.responsiveLayout,
        frozenRow: props.frozenRow,
        showSelectionElement: props.showSelectionElement,
        showRowReorderElement: props.showRowReorderElement,
        expanded: expanded,
        expandedRowIcon: props.expandedRowIcon,
        collapsedRowIcon: props.collapsedRowIcon,
        rowClassName: props.rowClassName,
        virtualScrollerOptions: props.virtualScrollerOptions
      });
    }
  };

  var createExpansion = function createExpansion(rowData, index, expanded, colSpan) {
    if (expanded && !(isSubheaderGrouping && props.expandableRowGroups)) {
      var id = "".concat(props.tableSelector, "_content_").concat(index, "_expanded");
      var options = {
        index: index,
        customRendering: false
      };

      var _content3 = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(props.rowExpansionTemplate, rowData, options); // check if the user wants complete control of the rendering


      if (!options.customRendering) {
        _content3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          role: "cell",
          colSpan: colSpan
        }, _content3);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        id: id,
        className: "p-datatable-row-expansion",
        role: "row"
      }, _content3);
    }

    return null;
  };

  var createGroupFooter = function createGroupFooter(rowData, index, expanded, colSpan) {
    if (isSubheaderGrouping && shouldRenderRowGroupFooter(props.value, rowData, index - props.first, expanded)) {
      var _content4 = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(props.rowGroupFooterTemplate, rowData, {
        index: index,
        colSpan: colSpan,
        props: props.tableProps
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        className: "p-rowgroup-footer",
        role: "row"
      }, _content4);
    }

    return null;
  };

  var createContent = function createContent() {
    return props.value.map(function (rowData, i) {
      var index = getVirtualScrollerOption('getItemOptions') ? getVirtualScrollerOption('getItemOptions')(i).index : props.first + i;
      var key = getRowKey(rowData, index);
      var expanded = isRowExpanded(rowData);
      var colSpan = getColumnsLength();
      var groupHeader = createGroupHeader(rowData, index, expanded, colSpan);
      var row = createRow(rowData, index, expanded);
      var expansion = createExpansion(rowData, index, expanded, colSpan);
      var groupFooter = createGroupFooter(rowData, index, expanded, colSpan);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: key
      }, groupHeader, row, expansion, groupFooter);
    });
  };

  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-datatable-tbody', props.className);
  var content = props.empty ? createEmptyContent() : createContent();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", {
    ref: refCallback,
    className: className
  }, content);
}));
TableBody.displayName = 'TableBody';

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var FooterCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      styleObjectState = _React$useState2[0],
      setStyleObjectState = _React$useState2[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var getColumnProp = function getColumnProp(prop) {
    return props.column.props[prop];
  };

  var getStyle = function getStyle() {
    var footerStyle = getColumnProp('footerStyle');
    var columnStyle = getColumnProp('style');
    return getColumnProp('frozen') ? Object.assign({}, columnStyle, footerStyle, styleObjectState) : Object.assign({}, columnStyle, footerStyle);
  };

  var updateStickyPosition = function updateStickyPosition() {
    if (getColumnProp('frozen')) {
      var styleObject = _objectSpread$4({}, styleObjectState);

      var _align = getColumnProp('alignFrozen');

      if (_align === 'right') {
        var right = 0;
        var next = elementRef.current.nextElementSibling;

        if (next) {
          right = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
        }

        styleObject['right'] = right + 'px';
      } else {
        var left = 0;
        var prev = elementRef.current.previousElementSibling;

        if (prev) {
          left = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
        }

        styleObject['left'] = left + 'px';
      }

      var isSameStyle = styleObjectState['left'] === styleObject['left'] && styleObjectState['right'] === styleObject['right'];
      !isSameStyle && setStyleObjectState(styleObject);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (getColumnProp('frozen')) {
      updateStickyPosition();
    }
  });
  var style = getStyle();
  var align = getColumnProp('align');
  var colSpan = getColumnProp('colSpan');
  var rowSpan = getColumnProp('rowSpan');
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(getColumnProp('footerClassName'), getColumnProp('className'), _defineProperty({
    'p-frozen-column': getColumnProp('frozen')
  }, "p-align-".concat(align), !!align));
  var content = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(getColumnProp('footer'), {
    props: props.tableProps
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    ref: elementRef,
    style: style,
    className: className,
    role: "cell",
    colSpan: colSpan,
    rowSpan: rowSpan
  }, content);
});
FooterCell.displayName = 'FooterCell';

var TableFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var hasFooter = function hasFooter() {
    return props.footerColumnGroup ? true : props.columns ? props.columns.some(function (col) {
      return col && col.props.footer;
    }) : false;
  };

  var createGroupFooterCells = function createGroupFooterCells(row) {
    var columns = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(row.props.children);
    return createFooterCells(columns);
  };

  var createFooterCells = function createFooterCells(columns) {
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(columns, function (col, i) {
      var isVisible = col ? !col.props.hidden : true;
      var key = col ? col.props.columnKey || col.props.field || i : i;
      return isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterCell, {
        key: key,
        tableProps: props.tableProps,
        column: col
      });
    });
  };

  var createContent = function createContent() {
    if (props.footerColumnGroup) {
      var rows = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(props.footerColumnGroup.props.children);
      return rows.map(function (row, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          key: i,
          role: "row"
        }, createGroupFooterCells(row));
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      role: "row"
    }, createFooterCells(props.columns));
  };

  if (hasFooter()) {
    var content = createContent();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot", {
      className: "p-datatable-tfoot"
    }, content);
  }

  return null;
});
TableFooter.displayName = 'TableFooter';

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ColumnFilter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      overlayVisibleState = _React$useState2[0],
      setOverlayVisibleState = _React$useState2[1];

  var overlayRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var iconRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var selfClick = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var overlayEventListener = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var getColumnProp = function getColumnProp(prop) {
    return props.column.props[prop];
  };

  var field = getColumnProp('filterField') || getColumnProp('field');
  var filterModel = props.filters[field];
  var filterStoreModel = props.filtersStore && props.filtersStore[field];

  var _useOverlayListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useOverlayListener)({
    target: iconRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var type = _ref.type,
          valid = _ref.valid;

      if (valid) {
        type === 'outside' ? !selfClick.current && !isTargetClicked(event.target) && hide() : hide();
      }

      selfClick.current = false;
    },
    when: overlayVisibleState
  }),
      _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2),
      bindOverlayListener = _useOverlayListener2[0],
      unbindOverlayListener = _useOverlayListener2[1];

  var hasFilter = function hasFilter() {
    if (!filterStoreModel || !filterModel) return false;
    return filterStoreModel.operator ? !isFilterBlank(filterModel.constraints[0].value) : !isFilterBlank(filterModel.value);
  };

  var hasRowFilter = function hasRowFilter() {
    return filterModel && !isFilterBlank(filterModel.value);
  };

  var isFilterBlank = function isFilterBlank(filter) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isEmpty(filter);
  };

  var isRowMatchModeSelected = function isRowMatchModeSelected(matchMode) {
    return filterModel && filterModel.matchMode === matchMode;
  };

  var showMenuButton = function showMenuButton() {
    return getColumnProp('showFilterMenu') && (props.display === 'row' ? getColumnProp('dataType') !== 'boolean' : true);
  };

  var matchModes = function matchModes() {
    return getColumnProp('filterMatchModeOptions') || primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].filterMatchModeOptions[findDataType()].map(function (key) {
      return {
        label: (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)(key),
        value: key
      };
    });
  };

  var isShowMatchModes = function isShowMatchModes() {
    return getColumnProp('dataType') !== 'boolean' && getColumnProp('showFilterMatchModes') && matchModes() && getColumnProp('showFilterMenuOptions');
  };

  var isShowOperator = function isShowOperator() {
    return getColumnProp('showFilterOperator') && filterModel && filterModel.operator && getColumnProp('showFilterMenuOptions');
  };

  var showRemoveIcon = function showRemoveIcon() {
    return fieldConstraints().length > 1;
  };

  var isShowAddConstraint = function isShowAddConstraint() {
    return getColumnProp('showAddButton') && filterModel && filterModel.operator && fieldConstraints() && fieldConstraints().length < getColumnProp('maxConstraints') && getColumnProp('showFilterMenuOptions');
  };

  var isOutsideClicked = function isOutsideClicked(target) {
    return !isTargetClicked(target) && overlayRef.current && !(overlayRef.current.isSameNode(target) || overlayRef.current.contains(target));
  };

  var isTargetClicked = function isTargetClicked(target) {
    return iconRef.current && (iconRef.current.isSameNode(target) || iconRef.current.contains(target));
  };

  var getDefaultConstraint = function getDefaultConstraint() {
    if (filterStoreModel) {
      if (filterStoreModel.operator) {
        return {
          matchMode: filterStoreModel.constraints[0].matchMode,
          operator: filterStoreModel.operator
        };
      } else {
        return {
          matchMode: filterStoreModel.matchMode
        };
      }
    }
  };

  var findDataType = function findDataType() {
    var dataType = getColumnProp('dataType');
    var matchMode = getColumnProp('filterMatchMode');

    var hasMatchMode = function hasMatchMode(key) {
      return primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].filterMatchModeOptions[key].some(function (mode) {
        return mode === matchMode;
      });
    };

    if (matchMode === 'custom' && !hasMatchMode(dataType)) {
      primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].filterMatchModeOptions[dataType].push(primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterMatchMode.CUSTOM);
      return dataType;
    } else if (matchMode) {
      return Object.keys(primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].filterMatchModeOptions).find(function (key) {
        return hasMatchMode(key);
      }) || dataType;
    }

    return dataType;
  };

  var clearFilter = function clearFilter() {
    var filterClearCallback = getColumnProp('onFilterClear');
    var defaultConstraint = getDefaultConstraint();

    var filters = _objectSpread$3({}, props.filters);

    if (filters[field].operator) {
      filters[field].constraints.splice(1);
      filters[field].operator = defaultConstraint.operator;
      filters[field].constraints[0] = {
        value: null,
        matchMode: defaultConstraint.matchMode
      };
    } else {
      filters[field].value = null;
      filters[field].matchMode = defaultConstraint.matchMode;
    }

    filterClearCallback && filterClearCallback();
    props.onFilterChange(filters);
    props.onFilterApply();
    hide();
  };

  var applyFilter = function applyFilter() {
    var filterApplyClickCallback = getColumnProp('onFilterApplyClick');
    filterApplyClickCallback && filterApplyClickCallback({
      field: field,
      constraints: filterModel
    });
    props.onFilterApply();
    hide();
  };

  var toggleMenu = function toggleMenu() {
    setOverlayVisibleState(function (prevVisible) {
      return !prevVisible;
    });
  };

  var onToggleButtonKeyDown = function onToggleButtonKeyDown(event) {
    switch (event.key) {
      case 'Escape':
      case 'Tab':
        hide();
        break;

      case 'ArrowDown':
        if (overlayVisibleState) {
          var focusable = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getFirstFocusableElement(overlayRef.current);
          focusable && focusable.focus();
          event.preventDefault();
        } else if (event.altKey) {
          setOverlayVisibleState(true);
          event.preventDefault();
        }

        break;
    }
  };

  var onContentKeyDown = function onContentKeyDown(event) {
    if (event.key === 'Escape') {
      hide();
      iconRef.current && iconRef.current.focus();
    }
  };

  var onInputChange = function onInputChange(event, index) {
    var filters = _objectSpread$3({}, props.filters);

    var value = event.target.value;

    if (props.display === 'menu') {
      filters[field].constraints[index].value = value;
    } else {
      filters[field].value = value;
    }

    props.onFilterChange(filters);

    if (!getColumnProp('showApplyButton') || props.display === 'row') {
      props.onFilterApply();
    }
  };

  var onRowMatchModeChange = function onRowMatchModeChange(matchMode) {
    var filterMatchModeChangeCallback = getColumnProp('onFilterMatchModeChange');

    var filters = _objectSpread$3({}, props.filters);

    filters[field].matchMode = matchMode;
    filterMatchModeChangeCallback && filterMatchModeChangeCallback({
      field: field,
      matchMode: matchMode
    });
    props.onFilterChange(filters);
    props.onFilterApply();
    hide();
  };

  var onRowMatchModeKeyDown = function onRowMatchModeKeyDown(event, matchMode, clear) {
    var item = event.target;

    switch (event.key) {
      case 'ArrowDown':
        var nextItem = findNextItem(item);

        if (nextItem) {
          item.removeAttribute('tabindex');
          nextItem.tabIndex = 0;
          nextItem.focus();
        }

        event.preventDefault();
        break;

      case 'ArrowUp':
        var prevItem = findPrevItem(item);

        if (prevItem) {
          item.removeAttribute('tabindex');
          prevItem.tabIndex = 0;
          prevItem.focus();
        }

        event.preventDefault();
        break;

      case 'Enter':
        clear ? clearFilter() : onRowMatchModeChange(matchMode.value);
        event.preventDefault();
        break;
    }
  };

  var onOperatorChange = function onOperatorChange(e) {
    var filterOperationChangeCallback = getColumnProp('onFilterOperatorChange');
    var value = e.value;

    var filters = _objectSpread$3({}, props.filters);

    filters[field].operator = value;
    props.onFilterChange(filters);
    filterOperationChangeCallback && filterOperationChangeCallback({
      field: field,
      operator: value
    });

    if (!getColumnProp('showApplyButton')) {
      props.onFilterApply();
    }
  };

  var onMenuMatchModeChange = function onMenuMatchModeChange(value, index) {
    var filterMatchModeChangeCallback = getColumnProp('onFilterMatchModeChange');

    var filters = _objectSpread$3({}, props.filters);

    filters[field].constraints[index].matchMode = value;
    props.onFilterChange(filters);
    filterMatchModeChangeCallback && filterMatchModeChangeCallback({
      field: field,
      matchMode: value,
      index: index
    });

    if (!getColumnProp('showApplyButton')) {
      props.onFilterApply();
    }
  };

  var addConstraint = function addConstraint() {
    var filterConstraintAddCallback = getColumnProp('onFilterConstraintAdd');
    var defaultConstraint = getDefaultConstraint();

    var filters = _objectSpread$3({}, props.filters);

    var newConstraint = {
      value: null,
      matchMode: defaultConstraint.matchMode
    };
    filters[field].constraints.push(newConstraint);
    filterConstraintAddCallback && filterConstraintAddCallback({
      field: field,
      constraint: newConstraint
    });
    props.onFilterChange(filters);

    if (!getColumnProp('showApplyButton')) {
      props.onFilterApply();
    }
  };

  var removeConstraint = function removeConstraint(index) {
    var filterConstraintRemoveCallback = getColumnProp('onFilterConstraintRemove');

    var filters = _objectSpread$3({}, props.filters);

    var removedConstraint = filters[field].constraints.splice(index, 1);
    filterConstraintRemoveCallback && filterConstraintRemoveCallback({
      field: field,
      constraint: removedConstraint
    });
    props.onFilterChange(filters);

    if (!getColumnProp('showApplyButton')) {
      props.onFilterApply();
    }
  };

  var findNextItem = function findNextItem(item) {
    var nextItem = item.nextElementSibling;
    return nextItem ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(nextItem, 'p-column-filter-separator') ? findNextItem(nextItem) : nextItem : item.parentElement.firstElementChild;
  };

  var findPrevItem = function findPrevItem(item) {
    var prevItem = item.previousElementSibling;
    return prevItem ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(prevItem, 'p-column-filter-separator') ? findPrevItem(prevItem) : prevItem : item.parentElement.lastElementChild;
  };

  var hide = function hide() {
    setOverlayVisibleState(false);
  };

  var onContentClick = function onContentClick(event) {
    selfClick.current = true;
    primereact_overlayservice__WEBPACK_IMPORTED_MODULE_6__.OverlayService.emit('overlay-click', {
      originalEvent: event,
      target: overlayRef.current
    });
  };

  var onContentMouseDown = function onContentMouseDown() {
    selfClick.current = true;
  };

  var onOverlayEnter = function onOverlayEnter() {
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.set('overlay', overlayRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].autoZIndex, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].zIndex.overlay);
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.alignOverlay(overlayRef.current, iconRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].appendTo, false);

    overlayEventListener.current = function (e) {
      if (!isOutsideClicked(e.target)) {
        selfClick.current = true;
      }
    };

    primereact_overlayservice__WEBPACK_IMPORTED_MODULE_6__.OverlayService.on('overlay-click', overlayEventListener.current);
  };

  var onOverlayEntered = function onOverlayEntered() {
    bindOverlayListener();
  };

  var onOverlayExit = function onOverlayExit() {
    onOverlayHide();
  };

  var onOverlayExited = function onOverlayExited() {
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(overlayRef.current);
  };

  var onOverlayHide = function onOverlayHide() {
    unbindOverlayListener();
    primereact_overlayservice__WEBPACK_IMPORTED_MODULE_6__.OverlayService.off('overlay-click', overlayEventListener.current);
    overlayEventListener.current = null;
    selfClick.current = false;
  };

  var fieldConstraints = function fieldConstraints() {
    return filterModel ? filterModel.constraints || [filterModel] : [];
  };

  var operator = function operator() {
    return filterModel.operator;
  };

  var operatorOptions = function operatorOptions() {
    return [{
      label: (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('matchAll'),
      value: primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterOperator.AND
    }, {
      label: (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('matchAny'),
      value: primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterOperator.OR
    }];
  };

  var filterLabel = function filterLabel() {
    return (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('filter');
  };

  var noFilterLabel = function noFilterLabel() {
    return (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('noFilter');
  };

  var removeRuleButtonLabel = function removeRuleButtonLabel() {
    return (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('removeRule');
  };

  var addRuleButtonLabel = function addRuleButtonLabel() {
    return (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('addRule');
  };

  var clearButtonLabel = function clearButtonLabel() {
    return (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('clear');
  };

  var applyButtonLabel = function applyButtonLabel() {
    return (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('apply');
  };

  var filterCallback = function filterCallback(value) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var filters = _objectSpread$3({}, props.filters);

    var meta = filters[field];
    props.display === 'menu' && meta && meta.operator ? filters[field].constraints[index].value = value : filters[field].value = value;
    props.onFilterChange(filters);
  };

  var filterApplyCallback = function filterApplyCallback() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args && filterCallback(args[0], args[1]);
    props.onFilterApply();
  };

  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (props.display === 'menu' && overlayVisibleState) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.alignOverlay(overlayRef.current, iconRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].appendTo, false);
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnmountEffect)(function () {
    if (overlayEventListener.current) {
      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_6__.OverlayService.off('overlay-click', overlayEventListener.current);
      overlayEventListener.current = null;
    }

    if (overlayRef.current) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(overlayRef.current);
      onOverlayHide();
    }
  });

  var createFilterElement = function createFilterElement(model, index) {
    var value = model ? model.value : null;
    return getColumnProp('filterElement') ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(getColumnProp('filterElement'), {
      field: field,
      index: index,
      filterModel: model,
      value: value,
      filterApplyCallback: filterApplyCallback,
      filterCallback: filterCallback
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, {
      type: getColumnProp('filterType'),
      value: value || '',
      onChange: function onChange(e) {
        return onInputChange(e, index);
      },
      className: "p-column-filter",
      placeholder: getColumnProp('filterPlaceholder'),
      maxLength: getColumnProp('filterMaxLength')
    });
  };

  var createRowFilterElement = function createRowFilterElement() {
    if (props.display === 'row') {
      var content = createFilterElement(filterModel, 0);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-fluid p-column-filter-element"
      }, content);
    }

    return null;
  };

  var createMenuFilterElement = function createMenuFilterElement(fieldConstraint, index) {
    return props.display === 'menu' ? createFilterElement(fieldConstraint, index) : null;
  };

  var createMenuButton = function createMenuButton() {
    if (showMenuButton()) {
      var _className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-column-filter-menu-button p-link', {
        'p-column-filter-menu-button-open': overlayVisibleState,
        'p-column-filter-menu-button-active': hasFilter()
      });

      var label = filterLabel();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        ref: iconRef,
        type: "button",
        className: _className,
        "aria-haspopup": true,
        "aria-expanded": overlayVisibleState,
        onClick: toggleMenu,
        onKeyDown: onToggleButtonKeyDown,
        "aria-label": label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "pi pi-filter-icon pi-filter",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, null));
    }

    return null;
  };

  var createClearButton = function createClearButton() {
    if (getColumnProp('showClearButton') && props.display === 'row') {
      var _className2 = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-column-filter-clear-button p-link', {
        'p-hidden-space': !hasRowFilter()
      });

      var clearLabel = clearButtonLabel();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: _className2,
        type: "button",
        onClick: clearFilter,
        "aria-label": clearLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "pi pi-filter-slash",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, null));
    }

    return null;
  };

  var createRowItems = function createRowItems() {
    if (isShowMatchModes()) {
      var _matchModes = matchModes();

      var _noFilterLabel = noFilterLabel();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "p-column-filter-row-items"
      }, _matchModes.map(function (matchMode, i) {
        var value = matchMode.value,
            label = matchMode.label;
        var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-column-filter-row-item', {
          'p-highlight': isRowMatchModeSelected(value)
        });
        var tabIndex = i === 0 ? 0 : null;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: className,
          key: label,
          onClick: function onClick() {
            return onRowMatchModeChange(value);
          },
          onKeyDown: function onKeyDown(e) {
            return onRowMatchModeKeyDown(e, matchMode);
          },
          tabIndex: tabIndex
        }, label);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "p-column-filter-separator"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "p-column-filter-row-item",
        onClick: clearFilter,
        onKeyDown: function onKeyDown(e) {
          return onRowMatchModeKeyDown(e, null, true);
        }
      }, _noFilterLabel));
    }

    return null;
  };

  var createOperator = function createOperator() {
    if (isShowOperator()) {
      var options = operatorOptions();
      var value = operator();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-column-filter-operator"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, {
        options: options,
        value: value,
        onChange: onOperatorChange,
        className: "p-column-filter-operator-dropdown"
      }));
    }

    return null;
  };

  var createMatchModeDropdown = function createMatchModeDropdown(constraint, index) {
    if (isShowMatchModes()) {
      var options = matchModes();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, {
        options: options,
        value: constraint.matchMode,
        onChange: function onChange(e) {
          return onMenuMatchModeChange(e.value, index);
        },
        className: "p-column-filter-matchmode-dropdown"
      });
    }

    return null;
  };

  var createRemoveButton = function createRemoveButton(index) {
    if (showRemoveIcon()) {
      var removeRuleLabel = removeRuleButtonLabel();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_8__.Button, {
        type: "button",
        icon: "pi pi-trash",
        className: "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
        onClick: function onClick() {
          return removeConstraint(index);
        },
        label: removeRuleLabel
      });
    }

    return null;
  };

  var createConstraints = function createConstraints() {
    var _fieldConstraints = fieldConstraints();

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-column-filter-constraints"
    }, _fieldConstraints.map(function (fieldConstraint, i) {
      var matchModeDropdown = createMatchModeDropdown(fieldConstraint, i);
      var menuFilterElement = createMenuFilterElement(fieldConstraint, i);
      var removeButton = createRemoveButton(i);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: i,
        className: "p-column-filter-constraint"
      }, matchModeDropdown, menuFilterElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, removeButton));
    }));
  };

  var createAddRule = function createAddRule() {
    if (isShowAddConstraint()) {
      var addRuleLabel = addRuleButtonLabel();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-column-filter-add-rule"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_8__.Button, {
        type: "button",
        label: addRuleLabel,
        icon: "pi pi-plus",
        className: "p-column-filter-add-button p-button-text p-button-sm",
        onClick: addConstraint
      }));
    }

    return null;
  };

  var createFilterClearButton = function createFilterClearButton() {
    if (getColumnProp('showClearButton')) {
      if (!getColumnProp('filterClear')) {
        var clearLabel = clearButtonLabel();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_8__.Button, {
          type: "button",
          className: "p-button-outlined p-button-sm",
          onClick: clearFilter,
          label: clearLabel
        });
      }

      return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(getColumnProp('filterClear'), {
        field: field,
        filterModel: filterModel,
        filterClearCallback: clearFilter
      });
    }

    return null;
  };

  var createFilterApplyButton = function createFilterApplyButton() {
    if (getColumnProp('showApplyButton')) {
      if (!getColumnProp('filterApply')) {
        var applyLabel = applyButtonLabel();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_8__.Button, {
          type: "button",
          className: "p-button-sm",
          onClick: applyFilter,
          label: applyLabel
        });
      }

      return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(getColumnProp('filterApply'), {
        field: field,
        filterModel: filterModel,
        filterApplyCallback: applyFilter
      });
    }

    return null;
  };

  var createButtonBar = function createButtonBar() {
    var clearButton = createFilterClearButton();
    var applyButton = createFilterApplyButton();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-column-filter-buttonbar"
    }, clearButton, applyButton);
  };

  var createItems = function createItems() {
    var operator = createOperator();
    var constraints = createConstraints();
    var addRule = createAddRule();
    var buttonBar = createButtonBar();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, operator, constraints, addRule, buttonBar);
  };

  var createOverlay = function createOverlay() {
    var style = getColumnProp('filterMenuStyle');
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-column-filter-overlay p-component p-fluid', getColumnProp('filterMenuClassName'), {
      'p-column-filter-overlay-menu': props.display === 'menu',
      'p-input-filled': primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].inputStyle === 'filled',
      'p-ripple-disabled': primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].ripple === false
    });
    var filterHeader = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(getColumnProp('filterHeader'), {
      field: field,
      filterModel: filterModel,
      filterApplyCallback: filterApplyCallback
    });
    var filterFooter = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(getColumnProp('filterFooter'), {
      field: field,
      filterModel: filterModel,
      filterApplyCallback: filterApplyCallback
    });
    var items = props.display === 'row' ? createRowItems() : createItems();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_12__.Portal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_csstransition__WEBPACK_IMPORTED_MODULE_9__.CSSTransition, {
      nodeRef: overlayRef,
      classNames: "p-connected-overlay",
      "in": overlayVisibleState,
      timeout: {
        enter: 120,
        exit: 100
      },
      unmountOnExit: true,
      onEnter: onOverlayEnter,
      onEntered: onOverlayEntered,
      onExit: onOverlayExit,
      onExited: onOverlayExited
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: overlayRef,
      style: style,
      className: className,
      onKeyDown: onContentKeyDown,
      onClick: onContentClick,
      onMouseDown: onContentMouseDown
    }, filterHeader, items, filterFooter)));
  };

  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-column-filter p-fluid', {
    'p-column-filter-row': props.display === 'row',
    'p-column-filter-menu': props.display === 'menu'
  });
  var rowFilterElement = createRowFilterElement();
  var menuButton = createMenuButton();
  var clearButton = createClearButton();
  var overlay = createOverlay();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className
  }, rowFilterElement, menuButton, clearButton, overlay);
});
ColumnFilter.displayName = 'ColumnFilter';

var HeaderCheckbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusedState = _React$useState2[0],
      setFocusedState = _React$useState2[1];

  var onFocus = function onFocus() {
    setFocusedState(true);
  };

  var onBlur = function onBlur() {
    setFocusedState(false);
  };

  var onClick = function onClick(event) {
    if (!props.disabled) {
      setFocusedState(true);
      props.onChange({
        originalEvent: event,
        checked: !props.checked
      });
    }
  };

  var onKeyDown = function onKeyDown(event) {
    if (event.code === 'Space') {
      onClick(event);
      event.preventDefault();
    }
  };

  var boxClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-checkbox-box p-component', {
    'p-highlight': props.checked,
    'p-disabled': props.disabled,
    'p-focus': focusedState
  });
  var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-checkbox-icon', {
    'pi pi-check': props.checked
  });
  var tabIndex = props.disabled ? null : 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-checkbox p-component",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: boxClassName,
    role: "checkbox",
    "aria-checked": props.checked,
    tabIndex: tabIndex,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: iconClassName
  })));
});
HeaderCheckbox.displayName = 'HeaderCheckbox';

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var HeaderCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      styleObjectState = _React$useState2[0],
      setStyleObjectState = _React$useState2[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var prevColumn = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(props.column);

  var isBadgeVisible = function isBadgeVisible() {
    return props.multiSortMeta && props.multiSortMeta.length > 1;
  };

  var isSortableDisabled = function isSortableDisabled() {
    return !getColumnProp('sortable') || getColumnProp('sortable') && (props.allSortableDisabled || getColumnProp('sortableDisabled'));
  };

  var getColumnProp = function getColumnProp() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return props.column ? typeof args[0] === 'string' ? props.column.props[args[0]] : (args[0] || props.column).props[args[1]] : null;
  };

  var getStyle = function getStyle() {
    var headerStyle = getColumnProp('headerStyle');
    var columnStyle = getColumnProp('style');
    return getColumnProp('frozen') ? Object.assign({}, columnStyle, headerStyle, styleObjectState) : Object.assign({}, columnStyle, headerStyle);
  };

  var getMultiSortMetaIndex = function getMultiSortMetaIndex() {
    return props.multiSortMeta.findIndex(function (meta) {
      return meta.field === getColumnProp('field') || meta.field === getColumnProp('sortField');
    });
  };

  var getSortMeta = function getSortMeta() {
    var sorted = false;
    var sortOrder = 0;
    var metaIndex = -1;

    if (props.sortMode === 'single') {
      sorted = props.sortField && (props.sortField === getColumnProp('field') || props.sortField === getColumnProp('sortField'));
      sortOrder = sorted ? props.sortOrder : 0;
    } else if (props.sortMode === 'multiple') {
      metaIndex = getMultiSortMetaIndex();

      if (metaIndex > -1) {
        sorted = true;
        sortOrder = props.multiSortMeta[metaIndex].order;
      }
    }

    return {
      sorted: sorted,
      sortOrder: sortOrder,
      metaIndex: metaIndex
    };
  };

  var getAriaSort = function getAriaSort(_ref) {
    var sorted = _ref.sorted,
        sortOrder = _ref.sortOrder;

    if (getColumnProp('sortable')) {
      var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-amount-down' : 'pi-sort-amount-up-alt' : 'pi-sort-alt';
      if (sortIcon === 'pi-sort-amount-down') return 'descending';else if (sortIcon === 'pi-sort-amount-up-alt') return 'ascending';else return 'none';
    }

    return null;
  };

  var updateStickyPosition = function updateStickyPosition() {
    if (getColumnProp('frozen')) {
      var styleObject = _objectSpread$2({}, styleObjectState);

      var align = getColumnProp('alignFrozen');

      if (align === 'right') {
        var right = 0;
        var next = elementRef.current.nextElementSibling;

        if (next) {
          right = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
        }

        styleObject['right'] = right + 'px';
      } else {
        var left = 0;
        var prev = elementRef.current.previousElementSibling;

        if (prev) {
          left = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
        }

        styleObject['left'] = left + 'px';
      }

      var filterRow = elementRef.current.parentElement.nextElementSibling;

      if (filterRow) {
        var index = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(elementRef.current);
        filterRow.children[index].style.left = styleObject['left'];
        filterRow.children[index].style.right = styleObject['right'];
      }

      var isSameStyle = styleObjectState['left'] === styleObject['left'] && styleObjectState['right'] === styleObject['right'];
      !isSameStyle && setStyleObjectState(styleObject);
    }
  };

  var updateSortableDisabled = function updateSortableDisabled(prevColumn) {
    if (getColumnProp(prevColumn, 'sortableDisabled') !== getColumnProp('sortableDisabled') || getColumnProp(prevColumn, 'sortable') !== getColumnProp('sortable')) {
      props.onSortableChange();
    }
  };

  var onClick = function onClick(event) {
    if (!isSortableDisabled()) {
      var targetNode = event.target;

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(targetNode, 'p-sortable-column') || primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(targetNode, 'p-column-title') || primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(targetNode, 'p-column-header-content') || primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
        props.onSortChange({
          originalEvent: event,
          column: props.column,
          sortableDisabledFields: props.sortableDisabledFields
        });
      }
    }
  };

  var onMouseDown = function onMouseDown(event) {
    props.onColumnMouseDown({
      originalEvent: event,
      column: props.column
    });
  };

  var onKeyDown = function onKeyDown(event) {
    if (event.key === 'Enter' && event.currentTarget === elementRef.current && primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
      onClick(event);
      event.preventDefault();
    }
  };

  var onDragStart = function onDragStart(event) {
    props.onColumnDragStart({
      originalEvent: event,
      column: props.column
    });
  };

  var onDragOver = function onDragOver(event) {
    props.onColumnDragOver({
      originalEvent: event,
      column: props.column
    });
  };

  var onDragLeave = function onDragLeave(event) {
    props.onColumnDragLeave({
      originalEvent: event,
      column: props.column
    });
  };

  var onDrop = function onDrop(event) {
    props.onColumnDrop({
      originalEvent: event,
      column: props.column
    });
  };

  var onResizerMouseDown = function onResizerMouseDown(event) {
    props.onColumnResizeStart({
      originalEvent: event,
      column: props.column
    });
  };

  var onResizerClick = function onResizerClick(event) {
    if (props.onColumnResizerClick) {
      props.onColumnResizerClick({
        originalEvent: event,
        element: event.currentTarget.parentElement,
        column: props.column
      });
      event.preventDefault();
    }
  };

  var onResizerDoubleClick = function onResizerDoubleClick(event) {
    if (props.onColumnResizerDoubleClick) {
      props.onColumnResizerDoubleClick({
        originalEvent: event,
        element: event.currentTarget.parentElement,
        column: props.column
      });
      event.preventDefault();
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (getColumnProp('frozen')) {
      updateStickyPosition();
    }

    updateSortableDisabled(prevColumn);
  });

  var createResizer = function createResizer() {
    if (props.resizableColumns && !getColumnProp('frozen')) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-column-resizer",
        onMouseDown: onResizerMouseDown,
        onClick: onResizerClick,
        onDoubleClick: onResizerDoubleClick
      });
    }

    return null;
  };

  var createTitle = function createTitle() {
    var title = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(getColumnProp('header'), {
      props: props.tableProps
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "p-column-title"
    }, title);
  };

  var createSortIcon = function createSortIcon(_ref2) {
    var sorted = _ref2.sorted,
        sortOrder = _ref2.sortOrder;

    if (getColumnProp('sortable')) {
      var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-amount-down' : 'pi-sort-amount-up-alt' : 'pi-sort-alt';
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-sortable-column-icon pi pi-fw', sortIcon);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: className
      });
    }

    return null;
  };

  var createBadge = function createBadge(_ref3) {
    var metaIndex = _ref3.metaIndex;

    if (metaIndex !== -1 && isBadgeVisible()) {
      var value = props.groupRowsBy && props.groupRowsBy === props.groupRowSortField ? metaIndex : metaIndex + 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-sortable-column-badge"
      }, value);
    }

    return null;
  };

  var createCheckbox = function createCheckbox() {
    if (props.showSelectAll && getColumnProp('selectionMode') === 'multiple' && props.filterDisplay !== 'row') {
      var allRowsSelected = props.allRowsSelected(props.value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderCheckbox, {
        checked: allRowsSelected,
        onChange: props.onColumnCheckboxChange,
        disabled: props.empty
      });
    }

    return null;
  };

  var createFilter = function createFilter() {
    if (props.filterDisplay === 'menu' && getColumnProp('filter')) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColumnFilter, {
        display: "menu",
        column: props.column,
        filters: props.filters,
        onFilterChange: props.onFilterChange,
        onFilterApply: props.onFilterApply,
        filtersStore: props.filtersStore
      });
    }

    return null;
  };

  var createHeader = function createHeader(sortMeta) {
    var title = createTitle();
    var sortIcon = createSortIcon(sortMeta);
    var badge = createBadge(sortMeta);
    var checkbox = createCheckbox();
    var filter = createFilter();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-column-header-content"
    }, title, sortIcon, badge, checkbox, filter);
  };

  var createElement = function createElement() {
    var _isSortableDisabled = isSortableDisabled();

    var sortMeta = getSortMeta();
    var style = getStyle();
    var align = getColumnProp('alignHeader') || getColumnProp('align');
    var frozen = getColumnProp('frozen');
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(getColumnProp('headerClassName'), getColumnProp('className'), _defineProperty({
      'p-sortable-column': getColumnProp('sortable'),
      'p-resizable-column': props.resizableColumns && getColumnProp('resizeable'),
      'p-highlight': sortMeta.sorted,
      'p-frozen-column': frozen,
      'p-selection-column': getColumnProp('selectionMode'),
      'p-sortable-disabled': getColumnProp('sortable') && _isSortableDisabled,
      'p-reorderable-column': props.reorderableColumns && getColumnProp('reorderable') && !frozen
    }, "p-align-".concat(align), !!align));
    var tabIndex = getColumnProp('sortable') && !_isSortableDisabled ? props.tabIndex : null;
    var colSpan = getColumnProp('colSpan');
    var rowSpan = getColumnProp('rowSpan');
    var ariaSort = getAriaSort(sortMeta);
    var headerTooltip = getColumnProp('headerTooltip');
    var hasTooltip = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(headerTooltip);
    var headerTooltipOptions = getColumnProp('headerTooltipOptions');
    var resizer = createResizer();
    var header = createHeader(sortMeta);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      ref: elementRef,
      style: style,
      className: className,
      tabIndex: tabIndex,
      role: "columnheader",
      onClick: onClick,
      onKeyDown: onKeyDown,
      onMouseDown: onMouseDown,
      onDragStart: onDragStart,
      onDragOver: onDragOver,
      onDragLeave: onDragLeave,
      onDrop: onDrop,
      colSpan: colSpan,
      rowSpan: rowSpan,
      "aria-sort": ariaSort
    }, resizer, header), hasTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_tooltip__WEBPACK_IMPORTED_MODULE_13__.Tooltip, _extends({
      target: elementRef,
      content: headerTooltip
    }, headerTooltipOptions)));
  };

  var element = createElement();
  return element;
});
HeaderCell.displayName = 'HeaderCell';

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var TableHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      sortableDisabledFieldsState = _React$useState2[0],
      setSortableDisabledFieldsState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      allSortableDisabledState = _React$useState4[0],
      setAllSortableDisabledState = _React$useState4[1];

  var isSingleSort = props.sortMode === 'single';
  var isMultipleSort = props.sortMode === 'multiple';
  var isAllSortableDisabled = isSingleSort && allSortableDisabledState;

  var isColumnSorted = function isColumnSorted(column) {
    return props.sortField !== null ? column.props.field === props.sortField || column.props.sortField === props.sortField : false;
  };

  var updateSortableDisabled = function updateSortableDisabled() {
    if (isSingleSort || isMultipleSort && props.onSortChange) {
      var sortableDisabledFields = [];
      var allSortableDisabled = false;
      props.columns.forEach(function (column) {
        if (column.props.sortableDisabled) {
          sortableDisabledFields.push(column.props.sortField || column.props.field);

          if (!allSortableDisabled && isColumnSorted(column)) {
            allSortableDisabled = true;
          }
        }
      });
      setSortableDisabledFieldsState(sortableDisabledFields);
      setAllSortableDisabledState(allSortableDisabled);
    }
  };

  var onSortableChange = function onSortableChange() {
    updateSortableDisabled();
  };

  var onCheckboxChange = function onCheckboxChange(e) {
    props.onColumnCheckboxChange(e, props.value);
  };

  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useMountEffect)(function () {
    updateSortableDisabled();
  });

  var createGroupHeaderCells = function createGroupHeaderCells(row) {
    var columns = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(row.props.children);
    return createHeaderCells(columns);
  };

  var createHeaderCells = function createHeaderCells(columns) {
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(columns, function (col, i) {
      var isVisible = col ? !col.props.hidden : true;
      var key = col ? col.props.columnKey || col.props.field || i : i;
      return isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderCell, {
        key: key,
        value: props.value,
        tableProps: props.tableProps,
        column: col,
        tabIndex: props.tabIndex,
        empty: props.empty,
        resizableColumns: props.resizableColumns,
        groupRowsBy: props.groupRowsBy,
        groupRowSortField: props.groupRowSortField,
        sortMode: props.sortMode,
        sortField: props.sortField,
        sortOrder: props.sortOrder,
        multiSortMeta: props.multiSortMeta,
        allSortableDisabled: isAllSortableDisabled,
        onSortableChange: onSortableChange,
        sortableDisabledFields: sortableDisabledFieldsState,
        filterDisplay: props.filterDisplay,
        filters: props.filters,
        filtersStore: props.filtersStore,
        onFilterChange: props.onFilterChange,
        onFilterApply: props.onFilterApply,
        onColumnMouseDown: props.onColumnMouseDown,
        onColumnDragStart: props.onColumnDragStart,
        onColumnDragOver: props.onColumnDragOver,
        onColumnDragLeave: props.onColumnDragLeave,
        onColumnDrop: props.onColumnDrop,
        onColumnResizeStart: props.onColumnResizeStart,
        onColumnResizerClick: props.onColumnResizerClick,
        onColumnResizerDoubleClick: props.onColumnResizerDoubleClick,
        showSelectAll: props.showSelectAll,
        allRowsSelected: props.allRowsSelected,
        onColumnCheckboxChange: onCheckboxChange,
        reorderableColumns: props.reorderableColumns,
        onSortChange: props.onSortChange
      });
    });
  };

  var createCheckbox = function createCheckbox(selectionMode) {
    if (props.showSelectAll && selectionMode === 'multiple') {
      var allRowsSelected = props.allRowsSelected(props.value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderCheckbox, {
        checked: allRowsSelected,
        onChange: onCheckboxChange,
        disabled: props.empty
      });
    }

    return null;
  };

  var createFilter = function createFilter(column, filter) {
    if (filter) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColumnFilter, {
        display: "row",
        column: column,
        filters: props.filters,
        filtersStore: props.filtersStore,
        onFilterChange: props.onFilterChange,
        onFilterApply: props.onFilterApply
      });
    }

    return null;
  };

  var createFilterCells = function createFilterCells() {
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(props.columns, function (col, i) {
      var isVisible = !col.props.hidden;

      if (isVisible) {
        var _col$props = col.props,
            filterHeaderStyle = _col$props.filterHeaderStyle,
            style = _col$props.style,
            filterHeaderClassName = _col$props.filterHeaderClassName,
            className = _col$props.className,
            frozen = _col$props.frozen,
            columnKey = _col$props.columnKey,
            field = _col$props.field,
            selectionMode = _col$props.selectionMode,
            filter = _col$props.filter;

        var colStyle = _objectSpread$1(_objectSpread$1({}, filterHeaderStyle || {}), style || {});

        var colClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-filter-column', filterHeaderClassName, className, {
          'p-frozen-column': frozen
        });
        var colKey = columnKey || field || i;
        var checkbox = createCheckbox(selectionMode);
        var filterRow = createFilter(col, filter);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
          key: colKey,
          style: colStyle,
          className: colClassName
        }, checkbox, filterRow);
      }

      return null;
    });
  };

  var createContent = function createContent() {
    if (props.headerColumnGroup) {
      var rows = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(props.headerColumnGroup.props.children);
      return rows.map(function (row, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          key: i,
          role: "row"
        }, createGroupHeaderCells(row));
      });
    } else {
      var headerRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        role: "row"
      }, createHeaderCells(props.columns));
      var filterRow = props.filterDisplay === 'row' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        role: "row"
      }, createFilterCells());
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, headerRow, filterRow);
    }
  };

  var content = createContent();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", {
    className: "p-datatable-thead"
  }, content);
});
TableHeader.displayName = 'TableHeader';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DataTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.first),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      firstState = _React$useState2[0],
      setFirstState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.rows),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      rowsState = _React$useState4[0],
      setRowsState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.sortField),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      sortFieldState = _React$useState6[0],
      setSortFieldState = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.sortOrder),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      sortOrderState = _React$useState8[0],
      setSortOrderState = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.multiSortMeta),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      multiSortMetaState = _React$useState10[0],
      setMultiSortMetaState = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.filters),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      filtersState = _React$useState12[0],
      setFiltersState = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      columnOrderState = _React$useState14[0],
      setColumnOrderState = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      groupRowsSortMetaState = _React$useState16[0],
      setGroupRowsSortMetaState = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      editingMetaState = _React$useState18[0],
      setEditingMetaState = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      attributeSelectorState = _React$useState20[0],
      setAttributeSelectorState = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.rows),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      d_rowsState = _React$useState22[0],
      setD_rowsState = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      d_filtersState = _React$useState24[0],
      setD_filtersState = _React$useState24[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var tableRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var wrapperRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var bodyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var frozenBodyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var virtualScrollerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var reorderIndicatorUpRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var reorderIndicatorDownRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var colReorderIconWidth = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var colReorderIconHeight = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var resizeHelperRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var draggedColumnElement = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var draggedColumn = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var dropPosition = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var styleElement = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var responsiveStyleElement = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var columnWidthsState = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var tableWidthState = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var resizeColumn = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var resizeColumnElement = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var columnResizing = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var lastResizeHelperX = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var columnSortable = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var columnSortFunction = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var columnField = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var filterTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  if (props.rows !== d_rowsState && !props.onPage) {
    setRowsState(props.rows);
    setD_rowsState(props.rows);
  }

  var _useEventListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useEventListener)({
    type: 'mousemove',
    listener: function listener(event) {
      if (columnResizing.current) {
        onColumnResize(event);
      }
    }
  }),
      _useEventListener2 = _slicedToArray(_useEventListener, 2),
      bindDocumentMouseMoveListener = _useEventListener2[0],
      unbindDocumentMouseMoveListener = _useEventListener2[1];

  var _useEventListener3 = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useEventListener)({
    type: 'mouseup',
    listener: function listener() {
      if (columnResizing.current) {
        columnResizing.current = false;
        onColumnResizeEnd();
      }
    }
  }),
      _useEventListener4 = _slicedToArray(_useEventListener3, 2),
      bindDocumentMouseUpListener = _useEventListener4[0],
      unbindDocumentMouseUpListener = _useEventListener4[1];

  var isCustomStateStorage = function isCustomStateStorage() {
    return props.stateStorage === 'custom';
  };

  var isStateful = function isStateful() {
    return props.stateKey != null || isCustomStateStorage();
  };

  var isVirtualScrollerDisabled = function isVirtualScrollerDisabled() {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isEmpty(props.virtualScrollerOptions) || !props.scrollable;
  };

  var isEquals = function isEquals(data1, data2) {
    return props.compareSelectionBy === 'equals' ? data1 === data2 : primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(data1, data2, props.dataKey);
  };

  var hasFilter = function hasFilter() {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(getFilters()) || props.globalFilter;
  };

  var getFirst = function getFirst() {
    return props.onPage ? props.first : firstState;
  };

  var getRows = function getRows() {
    return props.onPage ? props.rows : rowsState;
  };

  var getSortField = function getSortField() {
    return props.onSort ? props.sortField : sortFieldState;
  };

  var getSortOrder = function getSortOrder() {
    return props.onSort ? props.sortOrder : sortOrderState;
  };

  var getMultiSortMeta = function getMultiSortMeta() {
    return (props.onSort ? props.multiSortMeta : multiSortMetaState) || [];
  };

  var getFilters = function getFilters() {
    return props.onFilter ? props.filters : filtersState;
  };

  var getColumnProp = function getColumnProp(col, prop) {
    return col.props[prop];
  };

  var getColumns = function getColumns(ignoreReorderable) {
    var columns = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(props.children);

    if (!columns) {
      return null;
    }

    if (!ignoreReorderable && props.reorderableColumns && columnOrderState) {
      var orderedColumns = columnOrderState.reduce(function (arr, columnKey) {
        var column = findColumnByKey(columns, columnKey);
        column && arr.push(column);
        return arr;
      }, []);
      return [].concat(_toConsumableArray(orderedColumns), _toConsumableArray(columns.filter(function (col) {
        return orderedColumns.indexOf(col) < 0;
      })));
    }

    return columns;
  };

  var getStorage = function getStorage() {
    switch (props.stateStorage) {
      case 'local':
        return window.localStorage;

      case 'session':
        return window.sessionStorage;

      case 'custom':
        return null;

      default:
        throw new Error(props.stateStorage + ' is not a valid value for the state storage, supported values are "local", "session" and "custom".');
    }
  };

  var saveState = function saveState() {
    var state = {};

    if (props.paginator) {
      state.first = getFirst();
      state.rows = getRows();
    }

    var sortField = getSortField();

    if (sortField) {
      state.sortField = sortField;
      state.sortOrder = getSortOrder();
    }

    var multiSortMeta = getMultiSortMeta();

    if (multiSortMeta) {
      state.multiSortMeta = multiSortMeta;
    }

    if (hasFilter()) {
      state.filters = getFilters();
    }

    if (props.resizableColumns) {
      saveColumnWidths(state);
    }

    if (props.reorderableColumns) {
      state.columnOrder = columnOrderState;
    }

    if (props.expandedRows) {
      state.expandedRows = props.expandedRows;
    }

    if (props.selection && props.onSelectionChange) {
      state.selection = props.selection;
    }

    if (isCustomStateStorage()) {
      if (props.customSaveState) {
        props.customSaveState(state);
      }
    } else {
      var storage = getStorage();

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(state)) {
        storage.setItem(props.stateKey, JSON.stringify(state));
      }
    }

    if (props.onStateSave) {
      props.onStateSave(state);
    }
  };

  var clearState = function clearState() {
    var storage = getStorage();

    if (storage && props.stateKey) {
      storage.removeItem(props.stateKey);
    }
  };

  var restoreState = function restoreState() {
    var restoredState = {};

    if (isCustomStateStorage()) {
      if (props.customRestoreState) {
        restoredState = props.customRestoreState();
      }
    } else {
      var storage = getStorage();
      var stateString = storage.getItem(props.stateKey);
      var dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;

      var reviver = function reviver(key, value) {
        return typeof value === 'string' && dateFormat.test(value) ? new Date(value) : value;
      };

      if (stateString) {
        restoredState = JSON.parse(stateString, reviver);
      }
    }

    _restoreState(restoredState);
  };

  var restoreTableState = function restoreTableState(restoredState) {
    _restoreState(restoredState);
  };

  var _restoreState = function _restoreState() {
    var restoredState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(restoredState)) {
      if (props.paginator) {
        if (props.onPage) {
          var getOnPageParams = function getOnPageParams(first, rows) {
            var totalRecords = getTotalRecords(processedData());
            var pageCount = Math.ceil(totalRecords / rows) || 1;
            var page = Math.floor(first / rows);
            return {
              first: first,
              rows: rows,
              page: page,
              pageCount: pageCount
            };
          };

          props.onPage(createEvent(getOnPageParams(restoredState.first, restoredState.rows)));
        } else {
          setFirstState(restoredState.first);
          setRowsState(restoredState.rows);
        }
      }

      if (restoredState.sortField) {
        if (props.onSort) {
          props.onSort(createEvent({
            sortField: restoredState.sortField,
            sortOrder: restoredState.sortOrder
          }));
        } else {
          setSortFieldState(restoredState.sortField);
          setSortOrderState(restoredState.sortOrder);
        }
      }

      if (restoredState.multiSortMeta) {
        if (props.onSort) {
          props.onSort(createEvent({
            multiSortMeta: restoredState.multiSortMeta
          }));
        } else {
          setMultiSortMetaState(restoredState.multiSortMeta);
        }
      }

      if (restoredState.filters) {
        setD_filtersState(cloneFilters(restoredState.filters));

        if (props.onFilter) {
          props.onFilter(createEvent({
            filters: restoredState.filters
          }));
        } else {
          setFiltersState(cloneFilters(restoredState.filters));
        }
      }

      if (props.resizableColumns) {
        columnWidthsState.current = restoredState.columnWidths;
        tableWidthState.current = restoredState.tableWidth;
        restoreColumnWidths();
      }

      if (props.reorderableColumns) {
        setColumnOrderState(restoredState.columnOrder);
      }

      if (restoredState.expandedRows && props.onRowToggle) {
        props.onRowToggle({
          data: restoredState.expandedRows
        });
      }

      if (restoredState.selection && props.onSelectionChange) {
        props.onSelectionChange({
          value: restoredState.selection
        });
      }

      if (props.onStateRestore) {
        props.onStateRestore(restoredState);
      }
    }
  };

  var saveColumnWidths = function saveColumnWidths(state) {
    var widths = [];
    var headers = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.find(elementRef.current, '.p-datatable-thead > tr > th');
    headers.forEach(function (header) {
      return widths.push(primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(header));
    });
    state.columnWidths = widths.join(',');

    if (props.columnResizeMode === 'expand') {
      state.tableWidth = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(tableRef.current) + 'px';
    }
  };

  var restoreColumnWidths = function restoreColumnWidths() {
    if (columnWidthsState.current) {
      var widths = columnWidthsState.current.split(',');

      if (props.columnResizeMode === 'expand' && tableWidthState.current) {
        tableRef.current.style.width = tableWidthState.current;
        tableRef.current.style.minWidth = tableWidthState.current;
        elementRef.current.style.width = tableWidthState.current;
      }

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(widths)) {
        createStyleElement();
        var innerHTML = '';
        widths.forEach(function (width, index) {
          var style = props.scrollable ? "flex: 1 1 ".concat(width, "px !important") : "width: ".concat(width, "px !important");
          innerHTML += "\n                        .p-datatable[".concat(attributeSelectorState, "] .p-datatable-thead > tr > th:nth-child(").concat(index + 1, "),\n                        .p-datatable[").concat(attributeSelectorState, "] .p-datatable-tbody > tr > td:nth-child(").concat(index + 1, "),\n                        .p-datatable[").concat(attributeSelectorState, "] .p-datatable-tfoot > tr > td:nth-child(").concat(index + 1, ") {\n                            ").concat(style, "\n                        }\n                    ");
        });
        styleElement.current.innerHTML = innerHTML;
      }
    }
  };

  var findParentHeader = function findParentHeader(element) {
    if (element.nodeName === 'TH') {
      return element;
    } else {
      var parent = element.parentElement;

      while (parent.nodeName !== 'TH') {
        parent = parent.parentElement;
        if (!parent) break;
      }

      return parent;
    }
  };

  var getGroupRowSortField = function getGroupRowSortField() {
    return props.sortMode === 'single' ? props.sortField : groupRowsSortMetaState ? groupRowsSortMetaState.field : null;
  };

  var getSelectableData = function getSelectableData(val) {
    if (props.showSelectionElement || props.isDataSelectable) {
      return val.filter(function (data, index) {
        var isSelectable = true;
        if (props.showSelectionElement) isSelectable = props.showSelectionElement({
          rowIndex: index,
          props: props
        });
        if (props.isDataSelectable && isSelectable) isSelectable = props.isDataSelectable({
          data: data,
          index: index
        });
        return isSelectable;
      });
    }

    return val;
  };

  var allRowsSelected = function allRowsSelected(processedData) {
    if (props.onSelectAllChange) {
      return props.selectAll;
    } else {
      var _data = props.selectionPageOnly ? dataToRender(processedData) : processedData;

      var val = props.frozenValue ? [].concat(_toConsumableArray(props.frozenValue), _toConsumableArray(_data)) : _data;
      var selectableVal = getSelectableData(val);
      return selectableVal && props.selection && selectableVal.every(function (sv) {
        return props.selection.some(function (s) {
          return isEquals(s, sv);
        });
      });
    }
  };

  var getSelectionModeInColumn = function getSelectionModeInColumn(columns) {
    if (columns) {
      var col = columns.find(function (c) {
        return !!c.props.selectionMode;
      });
      return col ? col.props.selectionMode : null;
    }

    return null;
  };

  var findColumnByKey = function findColumnByKey(columns, key) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(columns) ? columns.find(function (col) {
      return col.props.columnKey === key || col.props.field === key;
    }) : null;
  };

  var getTotalRecords = function getTotalRecords(data) {
    return props.lazy ? props.totalRecords : data ? data.length : 0;
  };

  var onEditingMetaChange = function onEditingMetaChange(e) {
    var rowData = e.rowData,
        field = e.field,
        editingKey = e.editingKey;
        e.rowIndex;
        var editing = e.editing;

    var editingMeta = _objectSpread({}, editingMetaState);

    var meta = editingMeta[editingKey];

    if (editing) {
      !meta && (meta = editingMeta[editingKey] = {
        data: _objectSpread({}, rowData),
        fields: []
      });
      meta['fields'].push(field);
    } else if (meta) {
      var fields = meta['fields'].filter(function (f) {
        return f !== field;
      });
      !fields.length ? delete editingMeta[editingKey] : meta['fields'] = fields;
    }

    setEditingMetaState(editingMeta);
  };

  var clearEditingMetaData = function clearEditingMetaData() {
    if (props.editMode && primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(editingMetaState)) {
      setEditingMetaState({});
    }
  };

  var onColumnResizeStart = function onColumnResizeStart(e) {
    var event = e.originalEvent,
        column = e.column;
    var containerLeft = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(elementRef.current).left;
    resizeColumn.current = column;
    resizeColumnElement.current = event.currentTarget.parentElement;
    columnResizing.current = true;
    lastResizeHelperX.current = event.pageX - containerLeft + elementRef.current.scrollLeft;
    bindColumnResizeEvents();
  };

  var onColumnResize = function onColumnResize(event) {
    var containerLeft = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(elementRef.current).left;
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(elementRef.current, 'p-unselectable-text');
    resizeHelperRef.current.style.height = elementRef.current.offsetHeight + 'px';
    resizeHelperRef.current.style.top = 0 + 'px';
    resizeHelperRef.current.style.left = event.pageX - containerLeft + elementRef.current.scrollLeft + 'px';
    resizeHelperRef.current.style.display = 'block';
  };

  var onColumnResizeEnd = function onColumnResizeEnd() {
    var delta = resizeHelperRef.current.offsetLeft - lastResizeHelperX.current;
    var columnWidth = resizeColumnElement.current.offsetWidth;
    var newColumnWidth = columnWidth + delta;
    var minWidth = resizeColumnElement.current.style.minWidth || 15;

    if (columnWidth + delta > parseInt(minWidth, 10)) {
      if (props.columnResizeMode === 'fit') {
        var nextColumn = resizeColumnElement.current.nextElementSibling;
        var nextColumnWidth = nextColumn.offsetWidth - delta;

        if (newColumnWidth > 15 && nextColumnWidth > 15) {
          resizeTableCells(newColumnWidth, nextColumnWidth);
        }
      } else if (props.columnResizeMode === 'expand') {
        var tableWidth = tableRef.current.offsetWidth + delta + 'px';

        var updateTableWidth = function updateTableWidth(el) {
          !!el && (el.style.width = el.style.minWidth = tableWidth);
        };

        updateTableWidth(tableRef.current);

        if (!isVirtualScrollerDisabled()) {
          updateTableWidth(bodyRef.current);
          updateTableWidth(frozenBodyRef.current);

          if (wrapperRef.current) {
            updateTableWidth(primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(wrapperRef.current, '.p-virtualscroller-content'));
          }
        }

        resizeTableCells(newColumnWidth);
      }

      if (props.onColumnResizeEnd) {
        props.onColumnResizeEnd({
          element: resizeColumnElement.current,
          column: resizeColumn.current,
          delta: delta
        });
      }

      if (isStateful()) {
        saveState();
      }
    }

    resizeHelperRef.current.style.display = 'none';
    resizeColumn.current = null;
    resizeColumnElement.current = null;
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(elementRef.current, 'p-unselectable-text');
    unbindColumnResizeEvents();
  };

  var resizeTableCells = function resizeTableCells(newColumnWidth, nextColumnWidth) {
    var widths = [];
    var colIndex = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(resizeColumnElement.current);
    var headers = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.find(tableRef.current, '.p-datatable-thead > tr > th');
    headers.forEach(function (header) {
      return widths.push(primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(header));
    });
    destroyStyleElement();
    createStyleElement();
    var innerHTML = '';
    widths.forEach(function (width, index) {
      var colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
      var style = props.scrollable ? "flex: 1 1 ".concat(colWidth, "px !important") : "width: ".concat(colWidth, "px !important");
      innerHTML += "\n                .p-datatable[".concat(attributeSelectorState, "] .p-datatable-thead > tr > th:nth-child(").concat(index + 1, "),\n                .p-datatable[").concat(attributeSelectorState, "] .p-datatable-tbody > tr > td:nth-child(").concat(index + 1, "),\n                .p-datatable[").concat(attributeSelectorState, "] .p-datatable-tfoot > tr > td:nth-child(").concat(index + 1, ") {\n                    ").concat(style, "\n                }\n            ");
    });
    styleElement.current.innerHTML = innerHTML;
  };

  var bindColumnResizeEvents = function bindColumnResizeEvents() {
    bindDocumentMouseMoveListener();
    bindDocumentMouseUpListener();
  };

  var unbindColumnResizeEvents = function unbindColumnResizeEvents() {
    unbindDocumentMouseMoveListener();
    unbindDocumentMouseUpListener();
  };

  var onColumnHeaderMouseDown = function onColumnHeaderMouseDown(e) {
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
    var event = e.originalEvent,
        column = e.column;

    if (props.reorderableColumns && getColumnProp(column, 'reorderable') !== false && !getColumnProp(column, 'frozen')) {
      if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target, 'p-column-resizer')) event.currentTarget.draggable = false;else event.currentTarget.draggable = true;
    }
  };

  var onColumnHeaderCheckboxChange = function onColumnHeaderCheckboxChange(e, processedData) {
    if (props.onSelectAllChange) {
      props.onSelectAllChange(e);
    } else {
      var originalEvent = e.originalEvent,
          checked = e.checked;

      var _data2 = props.selectionPageOnly ? dataToRender(processedData) : processedData;

      var selection = props.selectionPageOnly && props.selection ? props.selection.filter(function (s) {
        return !_data2.some(function (d) {
          return isEquals(s, d);
        });
      }) : [];

      if (checked) {
        selection = props.frozenValue ? [].concat(_toConsumableArray(selection), _toConsumableArray(props.frozenValue), _toConsumableArray(_data2)) : [].concat(_toConsumableArray(selection), _toConsumableArray(_data2));
        selection = getSelectableData(selection);
        props.onAllRowsSelect && props.onAllRowsSelect({
          originalEvent: originalEvent,
          data: selection,
          type: 'all'
        });
      } else {
        props.onAllRowsUnselect && props.onAllRowsUnselect({
          originalEvent: originalEvent,
          data: selection,
          type: 'all'
        });
      }

      if (props.onSelectionChange) {
        props.onSelectionChange({
          originalEvent: originalEvent,
          value: selection,
          type: 'all'
        });
      }
    }
  };

  var onColumnHeaderDragStart = function onColumnHeaderDragStart(e) {
    var event = e.originalEvent,
        column = e.column;

    if (columnResizing.current) {
      event.preventDefault();
      return;
    }

    if (!props.reorderableColumns) return;
    colReorderIconWidth.current = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getHiddenElementOuterWidth(reorderIndicatorUpRef.current);
    colReorderIconHeight.current = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getHiddenElementOuterHeight(reorderIndicatorUpRef.current);
    draggedColumn.current = column;
    draggedColumnElement.current = findParentHeader(event.currentTarget);
    event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
  };

  var onColumnHeaderDragOver = function onColumnHeaderDragOver(e) {
    var event = e.originalEvent,
        column = e.column;
    var dropHeader = findParentHeader(event.currentTarget);

    if (props.reorderableColumns && draggedColumnElement.current && dropHeader && !getColumnProp(column, 'frozen')) {
      event.preventDefault();

      if (draggedColumnElement.current !== dropHeader) {
        var containerOffset = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(elementRef.current);
        var dropHeaderOffset = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(dropHeader);
        var targetLeft = dropHeaderOffset.left - containerOffset.left;
        var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        reorderIndicatorUpRef.current.style.top = dropHeaderOffset.top - containerOffset.top - (colReorderIconHeight.current - 1) + 'px';
        reorderIndicatorDownRef.current.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

        if (event.pageX > columnCenter) {
          reorderIndicatorUpRef.current.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(colReorderIconWidth.current / 2) + 'px';
          reorderIndicatorDownRef.current.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(colReorderIconWidth.current / 2) + 'px';
          dropPosition.current = 1;
        } else {
          reorderIndicatorUpRef.current.style.left = targetLeft - Math.ceil(colReorderIconWidth.current / 2) + 'px';
          reorderIndicatorDownRef.current.style.left = targetLeft - Math.ceil(colReorderIconWidth.current / 2) + 'px';
          dropPosition.current = -1;
        }

        reorderIndicatorUpRef.current.style.display = 'block';
        reorderIndicatorDownRef.current.style.display = 'block';
      }
    }
  };

  var onColumnHeaderDragLeave = function onColumnHeaderDragLeave(e) {
    var event = e.originalEvent;

    if (props.reorderableColumns && draggedColumnElement.current) {
      event.preventDefault();
      reorderIndicatorUpRef.current.style.display = 'none';
      reorderIndicatorDownRef.current.style.display = 'none';
    }
  };

  var onColumnHeaderDrop = function onColumnHeaderDrop(e) {
    var event = e.originalEvent,
        column = e.column;
    event.preventDefault();

    if (draggedColumnElement.current) {
      var dragIndex = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(draggedColumnElement.current);
      var dropIndex = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(findParentHeader(event.currentTarget));
      var allowDrop = dragIndex !== dropIndex;

      if (allowDrop && (dropIndex - dragIndex === 1 && dropPosition.current === -1 || dragIndex - dropIndex === 1 && dropPosition.current === 1)) {
        allowDrop = false;
      }

      if (allowDrop) {
        var _columns = getColumns();

        var isSameColumn = function isSameColumn(col1, col2) {
          return col1.props.columnKey || col2.props.columnKey ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(col1.props, col2.props, 'columnKey') : primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(col1.props, col2.props, 'field');
        };

        var dragColIndex = _columns.findIndex(function (child) {
          return isSameColumn(child, draggedColumn.current);
        });

        var dropColIndex = _columns.findIndex(function (child) {
          return isSameColumn(child, column);
        });

        if (dropColIndex < dragColIndex && dropPosition.current === 1) {
          dropColIndex++;
        }

        if (dropColIndex > dragColIndex && dropPosition.current === -1) {
          dropColIndex--;
        }

        primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.reorderArray(_columns, dragColIndex, dropColIndex);

        var columnOrder = _columns.reduce(function (orders, col) {
          orders.push(col.props.columnKey || col.props.field);
          return orders;
        }, []);

        setColumnOrderState(columnOrder);

        if (props.onColReorder) {
          props.onColReorder({
            originalEvent: event,
            dragIndex: dragColIndex,
            dropIndex: dropColIndex,
            columns: _columns
          });
        }
      }

      reorderIndicatorUpRef.current.style.display = 'none';
      reorderIndicatorDownRef.current.style.display = 'none';
      draggedColumnElement.current.draggable = false;
      draggedColumnElement.current = null;
      draggedColumn.current = null;
      dropPosition.current = null;
    }
  };

  var createStyleElement = function createStyleElement() {
    styleElement.current = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.createInlineStyle(primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].nonce);
  };

  var createResponsiveStyle = function createResponsiveStyle() {
    if (!responsiveStyleElement.current) {
      responsiveStyleElement.current = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.createInlineStyle(primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].nonce);
      var innerHTML = "\n@media screen and (max-width: ".concat(props.breakpoint, ") {\n    .p-datatable[").concat(attributeSelectorState, "] .p-datatable-thead > tr > th,\n    .p-datatable[").concat(attributeSelectorState, "] .p-datatable-tfoot > tr > td {\n        display: none !important;\n    }\n\n    .p-datatable[").concat(attributeSelectorState, "] .p-datatable-tbody > tr > td {\n        display: flex;\n        width: 100% !important;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .p-datatable[").concat(attributeSelectorState, "] .p-datatable-tbody > tr > td:not(:last-child) {\n        border: 0 none;\n    }\n\n    .p-datatable[").concat(attributeSelectorState, "].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n        border-top: 0;\n        border-right: 0;\n        border-left: 0;\n    }\n\n    .p-datatable[").concat(attributeSelectorState, "] .p-datatable-tbody > tr > td > .p-column-title {\n        display: block;\n    }\n}\n");
      responsiveStyleElement.current.innerHTML = innerHTML;
    }
  };

  var destroyResponsiveStyle = function destroyResponsiveStyle() {
    responsiveStyleElement.current = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeInlineStyle(responsiveStyleElement.current);
  };

  var destroyStyleElement = function destroyStyleElement() {
    styleElement.current = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeInlineStyle(styleElement.current);
  };

  var onPageChange = function onPageChange(e) {
    clearEditingMetaData();

    if (props.onPage) {
      props.onPage(createEvent(e));
    } else {
      setFirstState(e.first);
      setRowsState(e.rows);
    }

    if (props.onValueChange) {
      props.onValueChange(processedData());
    }
  };

  var onSortChange = function onSortChange(e) {
    clearEditingMetaData();
    var event = e.originalEvent,
        column = e.column,
        sortableDisabledFields = e.sortableDisabledFields;
    var sortField = column.props.sortField || column.props.field;
    var sortOrder = props.defaultSortOrder;
    var multiSortMeta;
    var eventMeta;
    columnSortable.current = column.props.sortable;
    columnSortFunction.current = column.props.sortFunction;
    columnField.current = sortField;

    if (props.sortMode === 'multiple') {
      var metaKey = event.metaKey || event.ctrlKey;
      multiSortMeta = _toConsumableArray(getMultiSortMeta());
      var sortMeta = multiSortMeta.find(function (sortMeta) {
        return sortMeta.field === sortField;
      });
      sortOrder = sortMeta ? getCalculatedSortOrder(sortMeta.order) : sortOrder;
      var newMetaData = {
        field: sortField,
        order: sortOrder
      };

      if (sortOrder) {
        multiSortMeta = metaKey ? multiSortMeta : multiSortMeta.filter(function (meta) {
          return sortableDisabledFields.some(function (field) {
            return field === meta.field;
          });
        });
        addSortMeta(newMetaData, multiSortMeta);
      } else if (props.removableSort) {
        removeSortMeta(newMetaData, multiSortMeta);
      }

      eventMeta = {
        multiSortMeta: multiSortMeta
      };
    } else {
      sortOrder = getSortField() === sortField ? getCalculatedSortOrder(getSortOrder()) : sortOrder;

      if (props.removableSort) {
        sortField = sortOrder ? sortField : null;
      }

      eventMeta = {
        sortField: sortField,
        sortOrder: sortOrder
      };
    }

    if (props.onSort) {
      props.onSort(createEvent(eventMeta));
    } else {
      setFirstState(0);
      setSortFieldState(eventMeta.sortField);
      setSortOrderState(eventMeta.sortOrder);
      setMultiSortMetaState(eventMeta.multiSortMeta);
    }

    if (props.onValueChange) {
      props.onValueChange(processedData({
        sortField: sortField,
        sortOrder: sortOrder,
        multiSortMeta: multiSortMeta
      }));
    }
  };

  var getCalculatedSortOrder = function getCalculatedSortOrder(currentOrder) {
    return props.removableSort ? props.defaultSortOrder === currentOrder ? currentOrder * -1 : 0 : currentOrder * -1;
  };

  var compareValuesOnSort = function compareValuesOnSort(value1, value2, order) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.sort(value1, value2, order, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].locale, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].nullSortOrder);
  };

  var addSortMeta = function addSortMeta(meta, multiSortMeta) {
    var index = multiSortMeta.findIndex(function (sortMeta) {
      return sortMeta.field === meta.field;
    });
    if (index >= 0) multiSortMeta[index] = meta;else multiSortMeta.push(meta);
  };

  var removeSortMeta = function removeSortMeta(meta, multiSortMeta) {
    var index = multiSortMeta.findIndex(function (sortMeta) {
      return sortMeta.field === meta.field;
    });

    if (index >= 0) {
      multiSortMeta.splice(index, 1);
    }

    multiSortMeta = multiSortMeta.length > 0 ? multiSortMeta : null;
  };

  var sortSingle = function sortSingle(data, field, order) {
    if (props.groupRowsBy && props.groupRowsBy === props.sortField) {
      var multiSortMeta = [{
        field: props.sortField,
        order: props.sortOrder || props.defaultSortOrder
      }];
      props.sortField !== field && multiSortMeta.push({
        field: field,
        order: order
      });
      return sortMultiple(data, multiSortMeta);
    }

    var value = _toConsumableArray(data);

    if (columnSortable.current && columnSortFunction.current) {
      value = columnSortFunction.current({
        data: data,
        field: field,
        order: order
      });
    } else {
      value.sort(function (data1, data2) {
        var value1 = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(data1, field);
        var value2 = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(data2, field);
        return compareValuesOnSort(value1, value2, order);
      });
    }

    return value;
  };

  var sortMultiple = function sortMultiple(data) {
    var multiSortMeta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (props.groupRowsBy && (groupRowsSortMetaState || multiSortMeta.length && props.groupRowsBy === multiSortMeta[0].field)) {
      var groupRowsSortMeta = groupRowsSortMetaState;
      var firstSortMeta = multiSortMeta[0];

      if (!groupRowsSortMeta) {
        groupRowsSortMeta = firstSortMeta;
        setGroupRowsSortMetaState(groupRowsSortMeta);
      }

      if (firstSortMeta.field !== groupRowsSortMeta.field) {
        multiSortMeta = [groupRowsSortMeta].concat(_toConsumableArray(multiSortMeta));
      }
    }

    var value = _toConsumableArray(data);

    if (columnSortable.current && columnSortFunction.current) {
      var meta = multiSortMeta.find(function (meta) {
        return meta.field === columnField.current;
      });
      var field = columnField.current;
      var order = meta ? meta.order : props.defaultSortOrder;
      value = columnSortFunction.current({
        data: data,
        field: field,
        order: order,
        multiSortMeta: multiSortMeta
      });
    } else {
      value.sort(function (data1, data2) {
        return multisortField(data1, data2, multiSortMeta, 0);
      });
    }

    return value;
  };

  var multisortField = function multisortField(data1, data2, multiSortMeta, index) {
    var value1 = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
    var value2 = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field); // check if they are equal handling dates and locales

    if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.compare(value1, value2, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].locale) === 0) {
      return multiSortMeta.length - 1 > index ? multisortField(data1, data2, multiSortMeta, index + 1) : 0;
    }

    return compareValuesOnSort(value1, value2, multiSortMeta[index].order);
  };

  var onFilterChange = function onFilterChange(filters) {
    clearEditingMetaData();
    setD_filtersState(filters);
  };

  var onFilterApply = function onFilterApply(filtersToApply) {
    clearTimeout(filterTimeout.current);
    filterTimeout.current = setTimeout(function () {
      var filters = cloneFilters(filtersToApply || d_filtersState);

      if (props.onFilter) {
        props.onFilter(createEvent({
          filters: filters
        }));
      } else {
        setFirstState(0);
        setFiltersState(filters);
      }

      if (props.onValueChange) {
        props.onValueChange(processedData({
          filters: filters
        }));
      }
    }, props.filterDelay);
  };

  var filterLocal = function filterLocal(data, filters) {
    if (!data) return;
    filters = filters || {};
    var columns = getColumns();
    var filteredValue = [];
    var isGlobalFilter = filters['global'] || props.globalFilter;
    var globalFilterFieldsArray;

    if (isGlobalFilter) {
      globalFilterFieldsArray = props.globalFilterFields || columns.filter(function (col) {
        return !col.props.excludeGlobalFilter;
      }).map(function (col) {
        return col.props.filterField || col.props.field;
      });
    }

    for (var i = 0; i < data.length; i++) {
      var localMatch = true;
      var globalMatch = false;
      var localFiltered = false;

      for (var prop in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, prop) && prop !== 'global') {
          localFiltered = true;
          var filterField = prop;
          var filterMeta = filters[filterField];

          if (filterMeta.operator) {
            for (var j = 0; j < filterMeta.constraints.length; j++) {
              var filterConstraint = filterMeta.constraints[j];
              localMatch = executeLocalFilter(filterField, data[i], filterConstraint, j);

              if (filterMeta.operator === primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterOperator.OR && localMatch || filterMeta.operator === primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterOperator.AND && !localMatch) {
                break;
              }
            }
          } else {
            localMatch = executeLocalFilter(filterField, data[i], filterMeta, 0);
          }

          if (!localMatch) {
            break;
          }
        }
      }

      if (isGlobalFilter && !globalMatch && globalFilterFieldsArray) {
        for (var _j = 0; _j < globalFilterFieldsArray.length; _j++) {
          var globalFilterField = globalFilterFieldsArray[_j];
          var matchMode = filters['global'] ? filters['global'].matchMode : props.globalFilterMatchMode;
          var value = filters['global'] ? filters['global'].value : props.globalFilter;
          globalMatch = primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterService.filters[matchMode](primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(data[i], globalFilterField), value, props.filterLocale);

          if (globalMatch) {
            break;
          }
        }
      }

      var matches = void 0;

      if (isGlobalFilter) {
        matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
      } else {
        matches = localFiltered && localMatch;
      }

      if (matches) {
        filteredValue.push(data[i]);
      }
    }

    if (filteredValue.length === props.value.length) {
      filteredValue = data;
    }

    return filteredValue;
  };

  var executeLocalFilter = function executeLocalFilter(field, rowData, filterMeta, index) {
    var filterValue = filterMeta.value;
    var filterMatchMode = filterMeta.matchMode === 'custom' ? "custom_".concat(field) : filterMeta.matchMode || primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterMatchMode.STARTS_WITH;
    var dataFieldValue = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(rowData, field);
    var filterConstraint = primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterService.filters[filterMatchMode];
    return primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isFunction(filterConstraint) && filterConstraint(dataFieldValue, filterValue, props.filterLocale, index);
  };

  var cloneFilters = function cloneFilters(filters) {
    filters = filters || props.filters;
    var cloned = {};

    if (filters) {
      Object.entries(filters).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            prop = _ref2[0],
            value = _ref2[1];

        cloned[prop] = value.operator ? {
          operator: value.operator,
          constraints: value.constraints.map(function (constraint) {
            return _objectSpread({}, constraint);
          })
        } : _objectSpread({}, value);
      });
    } else {
      var _columns2 = getColumns();

      cloned = _columns2.reduce(function (filters, col) {
        var field = col.props.filterField || col.props.field;
        var filterFunction = col.props.filterFunction;
        var dataType = col.props.dataType;
        var matchMode = col.props.filterMatchMode || (primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].filterMatchModeOptions[dataType] ? primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].filterMatchModeOptions[dataType][0] : primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterMatchMode.STARTS_WITH);
        var constraint = {
          value: null,
          matchMode: matchMode
        };

        if (filterFunction) {
          primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterService.register("custom_".concat(field), function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return filterFunction.apply(void 0, args.concat([{
              column: col
            }]));
          });
        }

        filters[field] = props.filterDisplay === 'menu' ? {
          operator: primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterOperator.AND,
          constraints: [constraint]
        } : constraint;
        return filters;
      }, {});
    }

    return cloned;
  };

  var filter = function filter(value, field, matchMode) {
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var filters = _objectSpread({}, d_filtersState);

    var meta = filters[field];
    var constraint = meta && meta.operator ? meta.constraints[index] : meta;
    constraint = meta ? {
      value: value,
      matchMode: matchMode || constraint.matchMode
    } : {
      value: value,
      matchMode: matchMode
    };
    props.filterDisplay === 'menu' && meta && meta.operator ? filters[field].constraints[index] = constraint : filters[field] = constraint;
    setD_filtersState(filters);
    onFilterApply(filters);
  };

  var reset = function reset() {
    setD_rowsState(props.rows);
    setD_filtersState(cloneFilters(props.filters));
    setGroupRowsSortMetaState(null);
    setEditingMetaState({});

    if (!props.onPage) {
      setFirstState(props.first);
      setRowsState(props.rows);
    }

    if (!props.onSort) {
      setSortFieldState(props.sortField);
      setSortOrderState(props.sortOrder);
      setMultiSortMetaState(props.multiSortMeta);
    }

    if (!props.onFilter) {
      setFiltersState(props.filters);
    }

    resetColumnOrder();
  };

  var resetScroll = function resetScroll() {
    if (wrapperRef.current) {
      var scrollableContainer = !isVirtualScrollerDisabled() ? primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(wrapperRef.current, '.p-virtualscroller') : wrapperRef.current;
      scrollableContainer.scrollTo(0, 0);
    }
  };

  var resetColumnOrder = function resetColumnOrder() {
    var columns = getColumns(true);
    var columnOrder = [];

    if (columns) {
      columnOrder = columns.reduce(function (orders, col) {
        orders.push(col.props.columnKey || col.props.field);
        return orders;
      }, []);
    }

    setColumnOrderState(columnOrder);
  };

  var exportCSV = function exportCSV(options) {
    var data;
    var csv = "\uFEFF";
    var columns = getColumns();

    if (options && options.selectionOnly) {
      data = props.selection || [];
    } else {
      data = [].concat(_toConsumableArray(props.frozenValue || []), _toConsumableArray(processedData() || []));
    } //headers


    columns.forEach(function (column, i) {
      var _column$props = column.props,
          field = _column$props.field,
          header = _column$props.header,
          exportable = _column$props.exportable;

      if (exportable && field) {
        csv += '"' + (header || field) + '"';

        if (i < columns.length - 1) {
          csv += props.csvSeparator;
        }
      }
    }); //body

    data.forEach(function (record) {
      csv += '\n';
      columns.forEach(function (column, i) {
        var _column$props2 = column.props,
            colField = _column$props2.field,
            exportField = _column$props2.exportField,
            exportable = _column$props2.exportable;
        var field = exportField || colField;

        if (exportable && field) {
          var cellData = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(record, field);

          if (cellData != null) {
            cellData = props.exportFunction ? props.exportFunction({
              data: cellData,
              field: field,
              rowData: record,
              column: column
            }) : String(cellData).replace(/"/g, '""');
          } else cellData = '';

          csv += '"' + cellData + '"';

          if (i < columns.length - 1) {
            csv += props.csvSeparator;
          }
        }
      });
    });
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.exportCSV(csv, props.exportFilename);
  };

  var closeEditingCell = function closeEditingCell() {
    if (props.editMode !== 'row') {
      document.body.click();
    }
  };

  var createEvent = function createEvent(event) {
    return _objectSpread({
      first: getFirst(),
      rows: getRows(),
      sortField: getSortField(),
      sortOrder: getSortOrder(),
      multiSortMeta: getMultiSortMeta(),
      filters: getFilters()
    }, event);
  };

  var processedData = function processedData(localState) {
    var data = props.value || [];

    if (!props.lazy) {
      if (data && data.length) {
        var filters = localState && localState.filters || getFilters();
        var sortField = localState && localState.sortField || getSortField();
        var sortOrder = localState && localState.sortOrder || getSortOrder();
        var multiSortMeta = localState && localState.multiSortMeta || getMultiSortMeta();

        var _columns3 = getColumns();

        var sortColumn = _columns3.find(function (col) {
          return col.props.field === sortField;
        });

        if (sortColumn) {
          columnSortable.current = sortColumn.props.sortable;
          columnSortFunction.current = sortColumn.props.sortFunction;
        }

        if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(filters) || props.globalFilter) {
          data = filterLocal(data, filters);
        }

        if (sortField || primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(multiSortMeta)) {
          if (props.sortMode === 'single') data = sortSingle(data, sortField, sortOrder);else if (props.sortMode === 'multiple') data = sortMultiple(data, multiSortMeta);
        }
      }
    }

    return data;
  };

  var dataToRender = function dataToRender(data) {
    if (data && props.paginator) {
      var first = props.lazy ? 0 : getFirst();
      return data.slice(first, first + getRows());
    }

    return data;
  };

  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useMountEffect)(function () {
    setAttributeSelectorState((0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.UniqueComponentId)());
    setFiltersState(cloneFilters(props.filters));
    setD_filtersState(cloneFilters(props.filters));

    if (isStateful()) {
      restoreState();

      if (props.resizableColumns) {
        restoreColumnWidths();
      }
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    elementRef.current.setAttribute(attributeSelectorState, '');

    if (props.responsiveLayout === 'stack' && !props.scrollable) {
      createResponsiveStyle();
    }
  }, [attributeSelectorState]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    setFiltersState(cloneFilters(props.filters));
    setD_filtersState(cloneFilters(props.filters));
  }, [props.filters]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (isStateful()) {
      saveState();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    destroyResponsiveStyle();

    if (props.responsiveLayout === 'stack' && !props.scrollable) {
      createResponsiveStyle();
    }
  }, [props.responsiveLayout]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (props.globalFilter) {
      filter(props.globalFilter, 'global', props.globalFilterMatchMode);
    }
  }, [props.globalFilter]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnmountEffect)(function () {
    unbindColumnResizeEvents();
    destroyStyleElement();
    destroyResponsiveStyle();
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      clearState: clearState,
      closeEditingCell: closeEditingCell,
      exportCSV: exportCSV,
      filter: filter,
      reset: reset,
      resetColumnOrder: resetColumnOrder,
      resetScroll: resetScroll,
      restoreColumnWidths: restoreColumnWidths,
      restoreState: restoreState,
      restoreTableState: restoreTableState,
      saveState: saveState,
      getElement: function getElement() {
        return elementRef.current;
      },
      getTable: function getTable() {
        return tableRef.current;
      },
      getVirtualScroller: function getVirtualScroller() {
        return virtualScrollerRef.current;
      }
    };
  });

  var createLoader = function createLoader() {
    if (props.loading) {
      var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-datatable-loading-icon pi-spin', props.loadingIcon);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-datatable-loading-overlay p-component-overlay"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: iconClassName
      }));
    }

    return null;
  };

  var createHeader = function createHeader() {
    if (props.header) {
      var _content = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(props.header, {
        props: props
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-datatable-header"
      }, _content);
    }

    return null;
  };

  var createTableHeader = function createTableHeader(options, empty) {
    var sortField = getSortField();
    var sortOrder = getSortOrder();

    var multiSortMeta = _toConsumableArray(getMultiSortMeta());

    var groupRowSortField = getGroupRowSortField();
    var filters = d_filtersState;
    var filtersStore = !props.onFilter && props.filters || getFilters();
    var processedData = options.items,
        columns = options.columns;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableHeader, {
      value: processedData,
      tableProps: props,
      columns: columns,
      tabIndex: props.tabIndex,
      empty: empty,
      headerColumnGroup: props.headerColumnGroup,
      resizableColumns: props.resizableColumns,
      onColumnResizeStart: onColumnResizeStart,
      onColumnResizerClick: props.onColumnResizerClick,
      onColumnResizerDoubleClick: props.onColumnResizerDoubleClick,
      sortMode: props.sortMode,
      sortField: sortField,
      sortOrder: sortOrder,
      multiSortMeta: multiSortMeta,
      groupRowsBy: props.groupRowsBy,
      groupRowSortField: groupRowSortField,
      onSortChange: onSortChange,
      filterDisplay: props.filterDisplay,
      filters: filters,
      filtersStore: filtersStore,
      onFilterChange: onFilterChange,
      onFilterApply: onFilterApply,
      showSelectAll: props.showSelectAll,
      allRowsSelected: allRowsSelected,
      onColumnCheckboxChange: onColumnHeaderCheckboxChange,
      onColumnMouseDown: onColumnHeaderMouseDown,
      onColumnDragStart: onColumnHeaderDragStart,
      onColumnDragOver: onColumnHeaderDragOver,
      onColumnDragLeave: onColumnHeaderDragLeave,
      onColumnDrop: onColumnHeaderDrop,
      rowGroupMode: props.rowGroupMode,
      reorderableColumns: props.reorderableColumns
    });
  };

  var createTableBody = function createTableBody(options, selectionModeInColumn, empty, isVirtualScrollerDisabled) {
    var first = getFirst();
    var rows = options.rows,
        columns = options.columns,
        contentRef = options.contentRef,
        className = options.className;
        options.itemSize;
    var frozenBody = props.frozenValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableBody, {
      ref: frozenBodyRef,
      value: props.frozenValue,
      className: "p-datatable-frozen-tbody",
      frozenRow: true,
      tableProps: props,
      tableSelector: attributeSelectorState,
      columns: columns,
      selectionModeInColumn: selectionModeInColumn,
      first: first,
      editingMeta: editingMetaState,
      onEditingMetaChange: onEditingMetaChange,
      tabIndex: props.tabIndex,
      onRowClick: props.onRowClick,
      onRowDoubleClick: props.onRowDoubleClick,
      onCellClick: props.onCellClick,
      selection: props.selection,
      onSelectionChange: props.onSelectionChange,
      lazy: props.lazy,
      paginator: props.paginator,
      onCellSelect: props.onCellSelect,
      onCellUnselect: props.onCellUnselect,
      onRowSelect: props.onRowSelect,
      onRowUnselect: props.onRowUnselect,
      dragSelection: props.dragSelection,
      onContextMenu: props.onContextMenu,
      onContextMenuSelectionChange: props.onContextMenuSelectionChange,
      metaKeySelection: props.metaKeySelection,
      selectionMode: props.selectionMode,
      cellSelection: props.cellSelection,
      contextMenuSelection: props.contextMenuSelection,
      dataKey: props.dataKey,
      expandedRows: props.expandedRows,
      onRowCollapse: props.onRowCollapse,
      onRowExpand: props.onRowExpand,
      onRowToggle: props.onRowToggle,
      editMode: props.editMode,
      editingRows: props.editingRows,
      onRowReorder: props.onRowReorder,
      reorderableRows: props.reorderableRows,
      scrollable: props.scrollable,
      rowGroupMode: props.rowGroupMode,
      groupRowsBy: props.groupRowsBy,
      expandableRowGroups: props.expandableRowGroups,
      loading: props.loading,
      emptyMessage: props.emptyMessage,
      rowGroupHeaderTemplate: props.rowGroupHeaderTemplate,
      rowExpansionTemplate: props.rowExpansionTemplate,
      rowGroupFooterTemplate: props.rowGroupFooterTemplate,
      onRowEditChange: props.onRowEditChange,
      compareSelectionBy: props.compareSelectionBy,
      selectOnEdit: props.selectOnEdit,
      onRowEditInit: props.onRowEditInit,
      rowEditValidator: props.rowEditValidator,
      onRowEditSave: props.onRowEditSave,
      onRowEditComplete: props.onRowEditComplete,
      onRowEditCancel: props.onRowEditCancel,
      cellClassName: props.cellClassName,
      responsiveLayout: props.responsiveLayout,
      selectionAutoFocus: props.selectionAutoFocus,
      isDataSelectable: props.isDataSelectable,
      showSelectionElement: props.showSelectionElement,
      showRowReorderElement: props.showRowReorderElement,
      expandedRowIcon: props.expandedRowIcon,
      collapsedRowIcon: props.collapsedRowIcon,
      rowClassName: props.rowClassName,
      virtualScrollerOptions: options,
      isVirtualScrollerDisabled: true
    });
    var body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableBody, {
      ref: bodyRef,
      value: dataToRender(rows),
      className: className,
      empty: empty,
      frozenRow: false,
      tableProps: props,
      tableSelector: attributeSelectorState,
      columns: columns,
      selectionModeInColumn: selectionModeInColumn,
      first: first,
      editingMeta: editingMetaState,
      onEditingMetaChange: onEditingMetaChange,
      tabIndex: props.tabIndex,
      onRowClick: props.onRowClick,
      onRowDoubleClick: props.onRowDoubleClick,
      onCellClick: props.onCellClick,
      selection: props.selection,
      onSelectionChange: props.onSelectionChange,
      lazy: props.lazy,
      paginator: props.paginator,
      onCellSelect: props.onCellSelect,
      onCellUnselect: props.onCellUnselect,
      onRowSelect: props.onRowSelect,
      onRowUnselect: props.onRowUnselect,
      dragSelection: props.dragSelection,
      onContextMenu: props.onContextMenu,
      onContextMenuSelectionChange: props.onContextMenuSelectionChange,
      metaKeySelection: props.metaKeySelection,
      selectionMode: props.selectionMode,
      cellSelection: props.cellSelection,
      contextMenuSelection: props.contextMenuSelection,
      dataKey: props.dataKey,
      expandedRows: props.expandedRows,
      onRowCollapse: props.onRowCollapse,
      onRowExpand: props.onRowExpand,
      onRowToggle: props.onRowToggle,
      editMode: props.editMode,
      editingRows: props.editingRows,
      onRowReorder: props.onRowReorder,
      reorderableRows: props.reorderableRows,
      scrollable: props.scrollable,
      rowGroupMode: props.rowGroupMode,
      groupRowsBy: props.groupRowsBy,
      expandableRowGroups: props.expandableRowGroups,
      loading: props.loading,
      emptyMessage: props.emptyMessage,
      rowGroupHeaderTemplate: props.rowGroupHeaderTemplate,
      rowExpansionTemplate: props.rowExpansionTemplate,
      rowGroupFooterTemplate: props.rowGroupFooterTemplate,
      onRowEditChange: props.onRowEditChange,
      compareSelectionBy: props.compareSelectionBy,
      selectOnEdit: props.selectOnEdit,
      onRowEditInit: props.onRowEditInit,
      rowEditValidator: props.rowEditValidator,
      onRowEditSave: props.onRowEditSave,
      onRowEditComplete: props.onRowEditComplete,
      onRowEditCancel: props.onRowEditCancel,
      cellClassName: props.cellClassName,
      responsiveLayout: props.responsiveLayout,
      selectionAutoFocus: props.selectionAutoFocus,
      isDataSelectable: props.isDataSelectable,
      showSelectionElement: props.showSelectionElement,
      showRowReorderElement: props.showRowReorderElement,
      expandedRowIcon: props.expandedRowIcon,
      collapsedRowIcon: props.collapsedRowIcon,
      rowClassName: props.rowClassName,
      virtualScrollerContentRef: contentRef,
      virtualScrollerOptions: options,
      isVirtualScrollerDisabled: isVirtualScrollerDisabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, frozenBody, body);
  };

  var createTableFooter = function createTableFooter(options) {
    var columns = options.columns;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableFooter, {
      tableProps: props,
      columns: columns,
      footerColumnGroup: props.footerColumnGroup
    });
  };

  var createContent = function createContent(processedData, columns, selectionModeInColumn, empty) {
    if (!columns) return;

    var _isVirtualScrollerDisabled = isVirtualScrollerDisabled();

    var virtualScrollerOptions = props.virtualScrollerOptions || {};
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: wrapperRef,
      className: "p-datatable-wrapper",
      style: {
        maxHeight: _isVirtualScrollerDisabled ? props.scrollHeight : null
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_5__.VirtualScroller, _extends({
      ref: virtualScrollerRef
    }, virtualScrollerOptions, {
      items: processedData,
      columns: columns,
      style: _objectSpread(_objectSpread({}, virtualScrollerOptions.style), {
        height: props.scrollHeight !== 'flex' ? props.scrollHeight : undefined
      }),
      scrollHeight: props.scrollHeight !== 'flex' ? undefined : '100%',
      disabled: _isVirtualScrollerDisabled,
      loaderDisabled: true,
      showSpacer: false,
      contentTemplate: function contentTemplate(options) {
        var ref = function ref(el) {
          tableRef.current = el;
          options.spacerRef && options.spacerRef(el);
        };

        var tableClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-datatable-table', props.tableClassName);
        var tableHeader = createTableHeader(options, empty);
        var tableBody = createTableBody(options, selectionModeInColumn, empty, _isVirtualScrollerDisabled);
        var tableFooter = createTableFooter(options);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
          ref: ref,
          style: props.tableStyle,
          className: tableClassName,
          role: "table"
        }, tableHeader, tableBody, tableFooter);
      }
    })));
  };

  var createFooter = function createFooter() {
    if (props.footer) {
      var _content2 = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getJSXElement(props.footer, {
        props: props
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-datatable-footer"
      }, _content2);
    }

    return null;
  };

  var createPaginator = function createPaginator(position, totalRecords) {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-paginator-' + position, props.paginatorClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_paginator__WEBPACK_IMPORTED_MODULE_3__.Paginator, {
      first: getFirst(),
      rows: getRows(),
      pageLinkSize: props.pageLinkSize,
      className: className,
      onPageChange: onPageChange,
      template: props.paginatorTemplate,
      totalRecords: totalRecords,
      rowsPerPageOptions: props.rowsPerPageOptions,
      currentPageReportTemplate: props.currentPageReportTemplate,
      leftContent: props.paginatorLeft,
      rightContent: props.paginatorRight,
      alwaysShow: props.alwaysShowPaginator,
      dropdownAppendTo: props.paginatorDropdownAppendTo
    });
  };

  var createPaginatorTop = function createPaginatorTop(totalRecords) {
    if (props.paginator && props.paginatorPosition !== 'bottom') {
      return createPaginator('top', totalRecords);
    }

    return null;
  };

  var createPaginatorBottom = function createPaginatorBottom(totalRecords) {
    if (props.paginator && props.paginatorPosition !== 'top') {
      return createPaginator('bottom', totalRecords);
    }

    return null;
  };

  var createResizeHelper = function createResizeHelper() {
    if (props.resizableColumns) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: resizeHelperRef,
        className: "p-column-resizer-helper",
        style: {
          display: 'none'
        }
      });
    }

    return null;
  };

  var createReorderIndicators = function createReorderIndicators() {
    if (props.reorderableColumns) {
      var style = {
        position: 'absolute',
        display: 'none'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        ref: reorderIndicatorUpRef,
        className: "pi pi-arrow-down p-datatable-reorder-indicator-up",
        style: style
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        ref: reorderIndicatorDownRef,
        className: "pi pi-arrow-up p-datatable-reorder-indicator-down",
        style: style
      }));
    }

    return null;
  };

  var data = processedData();
  var columns = getColumns();
  var totalRecords = getTotalRecords(data);
  var empty = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isEmpty(data);
  var selectionModeInColumn = getSelectionModeInColumn(columns);
  var selectable = props.selectionMode || selectionModeInColumn;
  var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.findDiffKeys(props, DataTable.defaultProps);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-datatable p-component', {
    'p-datatable-hoverable-rows': props.rowHover,
    'p-datatable-selectable': selectable && !props.cellSelection,
    'p-datatable-selectable-cell': selectable && props.cellSelection,
    'p-datatable-auto-layout': props.autoLayout,
    'p-datatable-resizable': props.resizableColumns,
    'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
    'p-datatable-scrollable': props.scrollable,
    'p-datatable-scrollable-vertical': props.scrollable && props.scrollDirection === 'vertical',
    'p-datatable-scrollable-horizontal': props.scrollable && props.scrollDirection === 'horizontal',
    'p-datatable-scrollable-both': props.scrollable && props.scrollDirection === 'both',
    'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
    'p-datatable-responsive-stack': props.responsiveLayout === 'stack',
    'p-datatable-responsive-scroll': props.responsiveLayout === 'scroll',
    'p-datatable-striped': props.stripedRows,
    'p-datatable-gridlines': props.showGridlines,
    'p-datatable-grouped-header': props.headerColumnGroup != null,
    'p-datatable-grouped-footer': props.footerColumnGroup != null,
    'p-datatable-sm': props.size === 'small',
    'p-datatable-lg': props.size === 'large'
  }, props.className);
  var loader = createLoader();
  var header = createHeader();
  var paginatorTop = createPaginatorTop(totalRecords);
  var content = createContent(data, columns, selectionModeInColumn, empty);
  var paginatorBottom = createPaginatorBottom(totalRecords);
  var footer = createFooter();
  var resizeHelper = createResizeHelper();
  var reorderIndicators = createReorderIndicators();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: elementRef,
    id: props.id,
    className: className,
    style: props.style
  }, otherProps, {
    "data-scrollselectors": ".p-datatable-wrapper"
  }), loader, header, paginatorTop, content, paginatorBottom, footer, resizeHelper, reorderIndicators);
});
DataTable.displayName = 'DataTable';
DataTable.defaultProps = {
  __TYPE: 'DataTable',
  alwaysShowPaginator: true,
  autoLayout: false,
  breakpoint: '960px',
  cellClassName: null,
  cellSelection: false,
  className: null,
  collapsedRowIcon: 'pi pi-chevron-right',
  columnResizeMode: 'fit',
  compareSelectionBy: 'deepEquals',
  contextMenuSelection: null,
  csvSeparator: ',',
  currentPageReportTemplate: '({currentPage} of {totalPages})',
  customRestoreState: null,
  customSaveState: null,
  dataKey: null,
  defaultSortOrder: 1,
  dragSelection: false,
  editMode: 'cell',
  editingRows: null,
  emptyMessage: null,
  expandableRowGroups: false,
  expandedRowIcon: 'pi pi-chevron-down',
  expandedRows: null,
  exportFilename: 'download',
  exportFunction: null,
  filterDelay: 300,
  filterDisplay: 'menu',
  filterLocale: undefined,
  filters: null,
  first: 0,
  footer: null,
  footerColumnGroup: null,
  frozenValue: null,
  frozenWidth: null,
  globalFilter: null,
  globalFilterFields: null,
  globalFilterMatchMode: primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterMatchMode.CONTAINS,
  groupRowsBy: null,
  header: null,
  headerColumnGroup: null,
  id: null,
  isDataSelectable: null,
  lazy: false,
  loading: false,
  loadingIcon: 'pi pi-spinner',
  metaKeySelection: true,
  multiSortMeta: null,
  onAllRowsSelect: null,
  onAllRowsUnselect: null,
  onCellClick: null,
  onCellSelect: null,
  onCellUnselect: null,
  onColReorder: null,
  onColumnResizeEnd: null,
  onColumnResizerClick: null,
  onColumnResizerDoubleClick: null,
  onContextMenu: null,
  onContextMenuSelectionChange: null,
  onFilter: null,
  onPage: null,
  onRowClick: null,
  onRowCollapse: null,
  onRowDoubleClick: null,
  onRowEditCancel: null,
  onRowEditChange: null,
  onRowEditComplete: null,
  onRowEditInit: null,
  onRowEditSave: null,
  onRowExpand: null,
  onRowReorder: null,
  onRowSelect: null,
  onRowToggle: null,
  onRowUnselect: null,
  onSelectAllChange: null,
  onSelectionChange: null,
  onSort: null,
  onStateRestore: null,
  onStateSave: null,
  onValueChange: null,
  pageLinkSize: 5,
  paginator: false,
  paginatorClassName: null,
  paginatorDropdownAppendTo: null,
  paginatorLeft: null,
  paginatorPosition: 'bottom',
  paginatorRight: null,
  paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  removableSort: false,
  reorderableColumns: false,
  reorderableRows: false,
  resizableColumns: false,
  responsiveLayout: 'stack',
  rowClassName: null,
  rowEditValidator: null,
  rowExpansionTemplate: null,
  rowGroupFooterTemplate: null,
  rowGroupHeaderTemplate: null,
  rowGroupMode: null,
  rowHover: false,
  rows: null,
  rowsPerPageOptions: null,
  scrollDirection: 'vertical',
  scrollHeight: null,
  scrollable: false,
  selectAll: false,
  selectOnEdit: true,
  selection: null,
  selectionAriaLabel: null,
  selectionAutoFocus: true,
  selectionMode: null,
  selectionPageOnly: false,
  showGridlines: false,
  showRowReorderElement: null,
  showSelectAll: true,
  showSelectionElement: null,
  size: 'normal',
  sortField: null,
  sortMode: 'single',
  sortOrder: null,
  stateKey: null,
  stateStorage: 'session',
  stripedRows: false,
  style: null,
  tabIndex: 0,
  tableClassName: null,
  tableStyle: null,
  totalRecords: null,
  value: null,
  virtualScrollerOptions: null
};




/***/ }),

/***/ "./node_modules/primereact/dialog/dialog.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primereact/dialog/dialog.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": function() { return /* binding */ Dialog; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_csstransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/csstransition */ "./node_modules/primereact/csstransition/csstransition.esm.js");
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");








function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.id),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      idState = _React$useState2[0],
      setIdState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      maskVisibleState = _React$useState4[0],
      setMaskVisibleState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      visibleState = _React$useState6[0],
      setVisibleState = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.maximized),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      maximizedState = _React$useState8[0],
      setMaximizedState = _React$useState8[1];

  var dialogRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var maskRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var headerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var footerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var closeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var dragging = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var resizing = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var lastPageX = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var lastPageY = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var styleElement = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var attributeSelector = react__WEBPACK_IMPORTED_MODULE_0__.useRef('');
  var maximized = props.onMaximize ? props.maximized : maximizedState;

  var _useEventListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEventListener)({
    type: 'keydown',
    listener: function listener(event) {
      return onKeyDown(event);
    }
  }),
      _useEventListener2 = _slicedToArray(_useEventListener, 2),
      bindDocumentKeyDownListener = _useEventListener2[0],
      unbindDocumentKeyDownListener = _useEventListener2[1];

  var _useEventListener3 = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEventListener)({
    type: 'mousemove',
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onResize(event);
    }
  }),
      _useEventListener4 = _slicedToArray(_useEventListener3, 2),
      bindDocumentResizeListener = _useEventListener4[0],
      unbindDocumentResizeListener = _useEventListener4[1];

  var _useEventListener5 = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEventListener)({
    type: 'mouseup',
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onResizeEnd(event);
    }
  }),
      _useEventListener6 = _slicedToArray(_useEventListener5, 2),
      bindDocumentResizeEndListener = _useEventListener6[0],
      unbindDocumentResizEndListener = _useEventListener6[1];

  var _useEventListener7 = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEventListener)({
    type: 'mousemove',
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onDrag(event);
    }
  }),
      _useEventListener8 = _slicedToArray(_useEventListener7, 2),
      bindDocumentDragListener = _useEventListener8[0],
      unbindDocumentDragListener = _useEventListener8[1];

  var _useEventListener9 = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEventListener)({
    type: 'mouseup',
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onDragEnd(event);
    }
  }),
      _useEventListener10 = _slicedToArray(_useEventListener9, 2),
      bindDocumentDragEndListener = _useEventListener10[0],
      unbindDocumentDragEndListener = _useEventListener10[1];

  var onClose = function onClose(event) {
    props.onHide();
    event.preventDefault();
  };

  var focus = function focus() {
    var activeElement = document.activeElement;
    var isActiveElementInDialog = activeElement && dialogRef.current && dialogRef.current.contains(activeElement);

    if (!isActiveElementInDialog && props.closable && props.showHeader) {
      closeRef.current.focus();
    }
  };

  var onMaskClick = function onMaskClick(event) {
    if (props.dismissableMask && props.modal && maskRef.current === event.target) {
      onClose(event);
    }

    props.onMaskClick && props.onMaskClick(event);
  };

  var toggleMaximize = function toggleMaximize(event) {
    if (props.onMaximize) {
      props.onMaximize({
        originalEvent: event,
        maximized: !maximized
      });
    } else {
      setMaximizedState(function (prevMaximized) {
        return !prevMaximized;
      });
    }

    event.preventDefault();
  };

  var onKeyDown = function onKeyDown(event) {
    var currentTarget = event.currentTarget;

    if (!currentTarget || !currentTarget.primeDialogParams) {
      return;
    }

    var params = currentTarget.primeDialogParams;
    var paramLength = params.length;
    var dialogId = params[paramLength - 1] ? params[paramLength - 1].id : undefined;

    if (dialogId !== idState) {
      return;
    }

    var dialog = document.getElementById(dialogId);

    if (props.closable && props.closeOnEscape && event.key === 'Escape') {
      onClose(event);
      event.stopImmediatePropagation();
      params.splice(paramLength - 1, 1);
    } else if (event.key === 'Tab') {
      event.preventDefault();
      var focusableElements = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getFocusableElements(dialog);

      if (focusableElements && focusableElements.length > 0) {
        if (!document.activeElement) {
          focusableElements[0].focus();
        } else {
          var focusedIndex = focusableElements.indexOf(document.activeElement);

          if (event.shiftKey) {
            if (focusedIndex === -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
          } else {
            if (focusedIndex === -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
  };

  var onDragStart = function onDragStart(event) {
    if (primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
      return;
    }

    if (props.draggable) {
      dragging.current = true;
      lastPageX.current = event.pageX;
      lastPageY.current = event.pageY;
      dialogRef.current.style.margin = '0';
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.addClass(document.body, 'p-unselectable-text');
      props.onDragStart && props.onDragStart(event);
    }
  };

  var onDrag = function onDrag(event) {
    if (dragging.current) {
      var width = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getOuterWidth(dialogRef.current);
      var height = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getOuterHeight(dialogRef.current);
      var deltaX = event.pageX - lastPageX.current;
      var deltaY = event.pageY - lastPageY.current;
      var offset = dialogRef.current.getBoundingClientRect();
      var leftPos = offset.left + deltaX;
      var topPos = offset.top + deltaY;
      var viewport = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getViewport();
      dialogRef.current.style.position = 'fixed';

      if (props.keepInViewport) {
        if (leftPos >= props.minX && leftPos + width < viewport.width) {
          lastPageX.current = event.pageX;
          dialogRef.current.style.left = leftPos + 'px';
        }

        if (topPos >= props.minY && topPos + height < viewport.height) {
          lastPageY.current = event.pageY;
          dialogRef.current.style.top = topPos + 'px';
        }
      } else {
        lastPageX.current = event.pageX;
        dialogRef.current.style.left = leftPos + 'px';
        lastPageY.current = event.pageY;
        dialogRef.current.style.top = topPos + 'px';
      }

      props.onDrag && props.onDrag(event);
    }
  };

  var onDragEnd = function onDragEnd(event) {
    if (dragging.current) {
      dragging.current = false;
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.removeClass(document.body, 'p-unselectable-text');
      props.onDragEnd && props.onDragEnd(event);
    }
  };

  var onResizeStart = function onResizeStart(event) {
    if (props.resizable) {
      resizing.current = true;
      lastPageX.current = event.pageX;
      lastPageY.current = event.pageY;
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.addClass(document.body, 'p-unselectable-text');
      props.onResizeStart && props.onResizeStart(event);
    }
  };

  var convertToPx = function convertToPx(value, property, viewport) {
    !viewport && (viewport = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getViewport());
    var val = parseInt(value);

    if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(value)) {
      return val * (viewport[property] / 100);
    }

    return val;
  };

  var onResize = function onResize(event) {
    if (resizing.current) {
      var deltaX = event.pageX - lastPageX.current;
      var deltaY = event.pageY - lastPageY.current;
      var width = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getOuterWidth(dialogRef.current);
      var height = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getOuterHeight(dialogRef.current);
      var offset = dialogRef.current.getBoundingClientRect();
      var viewport = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getViewport();
      var hasBeenDragged = !parseInt(dialogRef.current.style.top) || !parseInt(dialogRef.current.style.left);
      var minWidth = convertToPx(dialogRef.current.style.minWidth, 'width', viewport);
      var minHeight = convertToPx(dialogRef.current.style.minHeight, 'height', viewport);
      var newWidth = width + deltaX;
      var newHeight = height + deltaY;

      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }

      if ((!minWidth || newWidth > minWidth) && offset.left + newWidth < viewport.width) {
        dialogRef.current.style.width = newWidth + 'px';
      }

      if ((!minHeight || newHeight > minHeight) && offset.top + newHeight < viewport.height) {
        dialogRef.current.style.height = newHeight + 'px';
      }

      lastPageX.current = event.pageX;
      lastPageY.current = event.pageY;
      props.onResize && props.onResize(event);
    }
  };

  var onResizeEnd = function onResizeEnd(event) {
    if (resizing.current) {
      resizing.current = false;
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.removeClass(document.body, 'p-unselectable-text');
      props.onResizeEnd && props.onResizeEnd(event);
    }
  };

  var resetPosition = function resetPosition() {
    dialogRef.current.style.position = '';
    dialogRef.current.style.left = '';
    dialogRef.current.style.top = '';
    dialogRef.current.style.margin = '';
  };

  var getPositionClass = function getPositionClass() {
    var positions = ['center', 'left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
    var pos = positions.find(function (item) {
      return item === props.position || item.replace('-', '') === props.position;
    });
    return pos ? "p-dialog-".concat(pos) : '';
  };

  var onEnter = function onEnter() {
    dialogRef.current.setAttribute(attributeSelector.current, '');
  };

  var onEntered = function onEntered() {
    props.onShow && props.onShow();

    if (props.focusOnShow) {
      focus();
    }

    enableDocumentSettings();
  };

  var onExiting = function onExiting() {
    if (props.modal) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
    }

    if (props.blockScroll) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
    }
  };

  var onExited = function onExited() {
    dragging.current = false;
    primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ZIndexUtils.clear(maskRef.current);
    setMaskVisibleState(false);
    disableDocumentSettings();
  };

  var enableDocumentSettings = function enableDocumentSettings() {
    bindGlobalListeners();

    if (props.blockScroll || props.maximizable && maximized) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.addClass(document.body, 'p-overflow-hidden');
    }
  };

  var disableDocumentSettings = function disableDocumentSettings() {
    unbindGlobalListeners();
    var isMaximized = props.maximizable && maximized;

    if (props.modal) {
      var hasBlockScroll = document.primeDialogParams && document.primeDialogParams.some(function (param) {
        return param.hasBlockScroll;
      });

      if (hasBlockScroll || isMaximized) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
      }
    } else if (props.blockScroll || isMaximized) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
    }
  };

  var bindGlobalListeners = function bindGlobalListeners() {
    if (props.draggable) {
      bindDocumentDragListener();
      bindDocumentDragEndListener();
    }

    if (props.resizable) {
      bindDocumentResizeListener();
      bindDocumentResizeEndListener();
    }

    bindDocumentKeyDownListener();
    var newParam = {
      id: idState,
      hasBlockScroll: props.blockScroll
    };
    document.primeDialogParams = document.primeDialogParams ? [].concat(_toConsumableArray(document.primeDialogParams), [newParam]) : [newParam];
  };

  var unbindGlobalListeners = function unbindGlobalListeners() {
    unbindDocumentDragListener();
    unbindDocumentDragEndListener();
    unbindDocumentResizeListener();
    unbindDocumentResizEndListener();
    unbindDocumentKeyDownListener();
    document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function (param) {
      return param.id !== idState;
    });
  };

  var createStyle = function createStyle() {
    if (!styleElement.current) {
      styleElement.current = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.createInlineStyle(primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].nonce);
      var innerHTML = '';

      for (var breakpoint in props.breakpoints) {
        innerHTML += "\n                    @media screen and (max-width: ".concat(breakpoint, ") {\n                        .p-dialog[").concat(attributeSelector.current, "] {\n                            width: ").concat(props.breakpoints[breakpoint], " !important;\n                        }\n                    }\n                ");
      }

      styleElement.current.innerHTML = innerHTML;
    }
  };

  var changeScrollOnMaximizable = function changeScrollOnMaximizable() {
    if (!props.blockScroll) {
      var funcName = maximized ? 'addClass' : 'removeClass';
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler[funcName](document.body, 'p-overflow-hidden');
    }
  };

  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useMountEffect)(function () {
    var unqiueId = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.UniqueComponentId)();

    if (!idState) {
      setIdState(unqiueId);
    }

    if (!attributeSelector.current) {
      attributeSelector.current = unqiueId;
    }

    if (props.visible) {
      setMaskVisibleState(true);
    }

    if (props.breakpoints) {
      createStyle();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useUpdateEffect)(function () {
    if (props.visible && !maskVisibleState) {
      setMaskVisibleState(true);
    }

    if (props.visible !== visibleState && maskVisibleState) {
      setVisibleState(props.visible);
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useUpdateEffect)(function () {
    if (maskVisibleState) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ZIndexUtils.set('modal', maskRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].autoZIndex, props.baseZIndex || primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].zIndex.modal);
      setVisibleState(true);
    }
  }, [maskVisibleState]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useUpdateEffect)(function () {
    changeScrollOnMaximizable();
  }, [props.maximized, maximizedState]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useUnmountEffect)(function () {
    disableDocumentSettings();
    primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.removeInlineStyle(styleElement.current);
    primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ZIndexUtils.clear(maskRef.current);
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      resetPosition: resetPosition,
      getElement: function getElement() {
        return dialogRef.current;
      },
      getMask: function getMask() {
        return maskRef.current;
      },
      getContent: function getContent() {
        return contentRef.current;
      },
      getHeader: function getHeader() {
        return headerRef.current;
      },
      getFooter: function getFooter() {
        return footerRef.current;
      },
      getCloseButton: function getCloseButton() {
        return closeRef.current;
      }
    };
  });

  var createCloseIcon = function createCloseIcon() {
    if (props.closable) {
      var ariaLabel = props.ariaCloseIconLabel || (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('close');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        ref: closeRef,
        type: "button",
        className: "p-dialog-header-icon p-dialog-header-close p-link",
        "aria-label": ariaLabel,
        onClick: onClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-dialog-header-close-icon pi pi-times",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, null));
    }

    return null;
  };

  var createMaximizeIcon = function createMaximizeIcon() {
    var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)('p-dialog-header-maximize-icon pi', {
      'pi-window-maximize': !maximized,
      'pi-window-minimize': maximized
    });

    if (props.maximizable) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "p-dialog-header-icon p-dialog-header-maximize p-link",
        onClick: toggleMaximize
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, null));
    }

    return null;
  };

  var createHeader = function createHeader() {
    if (props.showHeader) {
      var closeIcon = createCloseIcon();
      var maximizeIcon = createMaximizeIcon();
      var icons = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.getJSXElement(props.icons, props);
      var header = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.getJSXElement(props.header, props);
      var headerId = idState + '_header';
      var headerClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)('p-dialog-header', props.headerClassName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: headerRef,
        style: props.headerStyle,
        className: headerClassName,
        onMouseDown: onDragStart
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: headerId,
        className: "p-dialog-title"
      }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-dialog-header-icons"
      }, icons, maximizeIcon, closeIcon));
    }

    return null;
  };

  var createContent = function createContent() {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)('p-dialog-content', props.contentClassName);
    var contentId = idState + '_content';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: contentId,
      ref: contentRef,
      className: className,
      style: props.contentStyle
    }, props.children);
  };

  var createFooter = function createFooter() {
    var footer = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.getJSXElement(props.footer, props);
    return footer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: footerRef,
      className: "p-dialog-footer"
    }, footer);
  };

  var createResizer = function createResizer() {
    if (props.resizable) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-resizable-handle",
        style: {
          zIndex: 90
        },
        onMouseDown: onResizeStart
      });
    }

    return null;
  };

  var createElement = function createElement() {
    var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findDiffKeys(props, Dialog.defaultProps);
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)('p-dialog p-component', props.className, {
      'p-dialog-rtl': props.rtl,
      'p-dialog-maximized': maximized
    });
    var maskClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)('p-dialog-mask', getPositionClass(), {
      'p-component-overlay p-component-overlay-enter': props.modal,
      'p-dialog-visible': maskVisibleState,
      'p-dialog-draggable': props.draggable,
      'p-dialog-resizable': props.resizable
    }, props.maskClassName);
    var header = createHeader();
    var content = createContent();
    var footer = createFooter();
    var resizer = createResizer();
    var headerId = idState + '_header';
    var contentId = idState + '_content';
    var transitionTimeout = {
      enter: props.position === 'center' ? 150 : 300,
      exit: props.position === 'center' ? 150 : 300
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: maskRef,
      style: props.maskStyle,
      className: maskClassName,
      onClick: onMaskClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_csstransition__WEBPACK_IMPORTED_MODULE_2__.CSSTransition, {
      nodeRef: dialogRef,
      classNames: "p-dialog",
      timeout: transitionTimeout,
      "in": visibleState,
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: onEnter,
      onEntered: onEntered,
      onExiting: onExiting,
      onExited: onExited
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
      ref: dialogRef,
      id: idState,
      className: className,
      style: props.style,
      onClick: props.onClick,
      role: "dialog"
    }, otherProps, {
      "aria-labelledby": headerId,
      "aria-describedby": contentId,
      "aria-modal": props.modal
    }), header, content, footer, resizer)));
  };

  var createDialog = function createDialog() {
    var element = createElement();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_4__.Portal, {
      element: element,
      appendTo: props.appendTo,
      visible: true
    });
  };

  return maskVisibleState && createDialog();
});
Dialog.displayName = 'Dialog';
Dialog.defaultProps = {
  __TYPE: 'Dialog',
  appendTo: null,
  ariaCloseIconLabel: null,
  baseZIndex: 0,
  blockScroll: false,
  breakpoints: null,
  className: null,
  closable: true,
  closeOnEscape: true,
  contentClassName: null,
  contentStyle: null,
  dismissableMask: false,
  draggable: true,
  focusOnShow: true,
  footer: null,
  header: null,
  headerClassName: null,
  headerStyle: null,
  icons: null,
  id: null,
  keepInViewport: true,
  maskClassName: null,
  maskStyle: null,
  maximizable: false,
  maximized: false,
  minX: 0,
  minY: 0,
  modal: true,
  onClick: null,
  onDrag: null,
  onDragEnd: null,
  onDragStart: null,
  onHide: null,
  onMaskClick: null,
  onMaximize: null,
  onResize: null,
  onResizeEnd: null,
  onResizeStart: null,
  onShow: null,
  position: 'center',
  resizable: true,
  rtl: false,
  showHeader: true,
  style: null,
  transitionOptions: null,
  visible: false
};




/***/ }),

/***/ "./node_modules/primereact/divider/divider.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/primereact/divider/divider.esm.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Divider": function() { return /* binding */ Divider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");



function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var Divider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var horizontal = props.layout === 'horizontal';
  var vertical = props.layout === 'vertical';
  var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findDiffKeys(props, Divider.defaultProps);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)("p-divider p-component p-divider-".concat(props.layout, " p-divider-").concat(props.type), {
    'p-divider-left': horizontal && (!props.align || props.align === 'left'),
    'p-divider-right': horizontal && props.align === 'right',
    'p-divider-center': horizontal && props.align === 'center' || vertical && (!props.align || props.align === 'center'),
    'p-divider-top': vertical && props.align === 'top',
    'p-divider-bottom': vertical && props.align === 'bottom'
  }, props.className);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: elementRef,
    className: className,
    style: props.style,
    role: "separator"
  }, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-divider-content"
  }, props.children));
});
Divider.displayName = 'Divider';
Divider.defaultProps = {
  __TYPE: 'Divider',
  align: null,
  layout: 'horizontal',
  type: 'solid',
  style: null,
  className: null
};




/***/ }),

/***/ "./node_modules/primereact/dropdown/dropdown.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/primereact/dropdown/dropdown.esm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": function() { return /* binding */ Dropdown; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_overlayservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/overlayservice */ "./node_modules/primereact/overlayservice/overlayservice.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_csstransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/csstransition */ "./node_modules/primereact/csstransition/csstransition.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");
/* harmony import */ var primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/virtualscroller */ "./node_modules/primereact/virtualscroller/virtualscroller.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");











function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

var DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var onClick = function onClick(event) {
    if (props.onClick) {
      props.onClick({
        originalEvent: event,
        option: props.option
      });
    }
  };

  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-dropdown-item', {
    'p-highlight': props.selected,
    'p-disabled': props.disabled,
    'p-dropdown-item-empty': !props.label || props.label.length === 0
  }, props.option && props.option.className);
  var content = props.template ? primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.getJSXElement(props.template, props.option) : props.label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: className,
    style: props.style,
    onClick: onClick,
    "aria-label": props.label,
    key: props.label,
    role: "option",
    "aria-selected": props.selected
  }, content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, null));
});
DropdownItem.displayName = 'DropdownItem';

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DropdownPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var virtualScrollerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var filterInputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var isEmptyFilter = !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
  var filterOptions = {
    filter: function filter(e) {
      return onFilterInputChange(e);
    },
    reset: function reset() {
      return props.resetFilter();
    }
  };

  var onEnter = function onEnter() {
    props.onEnter(function () {
      if (virtualScrollerRef.current) {
        var selectedIndex = props.getSelectedOptionIndex();

        if (selectedIndex !== -1) {
          setTimeout(function () {
            return virtualScrollerRef.current.scrollToIndex(selectedIndex);
          }, 0);
        }
      }
    });
  };

  var onEntered = function onEntered() {
    props.onEntered(function () {
      if (props.filter && props.filterInputAutoFocus) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(filterInputRef.current, false);
      }
    });
  };

  var onFilterInputChange = function onFilterInputChange(event) {
    virtualScrollerRef.current && virtualScrollerRef.current.scrollToIndex(0);
    props.onFilterInputChange && props.onFilterInputChange(event);
  };

  var createGroupChildren = function createGroupChildren(optionGroup, style) {
    var groupChildren = props.getOptionGroupChildren(optionGroup);
    return groupChildren.map(function (option, j) {
      var optionLabel = props.getOptionLabel(option);
      var optionKey = j + '_' + props.getOptionRenderKey(option);
      var disabled = props.isOptionDisabled(option);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownItem, {
        key: optionKey,
        label: optionLabel,
        option: option,
        style: style,
        template: props.itemTemplate,
        selected: props.isSelected(option),
        disabled: disabled,
        onClick: props.onOptionClick
      });
    });
  };

  var createEmptyMessage = function createEmptyMessage(emptyMessage, isFilter) {
    var message = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.getJSXElement(emptyMessage, props) || (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)(isFilter ? 'emptyFilterMessage' : 'emptyMessage');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "p-dropdown-empty-message"
    }, message);
  };

  var createItem = function createItem(option, index) {
    var scrollerOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var style = {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined
    };

    if (props.optionGroupLabel) {
      var groupContent = props.optionGroupTemplate ? primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
      var groupChildrenContent = createGroupChildren(option, style);
      var key = index + '_' + props.getOptionGroupRenderKey(option);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "p-dropdown-item-group",
        style: style
      }, groupContent), groupChildrenContent);
    } else {
      var optionLabel = props.getOptionLabel(option);
      var optionKey = index + '_' + props.getOptionRenderKey(option);
      var disabled = props.isOptionDisabled(option);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownItem, {
        key: optionKey,
        label: optionLabel,
        option: option,
        style: style,
        template: props.itemTemplate,
        selected: props.isSelected(option),
        disabled: disabled,
        onClick: props.onOptionClick
      });
    }
  };

  var createItems = function createItems() {
    if (primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(props.visibleOptions)) {
      return props.visibleOptions.map(createItem);
    } else if (props.hasFilter) {
      return createEmptyMessage(props.emptyFilterMessage, true);
    }

    return createEmptyMessage(props.emptyMessage);
  };

  var createFilterClearIcon = function createFilterClearIcon() {
    if (props.showFilterClear && props.filterValue) {
      var ariaLabel = (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('clear');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "p-dropdown-filter-clear-icon pi pi-times",
        "aria-label": ariaLabel,
        onClick: function onClick() {
          return props.onFilterClearIconClick(function () {
            return primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(filterInputRef.current);
          });
        }
      });
    }

    return null;
  };

  var createFilter = function createFilter() {
    if (props.filter) {
      var clearIcon = createFilterClearIcon();
      var containerClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-dropdown-filter-container', {
        'p-dropdown-clearable-filter': !!clearIcon
      });
      var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: containerClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        ref: filterInputRef,
        type: "text",
        autoComplete: "off",
        className: "p-dropdown-filter p-inputtext p-component",
        placeholder: props.filterPlaceholder,
        onKeyDown: props.onFilterInputKeyDown,
        onChange: onFilterInputChange,
        value: props.filterValue
      }), clearIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "p-dropdown-filter-icon pi pi-search"
      }));

      if (props.filterTemplate) {
        var defaultContentOptions = {
          className: containerClassName,
          element: content,
          filterOptions: filterOptions,
          filterInputKeyDown: props.onFilterInputKeyDown,
          filterInputChange: onFilterInputChange,
          filterIconClassName: 'p-dropdown-filter-icon pi pi-search',
          clearIcon: clearIcon,
          props: props
        };
        content = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-dropdown-header"
      }, content);
    }

    return null;
  };

  var createContent = function createContent() {
    if (props.virtualScrollerOptions) {
      var virtualScrollerProps = _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions), {
        style: _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions.style), {
          height: props.scrollHeight
        }),
        className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-dropdown-items-wrapper', props.virtualScrollerOptions.className),
        items: props.visibleOptions,
        autoSize: true,
        onLazyLoad: function onLazyLoad(event) {
          return props.virtualScrollerOptions.onLazyLoad(_objectSpread$1(_objectSpread$1({}, event), {
            filter: props.filterValue
          }));
        },
        itemTemplate: function itemTemplate(item, options) {
          return item && createItem(item, options.index, options);
        },
        contentTemplate: function contentTemplate(options) {
          var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-dropdown-items', options.className);
          var content = isEmptyFilter ? createEmptyMessage() : options.children;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
            ref: options.contentRef,
            className: className,
            role: "listbox"
          }, content);
        }
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_8__.VirtualScroller, _extends({
        ref: virtualScrollerRef
      }, virtualScrollerProps));
    } else {
      var items = createItems();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-dropdown-items-wrapper",
        style: {
          maxHeight: props.scrollHeight || 'auto'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "p-dropdown-items",
        role: "listbox"
      }, items));
    }
  };

  var createElement = function createElement() {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-dropdown-panel p-component', props.panelClassName);
    var filter = createFilter();
    var content = createContent();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_csstransition__WEBPACK_IMPORTED_MODULE_6__.CSSTransition, {
      nodeRef: ref,
      classNames: "p-connected-overlay",
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: onEnter,
      onEntering: props.onEntering,
      onEntered: onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: ref,
      className: className,
      style: props.panelStyle,
      onClick: props.onClick
    }, filter, content));
  };

  var element = createElement();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_7__.Portal, {
    element: element,
    appendTo: props.appendTo
  });
}));
DropdownPanel.displayName = 'DropdownPanel';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var Dropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      filterState = _React$useState2[0],
      setFilterState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      focusedState = _React$useState4[0],
      setFocusedState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      overlayVisibleState = _React$useState6[0],
      setOverlayVisibleState = _React$useState6[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var overlayRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props.inputRef);
  var focusInputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var searchTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var searchValue = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var currentSearchChar = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var isLazy = props.virtualScrollerOptions && props.virtualScrollerOptions.lazy;
  var hasFilter = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(filterState);
  var appendTo = props.appendTo || primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].appendTo;

  var _useOverlayListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useOverlayListener)({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var type = _ref.type,
          valid = _ref.valid;

      if (valid) {
        type === 'outside' ? !isClearClicked(event) && hide() : hide();
      }
    },
    when: overlayVisibleState
  }),
      _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2),
      bindOverlayListener = _useOverlayListener2[0],
      unbindOverlayListener = _useOverlayListener2[1];

  var getVisibleOptions = function getVisibleOptions() {
    if (hasFilter && !isLazy) {
      var filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
      var searchFields = props.filterBy ? props.filterBy.split(',') : [props.optionLabel || 'label'];

      if (props.optionGroupLabel) {
        var filteredGroups = [];

        var _iterator = _createForOfIteratorHelper(props.options),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var optgroup = _step.value;
            var filteredSubOptions = primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterService.filter(getOptionGroupChildren(optgroup), searchFields, filterValue, props.filterMatchMode, props.filterLocale);

            if (filteredSubOptions && filteredSubOptions.length) {
              filteredGroups.push(_objectSpread(_objectSpread({}, optgroup), {
                items: filteredSubOptions
              }));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return filteredGroups;
      } else {
        return primereact_api__WEBPACK_IMPORTED_MODULE_1__.FilterService.filter(props.options, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
      }
    } else {
      return props.options;
    }
  };

  var isClearClicked = function isClearClicked(event) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(event.target, 'p-dropdown-filter-clear-icon');
  };

  var onClick = function onClick(event) {
    if (props.disabled) {
      return;
    }

    if (primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || event.target.tagName === 'INPUT') {
      return;
    } else if (!overlayRef.current || !(overlayRef.current && overlayRef.current.contains(event.target))) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(focusInputRef.current);
      overlayVisibleState ? hide() : show();
    }
  };

  var onInputFocus = function onInputFocus(event) {
    if (props.showOnFocus && !overlayVisibleState) {
      show();
    }

    setFocusedState(true);
    props.onFocus && props.onFocus(event);
  };

  var onInputBlur = function onInputBlur(event) {
    setFocusedState(false);

    if (props.onBlur) {
      setTimeout(function () {
        var currentValue = inputRef.current ? inputRef.current.value : undefined;
        props.onBlur({
          originalEvent: event.originalEvent,
          value: currentValue,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: props.name,
            id: props.id,
            value: currentValue
          }
        });
      }, 200);
    }
  };

  var onPanelClick = function onPanelClick(event) {
    primereact_overlayservice__WEBPACK_IMPORTED_MODULE_3__.OverlayService.emit('overlay-click', {
      originalEvent: event,
      target: elementRef.current
    });
  };

  var onInputKeyDown = function onInputKeyDown(event) {
    switch (event.which) {
      //down
      case 40:
        onDownKey(event);
        break;
      //up

      case 38:
        onUpKey(event);
        break;
      //space and enter

      case 32:
      case 13:
        overlayVisibleState ? hide() : show();
        event.preventDefault();
        break;
      //escape and tab

      case 27:
      case 9:
        hide();
        break;

      default:
        search(event);
        break;
    }
  };

  var onFilterInputKeyDown = function onFilterInputKeyDown(event) {
    switch (event.which) {
      //down
      case 40:
        onDownKey(event);
        break;
      //up

      case 38:
        onUpKey(event);
        break;
      //enter and escape

      case 13:
      case 27:
        hide();
        event.preventDefault();
        break;
    }
  };

  var onUpKey = function onUpKey(event) {
    if (visibleOptions) {
      var prevOption = findPrevOption(getSelectedOptionIndex());

      if (prevOption) {
        selectItem({
          originalEvent: event,
          option: prevOption
        });
      }
    }

    event.preventDefault();
  };

  var onDownKey = function onDownKey(event) {
    if (visibleOptions) {
      if (!overlayVisibleState && event.altKey) {
        show();
      } else {
        var nextOption = findNextOption(getSelectedOptionIndex());

        if (nextOption) {
          selectItem({
            originalEvent: event,
            option: nextOption
          });
        }
      }
    }

    event.preventDefault();
  };

  var findNextOption = function findNextOption(index) {
    if (props.optionGroupLabel) {
      var groupIndex = index === -1 ? 0 : index.group;
      var optionIndex = index === -1 ? -1 : index.option;
      var option = findNextOptionInList(getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);
      if (option) return option;else if (groupIndex + 1 !== visibleOptions.length) return findNextOption({
        group: groupIndex + 1,
        option: -1
      });else return null;
    }

    return findNextOptionInList(visibleOptions, index);
  };

  var findNextOptionInList = function findNextOptionInList(list, index) {
    var i = index + 1;

    if (i === list.length) {
      return null;
    }

    var option = list[i];
    return isOptionDisabled(option) ? findNextOptionInList(i) : option;
  };

  var findPrevOption = function findPrevOption(index) {
    if (index === -1) {
      return null;
    }

    if (props.optionGroupLabel) {
      var groupIndex = index.group;
      var optionIndex = index.option;
      var option = findPrevOptionInList(getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);
      if (option) return option;else if (groupIndex > 0) return findPrevOption({
        group: groupIndex - 1,
        option: getOptionGroupChildren(visibleOptions[groupIndex - 1]).length
      });else return null;
    }

    return findPrevOptionInList(visibleOptions, index);
  };

  var findPrevOptionInList = function findPrevOptionInList(list, index) {
    var i = index - 1;

    if (i < 0) {
      return null;
    }

    var option = list[i];
    return isOptionDisabled(option) ? findPrevOption(i) : option;
  };

  var search = function search(event) {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    var _char = event.key;

    if (_char === 'Shift' || _char === 'Control' || _char === 'Alt') {
      return;
    }

    if (currentSearchChar.current === _char) searchValue.current = _char;else searchValue.current = searchValue.current ? searchValue.current + _char : _char;
    currentSearchChar.current = _char;

    if (searchValue.current) {
      var searchIndex = getSelectedOptionIndex();
      var newOption = props.optionGroupLabel ? searchOptionInGroup(searchIndex) : searchOption(searchIndex + 1);

      if (newOption) {
        selectItem({
          originalEvent: event,
          option: newOption
        });
      }
    }

    searchTimeout.current = setTimeout(function () {
      searchValue.current = null;
    }, 250);
  };

  var searchOption = function searchOption(index) {
    if (searchValue.current) {
      return searchOptionInRange(index, visibleOptions.length) || searchOptionInRange(0, index);
    }

    return null;
  };

  var searchOptionInRange = function searchOptionInRange(start, end) {
    for (var i = start; i < end; i++) {
      var opt = visibleOptions[i];

      if (matchesSearchValue(opt)) {
        return opt;
      }
    }

    return null;
  };

  var searchOptionInGroup = function searchOptionInGroup(index) {
    var searchIndex = index === -1 ? {
      group: 0,
      option: -1
    } : index;

    for (var i = searchIndex.group; i < visibleOptions.length; i++) {
      var groupOptions = getOptionGroupChildren(visibleOptions[i]);

      for (var j = searchIndex.group === i ? searchIndex.option + 1 : 0; j < groupOptions.length; j++) {
        if (matchesSearchValue(groupOptions[j])) {
          return groupOptions[j];
        }
      }
    }

    for (var _i = 0; _i <= searchIndex.group; _i++) {
      var _groupOptions = getOptionGroupChildren(visibleOptions[_i]);

      for (var _j = 0; _j < (searchIndex.group === _i ? searchIndex.option : _groupOptions.length); _j++) {
        if (matchesSearchValue(_groupOptions[_j])) {
          return _groupOptions[_j];
        }
      }
    }

    return null;
  };

  var matchesSearchValue = function matchesSearchValue(option) {
    var label = getOptionLabel(option);

    if (!label) {
      return false;
    }

    label = label.toLocaleLowerCase(props.filterLocale);
    return label.startsWith(searchValue.current.toLocaleLowerCase(props.filterLocale));
  };

  var onEditableInputChange = function onEditableInputChange(event) {
    if (props.onChange) {
      props.onChange({
        originalEvent: event.originalEvent,
        value: event.target.value,
        stopPropagation: function stopPropagation() {},
        preventDefault: function preventDefault() {},
        target: {
          name: props.name,
          id: props.id,
          value: event.target.value
        }
      });
    }
  };

  var onEditableInputFocus = function onEditableInputFocus(event) {
    setFocusedState(true);
    hide();
    props.onFocus && props.onFocus(event);
  };

  var onOptionClick = function onOptionClick(event) {
    var option = event.option;

    if (!option.disabled) {
      selectItem(event);
      primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(focusInputRef.current);
    }

    hide();
  };

  var onFilterInputChange = function onFilterInputChange(event) {
    var filter = event.target.value;
    setFilterState(filter);

    if (props.onFilter) {
      props.onFilter({
        originalEvent: event,
        filter: filter
      });
    }
  };

  var onFilterClearIconClick = function onFilterClearIconClick(callback) {
    resetFilter(callback);
  };

  var resetFilter = function resetFilter(callback) {
    setFilterState('');
    props.onFilter && props.onFilter({
      filter: ''
    });
    callback && callback();
  };

  var clear = function clear(event) {
    if (props.onChange) {
      props.onChange({
        originalEvent: event,
        value: undefined,
        stopPropagation: function stopPropagation() {},
        preventDefault: function preventDefault() {},
        target: {
          name: props.name,
          id: props.id,
          value: undefined
        }
      });
    }

    updateEditableLabel();
  };

  var selectItem = function selectItem(event) {
    if (selectedOption !== event.option) {
      updateEditableLabel(event.option);
      var optionValue = getOptionValue(event.option);

      if (props.onChange) {
        props.onChange({
          originalEvent: event.originalEvent,
          value: optionValue,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: props.name,
            id: props.id,
            value: optionValue
          }
        });
      }
    }
  };

  var getSelectedOptionIndex = function getSelectedOptionIndex(options) {
    options = options || visibleOptions;

    if (props.value != null && options) {
      if (props.optionGroupLabel) {
        for (var i = 0; i < options.length; i++) {
          var selectedOptionIndex = findOptionIndexInList(props.value, getOptionGroupChildren(options[i]));

          if (selectedOptionIndex !== -1) {
            return {
              group: i,
              option: selectedOptionIndex
            };
          }
        }
      } else {
        return findOptionIndexInList(props.value, options);
      }
    }

    return -1;
  };

  var equalityKey = function equalityKey() {
    return props.optionValue ? null : props.dataKey;
  };

  var findOptionIndexInList = function findOptionIndexInList(value, list) {
    var key = equalityKey();
    return list.findIndex(function (item) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.equals(value, getOptionValue(item), key);
    });
  };

  var isSelected = function isSelected(option) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.equals(props.value, getOptionValue(option), equalityKey());
  };

  var show = function show() {
    setOverlayVisibleState(true);
  };

  var hide = function hide() {
    setOverlayVisibleState(false);
  };

  var onOverlayEnter = function onOverlayEnter(callback) {
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.set('overlay', overlayRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].autoZIndex, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].zIndex.overlay);
    alignOverlay();
    callback && callback();
  };

  var onOverlayEntered = function onOverlayEntered(callback) {
    callback && callback();
    bindOverlayListener();
    props.onShow && props.onShow();
  };

  var onOverlayExit = function onOverlayExit() {
    unbindOverlayListener();
  };

  var onOverlayExited = function onOverlayExited() {
    if (props.filter && props.resetFilterOnHide) {
      resetFilter();
    }

    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };

  var alignOverlay = function alignOverlay() {
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].appendTo);
  };

  var scrollInView = function scrollInView() {
    var highlightItem = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.findSingle(overlayRef.current, 'li.p-highlight');

    if (highlightItem && highlightItem.scrollIntoView) {
      highlightItem.scrollIntoView({
        block: 'nearest',
        inline: 'nearest'
      });
    }
  };

  var updateEditableLabel = function updateEditableLabel(option) {
    if (inputRef.current) {
      inputRef.current.value = option ? getOptionLabel(option) : props.value || '';
    }
  };

  var getOptionLabel = function getOptionLabel(option) {
    return props.optionLabel ? primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.resolveFieldData(option, props.optionLabel) : option && option['label'] !== undefined ? option['label'] : option;
  };

  var getOptionValue = function getOptionValue(option) {
    return props.optionValue ? primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.resolveFieldData(option, props.optionValue) : option && option['value'] !== undefined ? option['value'] : option;
  };

  var getOptionRenderKey = function getOptionRenderKey(option) {
    return props.dataKey ? primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
  };

  var isOptionDisabled = function isOptionDisabled(option) {
    if (props.optionDisabled) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.resolveFieldData(option, props.optionDisabled);
    }

    return option && option['disabled'] !== undefined ? option['disabled'] : false;
  };

  var getOptionGroupRenderKey = function getOptionGroupRenderKey(optionGroup) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };

  var getOptionGroupLabel = function getOptionGroupLabel(optionGroup) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };

  var getOptionGroupChildren = function getOptionGroupChildren(optionGroup) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
  };

  var updateInputField = function updateInputField() {
    if (props.editable && inputRef.current) {
      var label = selectedOption ? getOptionLabel(selectedOption) : null;
      var value = label || props.value || '';
      inputRef.current.value = value;
    }
  };

  var getSelectedOption = function getSelectedOption() {
    var index = getSelectedOptionIndex(props.options);
    return index !== -1 ? props.optionGroupLabel ? getOptionGroupChildren(props.options[index.group])[index.option] : props.options[index] : null;
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      show: show,
      hide: hide,
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      },
      getFocusInput: function getFocusInput() {
        return focusInputRef.current;
      }
    };
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useMountEffect)(function () {
    if (props.autoFocus) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(focusInputRef.current, props.autoFocus);
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (overlayVisibleState && props.value) {
      scrollInView();
    }
  }, [overlayVisibleState, props.value]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (overlayVisibleState && props.filter) {
      alignOverlay();
    }
  }, [overlayVisibleState, props.filter]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (filterState && (!props.options || props.options.length === 0)) {
      setFilterState('');
    }

    updateInputField();

    if (inputRef.current) {
      inputRef.current.selectedIndex = 1;
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnmountEffect)(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(overlayRef.current);
  });

  var createHiddenSelect = function createHiddenSelect() {
    var option = {
      value: '',
      label: props.placeholder
    };

    if (selectedOption) {
      var optionValue = getOptionValue(selectedOption);
      option = {
        value: _typeof(optionValue) === 'object' ? props.options.findIndex(function (o) {
          return o === optionValue;
        }) : optionValue,
        label: getOptionLabel(selectedOption)
      };
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-hidden-accessible p-dropdown-hidden-select"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      ref: inputRef,
      required: props.required,
      defaultValue: option.value,
      name: props.name,
      tabIndex: -1,
      "aria-hidden": "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: option.value
    }, option.label)));
  };

  var createKeyboardHelper = function createKeyboardHelper() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-hidden-accessible"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
      ref: focusInputRef,
      id: props.inputId,
      type: "text",
      readOnly: true,
      "aria-haspopup": "listbox",
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      onKeyDown: onInputKeyDown,
      disabled: props.disabled,
      tabIndex: props.tabIndex
    }, ariaProps)));
  };

  var createLabel = function createLabel() {
    var label = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(selectedOption) ? getOptionLabel(selectedOption) : null;

    if (props.editable) {
      var value = label || props.value || '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
        ref: inputRef,
        type: "text",
        defaultValue: value,
        className: "p-dropdown-label p-inputtext",
        disabled: props.disabled,
        placeholder: props.placeholder,
        maxLength: props.maxLength,
        onInput: onEditableInputChange,
        onFocus: onEditableInputFocus,
        onBlur: onInputBlur,
        "aria-haspopup": "listbox"
      }, ariaProps));
    } else {
      var _className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-dropdown-label p-inputtext', {
        'p-placeholder': label === null && props.placeholder,
        'p-dropdown-label-empty': label === null && !props.placeholder
      });

      var content = props.valueTemplate ? primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.getJSXElement(props.valueTemplate, selectedOption, props) : label || props.placeholder || 'empty';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        ref: inputRef,
        className: _className
      }, content);
    }
  };

  var createClearIcon = function createClearIcon() {
    if (props.value != null && props.showClear && !props.disabled) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "p-dropdown-clear-icon pi pi-times",
        onClick: clear
      });
    }

    return null;
  };

  var createDropdownIcon = function createDropdownIcon() {
    var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-dropdown-trigger-icon p-clickable', props.dropdownIcon);
    var ariaLabel = props.placeholder || props.ariaLabel;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-dropdown-trigger",
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      "aria-label": ariaLabel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: iconClassName
    }));
  };

  var visibleOptions = getVisibleOptions();
  var selectedOption = getSelectedOption();
  var hasTooltip = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.findDiffKeys(props, Dropdown.defaultProps);
  var ariaProps = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.reduceKeys(otherProps, primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.ARIA_PROPS);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-dropdown p-component p-inputwrapper', {
    'p-disabled': props.disabled,
    'p-focus': focusedState,
    'p-dropdown-clearable': props.showClear && !props.disabled,
    'p-inputwrapper-filled': primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(props.value),
    'p-inputwrapper-focus': focusedState || overlayVisibleState
  }, props.className);
  var hiddenSelect = createHiddenSelect();
  var keyboardHelper = createKeyboardHelper();
  var labelElement = createLabel();
  var dropdownIcon = createDropdownIcon();
  var clearIcon = createClearIcon();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: elementRef,
    id: props.id,
    className: className,
    style: props.style
  }, otherProps, {
    onClick: onClick,
    onMouseDown: props.onMouseDown,
    onContextMenu: props.onContextMenu
  }), keyboardHelper, hiddenSelect, labelElement, clearIcon, dropdownIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownPanel, _extends({
    ref: overlayRef,
    visibleOptions: visibleOptions
  }, props, {
    appendTo: appendTo,
    onClick: onPanelClick,
    onOptionClick: onOptionClick,
    filterValue: filterState,
    hasFilter: hasFilter,
    onFilterClearIconClick: onFilterClearIconClick,
    resetFilter: resetFilter,
    onFilterInputKeyDown: onFilterInputKeyDown,
    onFilterInputChange: onFilterInputChange,
    getOptionLabel: getOptionLabel,
    getOptionRenderKey: getOptionRenderKey,
    isOptionDisabled: isOptionDisabled,
    getOptionGroupChildren: getOptionGroupChildren,
    getOptionGroupLabel: getOptionGroupLabel,
    getOptionGroupRenderKey: getOptionGroupRenderKey,
    isSelected: isSelected,
    getSelectedOptionIndex: getSelectedOptionIndex,
    "in": overlayVisibleState,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited
  }))), hasTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = {
  __TYPE: 'Dropdown',
  appendTo: null,
  ariaLabel: null,
  ariaLabelledBy: null,
  autoFocus: false,
  className: null,
  dataKey: null,
  disabled: false,
  dropdownIcon: 'pi pi-chevron-down',
  editable: false,
  emptyFilterMessage: null,
  emptyMessage: null,
  filter: false,
  filterBy: null,
  filterInputAutoFocus: true,
  filterLocale: undefined,
  filterMatchMode: 'contains',
  filterPlaceholder: null,
  filterTemplate: null,
  id: null,
  inputId: null,
  inputRef: null,
  itemTemplate: null,
  maxLength: null,
  name: null,
  onBlur: null,
  onChange: null,
  onContextMenu: null,
  onFilter: null,
  onFocus: null,
  onHide: null,
  onMouseDown: null,
  onShow: null,
  optionDisabled: null,
  optionGroupChildren: null,
  optionGroupLabel: null,
  optionGroupTemplate: null,
  optionLabel: null,
  optionValue: null,
  options: null,
  panelClassName: null,
  panelStyle: null,
  placeholder: null,
  required: false,
  resetFilterOnHide: false,
  scrollHeight: '200px',
  showClear: false,
  showFilterClear: false,
  showOnFocus: false,
  style: null,
  tabIndex: null,
  tooltip: null,
  tooltipOptions: null,
  transitionOptions: null,
  value: null,
  valueTemplate: null,
  virtualScrollerOptions: null
};




/***/ }),

/***/ "./node_modules/primereact/hooks/hooks.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/primereact/hooks/hooks.esm.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEventListener": function() { return /* binding */ useEventListener; },
/* harmony export */   "useInterval": function() { return /* binding */ useInterval; },
/* harmony export */   "useLocalStorage": function() { return /* binding */ useLocalStorage; },
/* harmony export */   "useMountEffect": function() { return /* binding */ useMountEffect; },
/* harmony export */   "useOverlayListener": function() { return /* binding */ useOverlayListener; },
/* harmony export */   "useOverlayScrollListener": function() { return /* binding */ useOverlayScrollListener; },
/* harmony export */   "usePrevious": function() { return /* binding */ usePrevious; },
/* harmony export */   "useResizeListener": function() { return /* binding */ useResizeListener; },
/* harmony export */   "useSessionStorage": function() { return /* binding */ useSessionStorage; },
/* harmony export */   "useStorage": function() { return /* binding */ useStorage; },
/* harmony export */   "useTimeout": function() { return /* binding */ useTimeout; },
/* harmony export */   "useUnmountEffect": function() { return /* binding */ useUnmountEffect; },
/* harmony export */   "useUpdateEffect": function() { return /* binding */ useUpdateEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");



var usePrevious = function usePrevious(newValue) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    ref.current = newValue;
  });
  return ref.current;
};

/* eslint-disable */
var useMountEffect = function useMountEffect(fn) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(fn, []);
};
/* eslint-enable */

/* eslint-disable */
var useUpdateEffect = function useUpdateEffect(fn, deps) {
  var mounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    return fn && fn();
  }, deps);
};
/* eslint-enable */

/* eslint-disable */
var useUnmountEffect = function useUnmountEffect(fn) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return fn;
  }, []);
};
/* eslint-enable */

/* eslint-disable */
var useEventListener = function useEventListener(_ref) {
  var _ref$target = _ref.target,
      target = _ref$target === void 0 ? 'document' : _ref$target,
      type = _ref.type,
      listener = _ref.listener,
      options = _ref.options,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  var targetRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var listenerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var prevOptions = usePrevious(options);

  var bind = function bind() {
    var bindOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(bindOptions.target)) {
      unbind();
      (bindOptions.when || when) && (targetRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getTargetElement(bindOptions.target));
    }

    if (!listenerRef.current && targetRef.current) {
      listenerRef.current = function (event) {
        return listener && listener(event);
      };

      targetRef.current.addEventListener(type, listenerRef.current, options);
    }
  };

  var unbind = function unbind() {
    if (listenerRef.current) {
      targetRef.current.removeEventListener(type, listenerRef.current, options);
      listenerRef.current = null;
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (when) {
      targetRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getTargetElement(target);
    } else {
      unbind();
      targetRef.current = null;
    }
  }, [target, when]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (listenerRef.current && (listenerRef.current !== listener || prevOptions !== options)) {
      unbind();
      when && bind();
    }
  }, [listener, options]);
  useUnmountEffect(function () {
    unbind();
  });
  return [bind, unbind];
};
/* eslint-enable */

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/* eslint-disable */
var useOverlayScrollListener = function useOverlayScrollListener(_ref) {
  var target = _ref.target,
      listener = _ref.listener,
      options = _ref.options,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  var targetRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var listenerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var scrollableParents = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
  var prevOptions = usePrevious(options);

  var bind = function bind() {
    var bindOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(bindOptions.target)) {
      unbind();
      (bindOptions.when || when) && (targetRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getTargetElement(bindOptions.target));
    }

    if (!listenerRef.current && targetRef.current) {
      var nodes = scrollableParents.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getScrollableParents(targetRef.current);

      listenerRef.current = function (event) {
        return listener && listener(event);
      };

      nodes.forEach(function (node) {
        return node.addEventListener('scroll', listenerRef.current, options);
      });
    }
  };

  var unbind = function unbind() {
    if (listenerRef.current) {
      var nodes = scrollableParents.current;
      nodes.forEach(function (node) {
        return node.removeEventListener('scroll', listenerRef.current, options);
      });
      listenerRef.current = null;
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (when) {
      targetRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getTargetElement(target);
    } else {
      unbind();
      targetRef.current = null;
    }
  }, [target, when]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (listenerRef.current && (listenerRef.current !== listener || prevOptions !== options)) {
      unbind();
      when && bind();
    }
  }, [listener, options]);
  useUnmountEffect(function () {
    unbind();
  });
  return [bind, unbind];
};
/* eslint-enable */

var useResizeListener = function useResizeListener(_ref) {
  var listener = _ref.listener;
  return useEventListener({
    target: 'window',
    type: 'resize',
    listener: listener
  });
};

var useOverlayListener = function useOverlayListener(_ref) {
  var target = _ref.target,
      overlay = _ref.overlay,
      _listener = _ref.listener,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  var targetRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var overlayRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  /**
   * The parameters of the 'listener' method in the following event handlers;
   * @param {Event} event A click event of the document.
   * @param {string} options.type The custom type to detect event.
   * @param {boolean} options.valid It is controlled by PrimeReact. It is determined whether it is valid or not according to some custom validation.
   */

  var _useEventListener = useEventListener({
    type: 'click',
    listener: function listener(event) {
      _listener && _listener(event, {
        type: 'outside',
        valid: event.which !== 3 && isOutsideClicked(event)
      });
    }
  }),
      _useEventListener2 = _slicedToArray(_useEventListener, 2),
      bindDocumentClickListener = _useEventListener2[0],
      unbindDocumentClickListener = _useEventListener2[1];

  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      _listener && _listener(event, {
        type: 'resize',
        valid: !primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.isTouchDevice()
      });
    }
  }),
      _useResizeListener2 = _slicedToArray(_useResizeListener, 2),
      bindWindowResizeListener = _useResizeListener2[0],
      unbindWindowResizeListener = _useResizeListener2[1];

  var _useOverlayScrollList = useOverlayScrollListener({
    target: targetRef,
    listener: function listener(event) {
      _listener && _listener(event, {
        type: 'scroll',
        valid: true
      });
    }
  }),
      _useOverlayScrollList2 = _slicedToArray(_useOverlayScrollList, 2),
      bindOverlayScrollListener = _useOverlayScrollList2[0],
      unbindOverlayScrollListener = _useOverlayScrollList2[1];

  var isOutsideClicked = function isOutsideClicked(event) {
    return targetRef.current && !(targetRef.current.isSameNode(event.target) || targetRef.current.contains(event.target) || overlayRef.current && overlayRef.current.contains(event.target));
  };

  var bind = function bind() {
    bindDocumentClickListener();
    bindWindowResizeListener();
    bindOverlayScrollListener();
  };

  var unbind = function unbind() {
    unbindDocumentClickListener();
    unbindWindowResizeListener();
    unbindOverlayScrollListener();
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (when) {
      targetRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getTargetElement(target);
      overlayRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getTargetElement(overlay);
    } else {
      unbind();
      targetRef.current = overlayRef.current = null;
    }
  }, [target, overlay, when]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    unbind(); // when && bind();
  }, [when]);
  useUnmountEffect(function () {
    unbind();
  });
  return [bind, unbind];
};
/* eslint-enable */

/* eslint-disable */
var useInterval = function useInterval(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var when = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var timeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var savedCallback = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var clear = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    return clearInterval(timeout.current);
  }, [timeout.current]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    savedCallback.current = fn;
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    function callback() {
      savedCallback.current();
    }

    if (when) {
      timeout.current = setInterval(callback, delay);
      return clear;
    } else {
      clear();
    }
  }, [delay, when]);
  useUnmountEffect(function () {
    clear();
  });
  return [clear];
};
/* eslint-enable */

/**
 * Hook to wrap around useState that stores the value in the browser local/session storage.
 *
 * @param {any} initialValue the initial value to store
 * @param {string} key the key to store the value in local/session storage
 * @param {string} storage either 'local' or 'session' for what type of storage
 * @returns a stateful value, and a function to update it.
 */

var useStorage = function useStorage(initialValue, key) {
  var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'local';
  // Since the local storage API isn't available in server-rendering environments,
  // we check that typeof window !== 'undefined' to make SSR and SSG work properly.
  var storageAvailable = typeof window !== 'undefined'; // subscribe to window storage event so changes in one tab to a stored value
  // are properly reflected in all tabs

  var _useEventListener = useEventListener({
    target: 'window',
    type: 'storage',
    listener: function listener(event) {
      var area = storage === 'local' ? window.localStorage : window.sessionStorage;

      if (event.storageArea === area && event.key === key) {
        setStoredValue(event.newValue || undefined);
      }
    }
  }),
      _useEventListener2 = _slicedToArray(_useEventListener, 2),
      bindWindowStorageListener = _useEventListener2[0],
      unbindWindowStorageListener = _useEventListener2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(function () {
    if (!storageAvailable) {
      return initialValue;
    }

    try {
      var item = storage === 'local' ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      storedValue = _React$useState2[0],
      setStoredValue = _React$useState2[1];

  var setValue = function setValue(value) {
    try {
      // Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (storageAvailable) {
        var serializedValue = JSON.stringify(valueToStore);
        storage === 'local' ? window.localStorage.setItem(key, serializedValue) : window.sessionStorage.setItem(key, serializedValue);
      }
    } catch (error) {
      throw new Error("PrimeReact useStorage: Failed to serialize the value at key: ".concat(key));
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    bindWindowStorageListener();
    return function () {
      return unbindWindowStorageListener();
    };
  }, []);
  return [storedValue, setValue];
};
/**
 * Hook to wrap around useState that stores the value in the browser local storage.
 *
 * @param {any} initialValue the initial value to store
 * @param {string} key the key to store the value in local storage
 * @returns a stateful value, and a function to update it.
 */

var useLocalStorage = function useLocalStorage(initialValue, key) {
  return useStorage(initialValue, key, 'local');
};
/**
 * Hook to wrap around useState that stores the value in the browser session storage.
 *
 * @param {any} initialValue the initial value to store
 * @param {string} key the key to store the value in session storage
 * @returns a stateful value, and a function to update it.
 */

var useSessionStorage = function useSessionStorage(initialValue, key) {
  return useStorage(initialValue, key, 'session');
};
/* eslint-enable */

/* eslint-disable */
var useTimeout = function useTimeout(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var when = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var timeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var savedCallback = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var clear = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    return clearTimeout(timeout.current);
  }, [timeout.current]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    savedCallback.current = fn;
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    function callback() {
      savedCallback.current();
    }

    if (when) {
      timeout.current = setTimeout(callback, delay);
      return clear;
    } else {
      clear();
    }
  }, [delay, when]);
  useUnmountEffect(function () {
    clear();
  });
  return [clear];
};
/* eslint-enable */




/***/ }),

/***/ "./node_modules/primereact/inputnumber/inputnumber.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/primereact/inputnumber/inputnumber.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputNumber": function() { return /* binding */ InputNumber; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");







function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputNumber = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusedState = _React$useState2[0],
      setFocusedState = _React$useState2[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var timer = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var lastValue = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var numberFormat = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var groupChar = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var prefixChar = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var suffixChar = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var isSpecialChar = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _numeral = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _group = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _minusSign = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _currency = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _decimal = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _suffix = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _prefix = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _index = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var stacked = props.showButtons && props.buttonLayout === 'stacked';
  var horizontal = props.showButtons && props.buttonLayout === 'horizontal';
  var vertical = props.showButtons && props.buttonLayout === 'vertical';
  var inputMode = props.inputMode || (props.mode === 'decimal' && !props.minFractionDigits ? 'numeric' : 'decimal');

  var getOptions = function getOptions() {
    return {
      localeMatcher: props.localeMatcher,
      style: props.mode,
      currency: props.currency,
      currencyDisplay: props.currencyDisplay,
      useGrouping: props.useGrouping,
      minimumFractionDigits: props.minFractionDigits,
      maximumFractionDigits: props.maxFractionDigits
    };
  };

  var constructParser = function constructParser() {
    numberFormat.current = new Intl.NumberFormat(props.locale, getOptions());

    var numerals = _toConsumableArray(new Intl.NumberFormat(props.locale, {
      useGrouping: false
    }).format(9876543210)).reverse();

    var index = new Map(numerals.map(function (d, i) {
      return [d, i];
    }));
    _numeral.current = new RegExp("[".concat(numerals.join(''), "]"), 'g');
    _group.current = getGroupingExpression();
    _minusSign.current = getMinusSignExpression();
    _currency.current = getCurrencyExpression();
    _decimal.current = getDecimalExpression();
    _suffix.current = getSuffixExpression();
    _prefix.current = getPrefixExpression();

    _index.current = function (d) {
      return index.get(d);
    };
  };

  var escapeRegExp = function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  };

  var getDecimalExpression = function getDecimalExpression() {
    var formatter = new Intl.NumberFormat(props.locale, _objectSpread(_objectSpread({}, getOptions()), {}, {
      useGrouping: false
    }));
    return new RegExp("[".concat(formatter.format(1.1).replace(_currency.current, '').trim().replace(_numeral.current, ''), "]"), 'g');
  };

  var getGroupingExpression = function getGroupingExpression() {
    var formatter = new Intl.NumberFormat(props.locale, {
      useGrouping: true
    });
    groupChar.current = formatter.format(1000000).trim().replace(_numeral.current, '').charAt(0);
    return new RegExp("[".concat(groupChar.current, "]"), 'g');
  };

  var getMinusSignExpression = function getMinusSignExpression() {
    var formatter = new Intl.NumberFormat(props.locale, {
      useGrouping: false
    });
    return new RegExp("[".concat(formatter.format(-1).trim().replace(_numeral.current, ''), "]"), 'g');
  };

  var getCurrencyExpression = function getCurrencyExpression() {
    if (props.currency) {
      var formatter = new Intl.NumberFormat(props.locale, {
        style: 'currency',
        currency: props.currency,
        currencyDisplay: props.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return new RegExp("[".concat(formatter.format(1).replace(/\s/g, '').replace(_numeral.current, '').replace(_group.current, ''), "]"), 'g');
    }

    return new RegExp("[]", 'g');
  };

  var getPrefixExpression = function getPrefixExpression() {
    if (props.prefix) {
      prefixChar.current = props.prefix;
    } else {
      var formatter = new Intl.NumberFormat(props.locale, {
        style: props.mode,
        currency: props.currency,
        currencyDisplay: props.currencyDisplay
      });
      prefixChar.current = formatter.format(1).split('1')[0];
    }

    return new RegExp("".concat(escapeRegExp(prefixChar.current || '')), 'g');
  };

  var getSuffixExpression = function getSuffixExpression() {
    if (props.suffix) {
      suffixChar.current = props.suffix;
    } else {
      var formatter = new Intl.NumberFormat(props.locale, {
        style: props.mode,
        currency: props.currency,
        currencyDisplay: props.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      suffixChar.current = formatter.format(1).split('1')[1];
    }

    return new RegExp("".concat(escapeRegExp(suffixChar.current || '')), 'g');
  };

  var formatValue = function formatValue(value) {
    if (value != null) {
      if (value === '-') {
        // Minus sign
        return value;
      }

      if (props.format) {
        var formatter = new Intl.NumberFormat(props.locale, getOptions());

        var _formattedValue = formatter.format(value);

        if (props.prefix) {
          _formattedValue = props.prefix + _formattedValue;
        }

        if (props.suffix) {
          _formattedValue = _formattedValue + props.suffix;
        }

        return _formattedValue;
      }

      return value.toString();
    }

    return '';
  };

  var parseValue = function parseValue(text) {
    var filteredText = text.replace(_suffix.current, '').replace(_prefix.current, '').trim().replace(/\s/g, '').replace(_currency.current, '').replace(_group.current, '').replace(_minusSign.current, '-').replace(_decimal.current, '.').replace(_numeral.current, _index.current);

    if (filteredText) {
      if (filteredText === '-') // Minus sign
        return filteredText;
      var parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }

    return null;
  };

  var repeat = function repeat(event, interval, dir) {
    var i = interval || 500;
    clearTimer();
    timer.current = setTimeout(function () {
      repeat(event, 40, dir);
    }, i);
    spin(event, dir);
  };

  var spin = function spin(event, dir) {
    if (inputRef.current) {
      var step = props.step * dir;
      var currentValue = parseValue(inputRef.current.value) || 0;
      var newValue = validateValue(currentValue + step); // touch devices trigger the keyboard to display because of setSelectionRange

      !primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isTouchDevice() && updateInput(newValue, null, 'spin');
      updateModel(event, newValue);
      handleOnChange(event, currentValue, newValue);
    }
  };

  var onUpButtonTouchStart = function onUpButtonTouchStart(event) {
    if (!props.disabled && !props.readOnly) {
      repeat(event, null, 1);
      event.preventDefault();
    }
  };

  var onUpButtonMouseDown = function onUpButtonMouseDown(event) {
    if (!props.disabled && !props.readOnly) {
      props.autoFocus && primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(inputRef.current, props.autoFocus);
      repeat(event, null, 1);
      event.preventDefault();
    }
  };

  var onUpButtonTouchEnd = function onUpButtonTouchEnd() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
      event.preventDefault();
    }
  };

  var onUpButtonMouseUp = function onUpButtonMouseUp() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };

  var onUpButtonMouseLeave = function onUpButtonMouseLeave() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };

  var onUpButtonKeyUp = function onUpButtonKeyUp() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };

  var onUpButtonKeyDown = function onUpButtonKeyDown(event) {
    if (!props.disabled && !props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
      repeat(event, null, 1);
    }
  };

  var onDownButtonTouchStart = function onDownButtonTouchStart(event) {
    if (!props.disabled && !props.readOnly) {
      repeat(event, null, -1);
      event.preventDefault();
    }
  };

  var onDownButtonTouchEnd = function onDownButtonTouchEnd() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
      event.preventDefault();
    }
  };

  var onDownButtonMouseDown = function onDownButtonMouseDown(event) {
    if (!props.disabled && !props.readOnly) {
      props.autoFocus && primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(inputRef.current, props.autoFocus);
      repeat(event, null, -1);
      event.preventDefault();
    }
  };

  var onDownButtonMouseUp = function onDownButtonMouseUp() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };

  var onDownButtonMouseLeave = function onDownButtonMouseLeave() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };

  var onDownButtonKeyUp = function onDownButtonKeyUp() {
    if (!props.disabled && !props.readOnly) {
      clearTimer();
    }
  };

  var onDownButtonKeyDown = function onDownButtonKeyDown(event) {
    if (!props.disabled && !props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
      repeat(event, null, -1);
    }
  };

  var onInput = function onInput(event) {
    if (props.disabled || props.readOnly) {
      return;
    }

    if (isSpecialChar.current) {
      event.target.value = lastValue.current;
    }

    isSpecialChar.current = false;
  };

  var onInputKeyDown = function onInputKeyDown(event) {
    if (props.disabled || props.readOnly) {
      return;
    }

    lastValue.current = event.target.value;

    if (event.shiftKey || event.altKey) {
      isSpecialChar.current = true;
      return;
    }

    var selectionStart = event.target.selectionStart;
    var selectionEnd = event.target.selectionEnd;
    var inputValue = event.target.value;
    var newValueStr = null;

    if (event.altKey) {
      event.preventDefault();
    }

    switch (event.which) {
      //up
      case 38:
        spin(event, 1);
        event.preventDefault();
        break;
      //down

      case 40:
        spin(event, -1);
        event.preventDefault();
        break;
      //left

      case 37:
        if (!isNumeralChar(inputValue.charAt(selectionStart - 1))) {
          event.preventDefault();
        }

        break;
      //right

      case 39:
        if (!isNumeralChar(inputValue.charAt(selectionStart))) {
          event.preventDefault();
        }

        break;
      //enter and tab

      case 13:
      case 9:
        newValueStr = validateValue(parseValue(inputValue));
        inputRef.current.value = formatValue(newValueStr);
        inputRef.current.setAttribute('aria-valuenow', newValueStr);
        updateModel(event, newValueStr);
        break;
      //backspace

      case 8:
        event.preventDefault();

        if (selectionStart === selectionEnd) {
          var deleteChar = inputValue.charAt(selectionStart - 1);

          var _getDecimalCharIndexe = getDecimalCharIndexes(inputValue),
              decimalCharIndex = _getDecimalCharIndexe.decimalCharIndex,
              decimalCharIndexWithoutPrefix = _getDecimalCharIndexe.decimalCharIndexWithoutPrefix;

          if (isNumeralChar(deleteChar)) {
            var decimalLength = getDecimalLength(inputValue);

            if (_group.current.test(deleteChar)) {
              _group.current.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
            } else if (_decimal.current.test(deleteChar)) {
              _decimal.current.lastIndex = 0;

              if (decimalLength) {
                inputRef.current.setSelectionRange(selectionStart - 1, selectionStart - 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              var insertedText = isDecimalMode() && (props.minFractionDigits || 0) < decimalLength ? '' : '0';
              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
              newValueStr = parseValue(newValueStr) > 0 ? newValueStr : '';
            } else {
              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
            }
          }

          updateValue(event, newValueStr, null, 'delete-single');
        } else {
          newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
          updateValue(event, newValueStr, null, 'delete-range');
        }

        break;
      // del

      case 46:
        event.preventDefault();

        if (selectionStart === selectionEnd) {
          var _deleteChar = inputValue.charAt(selectionStart);

          var _getDecimalCharIndexe2 = getDecimalCharIndexes(inputValue),
              _decimalCharIndex = _getDecimalCharIndexe2.decimalCharIndex,
              _decimalCharIndexWithoutPrefix = _getDecimalCharIndexe2.decimalCharIndexWithoutPrefix;

          if (isNumeralChar(_deleteChar)) {
            var _decimalLength = getDecimalLength(inputValue);

            if (_group.current.test(_deleteChar)) {
              _group.current.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (_decimal.current.test(_deleteChar)) {
              _decimal.current.lastIndex = 0;

              if (_decimalLength) {
                inputRef.current.setSelectionRange(selectionStart + 1, selectionStart + 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            } else if (_decimalCharIndex > 0 && selectionStart > _decimalCharIndex) {
              var _insertedText = isDecimalMode() && (props.minFractionDigits || 0) < _decimalLength ? '' : '0';

              newValueStr = inputValue.slice(0, selectionStart) + _insertedText + inputValue.slice(selectionStart + 1);
            } else if (_decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
              newValueStr = parseValue(newValueStr) > 0 ? newValueStr : '';
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }

          updateValue(event, newValueStr, null, 'delete-back-single');
        } else {
          newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
          updateValue(event, newValueStr, null, 'delete-range');
        }

        break;
    }

    if (props.onKeyDown) {
      props.onKeyDown(event);
    }
  };

  var onInputKeyPress = function onInputKeyPress(event) {
    if (props.disabled || props.readOnly) {
      return;
    }

    var code = event.which || event.keyCode;

    if (code !== 13) {
      // to submit a form
      event.preventDefault();
    }

    var _char = String.fromCharCode(code);

    var _isDecimalSign = isDecimalSign(_char);

    var _isMinusSign = isMinusSign(_char);

    if (48 <= code && code <= 57 || _isMinusSign || _isDecimalSign) {
      insert(event, _char, {
        isDecimalSign: _isDecimalSign,
        isMinusSign: _isMinusSign
      });
    }
  };

  var onPaste = function onPaste(event) {
    event.preventDefault();

    if (props.disabled || props.readOnly) {
      return;
    }

    var data = (event.clipboardData || window['clipboardData']).getData('Text');

    if (data) {
      var filteredData = parseValue(data);

      if (filteredData != null) {
        insert(event, filteredData.toString());
      }
    }
  };

  var allowMinusSign = function allowMinusSign() {
    return props.min === null || props.min < 0;
  };

  var isMinusSign = function isMinusSign(_char2) {
    if (_minusSign.current.test(_char2) || _char2 === '-') {
      _minusSign.current.lastIndex = 0;
      return true;
    }

    return false;
  };

  var isDecimalSign = function isDecimalSign(_char3) {
    if (_decimal.current.test(_char3)) {
      _decimal.current.lastIndex = 0;
      return true;
    }

    return false;
  };

  var isDecimalMode = function isDecimalMode() {
    return props.mode === 'decimal';
  };

  var getDecimalCharIndexes = function getDecimalCharIndexes(val) {
    var decimalCharIndex = val.search(_decimal.current);
    _decimal.current.lastIndex = 0;
    var filteredVal = val.replace(_prefix.current, '').trim().replace(/\s/g, '').replace(_currency.current, '');
    var decimalCharIndexWithoutPrefix = filteredVal.search(_decimal.current);
    _decimal.current.lastIndex = 0;
    return {
      decimalCharIndex: decimalCharIndex,
      decimalCharIndexWithoutPrefix: decimalCharIndexWithoutPrefix
    };
  };

  var getCharIndexes = function getCharIndexes(val) {
    var decimalCharIndex = val.search(_decimal.current);
    _decimal.current.lastIndex = 0;
    var minusCharIndex = val.search(_minusSign.current);
    _minusSign.current.lastIndex = 0;
    var suffixCharIndex = val.search(_suffix.current);
    _suffix.current.lastIndex = 0;
    var currencyCharIndex = val.search(_currency.current);
    _currency.current.lastIndex = 0;
    return {
      decimalCharIndex: decimalCharIndex,
      minusCharIndex: minusCharIndex,
      suffixCharIndex: suffixCharIndex,
      currencyCharIndex: currencyCharIndex
    };
  };

  var insert = function insert(event, text) {
    var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      isDecimalSign: false,
      isMinusSign: false
    };
    var minusCharIndexOnText = text.search(_minusSign.current);
    _minusSign.current.lastIndex = 0;

    if (!allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }

    var selectionStart = inputRef.current.selectionStart;
    var selectionEnd = inputRef.current.selectionEnd;
    var inputValue = inputRef.current.value.trim();

    var _getCharIndexes = getCharIndexes(inputValue),
        decimalCharIndex = _getCharIndexes.decimalCharIndex,
        minusCharIndex = _getCharIndexes.minusCharIndex,
        suffixCharIndex = _getCharIndexes.suffixCharIndex,
        currencyCharIndex = _getCharIndexes.currencyCharIndex;

    var newValueStr;

    if (sign.isMinusSign) {
      if (selectionStart === 0) {
        newValueStr = inputValue;

        if (minusCharIndex === -1 || selectionEnd !== 0) {
          newValueStr = insertText(inputValue, text, 0, selectionEnd);
        }

        updateValue(event, newValueStr, text, 'insert');
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        updateValue(event, inputValue, text, 'insert');
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
        updateValue(event, newValueStr, text, 'insert');
      } else if (decimalCharIndex === -1 && props.maxFractionDigits) {
        newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
        updateValue(event, newValueStr, text, 'insert');
      }
    } else {
      var maxFractionDigits = numberFormat.current.resolvedOptions().maximumFractionDigits;
      var operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';

      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          var charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
          updateValue(event, newValueStr, text, operation);
        }
      } else {
        newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
        updateValue(event, newValueStr, text, operation);
      }
    }
  };

  var insertText = function insertText(value, text, start, end) {
    var textSplit = text === '.' ? text : text.split('.');

    if (textSplit.length === 2) {
      var decimalCharIndex = value.slice(start, end).search(_decimal.current);
      _decimal.current.lastIndex = 0;
      return decimalCharIndex > 0 ? value.slice(0, start) + formatValue(text) + value.slice(end) : value || formatValue(text);
    } else if (end - start === value.length) {
      return formatValue(text);
    } else if (start === 0) {
      return text + value.slice(end);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    } else {
      return value.slice(0, start) + text + value.slice(end);
    }
  };

  var deleteRange = function deleteRange(value, start, end) {
    var newValueStr;
    if (end - start === value.length) newValueStr = '';else if (start === 0) newValueStr = value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start);else newValueStr = value.slice(0, start) + value.slice(end);
    return newValueStr;
  };

  var initCursor = function initCursor() {
    var selectionStart = inputRef.current.selectionStart;
    var inputValue = inputRef.current.value;
    var valueLength = inputValue.length;
    var index = null; // remove prefix

    var prefixLength = (prefixChar.current || '').length;
    inputValue = inputValue.replace(_prefix.current, '');
    selectionStart = selectionStart - prefixLength;

    var _char4 = inputValue.charAt(selectionStart);

    if (isNumeralChar(_char4)) {
      return selectionStart + prefixLength;
    } //left


    var i = selectionStart - 1;

    while (i >= 0) {
      _char4 = inputValue.charAt(i);

      if (isNumeralChar(_char4)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }

    if (index !== null) {
      inputRef.current.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;

      while (i < valueLength) {
        _char4 = inputValue.charAt(i);

        if (isNumeralChar(_char4)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }

      if (index !== null) {
        inputRef.current.setSelectionRange(index, index);
      }
    }

    return index || 0;
  };

  var onInputClick = function onInputClick() {
    initCursor();
  };

  var isNumeralChar = function isNumeralChar(_char5) {
    if (_char5.length === 1 && (_numeral.current.test(_char5) || _decimal.current.test(_char5) || _group.current.test(_char5) || _minusSign.current.test(_char5))) {
      resetRegex();
      return true;
    } else {
      return false;
    }
  };

  var resetRegex = function resetRegex() {
    _numeral.current.lastIndex = 0;
    _decimal.current.lastIndex = 0;
    _group.current.lastIndex = 0;
    _minusSign.current.lastIndex = 0;
  };

  var updateValue = function updateValue(event, valueStr, insertedValueStr, operation) {
    var currentValue = inputRef.current.value;
    var newValue = null;

    if (valueStr != null) {
      newValue = evaluateEmpty(parseValue(valueStr));
      updateInput(newValue, insertedValueStr, operation, valueStr);
      handleOnChange(event, currentValue, newValue);
    }
  };

  var evaluateEmpty = function evaluateEmpty(newValue) {
    return !newValue && !props.allowEmpty ? props.min || 0 : newValue;
  };

  var handleOnChange = function handleOnChange(event, currentValue, newValue) {
    if (props.onChange && isValueChanged(currentValue, newValue)) {
      props.onChange({
        originalEvent: event,
        value: newValue
      });
    }
  };

  var isValueChanged = function isValueChanged(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }

    if (newValue != null) {
      var parsedCurrentValue = typeof currentValue === 'string' ? parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }

    return false;
  };

  var validateValue = function validateValue(value) {
    if (value === '-') {
      return null;
    }

    return validateValueByLimit(value);
  };

  var validateValueByLimit = function validateValueByLimit(value) {
    if (primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isEmpty(value)) {
      return null;
    }

    if (props.min !== null && value < props.min) {
      return props.min;
    }

    if (props.max !== null && value > props.max) {
      return props.max;
    }

    return value;
  };

  var updateInput = function updateInput(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || '';
    var inputEl = inputRef.current;
    var inputValue = inputEl.value;
    var newValue = formatValue(value);
    var currentLength = inputValue.length;

    if (newValue !== valueStr) {
      newValue = concatValues(newValue, valueStr);
    }

    if (currentLength === 0) {
      inputEl.value = newValue;
      inputEl.setSelectionRange(0, 0);
      var index = initCursor();
      var selectionEnd = index + insertedValueStr.length;
      inputEl.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      var selectionStart = inputEl.selectionStart;
      var _selectionEnd = inputEl.selectionEnd;
      inputEl.value = newValue;
      var newLength = newValue.length;

      if (operation === 'range-insert') {
        var startValue = parseValue((inputValue || '').slice(0, selectionStart));
        var startValueStr = startValue !== null ? startValue.toString() : '';
        var startExpr = startValueStr.split('').join("(".concat(groupChar.current, ")?"));
        var sRegex = new RegExp(startExpr, 'g');
        sRegex.test(newValue);
        var tExpr = insertedValueStr.split('').join("(".concat(groupChar.current, ")?"));
        var tRegex = new RegExp(tExpr, 'g');
        tRegex.test(newValue.slice(sRegex.lastIndex));
        _selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === 'insert' || operation === 'delete-back-single') inputEl.setSelectionRange(_selectionEnd + 1, _selectionEnd + 1);else if (operation === 'delete-single') inputEl.setSelectionRange(_selectionEnd - 1, _selectionEnd - 1);else if (operation === 'delete-range' || operation === 'spin') inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      } else if (operation === 'delete-back-single') {
        var prevChar = inputValue.charAt(_selectionEnd - 1);
        var nextChar = inputValue.charAt(_selectionEnd);
        var diff = currentLength - newLength;

        var isGroupChar = _group.current.test(nextChar);

        if (isGroupChar && diff === 1) {
          _selectionEnd += 1;
        } else if (!isGroupChar && isNumeralChar(prevChar)) {
          _selectionEnd += -1 * diff + 1;
        }

        _group.current.lastIndex = 0;
        inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      } else if (inputValue === '-' && operation === 'insert') {
        inputEl.setSelectionRange(0, 0);

        var _index2 = initCursor();

        var _selectionEnd2 = _index2 + insertedValueStr.length + 1;

        inputEl.setSelectionRange(_selectionEnd2, _selectionEnd2);
      } else {
        _selectionEnd = _selectionEnd + (newLength - currentLength);
        inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
      }
    }

    inputEl.setAttribute('aria-valuenow', value);
  };

  var updateInputValue = function updateInputValue(newValue) {
    newValue = evaluateEmpty(newValue);
    var inputEl = inputRef.current;
    var value = inputEl.value;

    var _formattedValue = formattedValue(newValue);

    if (value !== _formattedValue) {
      inputEl.value = _formattedValue;
      inputEl.setAttribute('aria-valuenow', newValue);
    }
  };

  var formattedValue = function formattedValue(val) {
    return formatValue(evaluateEmpty(val));
  };

  var concatValues = function concatValues(val1, val2) {
    if (val1 && val2) {
      var decimalCharIndex = val2.search(_decimal.current);
      _decimal.current.lastIndex = 0;
      return decimalCharIndex !== -1 ? val1.split(_decimal.current)[0] + val2.slice(decimalCharIndex) : val1;
    }

    return val1;
  };

  var getDecimalLength = function getDecimalLength(value) {
    if (value) {
      var valueSplit = value.split(_decimal.current);

      if (valueSplit.length === 2) {
        return valueSplit[1].replace(_suffix.current, '').trim().replace(/\s/g, '').replace(_currency.current, '').length;
      }
    }

    return 0;
  };

  var updateModel = function updateModel(event, value) {
    if (props.onValueChange) {
      props.onValueChange({
        originalEvent: event,
        value: value,
        stopPropagation: function stopPropagation() {},
        preventDefault: function preventDefault() {},
        target: {
          name: props.name,
          id: props.id,
          value: value
        }
      });
    }
  };

  var onInputFocus = function onInputFocus(event) {
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
  };

  var onInputBlur = function onInputBlur(event) {
    setFocusedState(false);

    if (inputRef.current) {
      var currentValue = inputRef.current.value;

      if (isValueChanged(currentValue, props.value)) {
        var newValue = validateValue(parseValue(currentValue));
        updateInputValue(newValue);
        updateModel(event, newValue);
      }
    }

    props.onBlur && props.onBlur(event);
  };

  var clearTimer = function clearTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  var changeValue = function changeValue() {
    updateInputValue(validateValueByLimit(props.value));
    var newValue = validateValue(props.value);

    if (props.value !== null && props.value !== newValue) {
      updateModel(null, newValue);
    }
  };

  var getFormatter = function getFormatter() {
    return numberFormat.current;
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      getFormatter: getFormatter,
      getElement: function getElement() {
        return elementRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMountEffect)(function () {
    constructParser();
    var newValue = validateValue(props.value);

    if (props.value !== null && props.value !== newValue) {
      updateModel(null, newValue);
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(function () {
    constructParser();
    changeValue();
  }, [props.locale, props.localeMatcher, props.mode, props.currency, props.currencyDisplay, props.useGrouping, props.minFractionDigits, props.maxFractionDigits, props.suffix, props.prefix]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(function () {
    changeValue();
  }, [props.value]);

  var createInputElement = function createInputElement() {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-inputnumber-input', props.inputClassName);
    var valueToRender = formattedValue(props.value);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, _extends({
      ref: inputRef,
      id: props.inputId,
      style: props.inputStyle,
      role: "spinbutton",
      className: className,
      defaultValue: valueToRender,
      type: props.type,
      size: props.size,
      tabIndex: props.tabIndex,
      inputMode: inputMode,
      maxLength: props.maxLength,
      disabled: props.disabled,
      required: props.required,
      pattern: props.pattern,
      placeholder: props.placeholder,
      readOnly: props.readOnly,
      name: props.name,
      autoFocus: props.autoFocus,
      onKeyDown: onInputKeyDown,
      onKeyPress: onInputKeyPress,
      onInput: onInput,
      onClick: onInputClick,
      onBlur: onInputBlur,
      onFocus: onInputFocus,
      onPaste: onPaste,
      min: props.min,
      max: props.max,
      "aria-valuemin": props.min,
      "aria-valuemax": props.max,
      "aria-valuenow": props.value
    }, ariaProps, dataProps));
  };

  var createUpButton = function createUpButton() {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component', {
      'p-disabled': props.disabled
    }, props.incrementButtonClassName);
    var icon = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-button-icon', props.incrementButtonIcon);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: className,
      onMouseLeave: onUpButtonMouseLeave,
      onMouseDown: onUpButtonMouseDown,
      onMouseUp: onUpButtonMouseUp,
      onKeyDown: onUpButtonKeyDown,
      onKeyUp: onUpButtonKeyUp,
      onTouchStart: onUpButtonTouchStart,
      onTouchEnd: onUpButtonTouchEnd,
      disabled: props.disabled,
      tabIndex: -1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: icon
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, null));
  };

  var createDownButton = function createDownButton() {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component', {
      'p-disabled': props.disabled
    }, props.decrementButtonClassName);
    var icon = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-button-icon', props.decrementButtonIcon);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: className,
      onMouseLeave: onDownButtonMouseLeave,
      onMouseDown: onDownButtonMouseDown,
      onMouseUp: onDownButtonMouseUp,
      onKeyDown: onDownButtonKeyDown,
      onKeyUp: onDownButtonKeyUp,
      onTouchStart: onDownButtonTouchStart,
      onTouchEnd: onDownButtonTouchEnd,
      disabled: props.disabled,
      tabIndex: -1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: icon
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, null));
  };

  var createButtonGroup = function createButtonGroup() {
    var upButton = props.showButtons && createUpButton();
    var downButton = props.showButtons && createDownButton();

    if (stacked) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-inputnumber-button-group"
      }, upButton, downButton);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, upButton, downButton);
  };

  var hasTooltip = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.findDiffKeys(props, InputNumber.defaultProps);
  var dataProps = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.reduceKeys(otherProps, primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.DATA_PROPS);
  var ariaProps = primereact_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.reduceKeys(otherProps, primereact_utils__WEBPACK_IMPORTED_MODULE_5__.DomHandler.ARIA_PROPS);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)('p-inputnumber p-component p-inputwrapper', {
    'p-inputwrapper-filled': props.value != null && props.value.toString().length > 0,
    'p-inputwrapper-focus': focusedState,
    'p-inputnumber-buttons-stacked': stacked,
    'p-inputnumber-buttons-horizontal': horizontal,
    'p-inputnumber-buttons-vertical': vertical
  }, props.className);
  var inputElement = createInputElement();
  var buttonGroup = createButtonGroup();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", _extends({
    ref: elementRef,
    id: props.id,
    className: className,
    style: props.style
  }, otherProps), inputElement, buttonGroup), hasTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
InputNumber.displayName = 'InputNumber';
InputNumber.defaultProps = {
  __TYPE: 'InputNumber',
  allowEmpty: true,
  ariaLabelledBy: null,
  autoFocus: false,
  buttonLayout: 'stacked',
  className: null,
  currency: undefined,
  currencyDisplay: undefined,
  decrementButtonClassName: null,
  decrementButtonIcon: 'pi pi-angle-down',
  disabled: false,
  format: true,
  id: null,
  incrementButtonClassName: null,
  incrementButtonIcon: 'pi pi-angle-up',
  inputClassName: null,
  inputId: null,
  inputMode: null,
  inputRef: null,
  inputStyle: null,
  locale: undefined,
  localeMatcher: undefined,
  max: null,
  maxFractionDigits: undefined,
  min: null,
  minFractionDigits: undefined,
  mode: 'decimal',
  name: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyDown: null,
  onValueChange: null,
  pattern: null,
  placeholder: null,
  prefix: null,
  readOnly: false,
  required: false,
  showButtons: false,
  size: null,
  step: 1,
  style: null,
  suffix: null,
  tabIndex: null,
  tooltip: null,
  tooltipOptions: null,
  type: 'text',
  useGrouping: true,
  value: null
};




/***/ }),

/***/ "./node_modules/primereact/inputtext/inputtext.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/inputtext/inputtext.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputText": function() { return /* binding */ InputText; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_keyfilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/keyfilter */ "./node_modules/primereact/keyfilter/keyfilter.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var InputText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(ref);

  var onKeyPress = function onKeyPress(event) {
    props.onKeyPress && props.onKeyPress(event);

    if (props.keyfilter) {
      primereact_keyfilter__WEBPACK_IMPORTED_MODULE_1__.KeyFilter.onKeyPress(event, props.keyfilter, props.validateOnly);
    }
  };

  var onInput = function onInput(event) {
    var validatePattern = true;

    if (props.keyfilter && props.validateOnly) {
      validatePattern = primereact_keyfilter__WEBPACK_IMPORTED_MODULE_1__.KeyFilter.validate(event, props.keyfilter);
    }

    props.onInput && props.onInput(event, validatePattern);

    if (!props.onChange) {
      var target = event.target;
      primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(target.value) ? primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(target, 'p-filled') : primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(target, 'p-filled');
    }
  };

  var onPaste = function onPaste(event) {
    props.onPaste && props.onPaste(event);

    if (props.keyfilter) {
      primereact_keyfilter__WEBPACK_IMPORTED_MODULE_1__.KeyFilter.onPaste(event, props.keyfilter, props.validateOnly);
    }
  };

  var currentValue = elementRef.current && elementRef.current.value;
  var isFilled = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(props.value) || primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(props.defaultValue) || primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(currentValue);
  }, [props.value, props.defaultValue, currentValue]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  var hasTooltip = primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.findDiffKeys(props, InputText.defaultProps);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_3__.classNames)('p-inputtext p-component', {
    'p-disabled': props.disabled,
    'p-filled': isFilled
  }, props.className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
    ref: elementRef
  }, otherProps, {
    className: className,
    onInput: onInput,
    onKeyPress: onKeyPress,
    onPaste: onPaste
  })), hasTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
InputText.displayName = 'InputText';
InputText.defaultProps = {
  __TYPE: 'InputText',
  keyfilter: null,
  validateOnly: false,
  tooltip: null,
  tooltipOptions: null,
  onInput: null,
  onKeyPress: null,
  onPaste: null
};




/***/ }),

/***/ "./node_modules/primereact/keyfilter/keyfilter.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/keyfilter/keyfilter.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyFilter": function() { return /* binding */ KeyFilter; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var KeyFilter = {
  /* eslint-disable */
  DEFAULT_MASKS: {
    pint: /[\d]/,
    "int": /[\d\-]/,
    pnum: /[\d\.]/,
    money: /[\d\.\s,]/,
    num: /[\d\-\.]/,
    hex: /[0-9a-f]/i,
    email: /[a-z0-9_\.\-@]/i,
    alpha: /[a-z_]/i,
    alphanum: /[a-z0-9_]/i
  },

  /* eslint-enable */
  getRegex: function getRegex(keyfilter) {
    return KeyFilter.DEFAULT_MASKS[keyfilter] ? KeyFilter.DEFAULT_MASKS[keyfilter] : keyfilter;
  },
  onKeyPress: function onKeyPress(e, keyfilter, validateOnly) {
    if (validateOnly) {
      return;
    }

    if (e.ctrlKey || e.altKey) {
      return;
    }

    var isPrintableKey = e.key.length === 1;

    if (!isPrintableKey) {
      return;
    }

    var regex = this.getRegex(keyfilter);

    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  },
  onPaste: function onPaste(e, keyfilter, validateOnly) {
    if (validateOnly) {
      return;
    }

    var regex = this.getRegex(keyfilter);
    var clipboard = e.clipboardData.getData('text'); // loop over each letter pasted and if any fail prevent the paste

    _toConsumableArray(clipboard).forEach(function (c) {
      if (!regex.test(c)) {
        e.preventDefault();
        return false;
      }
    });
  },
  validate: function validate(e, keyfilter) {
    var value = e.target.value,
        validatePattern = true;

    if (value && !keyfilter.test(value)) {
      validatePattern = false;
    }

    return validatePattern;
  }
};




/***/ }),

/***/ "./node_modules/primereact/overlayservice/overlayservice.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/primereact/overlayservice/overlayservice.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayService": function() { return /* binding */ OverlayService; }
/* harmony export */ });
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");


var OverlayService = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_0__.EventBus)();




/***/ }),

/***/ "./node_modules/primereact/paginator/paginator.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/paginator/paginator.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Paginator": function() { return /* binding */ Paginator; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/inputnumber */ "./node_modules/primereact/inputnumber/inputnumber.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");








function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var CurrentPageReport = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var report = {
    currentPage: props.page + 1,
    totalPages: props.pageCount,
    first: Math.min(props.first + 1, props.totalRecords),
    last: Math.min(props.first + props.rows, props.totalRecords),
    rows: props.rows,
    totalRecords: props.totalRecords
  };
  var text = props.reportTemplate.replace('{currentPage}', report.currentPage).replace('{totalPages}', report.totalPages).replace('{first}', report.first).replace('{last}', report.last).replace('{rows}', report.rows).replace('{totalRecords}', report.totalRecords);
  var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "p-paginator-current"
  }, text);

  if (props.template) {
    var defaultOptions = _objectSpread(_objectSpread({}, report), {
      className: 'p-paginator-current',
      element: element,
      props: props
    });

    return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.template, defaultOptions);
  }

  return element;
});
CurrentPageReport.displayName = 'CurrentPageReport';
CurrentPageReport.defaultProps = {
  __TYPE: 'CurrentPageReport',
  pageCount: null,
  page: null,
  first: null,
  rows: null,
  totalRecords: null,
  reportTemplate: '({currentPage} of {totalPages})',
  template: null
};

var FirstPageLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-paginator-first p-paginator-element p-link', {
    'p-disabled': props.disabled
  });
  var iconClassName = 'p-paginator-icon pi pi-angle-double-left';
  var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: className,
    onClick: props.onClick,
    disabled: props.disabled,
    "aria-label": (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.ariaLabel)('firstPageLabel')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: iconClassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, null));

  if (props.template) {
    var defaultOptions = {
      onClick: props.onClick,
      className: className,
      iconClassName: iconClassName,
      disabled: props.disabled,
      element: element,
      props: props
    };
    return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.template, defaultOptions);
  }

  return element;
});
FirstPageLink.displayName = 'FirstPageLink';
FirstPageLink.defaultProps = {
  __TYPE: 'FirstPageLink',
  disabled: false,
  onClick: null,
  template: null
};

var JumpToPageInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var onChange = function onChange(event) {
    if (props.onChange) {
      props.onChange(props.rows * (event.value - 1), props.rows);
    }
  };

  var value = props.pageCount > 0 ? props.page + 1 : 0;
  var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_5__.InputNumber, {
    value: value,
    onChange: onChange,
    className: "p-paginator-page-input",
    disabled: props.disabled
  });

  if (props.template) {
    var defaultOptions = {
      value: value,
      onChange: onChange,
      disabled: props.disabled,
      className: 'p-paginator-page-input',
      element: element,
      props: props
    };
    return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.template, defaultOptions);
  }

  return element;
});
JumpToPageInput.displayName = 'JumpToPageInput';
JumpToPageInput.defaultProps = {
  __TYPE: 'JumbToPageInput',
  page: null,
  rows: null,
  pageCount: null,
  disabled: false,
  template: null,
  onChange: null
};

var LastPageLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-paginator-last p-paginator-element p-link', {
    'p-disabled': props.disabled
  });
  var iconClassName = 'p-paginator-icon pi pi-angle-double-right';
  var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: className,
    onClick: props.onClick,
    disabled: props.disabled,
    "aria-label": (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.ariaLabel)('lastPageLabel')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: iconClassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, null));

  if (props.template) {
    var defaultOptions = {
      onClick: props.onClick,
      className: className,
      iconClassName: iconClassName,
      disabled: props.disabled,
      element: element,
      props: props
    };
    return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.template, defaultOptions);
  }

  return element;
});
LastPageLink.displayName = 'LastPageLink';
LastPageLink.defaultProps = {
  __TYPE: 'LastPageLink',
  disabled: false,
  onClick: null,
  template: null
};

var NextPageLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-paginator-next p-paginator-element p-link', {
    'p-disabled': props.disabled
  });
  var iconClassName = 'p-paginator-icon pi pi-angle-right';
  var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: className,
    onClick: props.onClick,
    disabled: props.disabled,
    "aria-label": (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.ariaLabel)('nextPageLabel')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: iconClassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, null));

  if (props.template) {
    var defaultOptions = {
      onClick: props.onClick,
      className: className,
      iconClassName: iconClassName,
      disabled: props.disabled,
      element: element,
      props: props
    };
    return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.template, defaultOptions);
  }

  return element;
});
NextPageLink.displayName = 'NextPageLink';
NextPageLink.defaultProps = {
  __TYPE: 'NextPageLink',
  disabled: false,
  onClick: null,
  template: null
};

var PageLinks = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var onPageLinkClick = function onPageLinkClick(event, pageLink) {
    if (props.onClick) {
      props.onClick({
        originalEvent: event,
        value: pageLink
      });
    }

    event.preventDefault();
  };

  var elements;

  if (props.value) {
    var startPageInView = props.value[0];
    var endPageInView = props.value[props.value.length - 1];
    elements = props.value.map(function (pageLink) {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-paginator-page p-paginator-element p-link', {
        'p-paginator-page-start': pageLink === startPageInView,
        'p-paginator-page-end': pageLink === endPageInView,
        'p-highlight': pageLink - 1 === props.page
      });
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: className,
        onClick: function onClick(e) {
          return onPageLinkClick(e, pageLink);
        },
        "aria-label": "".concat((0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.ariaLabel)('pageLabel'), " ").concat(pageLink + 1)
      }, pageLink, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, null));

      if (props.template) {
        var defaultOptions = {
          onClick: function onClick(e) {
            return onPageLinkClick(e, pageLink);
          },
          className: className,
          view: {
            startPage: startPageInView - 1,
            endPage: endPageInView - 1
          },
          page: pageLink - 1,
          currentPage: props.page,
          totalPages: props.pageCount,
          element: element,
          props: props
        };
        element = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.template, defaultOptions);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: pageLink
      }, element);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "p-paginator-pages"
  }, elements);
});
PageLinks.displayName = 'PageLinks';
PageLinks.defaultProps = {
  __TYPE: 'PageLinks',
  value: null,
  page: null,
  rows: null,
  pageCount: null,
  links: null,
  template: null
};

var PrevPageLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-paginator-prev p-paginator-element p-link', {
    'p-disabled': props.disabled
  });
  var iconClassName = 'p-paginator-icon pi pi-angle-left';
  var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: className,
    onClick: props.onClick,
    disabled: props.disabled,
    "aria-label": (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.ariaLabel)('previousPageLabel')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: iconClassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, null));

  if (props.template) {
    var defaultOptions = {
      onClick: props.onClick,
      className: className,
      iconClassName: iconClassName,
      disabled: props.disabled,
      element: element,
      props: props
    };
    return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.template, defaultOptions);
  }

  return element;
});
PrevPageLink.displayName = 'PrevPageLink';
PrevPageLink.defaultProps = {
  __TYPE: 'PrevPageLink',
  disabled: false,
  onClick: null,
  template: null
};

var RowsPerPageDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var hasOptions = props.options && props.options.length > 0;
  var options = hasOptions ? props.options.map(function (opt) {
    return {
      label: String(opt),
      value: opt
    };
  }) : [];
  var ariaLabel = (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)('choose');
  var element = hasOptions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown, {
    value: props.value,
    options: options,
    onChange: props.onChange,
    appendTo: props.appendTo,
    disabled: props.disabled,
    placeholder: ariaLabel,
    "aria-label": ariaLabel
  }) : null;

  if (props.template) {
    var defaultOptions = {
      value: props.value,
      options: options,
      onChange: props.onChange,
      appendTo: props.appendTo,
      currentPage: props.page,
      totalPages: props.pageCount,
      totalRecords: props.totalRecords,
      disabled: props.disabled,
      element: element,
      props: props
    };
    return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.template, defaultOptions);
  }

  return element;
});
RowsPerPageDropdown.displayName = 'RowsPerPageDropdown';
RowsPerPageDropdown.defaultProps = {
  __TYPE: 'RowsPerPageDropdown',
  options: null,
  value: null,
  page: null,
  pageCount: null,
  totalRecords: 0,
  appendTo: null,
  onChange: null,
  template: null,
  disabled: false
};

var Paginator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var rppChanged = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var page = Math.floor(props.first / props.rows);
  var pageCount = Math.ceil(props.totalRecords / props.rows);
  var isFirstPage = page === 0;
  var isLastPage = page === pageCount - 1;
  var isEmpty = pageCount === 0;

  var calculatePageLinkBoundaries = function calculatePageLinkBoundaries() {
    var numberOfPages = pageCount;
    var visiblePages = Math.min(props.pageLinkSize, numberOfPages); //calculate range, keep current in middle if necessary

    var start = Math.max(0, Math.ceil(page - visiblePages / 2));
    var end = Math.min(numberOfPages - 1, start + visiblePages - 1); //check when approaching to last page

    var delta = props.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);
    return [start, end];
  };

  var updatePageLinks = function updatePageLinks() {
    var pageLinks = [];
    var boundaries = calculatePageLinkBoundaries();
    var start = boundaries[0];
    var end = boundaries[1];

    for (var i = start; i <= end; i++) {
      pageLinks.push(i + 1);
    }

    return pageLinks;
  };

  var changePage = function changePage(first, rows) {
    var pc = pageCount;
    var p = Math.floor(first / rows);

    if (p >= 0 && p < pc) {
      var newPageState = {
        first: first,
        rows: rows,
        page: p,
        pageCount: pc
      };

      if (props.onPageChange) {
        props.onPageChange(newPageState);
      }
    }
  };

  var changePageToFirst = function changePageToFirst(event) {
    changePage(0, props.rows);
    event.preventDefault();
  };

  var changePageToPrev = function changePageToPrev(event) {
    changePage(props.first - props.rows, props.rows);
    event.preventDefault();
  };

  var onPageLinkClick = function onPageLinkClick(event) {
    changePage((event.value - 1) * props.rows, props.rows);
  };

  var changePageToNext = function changePageToNext(event) {
    changePage(props.first + props.rows, props.rows);
    event.preventDefault();
  };

  var changePageToLast = function changePageToLast(event) {
    changePage((pageCount - 1) * props.rows, props.rows);
    event.preventDefault();
  };

  var onRowsChange = function onRowsChange(event) {
    var rows = event.value;
    rppChanged.current = rows !== props.rows;
    changePage(0, rows);
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(function () {
    if (!rppChanged.current) {
      changePage(props.first, props.rows);
    }

    rppChanged.current = false;
  }, [props.rows]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(function () {
    if (page > 0 && props.first >= props.totalRecords) {
      changePage((pageCount - 1) * props.rows, props.rows);
    }
  }, [props.totalRecords]);

  var createElement = function createElement(key, template) {
    var element;

    switch (key) {
      case 'FirstPageLink':
        element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FirstPageLink, {
          key: key,
          onClick: changePageToFirst,
          disabled: isFirstPage || isEmpty,
          template: template
        });
        break;

      case 'PrevPageLink':
        element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrevPageLink, {
          key: key,
          onClick: changePageToPrev,
          disabled: isFirstPage || isEmpty,
          template: template
        });
        break;

      case 'NextPageLink':
        element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NextPageLink, {
          key: key,
          onClick: changePageToNext,
          disabled: isLastPage || isEmpty,
          template: template
        });
        break;

      case 'LastPageLink':
        element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LastPageLink, {
          key: key,
          onClick: changePageToLast,
          disabled: isLastPage || isEmpty,
          template: template
        });
        break;

      case 'PageLinks':
        element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageLinks, {
          key: key,
          value: updatePageLinks(),
          page: page,
          rows: props.rows,
          pageCount: pageCount,
          onClick: onPageLinkClick,
          template: template
        });
        break;

      case 'RowsPerPageDropdown':
        element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowsPerPageDropdown, {
          key: key,
          value: props.rows,
          page: page,
          pageCount: pageCount,
          totalRecords: props.totalRecords,
          options: props.rowsPerPageOptions,
          onChange: onRowsChange,
          appendTo: props.dropdownAppendTo,
          template: template,
          disabled: isEmpty
        });
        break;

      case 'CurrentPageReport':
        element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrentPageReport, {
          reportTemplate: props.currentPageReportTemplate,
          key: key,
          page: page,
          pageCount: pageCount,
          first: props.first,
          rows: props.rows,
          totalRecords: props.totalRecords,
          template: template
        });
        break;

      case 'JumpToPageInput':
        element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(JumpToPageInput, {
          key: key,
          rows: props.rows,
          page: page,
          pageCount: pageCount,
          onChange: changePage,
          disabled: isEmpty,
          template: template
        });
        break;

      default:
        element = null;
        break;
    }

    return element;
  };

  var createElements = function createElements() {
    var template = props.template;

    if (template) {
      if (_typeof(template) === 'object') {
        return template.layout ? template.layout.split(' ').map(function (value) {
          var key = value.trim();
          return createElement(key, template[key]);
        }) : Object.entries(template).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              _template = _ref2[1];

          return createElement(key, _template);
        });
      }

      return template.split(' ').map(function (value) {
        return createElement(value.trim());
      });
    }

    return null;
  };

  if (!props.alwaysShow && pageCount === 1) {
    return null;
  } else {
    var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findDiffKeys(props, Paginator.defaultProps);
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-paginator p-component', props.className);
    var leftContent = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.leftContent, props);
    var rightContent = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.rightContent, props);
    var elements = createElements();
    var leftElement = leftContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-paginator-left-content"
    }, leftContent);
    var rightElement = rightContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-paginator-right-content"
    }, rightContent);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
      ref: elementRef,
      className: className,
      style: props.style
    }, otherProps), leftElement, elements, rightElement);
  }
}));
Paginator.displayName = 'Paginator';
Paginator.defaultProps = {
  __TYPE: 'Paginator',
  totalRecords: 0,
  rows: 0,
  first: 0,
  pageLinkSize: 5,
  rowsPerPageOptions: null,
  alwaysShow: true,
  style: null,
  className: null,
  template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  onPageChange: null,
  leftContent: null,
  rightContent: null,
  dropdownAppendTo: null,
  currentPageReportTemplate: '({currentPage} of {totalPages})'
};




/***/ }),

/***/ "./node_modules/primereact/portal/portal.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primereact/portal/portal.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portal": function() { return /* binding */ Portal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");






function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.visible && primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasDOM()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mountedState = _React$useState2[0],
      setMountedState = _React$useState2[1];

  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useMountEffect)(function () {
    if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasDOM() && !mountedState) {
      setMountedState(true);
      props.onMounted && props.onMounted();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useUpdateEffect)(function () {
    props.onMounted && props.onMounted();
  }, [mountedState]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_3__.useUnmountEffect)(function () {
    props.onUnmounted && props.onUnmounted();
  });
  var element = props.element || props.children;

  if (element && mountedState) {
    var appendTo = props.appendTo || primereact_api__WEBPACK_IMPORTED_MODULE_2__["default"].appendTo || document.body;
    return appendTo === 'self' ? element : /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(element, appendTo);
  }

  return null;
});
Portal.displayName = 'Portal';
Portal.defaultProps = {
  __TYPE: 'Portal',
  element: null,
  appendTo: null,
  visible: false,
  onMounted: null,
  onUnmounted: null
};




/***/ }),

/***/ "./node_modules/primereact/ripple/ripple.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primereact/ripple/ripple.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ripple": function() { return /* binding */ Ripple; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");





var Ripple = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function () {
  var inkRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var targetRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var getTarget = function getTarget() {
    return inkRef.current && inkRef.current.parentElement;
  };

  var bindEvents = function bindEvents() {
    if (targetRef.current) {
      targetRef.current.addEventListener('mousedown', onMouseDown);
      primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isTouchDevice() && targetRef.current.addEventListener('touchstart', onTouchStart);
    }
  };

  var unbindEvents = function unbindEvents() {
    if (targetRef.current) {
      targetRef.current.removeEventListener('mousedown', onMouseDown);
      primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isTouchDevice() && targetRef.current.removeEventListener('touchstart', onTouchStart);
    }
  };

  var onTouchStart = function onTouchStart(event) {
    onMouseDown(event);
    event.preventDefault();
  };

  var onMouseDown = function onMouseDown(event) {
    if (!inkRef.current || getComputedStyle(inkRef.current, null).display === 'none') {
      return;
    }

    primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(inkRef.current, 'p-ink-active');

    if (!primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHeight(inkRef.current) && !primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(inkRef.current)) {
      var d = Math.max(primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(targetRef.current), primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(targetRef.current));
      inkRef.current.style.height = d + 'px';
      inkRef.current.style.width = d + 'px';
    }

    var offset = primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(targetRef.current);
    var x = event.pageX - offset.left + document.body.scrollTop - primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(inkRef.current) / 2;
    var y = event.pageY - offset.top + document.body.scrollLeft - primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHeight(inkRef.current) / 2;
    inkRef.current.style.top = y + 'px';
    inkRef.current.style.left = x + 'px';
    primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(inkRef.current, 'p-ink-active');
  };

  var onAnimationEnd = function onAnimationEnd(event) {
    primereact_utils__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(event.currentTarget, 'p-ink-active');
  };

  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useMountEffect)(function () {
    if (inkRef.current) {
      targetRef.current = getTarget();
      bindEvents();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (inkRef.current && !targetRef.current) {
      targetRef.current = getTarget();
      bindEvents();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnmountEffect)(function () {
    if (inkRef.current) {
      targetRef.current = null;
      unbindEvents();
    }
  });
  return primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].ripple ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    role: "presentation",
    ref: inkRef,
    className: "p-ink",
    onAnimationEnd: onAnimationEnd
  }) : null;
}));
Ripple.displayName = 'Ripple';
Ripple.defaultProps = {
  __TYPE: 'Ripple'
};




/***/ }),

/***/ "./node_modules/primereact/tooltip/tooltip.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/primereact/tooltip/tooltip.esm.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tooltip": function() { return /* binding */ Tooltip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");






function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var Tooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visibleState = _React$useState2[0],
      setVisibleState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.position),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      positionState = _React$useState4[0],
      setPositionState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      classNameState = _React$useState6[0],
      setClassNameState = _React$useState6[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var textRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var currentTargetRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var containerSize = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var allowHide = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  var timeouts = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  var currentMouseEvent = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _useResizeListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useResizeListener)({
    listener: function listener(event) {
      !primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.isTouchDevice() && hide(event);
    }
  }),
      _useResizeListener2 = _slicedToArray(_useResizeListener, 2),
      bindWindowResizeListener = _useResizeListener2[0],
      unbindWindowResizeListener = _useResizeListener2[1];

  var _useOverlayScrollList = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useOverlayScrollListener)({
    target: currentTargetRef.current,
    listener: function listener(event) {
      hide(event);
    },
    when: visibleState
  }),
      _useOverlayScrollList2 = _slicedToArray(_useOverlayScrollList, 2),
      bindOverlayScrollListener = _useOverlayScrollList2[0],
      unbindOverlayScrollListener = _useOverlayScrollList2[1];

  var isTargetContentEmpty = function isTargetContentEmpty(target) {
    return !(props.content || getTargetOption(target, 'tooltip'));
  };

  var isContentEmpty = function isContentEmpty(target) {
    return !(props.content || getTargetOption(target, 'tooltip') || props.children);
  };

  var isMouseTrack = function isMouseTrack(target) {
    return getTargetOption(target, 'mousetrack') || props.mouseTrack;
  };

  var isDisabled = function isDisabled(target) {
    return getTargetOption(target, 'disabled') === 'true' || hasTargetOption(target, 'disabled') || props.disabled;
  };

  var isShowOnDisabled = function isShowOnDisabled(target) {
    return getTargetOption(target, 'showondisabled') || props.showOnDisabled;
  };

  var isAutoHide = function isAutoHide() {
    return getTargetOption(currentTargetRef.current, 'autohide') || props.autoHide;
  };

  var getTargetOption = function getTargetOption(target, option) {
    return hasTargetOption(target, "data-pr-".concat(option)) ? target.getAttribute("data-pr-".concat(option)) : null;
  };

  var hasTargetOption = function hasTargetOption(target, option) {
    return target && target.hasAttribute(option);
  };

  var getEvents = function getEvents(target) {
    var showEvents = [getTargetOption(target, 'showevent') || props.showEvent];
    var hideEvents = [getTargetOption(target, 'hideevent') || props.hideEvent];

    if (isMouseTrack(target)) {
      showEvents = ['mousemove'];
      hideEvents = ['mouseleave'];
    } else {
      var event = getTargetOption(target, 'event') || props.event;

      if (event === 'focus') {
        showEvents = ['focus'];
        hideEvents = ['blur'];
      }

      if (event === 'both') {
        showEvents = ['focus', 'mouseenter'];
        hideEvents = ['blur', 'mouseleave'];
      }
    }

    return {
      showEvents: showEvents,
      hideEvents: hideEvents
    };
  };

  var getPosition = function getPosition(target) {
    return getTargetOption(target, 'position') || positionState;
  };

  var getMouseTrackPosition = function getMouseTrackPosition(target) {
    var top = getTargetOption(target, 'mousetracktop') || props.mouseTrackTop;
    var left = getTargetOption(target, 'mousetrackleft') || props.mouseTrackLeft;
    return {
      top: top,
      left: left
    };
  };

  var updateText = function updateText(target, callback) {
    if (textRef.current) {
      var content = getTargetOption(target, 'tooltip') || props.content;

      if (content) {
        textRef.current.innerHTML = ''; // remove children

        textRef.current.appendChild(document.createTextNode(content));
        callback();
      } else if (props.children) {
        callback();
      }
    }
  };

  var updateTooltipState = function updateTooltipState(position) {
    updateText(currentTargetRef.current, function () {
      var _currentMouseEvent$cu = currentMouseEvent.current,
          x = _currentMouseEvent$cu.pageX,
          y = _currentMouseEvent$cu.pageY;

      if (props.autoZIndex && !primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.get(elementRef.current)) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.set('tooltip', elementRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].autoZIndex, props.baseZIndex || primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].zIndex.tooltip);
      }

      elementRef.current.style.left = '';
      elementRef.current.style.top = ''; // GitHub #2695 disable pointer events when autohiding

      if (isAutoHide()) {
        elementRef.current.style.pointerEvents = 'none';
      }

      if (isMouseTrack(currentTargetRef.current) && !containerSize.current) {
        containerSize.current = {
          width: primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(elementRef.current),
          height: primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(elementRef.current)
        };
      }

      align(currentTargetRef.current, {
        x: x,
        y: y
      }, position);
    });
  };

  var show = function show(e) {
    currentTargetRef.current = e.currentTarget;
    var disabled = isDisabled(currentTargetRef.current);
    var empty = isContentEmpty(isShowOnDisabled(currentTargetRef.current) && disabled ? currentTargetRef.current.firstChild : currentTargetRef.current);

    if (empty || disabled) {
      return;
    }

    currentMouseEvent.current = e;

    if (visibleState) {
      applyDelay('updateDelay', updateTooltipState);
    } else {
      // #2653 give the callback a chance to return false and not continue with display
      var success = sendCallback(props.onBeforeShow, {
        originalEvent: e,
        target: currentTargetRef.current
      });

      if (success) {
        applyDelay('showDelay', function () {
          setVisibleState(true);
          sendCallback(props.onShow, {
            originalEvent: e,
            target: currentTargetRef.current
          });
        });
      }
    }
  };

  var hide = function hide(e) {
    clearTimeouts();

    if (visibleState) {
      var success = sendCallback(props.onBeforeHide, {
        originalEvent: e,
        target: currentTargetRef.current
      });

      if (success) {
        applyDelay('hideDelay', function () {
          if (!isAutoHide() && allowHide.current === false) {
            return;
          }

          primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(elementRef.current);
          primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(elementRef.current, 'p-tooltip-active');
          setVisibleState(false);
          sendCallback(props.onHide, {
            originalEvent: e,
            target: currentTargetRef.current
          });
        });
      }
    }
  };

  var align = function align(target, coordinate, position) {
    var left = 0,
        top = 0,
        currentPosition = position || positionState;

    if (isMouseTrack(target) && coordinate) {
      var _containerSize = {
        width: primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(elementRef.current),
        height: primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(elementRef.current)
      };
      left = coordinate.x;
      top = coordinate.y;

      var _getMouseTrackPositio = getMouseTrackPosition(target),
          mouseTrackTop = _getMouseTrackPositio.top,
          mouseTrackLeft = _getMouseTrackPositio.left;

      switch (currentPosition) {
        case 'left':
          left -= _containerSize.width + mouseTrackLeft;
          top -= _containerSize.height / 2 - mouseTrackTop;
          break;

        case 'right':
          left += mouseTrackLeft;
          top -= _containerSize.height / 2 - mouseTrackTop;
          break;

        case 'top':
          left -= _containerSize.width / 2 - mouseTrackLeft;
          top -= _containerSize.height + mouseTrackTop;
          break;

        case 'bottom':
          left -= _containerSize.width / 2 - mouseTrackLeft;
          top += mouseTrackTop;
          break;
      }

      if (left <= 0 || containerSize.current.width > _containerSize.width) {
        elementRef.current.style.left = '0px';
        elementRef.current.style.right = window.innerWidth - _containerSize.width - left + 'px';
      } else {
        elementRef.current.style.right = '';
        elementRef.current.style.left = left + 'px';
      }

      elementRef.current.style.top = top + 'px';
      primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(elementRef.current, 'p-tooltip-active');
    } else {
      var pos = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findCollisionPosition(currentPosition);
      var my = getTargetOption(target, 'my') || props.my || pos.my;
      var at = getTargetOption(target, 'at') || props.at || pos.at;
      elementRef.current.style.padding = '0px';
      primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.flipfitCollision(elementRef.current, target, my, at, function (calculatedPosition) {
        var _calculatedPosition$a = calculatedPosition.at,
            atX = _calculatedPosition$a.x,
            atY = _calculatedPosition$a.y;
        var myX = calculatedPosition.my.x;
        var newPosition = props.at ? atX !== 'center' && atX !== myX ? atX : atY : calculatedPosition.at["".concat(pos.axis)];
        elementRef.current.style.padding = '';
        setPositionState(newPosition);
        updateContainerPosition(newPosition);
        primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(elementRef.current, 'p-tooltip-active');
      });
    }
  };

  var updateContainerPosition = function updateContainerPosition(position) {
    if (elementRef.current) {
      var style = getComputedStyle(elementRef.current);
      if (position === 'left') elementRef.current.style.left = parseFloat(style.left) - parseFloat(style.paddingLeft) * 2 + 'px';else if (position === 'top') elementRef.current.style.top = parseFloat(style.top) - parseFloat(style.paddingTop) * 2 + 'px';
    }
  };

  var onMouseEnter = function onMouseEnter() {
    if (!isAutoHide()) {
      allowHide.current = false;
    }
  };

  var onMouseLeave = function onMouseLeave(e) {
    if (!isAutoHide()) {
      allowHide.current = true;
      hide(e);
    }
  };

  var bindTargetEvent = function bindTargetEvent(target) {
    if (target) {
      var _getEvents = getEvents(target),
          showEvents = _getEvents.showEvents,
          hideEvents = _getEvents.hideEvents;

      var currentTarget = getTarget(target);
      showEvents.forEach(function (event) {
        return currentTarget.addEventListener(event, show);
      });
      hideEvents.forEach(function (event) {
        return currentTarget.addEventListener(event, hide);
      });
    }
  };

  var unbindTargetEvent = function unbindTargetEvent(target) {
    if (target) {
      var _getEvents2 = getEvents(target),
          showEvents = _getEvents2.showEvents,
          hideEvents = _getEvents2.hideEvents;

      var currentTarget = getTarget(target);
      showEvents.forEach(function (event) {
        return currentTarget.removeEventListener(event, show);
      });
      hideEvents.forEach(function (event) {
        return currentTarget.removeEventListener(event, hide);
      });
    }
  };

  var applyDelay = function applyDelay(delayProp, callback) {
    clearTimeouts();
    var delay = getTargetOption(currentTargetRef.current, delayProp.toLowerCase()) || props[delayProp];
    !!delay ? timeouts.current["".concat(delayProp)] = setTimeout(function () {
      return callback();
    }, delay) : callback();
  };

  var sendCallback = function sendCallback(callback) {
    if (callback) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var result = callback.apply(void 0, params);

      if (result === undefined) {
        result = true;
      }

      return result;
    }

    return true;
  };

  var clearTimeouts = function clearTimeouts() {
    Object.values(timeouts.current).forEach(function (t) {
      return clearTimeout(t);
    });
  };

  var getTarget = function getTarget(target) {
    if (target) {
      if (isShowOnDisabled(target)) {
        if (!target.hasWrapper) {
          var wrapper = document.createElement('span');
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
          target.hasWrapper = true;
          return wrapper;
        } else {
          return target.parentElement;
        }
      } else if (target.hasWrapper) {
        var _target$parentElement;

        (_target$parentElement = target.parentElement).replaceWith.apply(_target$parentElement, _toConsumableArray(target.parentElement.childNodes));

        delete target.hasWrapper;
      }

      return target;
    }

    return null;
  };

  var updateTargetEvents = function updateTargetEvents(target) {
    unloadTargetEvents(target);
    loadTargetEvents(target);
  };

  var loadTargetEvents = function loadTargetEvents(target) {
    setTargetEventOperations(target || props.target, bindTargetEvent);
  };

  var unloadTargetEvents = function unloadTargetEvents(target) {
    setTargetEventOperations(target || props.target, unbindTargetEvent);
  };

  var setTargetEventOperations = function setTargetEventOperations(target, operation) {
    target = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.getRefElement(target);

    if (target) {
      if (primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.isElement(target)) {
        operation(target);
      } else {
        var setEvent = function setEvent(target) {
          var element = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.DomHandler.find(document, target);
          element.forEach(function (el) {
            operation(el);
          });
        };

        if (target instanceof Array) {
          target.forEach(function (t) {
            setEvent(t);
          });
        } else {
          setEvent(target);
        }
      }
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (visibleState && currentTargetRef.current && isDisabled(currentTargetRef.current)) {
      hide();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useMountEffect)(function () {
    loadTargetEvents();
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    loadTargetEvents();
    return function () {
      unloadTargetEvents();
    };
  }, [show, hide, props.target]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (visibleState) {
      var position = getPosition(currentTargetRef.current);
      var classname = getTargetOption(currentTargetRef.current, 'classname');
      setPositionState(position);
      setClassNameState(classname);
      updateTooltipState(position);
      bindWindowResizeListener();
      bindOverlayScrollListener();
    } else {
      setPositionState(props.position);
      setClassNameState('');
      currentTargetRef.current = null;
      containerSize.current = null;
      allowHide.current = true;
    }

    return function () {
      unbindWindowResizeListener();
      unbindOverlayScrollListener();
    };
  }, [visibleState]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (visibleState) {
      applyDelay('updateDelay', function () {
        updateText(currentTargetRef.current, function () {
          align(currentTargetRef.current);
        });
      });
    }
  }, [props.content]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnmountEffect)(function () {
    clearTimeouts();
    unloadTargetEvents();
    primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(elementRef.current);
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      updateTargetEvents: updateTargetEvents,
      loadTargetEvents: loadTargetEvents,
      unloadTargetEvents: unloadTargetEvents,
      show: show,
      hide: hide,
      getElement: function getElement() {
        return elementRef.current;
      },
      getTarget: function getTarget() {
        return currentTargetRef.current;
      }
    };
  });

  var createElement = function createElement() {
    var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.findDiffKeys(props, Tooltip.defaultProps);
    var tooltipClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)('p-tooltip p-component', _defineProperty({}, "p-tooltip-".concat(positionState), true), props.className, classNameState);
    var empty = isTargetContentEmpty(currentTargetRef.current);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
      id: props.id,
      ref: elementRef,
      className: tooltipClassName,
      style: props.style,
      role: "tooltip",
      "aria-hidden": visibleState
    }, otherProps, {
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-tooltip-arrow"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: textRef,
      className: "p-tooltip-text"
    }, empty && props.children));
  };

  if (visibleState) {
    var element = createElement();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_3__.Portal, {
      element: element,
      appendTo: props.appendTo,
      visible: true
    });
  }

  return null;
}));
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  __TYPE: 'Tooltip',
  id: null,
  target: null,
  content: null,
  disabled: false,
  className: null,
  style: null,
  appendTo: null,
  position: 'right',
  my: null,
  at: null,
  event: null,
  showEvent: 'mouseenter',
  hideEvent: 'mouseleave',
  autoZIndex: true,
  baseZIndex: 0,
  mouseTrack: false,
  mouseTrackTop: 5,
  mouseTrackLeft: 5,
  showDelay: 0,
  updateDelay: 0,
  hideDelay: 0,
  autoHide: true,
  showOnDisabled: false,
  onBeforeShow: null,
  onBeforeHide: null,
  onShow: null,
  onHide: null
};




/***/ }),

/***/ "./node_modules/primereact/tree/tree.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/primereact/tree/tree.esm.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tree": function() { return /* binding */ Tree; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
}

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var UITreeNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
  var contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var nodeTouched = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var isLeaf = props.isNodeLeaf(props.node);
  var expanded = (props.expandedKeys ? props.expandedKeys[props.node.key] !== undefined : false) || props.node.expanded;

  var expand = function expand(event) {
    var expandedKeys = props.expandedKeys ? _objectSpread$1({}, props.expandedKeys) : {};
    expandedKeys[props.node.key] = true;
    props.onToggle({
      originalEvent: event,
      value: expandedKeys
    });
    invokeToggleEvents(event, true);
  };

  var collapse = function collapse(event) {
    var expandedKeys = _objectSpread$1({}, props.expandedKeys);

    delete expandedKeys[props.node.key];
    props.onToggle({
      originalEvent: event,
      value: expandedKeys
    });
    invokeToggleEvents(event, false);
  };

  var onTogglerClick = function onTogglerClick(event) {
    if (props.disabled) {
      return;
    }

    expanded ? collapse(event) : expand(event);
    event.preventDefault();
    event.stopPropagation();
  };

  var invokeToggleEvents = function invokeToggleEvents(event, isExpanded) {
    if (isExpanded) {
      if (props.onExpand) {
        props.onExpand({
          originalEvent: event,
          node: props.node
        });
      }
    } else {
      if (props.onCollapse) {
        props.onCollapse({
          originalEvent: event,
          node: props.node
        });
      }
    }
  };

  var onNodeKeyDown = function onNodeKeyDown(event) {
    if (props.disabled) {
      return;
    }

    var nodeElement = event.target.parentElement;

    if (!primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(nodeElement, 'p-treenode')) {
      return;
    }

    switch (event.which) {
      //down arrow
      case 40:
        var listElement = nodeElement.children[1];

        if (listElement) {
          focusNode(listElement.children[0]);
        } else {
          var nextNodeElement = nodeElement.nextElementSibling;

          while (nextNodeElement) {
            if (!primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(nextNodeElement, 'p-treenode-droppoint')) {
              break;
            }

            nextNodeElement = nextNodeElement.nextElementSibling;
          }

          if (nextNodeElement) {
            focusNode(nextNodeElement);
          } else {
            var nextSiblingAncestor = findNextSiblingOfAncestor(nodeElement);
            nextSiblingAncestor && focusNode(nextSiblingAncestor);
          }
        }

        event.preventDefault();
        break;
      //up arrow

      case 38:
        if (nodeElement.previousElementSibling) {
          focusNode(findLastVisibleDescendant(nodeElement.previousElementSibling));
        } else {
          var parentNodeElement = getParentNodeElement(nodeElement);
          parentNodeElement && focusNode(parentNodeElement);
        }

        event.preventDefault();
        break;
      //right arrow

      case 39:
        if (!expanded) {
          expand(event);
        }

        event.preventDefault();
        break;
      //left arrow

      case 37:
        if (expanded) {
          collapse(event);
        }

        event.preventDefault();
        break;
      //enter

      case 13:
        onClick(event);
        event.preventDefault();
        break;
    }
  };

  var findNextSiblingOfAncestor = function findNextSiblingOfAncestor(nodeElement) {
    var parentNodeElement = getParentNodeElement(nodeElement);
    return parentNodeElement ? parentNodeElement.nextElementSibling || findNextSiblingOfAncestor(parentNodeElement) : null;
  };

  var findLastVisibleDescendant = function findLastVisibleDescendant(nodeElement) {
    var childrenListElement = nodeElement.children[1];

    if (childrenListElement) {
      var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
      return findLastVisibleDescendant(lastChildElement);
    } else {
      return nodeElement;
    }
  };

  var getParentNodeElement = function getParentNodeElement(nodeElement) {
    var parentNodeElement = nodeElement.parentElement.parentElement;
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(parentNodeElement, 'p-treenode') ? parentNodeElement : null;
  };

  var focusNode = function focusNode(element) {
    element && element.children[0] && element.children[0].focus();
  };

  var onClick = function onClick(event) {
    if (props.onClick) {
      props.onClick({
        originalEvent: event,
        node: props.node
      });
    }

    var targetNode = event.target.nodeName;

    if (props.disabled || targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode === 'A' || primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(event.target, 'p-clickable')) {
      return;
    }

    if (props.selectionMode && props.node.selectable !== false) {
      var selectionKeys;

      if (isCheckboxSelectionMode()) {
        var checked = isChecked();
        selectionKeys = props.selectionKeys ? _objectSpread$1({}, props.selectionKeys) : {};

        if (checked) {
          if (props.propagateSelectionDown) propagateDown(props.node, false, selectionKeys);else delete selectionKeys[props.node.key];

          if (props.propagateSelectionUp && props.onPropagateUp) {
            props.onPropagateUp({
              originalEvent: event,
              check: false,
              selectionKeys: selectionKeys
            });
          }

          if (props.onUnselect) {
            props.onUnselect({
              originalEvent: event,
              node: props.node
            });
          }
        } else {
          if (props.propagateSelectionDown) propagateDown(props.node, true, selectionKeys);else selectionKeys[props.node.key] = {
            checked: true
          };

          if (props.propagateSelectionUp && props.onPropagateUp) {
            props.onPropagateUp({
              originalEvent: event,
              check: true,
              selectionKeys: selectionKeys
            });
          }

          if (props.onSelect) {
            props.onSelect({
              originalEvent: event,
              node: props.node
            });
          }
        }
      } else {
        var selected = isSelected();
        var metaSelection = nodeTouched.current ? false : props.metaKeySelection;

        if (metaSelection) {
          var metaKey = event.metaKey || event.ctrlKey;

          if (selected && metaKey) {
            if (isSingleSelectionMode()) {
              selectionKeys = null;
            } else {
              selectionKeys = _objectSpread$1({}, props.selectionKeys);
              delete selectionKeys[props.node.key];
            }

            if (props.onUnselect) {
              props.onUnselect({
                originalEvent: event,
                node: props.node
              });
            }
          } else {
            if (isSingleSelectionMode()) {
              selectionKeys = props.node.key;
            } else if (isMultipleSelectionMode()) {
              selectionKeys = !metaKey ? {} : props.selectionKeys ? _objectSpread$1({}, props.selectionKeys) : {};
              selectionKeys[props.node.key] = true;
            }

            if (props.onSelect) {
              props.onSelect({
                originalEvent: event,
                node: props.node
              });
            }
          }
        } else {
          if (isSingleSelectionMode()) {
            if (selected) {
              selectionKeys = null;

              if (props.onUnselect) {
                props.onUnselect({
                  originalEvent: event,
                  node: props.node
                });
              }
            } else {
              selectionKeys = props.node.key;

              if (props.onSelect) {
                props.onSelect({
                  originalEvent: event,
                  node: props.node
                });
              }
            }
          } else {
            if (selected) {
              selectionKeys = _objectSpread$1({}, props.selectionKeys);
              delete selectionKeys[props.node.key];

              if (props.onUnselect) {
                props.onUnselect({
                  originalEvent: event,
                  node: props.node
                });
              }
            } else {
              selectionKeys = props.selectionKeys ? _objectSpread$1({}, props.selectionKeys) : {};
              selectionKeys[props.node.key] = true;

              if (props.onSelect) {
                props.onSelect({
                  originalEvent: event,
                  node: props.node
                });
              }
            }
          }
        }
      }

      if (props.onSelectionChange) {
        props.onSelectionChange({
          originalEvent: event,
          value: selectionKeys
        });
      }
    }

    nodeTouched.current = false;
  };

  var onDoubleClick = function onDoubleClick(event) {
    if (props.onDoubleClick) {
      props.onDoubleClick({
        originalEvent: event,
        node: props.node
      });
    }
  };

  var onRightClick = function onRightClick(event) {
    if (props.disabled) {
      return;
    }

    primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.clearSelection();

    if (props.onContextMenuSelectionChange) {
      props.onContextMenuSelectionChange({
        originalEvent: event,
        value: props.node.key
      });
    }

    if (props.onContextMenu) {
      props.onContextMenu({
        originalEvent: event,
        node: props.node
      });
    }
  };

  var propagateUp = function propagateUp(event) {
    var check = event.check;
    var selectionKeys = event.selectionKeys;
    var checkedChildCount = 0;
    var childPartialSelected = false;

    var _iterator = _createForOfIteratorHelper$1(props.node.children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        if (selectionKeys[child.key] && selectionKeys[child.key].checked) checkedChildCount++;else if (selectionKeys[child.key] && selectionKeys[child.key].partialChecked) childPartialSelected = true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (check && checkedChildCount === props.node.children.length) {
      selectionKeys[props.node.key] = {
        checked: true,
        partialChecked: false
      };
    } else {
      if (!check) {
        delete selectionKeys[props.node.key];
      }

      if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== props.node.children.length) selectionKeys[props.node.key] = {
        checked: false,
        partialChecked: true
      };else delete selectionKeys[props.node.key];
    }

    if (props.propagateSelectionUp && props.onPropagateUp) {
      props.onPropagateUp(event);
    }
  };

  var propagateDown = function propagateDown(node, check, selectionKeys) {
    if (check) selectionKeys[node.key] = {
      checked: true,
      partialChecked: false
    };else delete selectionKeys[node.key];

    if (node.children && node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        propagateDown(node.children[i], check, selectionKeys);
      }
    }
  };

  var isSelected = function isSelected() {
    if (props.selectionMode && props.selectionKeys) return isSingleSelectionMode() ? props.selectionKeys === props.node.key : props.selectionKeys[props.node.key] !== undefined;else return false;
  };

  var isChecked = function isChecked() {
    return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].checked : false;
  };

  var isPartialChecked = function isPartialChecked() {
    return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].partialChecked : false;
  };

  var isSingleSelectionMode = function isSingleSelectionMode() {
    return props.selectionMode && props.selectionMode === 'single';
  };

  var isMultipleSelectionMode = function isMultipleSelectionMode() {
    return props.selectionMode && props.selectionMode === 'multiple';
  };

  var isCheckboxSelectionMode = function isCheckboxSelectionMode() {
    return props.selectionMode && props.selectionMode === 'checkbox';
  };

  var onTouchEnd = function onTouchEnd() {
    nodeTouched.current = true;
  };

  var onDropPoint = function onDropPoint(event, position) {
    event.preventDefault();

    if (props.node.droppable !== false) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(event.target, 'p-treenode-droppoint-active');

      if (props.onDropPoint) {
        var dropIndex = position === -1 ? props.index : props.index + 1;
        props.onDropPoint({
          originalEvent: event,
          path: props.path,
          index: dropIndex,
          position: position
        });
      }
    }
  };

  var onDropPointDragOver = function onDropPointDragOver(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase()) {
      event.dataTransfer.dropEffect = 'move';
      event.preventDefault();
    }
  };

  var onDropPointDragEnter = function onDropPointDragEnter(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase()) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(event.target, 'p-treenode-droppoint-active');
    }
  };

  var onDropPointDragLeave = function onDropPointDragLeave(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase()) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(event.target, 'p-treenode-droppoint-active');
    }
  };

  var onDrop = function onDrop(event) {
    if (props.dragdropScope && props.node.droppable !== false) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(contentRef.current, 'p-treenode-dragover');
      event.preventDefault();
      event.stopPropagation();

      if (props.onDrop) {
        props.onDrop({
          originalEvent: event,
          path: props.path,
          index: props.index
        });
      }
    }
  };

  var onDragOver = function onDragOver(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase() && props.node.droppable !== false) {
      event.dataTransfer.dropEffect = 'move';
      event.preventDefault();
      event.stopPropagation();
    }
  };

  var onDragEnter = function onDragEnter(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase() && props.node.droppable !== false) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(contentRef.current, 'p-treenode-dragover');
    }
  };

  var onDragLeave = function onDragLeave(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase() && props.node.droppable !== false) {
      var rect = event.currentTarget.getBoundingClientRect();

      if (event.nativeEvent.x > rect.left + rect.width || event.nativeEvent.x < rect.left || event.nativeEvent.y >= Math.floor(rect.top + rect.height) || event.nativeEvent.y < rect.top) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(contentRef.current, 'p-treenode-dragover');
      }
    }
  };

  var onDragStart = function onDragStart(event) {
    event.dataTransfer.setData('text', props.dragdropScope);
    event.dataTransfer.setData(props.dragdropScope, props.dragdropScope);

    if (props.onDragStart) {
      props.onDragStart({
        originalEvent: event,
        path: props.path,
        index: props.index
      });
    }
  };

  var onDragEnd = function onDragEnd(event) {
    if (props.onDragEnd) {
      props.onDragEnd({
        originalEvent: event
      });
    }
  };

  var createLabel = function createLabel() {
    var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "p-treenode-label"
    }, props.node.label);

    if (props.nodeTemplate) {
      var defaultContentOptions = {
        onTogglerClick: onTogglerClick,
        className: 'p-treenode-label',
        element: content,
        props: props,
        expanded: expanded
      };
      content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(props.nodeTemplate, props.node, defaultContentOptions);
    }

    return content;
  };

  var createCheckbox = function createCheckbox() {
    if (isCheckboxSelectionMode() && props.node.selectable !== false) {
      var checked = isChecked();
      var partialChecked = isPartialChecked();
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-checkbox-box', {
        'p-highlight': checked,
        'p-indeterminate': partialChecked,
        'p-disabled': props.disabled
      });
      var icon = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-checkbox-icon p-c', {
        'pi pi-check': checked,
        'pi pi-minus': partialChecked
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-checkbox p-component"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: className,
        role: "checkbox",
        "aria-checked": checked
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: icon
      })));
    }

    return null;
  };

  var createIcon = function createIcon() {
    var icon = props.node.icon || (expanded ? props.node.expandedIcon : props.node.collapsedIcon);

    if (icon) {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-treenode-icon', icon);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: className
      });
    }

    return null;
  };

  var createToggler = function createToggler() {
    var label = expanded ? (0,primereact_api__WEBPACK_IMPORTED_MODULE_2__.ariaLabel)('collapseLabel') : (0,primereact_api__WEBPACK_IMPORTED_MODULE_2__.ariaLabel)('expandLabel');
    var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-tree-toggler-icon pi pi-fw', {
      'pi-chevron-right': !expanded,
      'pi-chevron-down': expanded
    });
    var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "p-tree-toggler p-link",
      tabIndex: -1,
      onClick: onTogglerClick,
      "aria-label": label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: iconClassName,
      "aria-hidden": "true"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, null));

    if (props.togglerTemplate) {
      var defaultContentOptions = {
        onClick: onTogglerClick,
        containerClassName: 'p-tree-toggler p-link',
        iconClassName: 'p-tree-toggler-icon',
        element: content,
        props: props,
        expanded: expanded
      };
      content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(props.togglerTemplate, props.node, defaultContentOptions);
    }

    return content;
  };

  var createDropPoint = function createDropPoint(position) {
    if (props.dragdropScope) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "p-treenode-droppoint",
        onDrop: function onDrop(event) {
          return onDropPoint(event, position);
        },
        onDragOver: onDropPointDragOver,
        onDragEnter: onDropPointDragEnter,
        onDragLeave: onDropPointDragLeave
      });
    }

    return null;
  };

  var createContent = function createContent() {
    var selected = isSelected();
    var checked = isChecked();
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-treenode-content', props.node.className, {
      'p-treenode-selectable': props.selectionMode && props.node.selectable !== false,
      'p-highlight': isCheckboxSelectionMode() ? checked : selected,
      'p-highlight-contextmenu': props.contextMenuSelectionKey && props.contextMenuSelectionKey === props.node.key,
      'p-disabled': props.disabled
    });
    var toggler = createToggler();
    var checkbox = createCheckbox();
    var icon = createIcon();
    var label = createLabel();
    var tabIndex = props.disabled ? undefined : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: contentRef,
      className: className,
      style: props.node.style,
      onClick: onClick,
      onDoubleClick: onDoubleClick,
      onContextMenu: onRightClick,
      onTouchEnd: onTouchEnd,
      draggable: props.dragdropScope && props.node.draggable !== false && !props.disabled,
      onDrop: onDrop,
      onDragOver: onDragOver,
      onDragEnter: onDragEnter,
      onDragLeave: onDragLeave,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd,
      tabIndex: tabIndex,
      onKeyDown: onNodeKeyDown,
      role: "treeitem",
      "aria-posinset": props.index + 1,
      "aria-expanded": expanded,
      "aria-selected": checked || selected
    }, toggler, checkbox, icon, label);
  };

  var createChildren = function createChildren() {
    if (primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(props.node.children) && expanded) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "p-treenode-children",
        role: "group"
      }, props.node.children.map(function (childNode, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UITreeNode, {
          key: childNode.key || childNode.label,
          node: childNode,
          parent: props.node,
          index: index,
          last: index === props.node.children.length - 1,
          path: props.path + '-' + index,
          disabled: props.disabled,
          selectionMode: props.selectionMode,
          selectionKeys: props.selectionKeys,
          onSelectionChange: props.onSelectionChange,
          metaKeySelection: props.metaKeySelection,
          propagateSelectionDown: props.propagateSelectionDown,
          propagateSelectionUp: props.propagateSelectionUp,
          contextMenuSelectionKey: props.contextMenuSelectionKey,
          onContextMenuSelectionChange: props.onContextMenuSelectionChange,
          onContextMenu: props.onContextMenu,
          onExpand: props.onExpand,
          onCollapse: props.onCollapse,
          onSelect: props.onSelect,
          onUnselect: props.onUnselect,
          onClick: props.onClick,
          onDoubleClick: props.onDoubleClick,
          expandedKeys: props.expandedKeys,
          onToggle: props.onToggle,
          onPropagateUp: propagateUp,
          nodeTemplate: props.nodeTemplate,
          togglerTemplate: props.togglerTemplate,
          isNodeLeaf: props.isNodeLeaf,
          dragdropScope: props.dragdropScope,
          onDragStart: props.onDragStart,
          onDragEnd: props.onDragEnd,
          onDrop: props.onDrop,
          onDropPoint: props.onDropPoint
        });
      }));
    }

    return null;
  };

  var createNode = function createNode() {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-treenode', {
      'p-treenode-leaf': isLeaf
    }, props.node.className);
    var content = createContent();
    var children = createChildren();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: className,
      style: props.node.style
    }, content, children);
  };

  var node = createNode();

  if (props.dragdropScope && !props.disabled) {
    var beforeDropPoint = createDropPoint(-1);
    var afterDropPoint = props.last ? createDropPoint(1) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, beforeDropPoint, node, afterDropPoint);
  }

  return node;
});
UITreeNode.displayName = 'UITreeNode';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var Tree = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      filterValueState = _React$useState2[0],
      setFilterValueState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.expandedKeys),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      expandedKeysState = _React$useState4[0],
      setExpandedKeysState = _React$useState4[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var filteredNodes = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
  var dragState = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var filterChanged = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var filteredValue = props.onFilterValueChange ? props.filterValue : filterValueState;
  var expandedKeys = props.onToggle ? props.expandedKeys : expandedKeysState;
  var filterOptions = {
    filter: function filter(e) {
      return onFilterInputChange(e);
    },
    reset: function reset() {
      return resetFilter();
    }
  };

  var getRootNode = function getRootNode() {
    return props.filter && filteredNodes.current ? filteredNodes.current : props.value;
  };

  var onToggle = function onToggle(event) {
    if (props.onToggle) {
      props.onToggle(event);
    } else {
      setExpandedKeysState(event.value);
    }
  };

  var onDragStart = function onDragStart(event) {
    dragState.current = {
      path: event.path,
      index: event.index
    };
  };

  var onDragEnd = function onDragEnd() {
    dragState.current = null;
  };

  var onDrop = function onDrop(event) {
    if (validateDropNode(dragState.current.path, event.path)) {
      var value = JSON.parse(JSON.stringify(props.value));
      var dragPaths = dragState.current.path.split('-');
      dragPaths.pop();
      var dragNodeParent = findNode(value, dragPaths);
      var dragNode = dragNodeParent ? dragNodeParent.children[dragState.current.index] : value[dragState.current.index];
      var dropNode = findNode(value, event.path.split('-'));
      if (dropNode.children) dropNode.children.push(dragNode);else dropNode.children = [dragNode];
      if (dragNodeParent) dragNodeParent.children.splice(dragState.current.index, 1);else value.splice(dragState.current.index, 1);

      if (props.onDragDrop) {
        props.onDragDrop({
          originalEvent: event.originalEvent,
          value: value,
          dragNode: dragNode,
          dropNode: dropNode,
          dropIndex: event.index
        });
      }
    }
  };

  var onDropPoint = function onDropPoint(event) {
    if (validateDropPoint(event)) {
      var value = JSON.parse(JSON.stringify(props.value));
      var dragPaths = dragState.current.path.split('-');
      dragPaths.pop();
      var dropPaths = event.path.split('-');
      dropPaths.pop();
      var dragNodeParent = findNode(value, dragPaths);
      var dropNodeParent = findNode(value, dropPaths);
      var dragNode = dragNodeParent ? dragNodeParent.children[dragState.current.index] : value[dragState.current.index];
      var siblings = areSiblings(dragState.current.path, event.path);
      if (dragNodeParent) dragNodeParent.children.splice(dragState.current.index, 1);else value.splice(dragState.current.index, 1);

      if (event.position < 0) {
        var dropIndex = siblings ? dragState.current.index > event.index ? event.index : event.index - 1 : event.index;
        if (dropNodeParent) dropNodeParent.children.splice(dropIndex, 0, dragNode);else value.splice(dropIndex, 0, dragNode);
      } else {
        if (dropNodeParent) dropNodeParent.children.push(dragNode);else value.push(dragNode);
      }

      if (props.onDragDrop) {
        props.onDragDrop({
          originalEvent: event.originalEvent,
          value: value,
          dragNode: dragNode,
          dropNode: dropNodeParent,
          dropIndex: event.index
        });
      }
    }
  };

  var validateDrop = function validateDrop(dragPath, dropPath) {
    if (!dragPath) {
      return false;
    } else {
      //same node
      if (dragPath === dropPath) {
        return false;
      } //parent dropped on an descendant


      if (dropPath.indexOf(dragPath) === 0) {
        return false;
      }

      return true;
    }
  };

  var validateDropNode = function validateDropNode(dragPath, dropPath) {
    var _validateDrop = validateDrop(dragPath, dropPath);

    if (_validateDrop) {
      //child dropped on parent
      if (dragPath.indexOf('-') > 0 && dragPath.substring(0, dragPath.lastIndexOf('-')) === dropPath) {
        return false;
      }

      return true;
    } else {
      return false;
    }
  };

  var validateDropPoint = function validateDropPoint(event) {
    var _validateDrop = validateDrop(dragState.current.path, event.path);

    if (_validateDrop) {
      //child dropped to next sibling's drop point
      if (event.position === -1 && areSiblings(dragState.current.path, event.path) && dragState.current.index + 1 === event.index) {
        return false;
      }

      return true;
    } else {
      return false;
    }
  };

  var areSiblings = function areSiblings(path1, path2) {
    if (path1.length === 1 && path2.length === 1) return true;else return path1.substring(0, path1.lastIndexOf('-')) === path2.substring(0, path2.lastIndexOf('-'));
  };

  var findNode = function findNode(value, path) {
    if (path.length === 0) {
      return null;
    } else {
      var index = parseInt(path[0], 10);
      var nextSearchRoot = value.children ? value.children[index] : value[index];

      if (path.length === 1) {
        return nextSearchRoot;
      } else {
        path.shift();
        return findNode(nextSearchRoot, path);
      }
    }
  };

  var isNodeLeaf = function isNodeLeaf(node) {
    return node.leaf === false ? false : !(node.children && node.children.length);
  };

  var onFilterInputKeyDown = function onFilterInputKeyDown(event) {
    //enter
    if (event.which === 13) {
      event.preventDefault();
    }
  };

  var onFilterInputChange = function onFilterInputChange(event) {
    filterChanged.current = true;
    var value = event.target.value;

    if (props.onFilterValueChange) {
      props.onFilterValueChange({
        originalEvent: event,
        value: value
      });
    } else {
      setFilterValueState(value);
    }
  };

  var filter = function filter(value) {
    setFilterValueState(primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(value) ? value : '');

    _filter();
  };

  var _filter = function _filter() {
    if (!filterChanged.current) {
      return;
    }

    if (primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(filteredValue)) {
      filteredNodes.current = props.value;
    } else {
      filteredNodes.current = [];
      var searchFields = props.filterBy.split(',');
      var filterText = filteredValue.toLocaleLowerCase(props.filterLocale);
      var isStrictMode = props.filterMode === 'strict';

      var _iterator = _createForOfIteratorHelper(props.value),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;

          var copyNode = _objectSpread({}, node);

          var paramsWithoutNode = {
            searchFields: searchFields,
            filterText: filterText,
            isStrictMode: isStrictMode
          };

          if (isStrictMode && (findFilteredNodes(copyNode, paramsWithoutNode) || isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (isFilterMatched(copyNode, paramsWithoutNode) || findFilteredNodes(copyNode, paramsWithoutNode))) {
            filteredNodes.current.push(copyNode);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    filterChanged.current = false;
  };

  var findFilteredNodes = function findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      var matched = false;

      if (node.children) {
        var childNodes = _toConsumableArray(node.children);

        node.children = [];

        var _iterator2 = _createForOfIteratorHelper(childNodes),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var childNode = _step2.value;

            var copyChildNode = _objectSpread({}, childNode);

            if (isFilterMatched(copyChildNode, paramsWithoutNode)) {
              matched = true;
              node.children.push(copyChildNode);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      if (matched) {
        node.expanded = true;
        return true;
      }
    }
  };

  var isFilterMatched = function isFilterMatched(node, _ref) {
    var searchFields = _ref.searchFields,
        filterText = _ref.filterText,
        isStrictMode = _ref.isStrictMode;
    var matched = false;

    var _iterator3 = _createForOfIteratorHelper(searchFields),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var field = _step3.value;
        var fieldValue = String(primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.resolveFieldData(node, field)).toLocaleLowerCase(props.filterLocale);

        if (fieldValue.indexOf(filterText) > -1) {
          matched = true;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (!matched || isStrictMode && !isNodeLeaf(node)) {
      matched = findFilteredNodes(node, {
        searchFields: searchFields,
        filterText: filterText,
        isStrictMode: isStrictMode
      }) || matched;
    }

    return matched;
  };

  var resetFilter = function resetFilter() {
    setFilterValueState('');
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      filter: filter,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });

  var createRootChild = function createRootChild(node, index, last) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UITreeNode, {
      key: node.key || node.label,
      node: node,
      index: index,
      last: last,
      path: String(index),
      disabled: props.disabled,
      selectionMode: props.selectionMode,
      selectionKeys: props.selectionKeys,
      onSelectionChange: props.onSelectionChange,
      metaKeySelection: props.metaKeySelection,
      contextMenuSelectionKey: props.contextMenuSelectionKey,
      onContextMenuSelectionChange: props.onContextMenuSelectionChange,
      onContextMenu: props.onContextMenu,
      propagateSelectionDown: props.propagateSelectionDown,
      propagateSelectionUp: props.propagateSelectionUp,
      onExpand: props.onExpand,
      onCollapse: props.onCollapse,
      onSelect: props.onSelect,
      onUnselect: props.onUnselect,
      expandedKeys: expandedKeys,
      onToggle: onToggle,
      nodeTemplate: props.nodeTemplate,
      togglerTemplate: props.togglerTemplate,
      isNodeLeaf: isNodeLeaf,
      dragdropScope: props.dragdropScope,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd,
      onDrop: onDrop,
      onDropPoint: onDropPoint,
      onClick: props.onNodeClick,
      onDoubleClick: props.onNodeDoubleClick
    });
  };

  var createRootChildren = function createRootChildren() {
    if (props.filter) {
      filterChanged.current = true;

      _filter();
    }

    var value = getRootNode();
    return value.map(function (node, index) {
      return createRootChild(node, index, index === value.length - 1);
    });
  };

  var createModel = function createModel() {
    if (props.value) {
      var rootNodes = createRootChildren();
      var contentClass = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-tree-container', props.contentClassName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", _extends({
        className: contentClass,
        role: "tree",
        style: props.contentStyle
      }, ariaProps), rootNodes);
    }

    return null;
  };

  var createLoader = function createLoader() {
    if (props.loading) {
      var icon = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-tree-loading-icon pi-spin', props.loadingIcon);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-tree-loading-overlay p-component-overlay"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: icon
      }));
    }

    return null;
  };

  var createFilter = function createFilter() {
    if (props.filter) {
      var value = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(filteredValue) ? filteredValue : '';

      var _content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-tree-filter-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        value: value,
        autoComplete: "off",
        className: "p-tree-filter p-inputtext p-component",
        placeholder: props.filterPlaceholder,
        onKeyDown: onFilterInputKeyDown,
        onChange: onFilterInputChange,
        disabled: props.disabled
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-tree-filter-icon pi pi-search"
      }));

      if (props.filterTemplate) {
        var defaultContentOptions = {
          className: 'p-tree-filter-container',
          element: _content,
          filterOptions: filterOptions,
          filterInputKeyDown: onFilterInputKeyDown,
          filterInputChange: onFilterInputChange,
          filterIconClassName: 'p-dropdown-filter-icon pi pi-search',
          props: props
        };
        _content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _content);
    }

    return null;
  };

  var createHeader = function createHeader() {
    if (props.showHeader) {
      var filterElement = createFilter();
      var _content2 = filterElement;

      if (props.header) {
        var defaultContentOptions = {
          filterContainerClassName: 'p-tree-filter-container',
          filterIconClasssName: 'p-tree-filter-icon pi pi-search',
          filterInput: {
            className: 'p-tree-filter p-inputtext p-component',
            onKeyDown: onFilterInputKeyDown,
            onChange: onFilterInputChange
          },
          filterElement: filterElement,
          element: _content2,
          props: props
        };
        _content2 = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(props.header, defaultContentOptions);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-tree-header"
      }, _content2);
    }

    return null;
  };

  var createFooter = function createFooter() {
    var content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(props.footer, props);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-tree-footer"
    }, content);
  };

  var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findDiffKeys(props, Tree.defaultProps);
  var ariaProps = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.reduceKeys(otherProps, primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.ARIA_PROPS);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-tree p-component', props.className, {
    'p-tree-selectable': props.selectionMode,
    'p-tree-loading': props.loading,
    'p-disabled': props.disabled
  });
  var loader = createLoader();
  var content = createModel();
  var header = createHeader();
  var footer = createFooter();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: props.id,
    ref: elementRef,
    className: className,
    style: props.style
  }, otherProps), loader, header, content, footer);
}));
Tree.displayName = 'Tree';
Tree.defaultProps = {
  __TYPE: 'Tree',
  id: null,
  value: null,
  disabled: false,
  selectionMode: null,
  selectionKeys: null,
  onSelectionChange: null,
  contextMenuSelectionKey: null,
  onContextMenuSelectionChange: null,
  expandedKeys: null,
  style: null,
  className: null,
  contentStyle: null,
  contentClassName: null,
  metaKeySelection: true,
  propagateSelectionUp: true,
  propagateSelectionDown: true,
  loading: false,
  loadingIcon: 'pi pi-spinner',
  dragdropScope: null,
  header: null,
  footer: null,
  showHeader: true,
  filter: false,
  filterValue: null,
  filterBy: 'label',
  filterMode: 'lenient',
  filterPlaceholder: null,
  filterLocale: undefined,
  filterTemplate: null,
  nodeTemplate: null,
  togglerTemplate: null,
  onSelect: null,
  onUnselect: null,
  onExpand: null,
  onCollapse: null,
  onToggle: null,
  onDragDrop: null,
  onContextMenu: null,
  onFilterValueChange: null,
  onNodeClick: null,
  onNodeDoubleClick: null
};




/***/ }),

/***/ "./node_modules/primereact/treeselect/treeselect.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/primereact/treeselect/treeselect.esm.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeSelect": function() { return /* binding */ TreeSelect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_overlayservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/overlayservice */ "./node_modules/primereact/overlayservice/overlayservice.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/tree */ "./node_modules/primereact/tree/tree.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_csstransition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/csstransition */ "./node_modules/primereact/csstransition/csstransition.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");










function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

var TreeSelectPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var createElement = function createElement() {
    var wrapperStyle = {
      maxHeight: props.scrollHeight || 'auto'
    };
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)('p-treeselect-panel p-component', props.panelClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_csstransition__WEBPACK_IMPORTED_MODULE_7__.CSSTransition, {
      nodeRef: ref,
      classNames: "p-connected-overlay",
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: props.onEnter,
      onEntering: props.onEntering,
      onEntered: props.onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: ref,
      className: className,
      style: props.panelStyle,
      onClick: props.onClick
    }, props.header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-treeselect-items-wrapper",
      style: wrapperStyle
    }, props.children), props.footer));
  };

  var element = createElement();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_8__.Portal, {
    element: element,
    appendTo: props.appendTo
  });
});
TreeSelectPanel.displayName = 'TreeSelectPanel';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var TreeSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusedState = _React$useState2[0],
      setFocusedState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      overlayVisibleState = _React$useState4[0],
      setOverlayVisibleState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.expandedKeys),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      expandedKeysState = _React$useState6[0],
      setExpandedKeysState = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      filterValueState = _React$useState8[0],
      setFilterValueState = _React$useState8[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var overlayRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var filterInputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var focusInputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var triggerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var selfChange = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var expandedKeys = props.onToggle ? props.expandedKeys : expandedKeysState;
  var filteredValue = props.onFilterValueChange ? props.filterValue : filterValueState;
  var isValueEmpty = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isEmpty(props.value);
  var hasNoOptions = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isEmpty(props.options);
  var isSingleSelectionMode = props.selectionMode === 'single';
  var isCheckboxSelectionMode = props.selectionMode === 'checkbox';
  var filterOptions = {
    filter: function filter(e) {
      return onFilterInputChange(e);
    },
    reset: function reset() {
      return resetFilter();
    }
  };

  var _useOverlayListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useOverlayListener)({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var valid = _ref.valid;
      valid && hide();
    },
    when: overlayVisibleState
  }),
      _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2),
      bindOverlayListener = _useOverlayListener2[0],
      unbindOverlayListener = _useOverlayListener2[1];

  var getLabel = function getLabel() {
    return selectedNodes.length ? selectedNodes.map(function (node) {
      return node.label;
    }).join(', ') : props.placeholder;
  };

  var show = function show() {
    setOverlayVisibleState(true);
  };

  var hide = function hide() {
    setOverlayVisibleState(false);
  };

  var onInputFocus = function onInputFocus() {
    setFocusedState(true);
  };

  var onInputBlur = function onInputBlur() {
    setFocusedState(false);
  };

  var onClick = function onClick(event) {
    if (!props.disabled && (!overlayRef.current || !overlayRef.current.contains(event.target)) && !primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.hasClass(event.target, 'p-treeselect-close')) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(focusInputRef.current);
      overlayVisibleState ? hide() : show();
    }
  };

  var onSelectionChange = function onSelectionChange(event) {
    if (props.onChange) {
      selfChange.current = true;
      props.onChange({
        originalEvent: event.originalEvent,
        value: event.value,
        stopPropagation: function stopPropagation() {},
        preventDefault: function preventDefault() {},
        target: {
          name: props.name,
          id: props.id,
          value: event.value
        }
      });
    }
  };

  var onNodeSelect = function onNodeSelect(node) {
    props.onNodeSelect && props.onNodeSelect(node);
    isSingleSelectionMode && hide();
  };

  var onNodeUnselect = function onNodeUnselect(node) {
    props.onNodeUnselect && props.onNodeUnselect(node);
  };

  var onNodeToggle = function onNodeToggle(e) {
    if (props.onToggle) {
      props.onToggle(e);
    } else {
      setExpandedKeysState(e.value);
    }
  };

  var onFilterValueChange = function onFilterValueChange(e) {
    setFilterValueState(e.value);
  };

  var onOverlayClick = function onOverlayClick(event) {
    primereact_overlayservice__WEBPACK_IMPORTED_MODULE_3__.OverlayService.emit('overlay-click', {
      originalEvent: event,
      target: elementRef.current
    });
  };

  var onInputKeyDown = function onInputKeyDown(event) {
    switch (event.which) {
      //down
      case 40:
        if (!overlayVisibleState && event.altKey) {
          show();
        }

        break;
      //space

      case 32:
        if (!overlayVisibleState) {
          show();
          event.preventDefault();
        }

        break;
      //enter and escape

      case 13:
      case 27:
        if (overlayVisibleState) {
          hide();
          event.preventDefault();
        }

        break;
      //tab

      case 9:
        hide();
        break;
    }
  };

  var onFilterInputKeyDown = function onFilterInputKeyDown(event) {
    //enter
    if (event.which === 13) {
      event.preventDefault();
    }
  };

  var onFilterInputChange = function onFilterInputChange(event) {
    var value = event.target.value;

    if (props.onFilterValueChange) {
      props.onFilterValueChange({
        originalEvent: event,
        value: value
      });
    } else {
      setFilterValueState(value);
    }
  };

  var resetFilter = function resetFilter() {
    setFilterValueState('');
  };

  var onOverlayEnter = function onOverlayEnter() {
    primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ZIndexUtils.set('overlay', overlayRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].autoZIndex, primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].zIndex.overlay);
    alignOverlay();
    scrollInView();
  };

  var onOverlayEntered = function onOverlayEntered() {
    bindOverlayListener();

    if (props.filter && props.filterInputAutoFocus) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(filterInputRef.current, props.filterInputAutoFocus);
    }

    props.onShow && props.onShow();
  };

  var onOverlayExit = function onOverlayExit() {
    unbindOverlayListener();
  };

  var onOverlayExited = function onOverlayExited() {
    if (props.filter && props.resetFilterOnHide) {
      resetFilter();
    }

    primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };

  var alignOverlay = function alignOverlay() {
    primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.alignOverlay(overlayRef.current, triggerRef.current.parentElement, props.appendTo || primereact_api__WEBPACK_IMPORTED_MODULE_1__["default"].appendTo);
  };

  var scrollInView = function scrollInView() {
    var highlightItem = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(overlayRef.current, '.p-treenode-content.p-highlight');

    if (highlightItem && highlightItem.scrollIntoView) {
      highlightItem.scrollIntoView({
        block: 'nearest',
        inline: 'start'
      });
    }
  };

  var findSelectedNodes = function findSelectedNodes(node, keys, selectedNodes) {
    if (node) {
      if (isSelected(node, keys)) {
        selectedNodes.push(node);
        delete keys[node.key];
      }

      if (Object.keys(keys).length && node.children) {
        var _iterator = _createForOfIteratorHelper(node.children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var childNode = _step.value;
            findSelectedNodes(childNode, keys, selectedNodes);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    } else {
      var _iterator2 = _createForOfIteratorHelper(props.options),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _childNode = _step2.value;
          findSelectedNodes(_childNode, keys, selectedNodes);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  };

  var isSelected = function isSelected(node, keys) {
    return isCheckboxSelectionMode ? keys[node.key] && keys[node.key].checked : keys[node.key];
  };

  var updateTreeState = function updateTreeState() {
    var keys = isSingleSelectionMode ? _defineProperty({}, "".concat(props.value), true) : _objectSpread({}, props.value);
    setExpandedKeysState({});

    if (keys && props.options) {
      updateTreeBranchState(null, null, keys);
    }
  };

  var updateTreeBranchState = function updateTreeBranchState(node, path, keys) {
    if (node) {
      if (isSelected(node, keys)) {
        expandPath(path);
        delete keys[node.key];
      }

      if (Object.keys(keys).length && node.children) {
        var _iterator3 = _createForOfIteratorHelper(node.children),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var childNode = _step3.value;
            path.push(node.key);
            updateTreeBranchState(childNode, path, keys);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } else {
      var _iterator4 = _createForOfIteratorHelper(props.options),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _childNode2 = _step4.value;
          updateTreeBranchState(_childNode2, [], keys);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  };

  var expandPath = function expandPath(path) {
    if (path.length > 0) {
      var _expandedKeys = _objectSpread({}, expandedKeysState || {});

      var _iterator5 = _createForOfIteratorHelper(path),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var key = _step5.value;
          _expandedKeys[key] = true;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      setExpandedKeysState(_expandedKeys);
    }
  };

  var getSelectedNodes = function getSelectedNodes() {
    var selectedNodes = [];

    if (primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(props.value) && props.options) {
      var keys = isSingleSelectionMode ? _defineProperty({}, "".concat(props.value), true) : _objectSpread({}, props.value);
      findSelectedNodes(null, keys, selectedNodes);
    }

    return selectedNodes;
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useMountEffect)(function () {
    updateTreeState();
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (overlayVisibleState && props.filter) {
      alignOverlay();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    updateTreeState();
  }, [props.options]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (overlayVisibleState && expandedKeysState) {
      alignOverlay();
    }
  }, [expandedKeysState]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUpdateEffect)(function () {
    if (overlayVisibleState) {
      if (!selfChange.current) {
        updateTreeState();
      }

      selfChange.current = false;
    }
  }, [props.value]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnmountEffect)(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ZIndexUtils.clear(overlayRef.current);
  });

  var createKeyboardHelper = function createKeyboardHelper() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-hidden-accessible"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
      ref: focusInputRef,
      role: "listbox",
      id: props.inputId,
      type: "text",
      readOnly: true,
      "aria-expanded": overlayVisibleState,
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      onKeyDown: onInputKeyDown,
      disabled: props.disabled,
      tabIndex: props.tabIndex
    }, ariaProps)));
  };

  var createLabel = function createLabel() {
    var labelClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)('p-treeselect-label', {
      'p-placeholder': getLabel() === props.placeholder,
      'p-treeselect-label-empty': !props.placeholder && isValueEmpty
    });
    var content = null;

    if (props.valueTemplate) {
      content = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.getJSXElement(props.valueTemplate, selectedNodes, props);
    } else {
      if (props.display === 'comma') {
        content = getLabel() || 'empty';
      } else if (props.display === 'chip') {
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, selectedNodes && selectedNodes.map(function (node, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "p-treeselect-token",
            key: "".concat(node.key, "_").concat(index)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "p-treeselect-token-label"
          }, node.label));
        }), isValueEmpty && (props.placeholder || 'empty'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-treeselect-label-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: labelClassName
    }, content));
  };

  var createDropdownIcon = function createDropdownIcon() {
    var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)('p-treeselect-trigger-icon p-clickable', props.dropdownIcon);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: triggerRef,
      className: "p-treeselect-trigger",
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: iconClassName
    }));
  };

  var createContent = function createContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_tree__WEBPACK_IMPORTED_MODULE_5__.Tree, {
      value: props.options,
      selectionMode: props.selectionMode,
      selectionKeys: props.value,
      metaKeySelection: props.metaKeySelection,
      onSelectionChange: onSelectionChange,
      onSelect: onNodeSelect,
      onUnselect: onNodeUnselect,
      expandedKeys: expandedKeys,
      onToggle: onNodeToggle,
      onExpand: props.onNodeExpand,
      onCollapse: props.onNodeCollapse,
      filter: props.filter,
      filterValue: filteredValue,
      filterBy: props.filterBy,
      filterMode: props.filterMode,
      filterPlaceholder: props.filterPlaceholder,
      filterLocale: props.filterLocale,
      showHeader: false,
      onFilterValueChange: onFilterValueChange
    }), hasNoOptions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-treeselect-empty-message"
    }, props.emptyMessage || (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('emptyMessage')));
  };

  var createFilterElement = function createFilterElement() {
    if (props.filter) {
      var filterValue = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(filteredValue) ? filteredValue : '';
      var filterContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-treeselect-filter-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        ref: filterInputRef,
        type: "text",
        value: filterValue,
        autoComplete: "off",
        className: "p-treeselect-filter p-inputtext p-component",
        placeholder: props.filterPlaceholder,
        onKeyDown: onFilterInputKeyDown,
        onChange: onFilterInputChange,
        disabled: props.disabled
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-treeselect-filter-icon pi pi-search"
      }));

      if (props.filterTemplate) {
        var defaultContentOptions = {
          className: 'p-treeselect-filter-container',
          element: filterContent,
          filterOptions: filterOptions,
          filterInputKeyDown: onFilterInputKeyDown,
          filterInputChange: onFilterInputChange,
          filterIconClassName: 'p-dropdown-filter-icon pi pi-search',
          props: props
        };
        filterContent = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, filterContent);
    }
  };

  var createHeader = function createHeader() {
    var filterElement = createFilterElement();
    var closeElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "p-treeselect-close p-link",
      onClick: hide,
      "aria-label": (0,primereact_api__WEBPACK_IMPORTED_MODULE_1__.localeOption)('close')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "p-treeselect-close-icon pi pi-times",
      "aria-hidden": "true"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, null));
    var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-treeselect-header"
    }, filterElement, closeElement);

    if (props.panelHeaderTemplate) {
      var defaultOptions = {
        className: 'p-treeselect-header',
        filterElement: filterElement,
        closeElement: closeElement,
        closeElementClassName: 'p-treeselect-close p-link',
        closeIconClassName: 'p-treeselect-close-icon pi pi-times',
        onCloseClick: hide,
        element: content,
        props: props
      };
      return primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.getJSXElement(props.panelHeaderTemplate, defaultOptions);
    }

    return content;
  };

  var createFooter = function createFooter() {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.getJSXElement(props.panelFooterTemplate, props);
  };

  var selectedNodes = getSelectedNodes();
  var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findDiffKeys(props, TreeSelect.defaultProps);
  var ariaProps = primereact_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.reduceKeys(otherProps, primereact_utils__WEBPACK_IMPORTED_MODULE_6__.DomHandler.ARIA_PROPS);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)('p-treeselect p-component p-inputwrapper', {
    'p-treeselect-chip': props.display === 'chip',
    'p-disabled': props.disabled,
    'p-focus': focusedState,
    'p-inputwrapper-filled': !isValueEmpty,
    'p-inputwrapper-focus': focusedState || overlayVisibleState
  }, props.className);
  var keyboardHelper = createKeyboardHelper();
  var labelElement = createLabel();
  var dropdownIcon = createDropdownIcon();
  var content = createContent();
  var header = createHeader();
  var footer = createFooter();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: props.id,
    ref: elementRef,
    className: className,
    style: props.style
  }, otherProps, {
    onClick: onClick
  }), keyboardHelper, labelElement, dropdownIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TreeSelectPanel, {
    ref: overlayRef,
    appendTo: props.appendTo,
    panelStyle: props.panelStyle,
    panelClassName: props.panelClassName,
    scrollHeight: props.scrollHeight,
    onClick: onOverlayClick,
    header: header,
    footer: footer,
    transitionOptions: props.transitionOptions,
    "in": overlayVisibleState,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited
  }, content));
}));
TreeSelect.displayName = 'TreeSelect';
TreeSelect.defaultProps = {
  __TYPE: 'TreeSelect',
  id: null,
  value: null,
  name: null,
  style: null,
  className: null,
  disabled: false,
  options: null,
  scrollHeight: '400px',
  placeholder: null,
  tabIndex: null,
  inputId: null,
  ariaLabel: null,
  ariaLabelledBy: null,
  selectionMode: 'single',
  expandedKeys: null,
  panelStyle: null,
  panelClassName: null,
  appendTo: null,
  emptyMessage: null,
  display: 'comma',
  metaKeySelection: true,
  valueTemplate: null,
  panelHeaderTemplate: null,
  panelFooterTemplate: null,
  transitionOptions: null,
  dropdownIcon: 'pi pi-chevron-down',
  filter: false,
  filterTemplate: null,
  filterValue: null,
  filterBy: 'label',
  filterMode: 'lenient',
  filterPlaceholder: null,
  filterLocale: undefined,
  filterInputAutoFocus: true,
  resetFilterOnHide: false,
  onShow: null,
  onHide: null,
  onChange: null,
  onNodeSelect: null,
  onNodeUnselect: null,
  onNodeExpand: null,
  onNodeCollapse: null,
  onFilterValueChange: null
};




/***/ }),

/***/ "./node_modules/primereact/utils/utils.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/primereact/utils/utils.esm.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectedOverlayScrollHandler": function() { return /* binding */ ConnectedOverlayScrollHandler; },
/* harmony export */   "DomHandler": function() { return /* binding */ DomHandler; },
/* harmony export */   "EventBus": function() { return /* binding */ EventBus; },
/* harmony export */   "IconUtils": function() { return /* binding */ IconUtils; },
/* harmony export */   "ObjectUtils": function() { return /* binding */ ObjectUtils; },
/* harmony export */   "UniqueComponentId": function() { return /* binding */ UniqueComponentId; },
/* harmony export */   "ZIndexUtils": function() { return /* binding */ ZIndexUtils; },
/* harmony export */   "classNames": function() { return /* binding */ classNames; },
/* harmony export */   "mask": function() { return /* binding */ mask; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function classNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args) {
    var classes = [];

    for (var i = 0; i < args.length; i++) {
      var className = args[i];
      if (!className) continue;

      var type = _typeof(className);

      if (type === 'string' || type === 'number') {
        classes.push(className);
      } else if (type === 'object') {
        var _classes = Array.isArray(className) ? className : Object.entries(className).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return !!value ? key : null;
        });

        classes = _classes.length ? classes.concat(_classes.filter(function (c) {
          return !!c;
        })) : classes;
      }
    }

    return classes.join(' ');
  }

  return undefined;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DomHandler = /*#__PURE__*/function () {
  function DomHandler() {
    _classCallCheck(this, DomHandler);
  }

  _createClass(DomHandler, null, [{
    key: "innerWidth",
    value:
    /**
     * All data- properties like data-test-id
     */

    /**
     * All ARIA properties like aria-label and focus-target for https://www.npmjs.com/package/@q42/floating-focus-a11y
     */
    function innerWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
      }

      return 0;
    }
  }, {
    key: "width",
    value: function width(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
      }

      return 0;
    }
  }, {
    key: "getBrowserLanguage",
    value: function getBrowserLanguage() {
      return navigator.userLanguage || navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.language || navigator.browserLanguage || navigator.systemLanguage || 'en';
    }
  }, {
    key: "getWindowScrollTop",
    value: function getWindowScrollTop() {
      var doc = document.documentElement;
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
  }, {
    key: "getWindowScrollLeft",
    value: function getWindowScrollLeft() {
      var doc = document.documentElement;
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }
  }, {
    key: "getOuterWidth",
    value: function getOuterWidth(el, margin) {
      if (el) {
        var width = el.offsetWidth || el.getBoundingClientRect().width;

        if (margin) {
          var style = getComputedStyle(el);
          width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }

        return width;
      }

      return 0;
    }
  }, {
    key: "getOuterHeight",
    value: function getOuterHeight(el, margin) {
      if (el) {
        var height = el.offsetHeight || el.getBoundingClientRect().height;

        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
      }

      return 0;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight(el, margin) {
      if (el) {
        var height = el.clientHeight;

        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
      }

      return 0;
    }
  }, {
    key: "getClientWidth",
    value: function getClientWidth(el, margin) {
      if (el) {
        var width = el.clientWidth;

        if (margin) {
          var style = getComputedStyle(el);
          width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }

        return width;
      }

      return 0;
    }
  }, {
    key: "getViewport",
    value: function getViewport() {
      var win = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          w = win.innerWidth || e.clientWidth || g.clientWidth,
          h = win.innerHeight || e.clientHeight || g.clientHeight;
      return {
        width: w,
        height: h
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      if (el) {
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
      }

      return {
        top: 'auto',
        left: 'auto'
      };
    }
  }, {
    key: "index",
    value: function index(element) {
      if (element) {
        var children = element.parentNode.childNodes;
        var num = 0;

        for (var i = 0; i < children.length; i++) {
          if (children[i] === element) return num;
          if (children[i].nodeType === 1) num++;
        }
      }

      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function addMultipleClasses(element, className) {
      if (element && className) {
        if (element.classList) {
          var styles = className.split(' ');

          for (var i = 0; i < styles.length; i++) {
            element.classList.add(styles[i]);
          }
        } else {
          var _styles = className.split(' ');

          for (var _i = 0; _i < _styles.length; _i++) {
            element.className += ' ' + _styles[_i];
          }
        }
      }
    }
  }, {
    key: "removeMultipleClasses",
    value: function removeMultipleClasses(element, className) {
      if (element && className) {
        if (element.classList) {
          var styles = className.split(' ');

          for (var i = 0; i < styles.length; i++) {
            element.classList.remove(styles[i]);
          }
        } else {
          var _styles2 = className.split(' ');

          for (var _i2 = 0; _i2 < _styles2.length; _i2++) {
            element.className = element.className.replace(new RegExp('(^|\\b)' + _styles2[_i2].split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        }
      }
    }
  }, {
    key: "addClass",
    value: function addClass(element, className) {
      if (element && className) {
        if (element.classList) element.classList.add(className);else element.className += ' ' + className;
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, className) {
      if (element && className) {
        if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  }, {
    key: "hasClass",
    value: function hasClass(element, className) {
      if (element) {
        if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
      }

      return false;
    }
  }, {
    key: "find",
    value: function find(element, selector) {
      return element ? Array.from(element.querySelectorAll(selector)) : [];
    }
  }, {
    key: "findSingle",
    value: function findSingle(element, selector) {
      if (element) {
        return element.querySelector(selector);
      }

      return null;
    }
  }, {
    key: "getHeight",
    value: function getHeight(el) {
      if (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        return height;
      }

      return 0;
    }
  }, {
    key: "getWidth",
    value: function getWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        return width;
      }

      return 0;
    }
  }, {
    key: "alignOverlay",
    value: function alignOverlay(overlay, target, appendTo) {
      var calculateMinWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (overlay && target) {
        if (appendTo === 'self') {
          this.relativePosition(overlay, target);
        } else {
          calculateMinWidth && (overlay.style.minWidth = DomHandler.getOuterWidth(target) + 'px');
          this.absolutePosition(overlay, target);
        }
      }
    }
  }, {
    key: "absolutePosition",
    value: function absolutePosition(element, target) {
      if (element) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top, left;

        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
          top = targetOffset.top + windowScrollTop - elementOuterHeight;

          if (top < 0) {
            top = windowScrollTop;
          }

          element.style.transformOrigin = 'bottom';
        } else {
          top = targetOuterHeight + targetOffset.top + windowScrollTop;
          element.style.transformOrigin = 'top';
        }

        if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
      }
    }
  }, {
    key: "relativePosition",
    value: function relativePosition(element, target) {
      if (element) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var top, left;

        if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
          top = -1 * elementDimensions.height;

          if (targetOffset.top + top < 0) {
            top = -1 * targetOffset.top;
          }

          element.style.transformOrigin = 'bottom';
        } else {
          top = targetHeight;
          element.style.transformOrigin = 'top';
        }

        if (elementDimensions.width > viewport.width) {
          // element wider then viewport and cannot fit on screen (align at left side of viewport)
          left = targetOffset.left * -1;
        } else if (targetOffset.left + elementDimensions.width > viewport.width) {
          // element wider then viewport but can be fit on screen (align at right side of viewport)
          left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        } else {
          // element fits on screen (align with target)
          left = 0;
        }

        element.style.top = top + 'px';
        element.style.left = left + 'px';
      }
    }
  }, {
    key: "flipfitCollision",
    value: function flipfitCollision(element, target) {
      var _this = this;

      var my = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left top';
      var at = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'left bottom';
      var callback = arguments.length > 4 ? arguments[4] : undefined;

      if (element && target) {
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var myArr = my.split(' ');
        var atArr = at.split(' ');

        var getPositionValue = function getPositionValue(arr, isOffset) {
          return isOffset ? +arr.substring(arr.search(/(\+|-)/g)) || 0 : arr.substring(0, arr.search(/(\+|-)/g)) || arr;
        };

        var position = {
          my: {
            x: getPositionValue(myArr[0]),
            y: getPositionValue(myArr[1] || myArr[0]),
            offsetX: getPositionValue(myArr[0], true),
            offsetY: getPositionValue(myArr[1] || myArr[0], true)
          },
          at: {
            x: getPositionValue(atArr[0]),
            y: getPositionValue(atArr[1] || atArr[0]),
            offsetX: getPositionValue(atArr[0], true),
            offsetY: getPositionValue(atArr[1] || atArr[0], true)
          }
        };
        var myOffset = {
          left: function left() {
            var totalOffset = position.my.offsetX + position.at.offsetX;
            return totalOffset + targetOffset.left + (position.my.x === 'left' ? 0 : -1 * (position.my.x === 'center' ? _this.getOuterWidth(element) / 2 : _this.getOuterWidth(element)));
          },
          top: function top() {
            var totalOffset = position.my.offsetY + position.at.offsetY;
            return totalOffset + targetOffset.top + (position.my.y === 'top' ? 0 : -1 * (position.my.y === 'center' ? _this.getOuterHeight(element) / 2 : _this.getOuterHeight(element)));
          }
        };
        var alignWithAt = {
          count: {
            x: 0,
            y: 0
          },
          left: function left() {
            var left = myOffset.left();
            var scrollLeft = DomHandler.getWindowScrollLeft();
            element.style.left = left + scrollLeft + 'px';

            if (this.count.x === 2) {
              element.style.left = scrollLeft + 'px';
              this.count.x = 0;
            } else if (left < 0) {
              this.count.x++;
              position.my.x = 'left';
              position.at.x = 'right';
              position.my.offsetX *= -1;
              position.at.offsetX *= -1;
              this.right();
            }
          },
          right: function right() {
            var left = myOffset.left() + DomHandler.getOuterWidth(target);
            var scrollLeft = DomHandler.getWindowScrollLeft();
            element.style.left = left + scrollLeft + 'px';

            if (this.count.x === 2) {
              element.style.left = viewport.width - DomHandler.getOuterWidth(element) + scrollLeft + 'px';
              this.count.x = 0;
            } else if (left + DomHandler.getOuterWidth(element) > viewport.width) {
              this.count.x++;
              position.my.x = 'right';
              position.at.x = 'left';
              position.my.offsetX *= -1;
              position.at.offsetX *= -1;
              this.left();
            }
          },
          top: function top() {
            var top = myOffset.top();
            var scrollTop = DomHandler.getWindowScrollTop();
            element.style.top = top + scrollTop + 'px';

            if (this.count.y === 2) {
              element.style.left = scrollTop + 'px';
              this.count.y = 0;
            } else if (top < 0) {
              this.count.y++;
              position.my.y = 'top';
              position.at.y = 'bottom';
              position.my.offsetY *= -1;
              position.at.offsetY *= -1;
              this.bottom();
            }
          },
          bottom: function bottom() {
            var top = myOffset.top() + DomHandler.getOuterHeight(target);
            var scrollTop = DomHandler.getWindowScrollTop();
            element.style.top = top + scrollTop + 'px';

            if (this.count.y === 2) {
              element.style.left = viewport.height - DomHandler.getOuterHeight(element) + scrollTop + 'px';
              this.count.y = 0;
            } else if (top + DomHandler.getOuterHeight(target) > viewport.height) {
              this.count.y++;
              position.my.y = 'bottom';
              position.at.y = 'top';
              position.my.offsetY *= -1;
              position.at.offsetY *= -1;
              this.top();
            }
          },
          center: function center(axis) {
            if (axis === 'y') {
              var top = myOffset.top() + DomHandler.getOuterHeight(target) / 2;
              element.style.top = top + DomHandler.getWindowScrollTop() + 'px';

              if (top < 0) {
                this.bottom();
              } else if (top + DomHandler.getOuterHeight(target) > viewport.height) {
                this.top();
              }
            } else {
              var left = myOffset.left() + DomHandler.getOuterWidth(target) / 2;
              element.style.left = left + DomHandler.getWindowScrollLeft() + 'px';

              if (left < 0) {
                this.left();
              } else if (left + DomHandler.getOuterWidth(element) > viewport.width) {
                this.right();
              }
            }
          }
        };
        alignWithAt[position.at.x]('x');
        alignWithAt[position.at.y]('y');

        if (this.isFunction(callback)) {
          callback(position);
        }
      }
    }
  }, {
    key: "findCollisionPosition",
    value: function findCollisionPosition(position) {
      if (position) {
        var isAxisY = position === 'top' || position === 'bottom';
        var myXPosition = position === 'left' ? 'right' : 'left';
        var myYPosition = position === 'top' ? 'bottom' : 'top';

        if (isAxisY) {
          return {
            axis: 'y',
            my: "center ".concat(myYPosition),
            at: "center ".concat(position)
          };
        }

        return {
          axis: 'x',
          my: "".concat(myXPosition, " center"),
          at: "".concat(position, " center")
        };
      }
    }
  }, {
    key: "getParents",
    value: function getParents(element) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    }
  }, {
    key: "getScrollableParents",
    value: function getScrollableParents(element) {
      var scrollableParents = [];

      if (element) {
        var parents = this.getParents(element);
        var overflowRegex = /(auto|scroll)/;

        var overflowCheck = function overflowCheck(node) {
          var styleDeclaration = node ? getComputedStyle(node) : null;
          return styleDeclaration && (overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY')));
        };

        var _iterator = _createForOfIteratorHelper(parents),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var parent = _step.value;
            var scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

            if (scrollSelectors) {
              var selectors = scrollSelectors.split(',');

              var _iterator2 = _createForOfIteratorHelper(selectors),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var selector = _step2.value;
                  var el = this.findSingle(parent, selector);

                  if (el && overflowCheck(el)) {
                    scrollableParents.push(el);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (parent.nodeType !== 9 && overflowCheck(parent)) {
              scrollableParents.push(parent);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return scrollableParents;
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function getHiddenElementOuterHeight(element) {
      if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementHeight;
      }

      return 0;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function getHiddenElementOuterWidth(element) {
      if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementWidth;
      }

      return 0;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function getHiddenElementDimensions(element) {
      var dimensions = {};

      if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
      }

      return dimensions;
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(element, duration) {
      if (element) {
        element.style.opacity = 0;
        var last = +new Date();
        var opacity = 0;

        var tick = function tick() {
          opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
          element.style.opacity = opacity;
          last = +new Date();

          if (+opacity < 1) {
            window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
          }
        };

        tick();
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(element, duration) {
      if (element) {
        var opacity = 1,
            interval = 50,
            gap = interval / duration;
        var fading = setInterval(function () {
          opacity -= gap;

          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
          }

          element.style.opacity = opacity;
        }, interval);
      }
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return navigator.userAgent;
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    }
  }, {
    key: "isTouchDevice",
    value: function isTouchDevice() {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
  }, {
    key: "isFunction",
    value: function isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
  }, {
    key: "appendChild",
    value: function appendChild(element, target) {
      if (this.isElement(target)) target.appendChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);else throw new Error('Cannot append ' + target + ' to ' + element);
    }
  }, {
    key: "removeChild",
    value: function removeChild(element, target) {
      if (this.isElement(target)) target.removeChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);else throw new Error('Cannot remove ' + element + ' from ' + target);
    }
  }, {
    key: "isElement",
    value: function isElement(obj) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && _typeof(obj) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(container, item) {
      var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
      var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
      var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
      var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
      var containerRect = container.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
      var scroll = container.scrollTop;
      var elementHeight = container.clientHeight;
      var itemHeight = this.getOuterHeight(item);

      if (offset < 0) {
        container.scrollTop = scroll + offset;
      } else if (offset + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
      }
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window.getSelection().removeAllRanges();
        }
      } else if (document['selection'] && document['selection'].empty) {
        try {
          document['selection'].empty();
        } catch (error) {//ignore IE bug
        }
      }
    }
  }, {
    key: "calculateScrollbarWidth",
    value: function calculateScrollbarWidth(el) {
      if (el) {
        var style = getComputedStyle(el);
        return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
      } else {
        if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;
        var scrollDiv = document.createElement('div');
        scrollDiv.className = 'p-scrollbar-measure';
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarWidth;
        return scrollbarWidth;
      }
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      if (!this.browser) {
        var matched = this.resolveUserAgent();
        this.browser = {};

        if (matched.browser) {
          this.browser[matched.browser] = true;
          this.browser['version'] = matched.version;
        }

        if (this.browser['chrome']) {
          this.browser['webkit'] = true;
        } else if (this.browser['webkit']) {
          this.browser['safari'] = true;
        }
      }

      return this.browser;
    }
  }, {
    key: "resolveUserAgent",
    value: function resolveUserAgent() {
      var ua = navigator.userAgent.toLowerCase();
      var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || '',
        version: match[2] || '0'
      };
    }
  }, {
    key: "isVisible",
    value: function isVisible(element) {
      // https://stackoverflow.com/a/59096915/502366 (in future use IntersectionObserver)
      return element && (element.clientHeight !== 0 || element.getClientRects().length !== 0 || getComputedStyle(element).display !== 'none');
    }
  }, {
    key: "isExist",
    value: function isExist(element) {
      return element !== null && typeof element !== 'undefined' && element.nodeName && element.parentNode;
    }
  }, {
    key: "hasDOM",
    value: function hasDOM() {
      return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    }
  }, {
    key: "getFocusableElements",
    value: function getFocusableElements(element) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var focusableElements = DomHandler.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])".concat(selector, ",\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector));
      var visibleFocusableElements = [];

      var _iterator3 = _createForOfIteratorHelper(focusableElements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var focusableElement = _step3.value;
          if (getComputedStyle(focusableElement).display !== 'none' && getComputedStyle(focusableElement).visibility !== 'hidden') visibleFocusableElements.push(focusableElement);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return visibleFocusableElements;
    }
  }, {
    key: "getFirstFocusableElement",
    value: function getFirstFocusableElement(element, selector) {
      var focusableElements = DomHandler.getFocusableElements(element, selector);
      return focusableElements.length > 0 ? focusableElements[0] : null;
    }
  }, {
    key: "getLastFocusableElement",
    value: function getLastFocusableElement(element, selector) {
      var focusableElements = DomHandler.getFocusableElements(element, selector);
      return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
    }
    /**
     * Focus an input element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     */

  }, {
    key: "focus",
    value: function focus(el, scrollTo) {
      var preventScroll = scrollTo === undefined ? true : !scrollTo;
      el && document.activeElement !== el && el.focus({
        preventScroll: preventScroll
      });
    }
  }, {
    key: "getCursorOffset",
    value: function getCursorOffset(el, prevText, nextText, currentText) {
      if (el) {
        var style = getComputedStyle(el);
        var ghostDiv = document.createElement('div');
        ghostDiv.style.position = 'absolute';
        ghostDiv.style.top = '0px';
        ghostDiv.style.left = '0px';
        ghostDiv.style.visibility = 'hidden';
        ghostDiv.style.pointerEvents = 'none';
        ghostDiv.style.overflow = style.overflow;
        ghostDiv.style.width = style.width;
        ghostDiv.style.height = style.height;
        ghostDiv.style.padding = style.padding;
        ghostDiv.style.border = style.border;
        ghostDiv.style.overflowWrap = style.overflowWrap;
        ghostDiv.style.whiteSpace = style.whiteSpace;
        ghostDiv.style.lineHeight = style.lineHeight;
        ghostDiv.innerHTML = prevText.replace(/\r\n|\r|\n/g, '<br />');
        var ghostSpan = document.createElement('span');
        ghostSpan.textContent = currentText;
        ghostDiv.appendChild(ghostSpan);
        var text = document.createTextNode(nextText);
        ghostDiv.appendChild(text);
        document.body.appendChild(ghostDiv);
        var offsetLeft = ghostSpan.offsetLeft,
            offsetTop = ghostSpan.offsetTop,
            clientHeight = ghostSpan.clientHeight;
        document.body.removeChild(ghostDiv);
        return {
          left: Math.abs(offsetLeft - el.scrollLeft),
          top: Math.abs(offsetTop - el.scrollTop) + clientHeight
        };
      }

      return {
        top: 'auto',
        left: 'auto'
      };
    }
  }, {
    key: "invokeElementMethod",
    value: function invokeElementMethod(element, methodName, args) {
      element[methodName].apply(element, args);
    }
  }, {
    key: "isClickable",
    value: function isClickable(element) {
      var targetNode = element.nodeName;
      var parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === 'INPUT' || targetNode === 'TEXTAREA' || targetNode === 'BUTTON' || targetNode === 'A' || parentNode === 'INPUT' || parentNode === 'TEXTAREA' || parentNode === 'BUTTON' || parentNode === 'A' || this.hasClass(element, 'p-button') || this.hasClass(element.parentElement, 'p-button') || this.hasClass(element.parentElement, 'p-checkbox') || this.hasClass(element.parentElement, 'p-radiobutton');
    }
  }, {
    key: "applyStyle",
    value: function applyStyle(element, style) {
      if (typeof style === 'string') {
        element.style.cssText = this.style;
      } else {
        for (var prop in this.style) {
          element.style[prop] = style[prop];
        }
      }
    }
  }, {
    key: "exportCSV",
    value: function exportCSV(csv, filename) {
      var blob = new Blob([csv], {
        type: 'application/csv;charset=utf-8;'
      });

      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename + '.csv');
      } else {
        var isDownloaded = DomHandler.saveAs({
          name: filename + '.csv',
          src: URL.createObjectURL(blob)
        });

        if (!isDownloaded) {
          csv = 'data:text/csv;charset=utf-8,' + csv;
          window.open(encodeURI(csv));
        }
      }
    }
  }, {
    key: "saveAs",
    value: function saveAs(file) {
      if (file) {
        var link = document.createElement('a');

        if (link.download !== undefined) {
          var name = file.name,
              src = file.src;
          link.setAttribute('href', src);
          link.setAttribute('download', name);
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return true;
        }
      }

      return false;
    }
  }, {
    key: "createInlineStyle",
    value: function createInlineStyle(nonce) {
      var styleElement = document.createElement('style');

      try {
        if (!nonce) {
          nonce = process.env.REACT_APP_CSS_NONCE;
        }
      } catch (error) {// NOOP
      }

      nonce && styleElement.setAttribute('nonce', nonce);
      document.head.appendChild(styleElement);
      return styleElement;
    }
  }, {
    key: "removeInlineStyle",
    value: function removeInlineStyle(styleElement) {
      if (this.isExist(styleElement)) {
        try {
          document.head.removeChild(styleElement);
        } catch (error) {// style element may have already been removed in a fast refresh
        }

        styleElement = null;
      }

      return styleElement;
    }
  }, {
    key: "getTargetElement",
    value: function getTargetElement(target) {
      if (!target) return null;

      if (target === 'document') {
        return document;
      } else if (target === 'window') {
        return window;
      } else if (_typeof(target) === 'object' && target.hasOwnProperty('current')) {
        return this.isExist(target.current) ? target.current : null;
      } else {
        var isFunction = function isFunction(obj) {
          return !!(obj && obj.constructor && obj.call && obj.apply);
        };

        var element = isFunction(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
      }
    }
    /**
     * Get the attribute names for an element and sorts them alpha for comparison
     */

  }, {
    key: "getAttributeNames",
    value: function getAttributeNames(node) {
      var index, rv, attrs;
      rv = [];
      attrs = node.attributes;

      for (index = 0; index < attrs.length; ++index) {
        rv.push(attrs[index].nodeName);
      }

      rv.sort();
      return rv;
    }
    /**
     * Compare two elements for equality.  Even will compare if the style element
     * is out of order for example:
     *
     * elem1 = style="color: red; font-size: 28px"
     * elem2 = style="font-size: 28px; color: red"
     */

  }, {
    key: "isEqualElement",
    value: function isEqualElement(elm1, elm2) {
      var attrs1, attrs2, name, node1, node2; // Compare attributes without order sensitivity

      attrs1 = DomHandler.getAttributeNames(elm1);
      attrs2 = DomHandler.getAttributeNames(elm2);

      if (attrs1.join(',') !== attrs2.join(',')) {
        // console.log("Found nodes with different sets of attributes; not equiv");
        return false;
      } // ...and values
      // unless you want to compare DOM0 event handlers
      // (onclick="...")


      for (var index = 0; index < attrs1.length; ++index) {
        name = attrs1[index];

        if (name === 'style') {
          var astyle = elm1.style;
          var bstyle = elm2.style;
          var rexDigitsOnly = /^\d+$/;

          for (var _i3 = 0, _Object$keys = Object.keys(astyle); _i3 < _Object$keys.length; _i3++) {
            var key = _Object$keys[_i3];

            if (!rexDigitsOnly.test(key) && astyle[key] !== bstyle[key]) {
              // Not equivalent, stop
              //console.log("Found nodes with mis-matched values for attribute '" + name + "'; not equiv");
              return false;
            }
          }
        } else {
          if (elm1.getAttribute(name) !== elm2.getAttribute(name)) {
            // console.log("Found nodes with mis-matched values for attribute '" + name + "'; not equiv");
            return false;
          }
        }
      } // Walk the children


      for (node1 = elm1.firstChild, node2 = elm2.firstChild; node1 && node2; node1 = node1.nextSibling, node2 = node2.nextSibling) {
        if (node1.nodeType !== node2.nodeType) {
          // display("Found nodes of different types; not equiv");
          return false;
        }

        if (node1.nodeType === 1) {
          // Element
          if (!DomHandler.isEqualElement(node1, node2)) {
            return false;
          }
        } else if (node1.nodeValue !== node2.nodeValue) {
          // console.log("Found nodes with mis-matched nodeValues; not equiv");
          return false;
        }
      }

      if (node1 || node2) {
        // One of the elements had more nodes than the other
        // console.log("Found more children of one element than the other; not equivalent");
        return false;
      } // Seem the same


      return true;
    }
  }]);

  return DomHandler;
}();

_defineProperty(DomHandler, "DATA_PROPS", ['data-']);

_defineProperty(DomHandler, "ARIA_PROPS", ['aria', 'focus-target']);

var ConnectedOverlayScrollHandler = /*#__PURE__*/function () {
  function ConnectedOverlayScrollHandler(element) {
    var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    _classCallCheck(this, ConnectedOverlayScrollHandler);

    this.element = element;
    this.listener = listener;
  }

  _createClass(ConnectedOverlayScrollHandler, [{
    key: "bindScrollListener",
    value: function bindScrollListener() {
      this.scrollableParents = DomHandler.getScrollableParents(this.element);

      for (var i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].addEventListener('scroll', this.listener);
      }
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollableParents) {
        for (var i = 0; i < this.scrollableParents.length; i++) {
          this.scrollableParents[i].removeEventListener('scroll', this.listener);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindScrollListener();
      this.element = null;
      this.listener = null;
      this.scrollableParents = null;
    }
  }]);

  return ConnectedOverlayScrollHandler;
}();

function EventBus() {
  var allHandlers = new Map();
  return {
    on: function on(type, handler) {
      var handlers = allHandlers.get(type);
      if (!handlers) handlers = [handler];else handlers.push(handler);
      allHandlers.set(type, handlers);
    },
    off: function off(type, handler) {
      var handlers = allHandlers.get(type);
      handlers && handlers.splice(handlers.indexOf(handler) >>> 0, 1);
    },
    emit: function emit(type, evt) {
      var handlers = allHandlers.get(type);
      handlers && handlers.slice().forEach(function (handler) {
        return handler(evt);
      });
    }
  };
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function mask(el, options) {
  var defaultOptions = {
    mask: null,
    slotChar: '_',
    autoClear: true,
    unmask: false,
    readOnly: false,
    onComplete: null,
    onChange: null,
    onFocus: null,
    onBlur: null
  };
  options = _objectSpread$1(_objectSpread$1({}, defaultOptions), options);
  var tests, partialPosition, len, firstNonMaskPos, defs, androidChrome, lastRequiredNonMaskPos, oldVal, focusText, caretTimeoutId, buffer, defaultBuffer;

  var caret = function caret(first, last) {
    var range, begin, end;

    if (!el.offsetParent || el !== document.activeElement) {
      return;
    }

    if (typeof first === 'number') {
      begin = first;
      end = typeof last === 'number' ? last : begin;

      if (el.setSelectionRange) {
        el.setSelectionRange(begin, end);
      } else if (el['createTextRange']) {
        range = el['createTextRange']();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', begin);
        range.select();
      }
    } else {
      if (el.setSelectionRange) {
        begin = el.selectionStart;
        end = el.selectionEnd;
      } else if (document['selection'] && document['selection'].createRange) {
        range = document['selection'].createRange();
        begin = 0 - range.duplicate().moveStart('character', -100000);
        end = begin + range.text.length;
      }

      return {
        begin: begin,
        end: end
      };
    }
  };

  var isCompleted = function isCompleted() {
    for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
      if (tests[i] && buffer[i] === getPlaceholder(i)) {
        return false;
      }
    }

    return true;
  };

  var getPlaceholder = function getPlaceholder(i) {
    if (i < options.slotChar.length) {
      return options.slotChar.charAt(i);
    }

    return options.slotChar.charAt(0);
  };

  var getValue = function getValue() {
    return options.unmask ? getUnmaskedValue() : el && el.value;
  };

  var seekNext = function seekNext(pos) {
    while (++pos < len && !tests[pos]) {
    }

    return pos;
  };

  var seekPrev = function seekPrev(pos) {
    while (--pos >= 0 && !tests[pos]) {
    }

    return pos;
  };

  var shiftL = function shiftL(begin, end) {
    var i, j;

    if (begin < 0) {
      return;
    }

    for (i = begin, j = seekNext(end); i < len; i++) {
      if (tests[i]) {
        if (j < len && tests[i].test(buffer[j])) {
          buffer[i] = buffer[j];
          buffer[j] = getPlaceholder(j);
        } else {
          break;
        }

        j = seekNext(j);
      }
    }

    writeBuffer();
    caret(Math.max(firstNonMaskPos, begin));
  };

  var shiftR = function shiftR(pos) {
    var i, c, j, t;

    for (i = pos, c = getPlaceholder(pos); i < len; i++) {
      if (tests[i]) {
        j = seekNext(i);
        t = buffer[i];
        buffer[i] = c;

        if (j < len && tests[j].test(t)) {
          c = t;
        } else {
          break;
        }
      }
    }
  };

  var handleAndroidInput = function handleAndroidInput(e) {
    var curVal = el.value;
    var pos = caret();

    if (oldVal && oldVal.length && oldVal.length > curVal.length) {
      // a deletion or backspace happened
      checkVal(true);

      while (pos.begin > 0 && !tests[pos.begin - 1]) {
        pos.begin--;
      }

      if (pos.begin === 0) {
        while (pos.begin < firstNonMaskPos && !tests[pos.begin]) {
          pos.begin++;
        }
      }

      caret(pos.begin, pos.begin);
    } else {
      checkVal(true);

      while (pos.begin < len && !tests[pos.begin]) {
        pos.begin++;
      }

      caret(pos.begin, pos.begin);
    }

    if (options.onComplete && isCompleted()) {
      options.onComplete({
        originalEvent: e,
        value: getValue()
      });
    }
  };

  var onBlur = function onBlur(e) {
    checkVal();
    options.onBlur && options.onBlur(e);
    updateModel(e);

    if (el.value !== focusText) {
      var event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, false);
      el.dispatchEvent(event);
    }
  };

  var onKeyDown = function onKeyDown(e) {
    if (options.readOnly) {
      return;
    }

    var k = e.which || e.keyCode,
        pos,
        begin,
        end;
    var iPhone = /iphone/i.test(DomHandler.getUserAgent());
    oldVal = el.value; //backspace, delete, and escape get special treatment

    if (k === 8 || k === 46 || iPhone && k === 127) {
      pos = caret();
      begin = pos.begin;
      end = pos.end;

      if (end - begin === 0) {
        begin = k !== 46 ? seekPrev(begin) : end = seekNext(begin - 1);
        end = k === 46 ? seekNext(end) : end;
      }

      clearBuffer(begin, end);
      shiftL(begin, end - 1);
      updateModel(e);
      e.preventDefault();
    } else if (k === 13) {
      // enter
      onBlur(e);
      updateModel(e);
    } else if (k === 27) {
      // escape
      el.value = focusText;
      caret(0, checkVal());
      updateModel(e);
      e.preventDefault();
    }
  };

  var onKeyPress = function onKeyPress(e) {
    if (options.readOnly) {
      return;
    }

    var k = e.which || e.keyCode,
        pos = caret(),
        p,
        c,
        next,
        completed;

    if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
      //Ignore
      return;
    } else if (k && k !== 13) {
      if (pos.end - pos.begin !== 0) {
        clearBuffer(pos.begin, pos.end);
        shiftL(pos.begin, pos.end - 1);
      }

      p = seekNext(pos.begin - 1);

      if (p < len) {
        c = String.fromCharCode(k);

        if (tests[p].test(c)) {
          shiftR(p);
          buffer[p] = c;
          writeBuffer();
          next = seekNext(p);

          if (/android/i.test(DomHandler.getUserAgent())) {
            //Path for CSP Violation on FireFox OS 1.1
            var proxy = function proxy() {
              caret(next);
            };

            setTimeout(proxy, 0);
          } else {
            caret(next);
          }

          if (pos.begin <= lastRequiredNonMaskPos) {
            completed = isCompleted();
          }
        }
      }

      e.preventDefault();
    }

    updateModel(e);

    if (options.onComplete && completed) {
      options.onComplete({
        originalEvent: e,
        value: getValue()
      });
    }
  };

  var clearBuffer = function clearBuffer(start, end) {
    var i;

    for (i = start; i < end && i < len; i++) {
      if (tests[i]) {
        buffer[i] = getPlaceholder(i);
      }
    }
  };

  var writeBuffer = function writeBuffer() {
    el.value = buffer.join('');
  };

  var checkVal = function checkVal(allow) {
    //try to place characters where they belong
    var test = el.value,
        lastMatch = -1,
        i,
        c,
        pos;

    for (i = 0, pos = 0; i < len; i++) {
      if (tests[i]) {
        buffer[i] = getPlaceholder(i);

        while (pos++ < test.length) {
          c = test.charAt(pos - 1);

          if (tests[i].test(c)) {
            buffer[i] = c;
            lastMatch = i;
            break;
          }
        }

        if (pos > test.length) {
          clearBuffer(i + 1, len);
          break;
        }
      } else {
        if (buffer[i] === test.charAt(pos)) {
          pos++;
        }

        if (i < partialPosition) {
          lastMatch = i;
        }
      }
    }

    if (allow) {
      writeBuffer();
    } else if (lastMatch + 1 < partialPosition) {
      if (options.autoClear || buffer.join('') === defaultBuffer) {
        // Invalid value. Remove it and replace it with the
        // mask, which is the default behavior.
        if (el.value) el.value = '';
        clearBuffer(0, len);
      } else {
        // Invalid value, but we opt to show the value to the
        // user and allow them to correct their mistake.
        writeBuffer();
      }
    } else {
      writeBuffer();
      el.value = el.value.substring(0, lastMatch + 1);
    }

    return partialPosition ? i : firstNonMaskPos;
  };

  var onFocus = function onFocus(e) {
    if (options.readOnly) {
      return;
    }

    clearTimeout(caretTimeoutId);
    var pos;
    focusText = el.value;
    pos = checkVal();
    caretTimeoutId = setTimeout(function () {
      if (el !== document.activeElement) {
        return;
      }

      writeBuffer();

      if (pos === options.mask.replace('?', '').length) {
        caret(0, pos);
      } else {
        caret(pos);
      }
    }, 10);

    if (options.onFocus) {
      options.onFocus(e);
    }
  };

  var onInput = function onInput(event) {
    if (androidChrome) handleAndroidInput(event);else handleInputChange(event);
  };

  var handleInputChange = function handleInputChange(e) {
    if (options.readOnly) {
      return;
    }

    var pos = checkVal(true);
    caret(pos);
    updateModel(e);

    if (options.onComplete && isCompleted()) {
      options.onComplete({
        originalEvent: e,
        value: getValue()
      });
    }
  };

  var getUnmaskedValue = function getUnmaskedValue() {
    var unmaskedBuffer = [];

    for (var i = 0; i < buffer.length; i++) {
      var c = buffer[i];

      if (tests[i] && c !== getPlaceholder(i)) {
        unmaskedBuffer.push(c);
      }
    }

    return unmaskedBuffer.join('');
  };

  var updateModel = function updateModel(e) {
    if (options.onChange) {
      var val = getValue().replace(options.slotChar, '');
      options.onChange({
        originalEvent: e,
        value: defaultBuffer !== val ? val : ''
      });
    }
  };

  var bindEvents = function bindEvents() {
    el.addEventListener('focus', onFocus);
    el.addEventListener('blur', onBlur);
    el.addEventListener('keydown', onKeyDown);
    el.addEventListener('keypress', onKeyPress);
    el.addEventListener('input', onInput);
    el.addEventListener('paste', handleInputChange);
  };

  var unbindEvents = function unbindEvents() {
    el.removeEventListener('focus', onFocus);
    el.removeEventListener('blur', onBlur);
    el.removeEventListener('keydown', onKeyDown);
    el.removeEventListener('keypress', onKeyPress);
    el.removeEventListener('input', onInput);
    el.removeEventListener('paste', handleInputChange);
  };

  var init = function init() {
    tests = [];
    partialPosition = options.mask.length;
    len = options.mask.length;
    firstNonMaskPos = null;
    defs = {
      9: '[0-9]',
      a: '[A-Za-z]',
      '*': '[A-Za-z0-9]'
    };
    var ua = DomHandler.getUserAgent();
    androidChrome = /chrome/i.test(ua) && /android/i.test(ua);
    var maskTokens = options.mask.split('');

    for (var i = 0; i < maskTokens.length; i++) {
      var c = maskTokens[i];

      if (c === '?') {
        len--;
        partialPosition = i;
      } else if (defs[c]) {
        tests.push(new RegExp(defs[c]));

        if (firstNonMaskPos === null) {
          firstNonMaskPos = tests.length - 1;
        }

        if (i < partialPosition) {
          lastRequiredNonMaskPos = tests.length - 1;
        }
      } else {
        tests.push(null);
      }
    }

    buffer = [];

    for (var _i = 0; _i < maskTokens.length; _i++) {
      var _c = maskTokens[_i];

      if (_c !== '?') {
        if (defs[_c]) buffer.push(getPlaceholder(_i));else buffer.push(_c);
      }
    }

    defaultBuffer = buffer.join('');
  };

  if (el && options.mask) {
    init();
    bindEvents();
  }

  return {
    init: init,
    bindEvents: bindEvents,
    unbindEvents: unbindEvents,
    updateModel: updateModel,
    getValue: getValue
  };
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

var ObjectUtils = /*#__PURE__*/function () {
  function ObjectUtils() {
    _classCallCheck(this, ObjectUtils);
  }

  _createClass(ObjectUtils, null, [{
    key: "equals",
    value: function equals(obj1, obj2, field) {
      if (field && obj1 && _typeof(obj1) === 'object' && obj2 && _typeof(obj2) === 'object') return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
    }
  }, {
    key: "deepEquals",
    value: function deepEquals(a, b) {
      if (a === b) return true;

      if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
        var arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i,
            length,
            key;

        if (arrA && arrB) {
          length = a.length;
          if (length !== b.length) return false;

          for (i = length; i-- !== 0;) {
            if (!this.deepEquals(a[i], b[i])) return false;
          }

          return true;
        }

        if (arrA !== arrB) return false;
        var dateA = a instanceof Date,
            dateB = b instanceof Date;
        if (dateA !== dateB) return false;
        if (dateA && dateB) return a.getTime() === b.getTime();
        var regexpA = a instanceof RegExp,
            regexpB = b instanceof RegExp;
        if (regexpA !== regexpB) return false;
        if (regexpA && regexpB) return a.toString() === b.toString();
        var keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;

        for (i = length; i-- !== 0;) {
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        }

        for (i = length; i-- !== 0;) {
          key = keys[i];
          if (!this.deepEquals(a[key], b[key])) return false;
        }

        return true;
      }
      /*eslint no-self-compare: "off"*/


      return a !== a && b !== b;
    }
  }, {
    key: "resolveFieldData",
    value: function resolveFieldData(data, field) {
      if (data && Object.keys(data).length && field) {
        if (this.isFunction(field)) {
          return field(data);
        } else if (field.indexOf('.') === -1) {
          return data[field];
        } else {
          var fields = field.split('.');
          var value = data;

          for (var i = 0, len = fields.length; i < len; ++i) {
            if (value == null) {
              return null;
            }

            value = value[fields[i]];
          }

          return value;
        }
      } else {
        return null;
      }
    }
  }, {
    key: "isFunction",
    value: function isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
  }, {
    key: "findDiffKeys",
    value: function findDiffKeys(obj1, obj2) {
      if (!obj1 || !obj2) {
        return {};
      }

      return Object.keys(obj1).filter(function (key) {
        return !obj2.hasOwnProperty(key);
      }).reduce(function (result, current) {
        result[current] = obj1[current];
        return result;
      }, {});
    }
    /**
     * Removes keys from a JSON object that start with a string such as "data" to get all "data-id" type properties.
     *
     * @param {any} obj the JSON object to reduce
     * @param {string[]} startsWiths the string(s) to check if the property starts with this key
     * @returns the JSON object containing only the key/values that match the startsWith string
     */

  }, {
    key: "reduceKeys",
    value: function reduceKeys(obj, startsWiths) {
      var result = {};

      if (!obj || !startsWiths || startsWiths.length === 0) {
        return result;
      }

      Object.keys(obj).filter(function (key) {
        return startsWiths.some(function (value) {
          return key.startsWith(value);
        });
      }).forEach(function (key) {
        result[key] = obj[key];
        delete obj[key];
      });
      return result;
    }
  }, {
    key: "reorderArray",
    value: function reorderArray(value, from, to) {
      var target;

      if (value && from !== to) {
        if (to >= value.length) {
          target = to - value.length;

          while (target-- + 1) {
            value.push(undefined);
          }
        }

        value.splice(to, 0, value.splice(from, 1)[0]);
      }
    }
  }, {
    key: "findIndexInList",
    value: function findIndexInList(value, list, dataKey) {
      var _this = this;

      if (list) {
        return dataKey ? list.findIndex(function (item) {
          return _this.equals(item, value, dataKey);
        }) : list.findIndex(function (item) {
          return item === value;
        });
      }

      return -1;
    }
  }, {
    key: "getJSXElement",
    value: function getJSXElement(obj) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
    }
  }, {
    key: "getPropValue",
    value: function getPropValue(obj) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      var methodParams = params;

      if (params && params.length === 1) {
        methodParams = params[0];
      }

      return this.isFunction(obj) ? obj.apply(void 0, _toConsumableArray(methodParams)) : obj;
    }
  }, {
    key: "getRefElement",
    value: function getRefElement(ref) {
      if (ref) {
        return _typeof(ref) === 'object' && ref.hasOwnProperty('current') ? ref.current : ref;
      }

      return null;
    }
  }, {
    key: "combinedRefs",
    value: function combinedRefs(innerRef, forwardRef) {
      if (innerRef && forwardRef) {
        if (typeof forwardRef === 'function') {
          forwardRef(innerRef.current);
        } else {
          forwardRef.current = innerRef.current;
        }
      }
    }
  }, {
    key: "removeAccents",
    value: function removeAccents(str) {
      if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/[\xC6]/g, 'AE').replace(/[\xC7]/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/[\xD0]/g, 'D').replace(/[\xD1]/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/[\xDD]/g, 'Y').replace(/[\xDE]/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/[\xE6]/g, 'ae').replace(/[\xE7]/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/[\xF1]/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/[\xFE]/g, 'p').replace(/[\xFD\xFF]/g, 'y');
      }

      return str;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof(value) === 'object' && Object.keys(value).length === 0;
    }
  }, {
    key: "isNotEmpty",
    value: function isNotEmpty(value) {
      return !this.isEmpty(value);
    }
  }, {
    key: "sort",
    value: function sort(value1, value2) {
      var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var locale = arguments.length > 3 ? arguments[3] : undefined;
      var nullSortOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var result = ObjectUtils.compare(value1, value2, locale, order); // nullSortOrder == 1 means Excel like sort nulls at bottom

      var finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
      return finalSortOrder * result;
    }
  }, {
    key: "compare",
    value: function compare(value1, value2, locale) {
      var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var result = -1;
      var emptyValue1 = this.isEmpty(value1);
      var emptyValue2 = this.isEmpty(value2);
      if (emptyValue1 && emptyValue2) result = 0;else if (emptyValue1) result = order;else if (emptyValue2) result = -order;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, locale, {
        numeric: true
      });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      return result;
    }
  }]);

  return ObjectUtils;
}();

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var IconUtils = /*#__PURE__*/function () {
  function IconUtils() {
    _classCallCheck(this, IconUtils);
  }

  _createClass(IconUtils, null, [{
    key: "getJSXIcon",
    value: function getJSXIcon(icon) {
      var iconProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var content = null;

      if (icon !== null) {
        var iconType = _typeof(icon);

        var className = classNames(iconProps.className, iconType === 'string' && icon);
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", _extends({}, iconProps, {
          className: className
        }));

        if (iconType !== 'string') {
          var defaultContentOptions = _objectSpread({
            iconProps: iconProps,
            element: content
          }, options);

          return ObjectUtils.getJSXElement(icon, defaultContentOptions);
        }
      }

      return content;
    }
  }]);

  return IconUtils;
}();

var lastId = 0;
function UniqueComponentId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pr_id_';
  lastId++;
  return "".concat(prefix).concat(lastId);
}

function handler() {
  var zIndexes = [];

  var generateZIndex = function generateZIndex(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999;
    var lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    var newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({
      key: key,
      value: newZIndex
    });
    return newZIndex;
  };

  var revertZIndex = function revertZIndex(zIndex) {
    zIndexes = zIndexes.filter(function (obj) {
      return obj.value !== zIndex;
    });
  };

  var getCurrentZIndex = function getCurrentZIndex(key, autoZIndex) {
    return getLastZIndex(key, autoZIndex).value;
  };

  var getLastZIndex = function getLastZIndex(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return _toConsumableArray(zIndexes).reverse().find(function (obj) {
      return autoZIndex ? true : obj.key === key;
    }) || {
      key: key,
      value: baseZIndex
    };
  };

  var getZIndex = function getZIndex(el) {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };

  return {
    get: getZIndex,
    set: function set(key, el, autoZIndex, baseZIndex) {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, autoZIndex, baseZIndex));
      }
    },
    clear: function clear(el) {
      if (el) {
        revertZIndex(ZIndexUtils.get(el));
        el.style.zIndex = '';
      }
    },
    getCurrent: function getCurrent(key, autoZIndex) {
      return getCurrentZIndex(key, autoZIndex);
    }
  };
}

var ZIndexUtils = handler();




/***/ }),

/***/ "./node_modules/primereact/virtualscroller/virtualscroller.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/primereact/virtualscroller/virtualscroller.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualScroller": function() { return /* binding */ VirtualScroller; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/hooks */ "./node_modules/primereact/hooks/hooks.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var VirtualScroller = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var vertical = props.orientation === 'vertical';
  var horizontal = props.orientation === 'horizontal';
  var both = props.orientation === 'both';

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(both ? {
    rows: 0,
    cols: 0
  } : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      firstState = _React$useState2[0],
      setFirstState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(both ? {
    rows: 0,
    cols: 0
  } : 0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      lastState = _React$useState4[0],
      setLastState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(both ? {
    rows: 0,
    cols: 0
  } : 0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      numItemsInViewportState = _React$useState6[0],
      setNumItemsInViewportState = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.numToleratedItems),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      numToleratedItemsState = _React$useState8[0],
      setNumToleratedItemsState = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.loading || false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      loadingState = _React$useState10[0],
      setLoadingState = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      loaderArrState = _React$useState12[0],
      setLoaderArrState = _React$useState12[1];

  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _spacerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _stickyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var lastScrollPos = react__WEBPACK_IMPORTED_MODULE_0__.useRef(both ? {
    top: 0,
    left: 0
  } : 0);
  var scrollTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var resizeTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var defaultWidth = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var defaultHeight = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var prevItems = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.usePrevious)(props.items);
  var prevLoading = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.usePrevious)(props.loading);

  var _useResizeListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useResizeListener)({
    listener: function listener(event) {
      return onResize();
    }
  }),
      _useResizeListener2 = _slicedToArray(_useResizeListener, 1),
      bindWindowResizeListener = _useResizeListener2[0];

  var _useEventListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEventListener)({
    target: 'window',
    type: 'orientationchange',
    listener: function listener(event) {
      return onResize();
    }
  }),
      _useEventListener2 = _slicedToArray(_useEventListener, 1),
      bindOrientationChangeListener = _useEventListener2[0];

  var getElementRef = function getElementRef() {
    return elementRef;
  };

  var scrollTo = function scrollTo(options) {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
    elementRef.current && elementRef.current.scrollTo(options);
  };

  var scrollToIndex = function scrollToIndex(index) {
    var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

    var _calculateNumItems = calculateNumItems(),
        numToleratedItems = _calculateNumItems.numToleratedItems;

    var calculateFirst = function calculateFirst() {
      var _index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var _numT = arguments.length > 1 ? arguments[1] : undefined;

      return _index <= _numT ? 0 : _index;
    };

    var calculateCoord = function calculateCoord(_first, _size) {
      return _first * _size;
    };

    var scrollToItem = function scrollToItem() {
      var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return scrollTo({
        left: left,
        top: top,
        behavior: behavior
      });
    };

    if (both) {
      var newFirst = {
        rows: calculateFirst(index[0], numToleratedItems[0]),
        cols: calculateFirst(index[1], numToleratedItems[1])
      };

      if (newFirst.rows !== firstState.rows || newFirst.cols !== firstState.cols) {
        scrollToItem(calculateCoord(newFirst.cols, props.itemSize[1]), calculateCoord(newFirst.rows, props.itemSize[0]));
      }
    } else {
      var _newFirst = calculateFirst(index, numToleratedItems);

      if (_newFirst !== firstState) {
        horizontal ? scrollToItem(calculateCoord(_newFirst, props.itemSize), 0) : scrollToItem(0, calculateCoord(_newFirst, props.itemSize));
      }
    }
  };

  var scrollInView = function scrollInView(index, to) {
    var behavior = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';

    if (to) {
      var _getRenderedRange = getRenderedRange(),
          first = _getRenderedRange.first,
          viewport = _getRenderedRange.viewport;

      var scrollToItem = function scrollToItem() {
        var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return scrollTo({
          left: left,
          top: top,
          behavior: behavior
        });
      };

      var isToStart = to === 'to-start';
      var isToEnd = to === 'to-end';

      if (isToStart) {
        if (both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows - 1) * props.itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollToItem((viewport.first.cols - 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else {
          if (viewport.first - first > index) {
            var pos = (viewport.first - 1) * props.itemSize;
            horizontal ? scrollToItem(pos, 0) : scrollToItem(0, pos);
          }
        }
      } else if (isToEnd) {
        if (both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows + 1) * props.itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollToItem((viewport.first.cols + 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else {
          if (viewport.last - first <= index + 1) {
            var _pos2 = (viewport.first + 1) * props.itemSize;

            horizontal ? scrollToItem(_pos2, 0) : scrollToItem(0, _pos2);
          }
        }
      }
    } else {
      scrollToIndex(index, behavior);
    }
  };

  var getRows = function getRows() {
    return loadingState ? props.loaderDisabled ? loaderArrState : [] : loadedItems();
  };

  var getColumns = function getColumns() {
    if (props.columns && both || horizontal) {
      return loadingState && props.loaderDisabled ? both ? loaderArrState[0] : loaderArrState : props.columns.slice(both ? firstState.cols : firstState, both ? lastState.cols : lastState);
    }

    return props.columns;
  };

  var getRenderedRange = function getRenderedRange() {
    var calculateFirstInViewport = function calculateFirstInViewport(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };

    var firstInViewport = firstState;
    var lastInViewport = 0;

    if (elementRef.current) {
      var _elementRef$current = elementRef.current,
          scrollTop = _elementRef$current.scrollTop,
          scrollLeft = _elementRef$current.scrollLeft;

      if (both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, props.itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, props.itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + numItemsInViewportState.rows,
          cols: firstInViewport.cols + numItemsInViewportState.cols
        };
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, props.itemSize);
        lastInViewport = firstInViewport + numItemsInViewportState;
      }
    }

    return {
      first: firstState,
      last: lastState,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  };

  var calculateNumItems = function calculateNumItems() {
    var contentPos = getContentPosition();
    var contentWidth = elementRef.current ? elementRef.current.offsetWidth - contentPos.left : 0;
    var contentHeight = elementRef.current ? elementRef.current.offsetHeight - contentPos.top : 0;

    var calculateNumItemsInViewport = function calculateNumItemsInViewport(_contentSize, _itemSize) {
      return Math.ceil(_contentSize / (_itemSize || _contentSize));
    };

    var calculateNumToleratedItems = function calculateNumToleratedItems(_numItems) {
      return Math.ceil(_numItems / 2);
    };

    var numItemsInViewport = both ? {
      rows: calculateNumItemsInViewport(contentHeight, props.itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, props.itemSize[1])
    } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, props.itemSize);
    var numToleratedItems = numToleratedItemsState || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport: numItemsInViewport,
      numToleratedItems: numToleratedItems
    };
  };

  var calculateOptions = function calculateOptions() {
    var _calculateNumItems2 = calculateNumItems(),
        numItemsInViewport = _calculateNumItems2.numItemsInViewport,
        numToleratedItems = _calculateNumItems2.numToleratedItems;

    var calculateLast = function calculateLast(_first, _num, _numT, _isCols) {
      return getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    };

    var last = both ? {
      rows: calculateLast(firstState.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(firstState.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(firstState, numItemsInViewport, numToleratedItems);
    setNumItemsInViewportState(numItemsInViewport);
    setNumToleratedItemsState(numToleratedItems);
    setLastState(last);

    if (props.showLoader) {
      setLoaderArrState(both ? Array.from({
        length: numItemsInViewport.rows
      }).map(function () {
        return Array.from({
          length: numItemsInViewport.cols
        });
      }) : Array.from({
        length: numItemsInViewport
      }));
    }

    if (props.lazy) {
      props.onLazyLoad && props.onLazyLoad({
        first: firstState,
        last: last
      });
    }
  };

  var calculateAutoSize = function calculateAutoSize(loading) {
    if (props.autoSize && !loading) {
      Promise.resolve().then(function () {
        if (_contentRef.current) {
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = 'auto';
          var _contentRef$current = _contentRef.current,
              offsetWidth = _contentRef$current.offsetWidth,
              offsetHeight = _contentRef$current.offsetHeight;
          (both || horizontal) && (elementRef.current.style.width = (offsetWidth < defaultWidth.current ? offsetWidth : defaultWidth.current) + 'px');
          (both || vertical) && (elementRef.current.style.height = (offsetHeight < defaultHeight.current ? offsetHeight : defaultHeight.current) + 'px');
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = '';
        }
      });
    }
  };

  var getLast = function getLast() {
    var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var isCols = arguments.length > 1 ? arguments[1] : undefined;
    return props.items ? Math.min(isCols ? (props.columns || props.items[0]).length : props.items.length, last) : 0;
  };

  var getContentPosition = function getContentPosition() {
    if (_contentRef.current) {
      var style = getComputedStyle(_contentRef.current);
      var left = parseInt(style.paddingLeft, 10) + Math.max(parseInt(style.left, 10), 0);
      var right = parseInt(style.paddingRight, 10) + Math.max(parseInt(style.right, 10), 0);
      var top = parseInt(style.paddingTop, 10) + Math.max(parseInt(style.top, 10), 0);
      var bottom = parseInt(style.paddingBottom, 10) + Math.max(parseInt(style.bottom, 10), 0);
      return {
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        x: left + right,
        y: top + bottom
      };
    }

    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  };

  var setSize = function setSize() {
    if (elementRef.current) {
      var parentElement = elementRef.current.parentElement;
      var width = props.scrollWidth || "".concat(elementRef.current.offsetWidth || parentElement.offsetWidth, "px");
      var height = props.scrollHeight || "".concat(elementRef.current.offsetHeight || parentElement.offsetHeight, "px");

      var setProp = function setProp(_name, _value) {
        return elementRef.current.style[_name] = _value;
      };

      if (both || horizontal) {
        setProp('height', height);
        setProp('width', width);
      } else {
        setProp('height', height);
      }
    }
  };

  var setSpacerSize = function setSpacerSize() {
    var items = props.items;

    if (_spacerRef.current && items) {
      var contentPos = getContentPosition();

      var setProp = function setProp(_name, _value, _size) {
        var _cpos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        return _spacerRef.current.style[_name] = (_value || []).length * _size + _cpos + 'px';
      };

      if (both) {
        setProp('height', items, props.itemSize[0], contentPos.y);
        setProp('width', props.columns || items[1], props.itemSize[1], contentPos.x);
      } else {
        horizontal ? setProp('width', props.columns || items, props.itemSize, contentPos.x) : setProp('height', items, props.itemSize, contentPos.y);
      }
    }
  };

  var setContentPosition = function setContentPosition(pos) {
    if (_contentRef.current) {
      var first = pos ? pos.first : firstState;

      var calculateTranslateVal = function calculateTranslateVal(_first, _size) {
        return _first * _size;
      };

      var setTransform = function setTransform() {
        var _x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var _y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _stickyRef.current && (_stickyRef.current.style.top = "-".concat(_y, "px"));
        _contentRef.current.style.transform = "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)");
      };

      if (both) {
        setTransform(calculateTranslateVal(first.cols, props.itemSize[1]), calculateTranslateVal(first.rows, props.itemSize[0]));
      } else {
        var translateVal = calculateTranslateVal(first, props.itemSize);
        horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  };

  var onScrollPositionChange = function onScrollPositionChange(event) {
    var target = event.target;
    var contentPos = getContentPosition();

    var calculateScrollPos = function calculateScrollPos(_pos, _cpos) {
      return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    };

    var calculateCurrentIndex = function calculateCurrentIndex(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };

    var calculateTriggerIndex = function calculateTriggerIndex(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };

    var calculateFirst = function calculateFirst(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      if (_currentIndex <= _numT) return 0;else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };

    var calculateLast = function calculateLast(_currentIndex, _first, _last, _num, _numT, _isCols) {
      var lastValue = _first + _num + 2 * _numT;

      if (_currentIndex >= _numT) {
        lastValue += _numT + 1;
      }

      return getLast(lastValue, _isCols);
    };

    var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var newLast = lastState;
    var isRangeChanged = false;
    var newScrollPos = lastScrollPos.current;

    if (both) {
      var isScrollDown = lastScrollPos.current.top <= scrollTop;
      var isScrollRight = lastScrollPos.current.left <= scrollLeft;
      var currentIndex = {
        rows: calculateCurrentIndex(scrollTop, props.itemSize[0]),
        cols: calculateCurrentIndex(scrollLeft, props.itemSize[1])
      };
      var triggerIndex = {
        rows: calculateTriggerIndex(currentIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
        cols: calculateTriggerIndex(currentIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
      };
      newFirst = {
        rows: calculateFirst(currentIndex.rows, triggerIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
        cols: calculateFirst(currentIndex.cols, triggerIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
      };
      newLast = {
        rows: calculateLast(currentIndex.rows, newFirst.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0]),
        cols: calculateLast(currentIndex.cols, newFirst.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], true)
      };
      isRangeChanged = newFirst.rows !== firstState.rows || newLast.rows !== lastState.rows || newFirst.cols !== firstState.cols || newLast.cols !== lastState.cols;
      newScrollPos = {
        top: scrollTop,
        left: scrollLeft
      };
    } else {
      var scrollPos = horizontal ? scrollLeft : scrollTop;
      var isScrollDownOrRight = lastScrollPos.current <= scrollPos;

      var _currentIndex2 = calculateCurrentIndex(scrollPos, props.itemSize);

      var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);

      newFirst = calculateFirst(_currentIndex2, _triggerIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
      newLast = calculateLast(_currentIndex2, newFirst, lastState, numItemsInViewportState, numToleratedItemsState);
      isRangeChanged = newFirst !== firstState || newLast !== lastState;
      newScrollPos = scrollPos;
    }

    return {
      first: newFirst,
      last: newLast,
      isRangeChanged: isRangeChanged,
      scrollPos: newScrollPos
    };
  };

  var onScrollChange = function onScrollChange(event) {
    var _onScrollPositionChan = onScrollPositionChange(event),
        first = _onScrollPositionChan.first,
        last = _onScrollPositionChan.last,
        isRangeChanged = _onScrollPositionChan.isRangeChanged,
        scrollPos = _onScrollPositionChan.scrollPos;

    if (isRangeChanged) {
      var newState = {
        first: first,
        last: last
      };
      setContentPosition(newState);
      setFirstState(first);
      setLastState(last);
      lastScrollPos.current = scrollPos;
      props.onScrollIndexChange && props.onScrollIndexChange(newState);

      if (props.lazy) {
        props.onLazyLoad && props.onLazyLoad(newState);
      }
    }
  };

  var onScroll = function onScroll(event) {
    props.onScroll && props.onScroll(event);

    if (props.delay) {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      if (!loadingState && props.showLoader) {
        var _onScrollPositionChan2 = onScrollPositionChange(event),
            changed = _onScrollPositionChan2.isRangeChanged;

        changed && setLoadingState(true);
      }

      scrollTimeout.current = setTimeout(function () {
        onScrollChange(event);

        if (loadingState && props.showLoader && (!props.lazy || props.loading === undefined)) {
          setLoadingState(false);
        }
      }, props.delay);
    } else {
      onScrollChange(event);
    }
  };

  var onResize = function onResize() {
    if (resizeTimeout.current) {
      clearTimeout(resizeTimeout.current);
    }

    resizeTimeout.current = setTimeout(function () {
      if (elementRef.current) {
        var _ref = [primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(elementRef.current), primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(elementRef.current)],
            width = _ref[0],
            height = _ref[1];
        var isDiffWidth = width !== defaultWidth.current,
            isDiffHeight = height !== defaultHeight.current;
        var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;

        if (reinit) {
          setNumToleratedItemsState(props.numToleratedItems);
          defaultWidth.current = width;
          defaultHeight.current = height;
        }
      }
    }, props.resizeDelay);
  };

  var getOptions = function getOptions(renderedIndex) {
    var count = (props.items || []).length;
    var index = both ? firstState.rows + renderedIndex : firstState + renderedIndex;
    return {
      index: index,
      count: count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props: props
    };
  };

  var loaderOptions = function loaderOptions(index, extOptions) {
    var count = loaderArrState.length;
    return _objectSpread({
      index: index,
      count: count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props: props
    }, extOptions);
  };

  var loadedItems = function loadedItems() {
    var items = props.items;

    if (items && !loadingState) {
      if (both) return items.slice(firstState.rows, lastState.rows).map(function (item) {
        return props.columns ? item : item.slice(firstState.cols, lastState.cols);
      });else if (horizontal && props.columns) return items;else return items.slice(firstState, lastState);
    }

    return [];
  };

  var init = function init() {
    if (!props.disabled) {
      setSize();
      calculateOptions();
      setSpacerSize();
    }
  };

  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMountEffect)(function () {
    if (!props.disabled) {
      init();
      bindWindowResizeListener();
      bindOrientationChangeListener();
      defaultWidth.current = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(elementRef.current);
      defaultHeight.current = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(elementRef.current);
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(function () {
    init();
  }, [props.itemSize, props.scrollHeight]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(function () {
    if (props.numToleratedItems !== numToleratedItemsState) {
      setNumToleratedItemsState(props.numToleratedItems);
    }
  }, [props.numToleratedItems]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(function () {
    if (props.numToleratedItems === numToleratedItemsState) {
      init(); // reinit after resizing
    }
  }, [numToleratedItemsState]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(function () {
    if (!prevItems || prevItems.length !== (props.items || []).length) {
      init();
    }

    var loading = loadingState;

    if (props.lazy && prevLoading !== props.loading && props.loading !== loadingState) {
      setLoadingState(props.loading);
      loading = props.loading;
    }

    calculateAutoSize(loading);
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(function () {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
  }, [props.orientation]);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElementRef: getElementRef,
      scrollTo: scrollTo,
      scrollToIndex: scrollToIndex,
      scrollInView: scrollInView,
      getRenderedRange: getRenderedRange
    };
  });

  var createLoaderItem = function createLoaderItem(index) {
    var extOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = loaderOptions(index, extOptions);
    var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.loadingTemplate, options);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: index
    }, content);
  };

  var createLoader = function createLoader() {
    if (!props.loaderDisabled && props.showLoader && loadingState) {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-virtualscroller-loader', {
        'p-component-overlay': !props.loadingTemplate
      });
      var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "p-virtualscroller-loading-icon pi pi-spinner pi-spin"
      });

      if (props.loadingTemplate) {
        content = loaderArrState.map(function (_, index) {
          return createLoaderItem(index, both && {
            numCols: numItemsInViewportState.cols
          });
        });
      } else if (props.loaderIconTemplate) {
        var defaultContentOptions = {
          className: 'p-virtualscroller-loading-icon',
          element: content,
          props: props
        };
        content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.loaderIconTemplate, defaultContentOptions);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: className
      }, content);
    }

    return null;
  };

  var createSpacer = function createSpacer() {
    if (props.showSpacer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: _spacerRef,
        className: "p-virtualscroller-spacer"
      });
    }

    return null;
  };

  var createItem = function createItem(item, index) {
    var options = getOptions(index);
    var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.itemTemplate, item, options);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: options.index
    }, content);
  };

  var createItems = function createItems() {
    var items = loadedItems();
    return items.map(createItem);
  };

  var createContent = function createContent() {
    var items = createItems();
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-virtualscroller-content', {
      'p-virtualscroller-loading': loadingState
    });
    var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: _contentRef,
      className: className
    }, items);

    if (props.contentTemplate) {
      var defaultOptions = {
        className: className,
        contentRef: function contentRef(el) {
          return _contentRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getRefElement(el);
        },
        spacerRef: function spacerRef(el) {
          return _spacerRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getRefElement(el);
        },
        stickyRef: function stickyRef(el) {
          return _stickyRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getRefElement(el);
        },
        items: loadedItems(),
        getItemOptions: function getItemOptions(index) {
          return getOptions(index);
        },
        children: items,
        element: content,
        props: props,
        loading: loadingState,
        getLoaderOptions: function getLoaderOptions(index, ext) {
          return loaderOptions(index, ext);
        },
        loadingTemplate: props.loadingTemplate,
        itemSize: props.itemSize,
        rows: getRows(),
        columns: getColumns(),
        vertical: vertical,
        horizontal: horizontal,
        both: both
      };
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.contentTemplate, defaultOptions);
    }

    return content;
  };

  if (props.disabled) {
    var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(props.contentTemplate, {
      items: props.items,
      rows: props.items,
      columns: props.columns
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.children, content);
  } else {
    var otherProps = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findDiffKeys(props, VirtualScroller.defaultProps);
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-virtualscroller', {
      'p-both-scroll': both,
      'p-horizontal-scroll': horizontal
    }, props.className);
    var loader = createLoader();

    var _content = createContent();

    var spacer = createSpacer();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
      ref: elementRef,
      className: className,
      tabIndex: 0,
      style: props.style
    }, otherProps, {
      onScroll: onScroll
    }), _content, spacer, loader);
  }
}));
VirtualScroller.displayName = 'VirtualScroller';
VirtualScroller.defaultProps = {
  __TYPE: 'VirtualScroller',
  id: null,
  style: null,
  className: null,
  items: null,
  itemSize: 0,
  scrollHeight: null,
  scrollWidth: null,
  orientation: 'vertical',
  numToleratedItems: null,
  delay: 0,
  resizeDelay: 10,
  lazy: false,
  disabled: false,
  loaderDisabled: false,
  columns: null,
  loading: undefined,
  autoSize: false,
  showSpacer: true,
  showLoader: false,
  loadingTemplate: null,
  loaderIconTemplate: null,
  itemTemplate: null,
  contentTemplate: null,
  onScroll: null,
  onScrollIndexChange: null,
  onLazyLoad: null
};




/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _utils_reflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/reflow */ "./node_modules/react-transition-group/esm/utils/reflow.js");











var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) (0,_utils_reflow__WEBPACK_IMPORTED_MODULE_6__.forceReflow)(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)
}) : 0;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENTERED": function() { return /* binding */ ENTERED; },
/* harmony export */   "ENTERING": function() { return /* binding */ ENTERING; },
/* harmony export */   "EXITED": function() { return /* binding */ EXITED; },
/* harmony export */   "EXITING": function() { return /* binding */ EXITING; },
/* harmony export */   "UNMOUNTED": function() { return /* binding */ UNMOUNTED; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_reflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/reflow */ "./node_modules/react-transition-group/esm/utils/reflow.js");









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0,_utils_reflow__WEBPACK_IMPORTED_MODULE_4__.forceReflow)(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any) : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_7___default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element.isRequired)]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNamesShape": function() { return /* binding */ classNamesShape; },
/* harmony export */   "timeoutsShape": function() { return /* binding */ timeoutsShape; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/reflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/reflow.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forceReflow": function() { return /* binding */ forceReflow; }
/* harmony export */ });
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/google-maps-gutenberg-block","version":"0.1.0","title":"Styled Google Maps","category":"widgets","description":"A highly-customizable Google Maps embed.","supports":{"html":false},"textdomain":"google-maps-gutenberg-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","keywords":["google","maps","map","branded","styled","customized","embed"],"attributes":{"key":{"type":"string","default":"AIzaSyAjyDspiPfzEfjRSS5fQzm-3jHFjHxeXB4"},"height":{"type":"string","default":"400px"},"mapmode":{"type":"string","default":"place","enum":["place","view","directions","streetview","search"]},"q":{"type":"string","default":"Empire State Building"},"center":{"type":"string","default":"40.7484,-73.9857"},"zoom":{"type":"number","default":10},"maptype":{"type":"string","default":"roadmap","enum":["roadmap","satellite"]},"language":{"type":"string","default":"en"},"region":{"type":"string","default":"US"},"origin":{"type":"string","default":"Empire State Building"},"destination":{"type":"string","default":"Flatiron Building"},"waypoints":{"type":"string","default":""},"mode":{"type":"string","enum":["driving","walking","bicycling","transit","flying"],"default":"driving"},"avoid":{"type":"string","default":""},"units":{"type":"string","enum":["metric","imperial"],"default":"metric"},"location":{"type":"string","default":"40.7484,-73.9857"},"pano":{"type":"string","default":"AF1QipMhTjMWAB9suCj36Qs-3D_aRhr47gK2cCQWElF0"},"heading":{"type":"number","default":0},"pitch":{"type":"number","default":0},"fov":{"type":"number","default":90},"styles":{"type":"array","default":[]}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgoogle_maps_gutenberg_block"] = self["webpackChunkgoogle_maps_gutenberg_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map