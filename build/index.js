/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.tsx":
/*!**********************!*\
  !*** ./src/edit.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities */ "./src/utilities.ts");
/* harmony import */ var _map_modes_place__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-modes/place */ "./src/map-modes/place.tsx");
/* harmony import */ var _map_modes_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-modes/view */ "./src/map-modes/view.tsx");
/* harmony import */ var _map_modes_directions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-modes/directions */ "./src/map-modes/directions.tsx");
/* harmony import */ var _map_modes_streetview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-modes/streetview */ "./src/map-modes/streetview.tsx");
/* harmony import */ var _map_modes_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-modes/search */ "./src/map-modes/search.tsx");
/* harmony import */ var _map_modes_themed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map-modes/themed */ "./src/map-modes/themed.tsx");
/* harmony import */ var _options_languages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./options/languages */ "./src/options/languages.ts");
/* harmony import */ var _options_regions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./options/regions */ "./src/options/regions.ts");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

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
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const apiKeyHelpInner = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      minWidth: '320px',
      padding: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Here's how to create your own API key:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Go to the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://console.cloud.google.com/project/_/google/maps-apis/credentials",
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google Maps Platform > Credentials")), " page. If you haven't already, you may need to create an account and a Google Cloud project here."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "On the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Credentials"), " page, click ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Create credentials > API key"), ". The ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "API key created"), " dialog displays your newly created API key."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Copy the new API key and paste it in the field above."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Go to the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google Maps Embed API")), " page, ensure that the correct project is selected, and click ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Enable"), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "If you're using the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "themed"), " map mode, go to the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://console.cloud.google.com/apis/library/maps-backend.googleapis.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google Maps JavaScript API")), " page, ensure that the correct project is selected, and click ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Enable"), ". This is a pay-as-you-go API, so be aware that ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://developers.google.com/maps/documentation/javascript/usage-and-billing",
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "you may incur charges")), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Optionally, you can ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://developers.google.com/maps/documentation/embed/get-api-key#restrict_key",
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "restrict your API keys")), " to improve security. Google strongly recommends this.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "*Loading multiple maps with different API keys onto the same web page may cause errors.")));
  const apiKeyHelp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Please create your own API key before publishing a map. This is a Google requirement, and themed maps won't work without it."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: onToggle,
        "aria-expanded": isOpen
      }, "How to Create an API Key");
    },
    renderContent: () => apiKeyHelpInner
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (containerRef.current) (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.getMapObject)(attributes.key, containerRef.current, attributes.language, attributes.region).then(map => (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.initializeMap)(map, attributes));
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, attributes.mapmode === 'themed' ? attributes.key === 'AIzaSyCRspsEADhOoOF4c2LhYKu_IAB0orV9ExA' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: `${attributes.height}px`,
      textAlign: 'center',
      backgroundColor: 'rgb(240, 240, 240)'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      padding: '20px'
    }
  }, "You must set your own Google Maps API key and enable the Google Maps JavaScript API to use themed maps.")) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "google-maps-gutenberg-block",
    ref: containerRef,
    style: {
      width: '100%',
      height: `${attributes.height}px`
    },
    "data-attributes": JSON.stringify(attributes)
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    ref: iframeRef,
    src: (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.getMapUrl)(attributes),
    width: "100%",
    height: attributes.height,
    style: {
      border: 0
    },
    allowFullScreen: true,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Settings",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "API Key",
    help: apiKeyHelp,
    value: attributes.key,
    onChange: key => setAttributes({
      key
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Height",
    help: "The height in pixels of the Google Maps embed.",
    id: "height-input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: attributes.height,
    onChange: event => setAttributes({
      height: parseInt(event.target.value)
    }),
    type: "number",
    min: 0,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: '2px'
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: "Map Mode",
    help: "The format of the map embed. A number of other settings are dependent on this one.",
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
    }, {
      label: 'Themed',
      value: 'themed'
    }],
    onChange: mapmode => setAttributes({
      mapmode
    })
  })), attributes.mapmode === 'place' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_map_modes_place__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.mapmode === 'view' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_map_modes_view__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.mapmode === 'directions' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_map_modes_directions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.mapmode === 'streetview' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_map_modes_streetview__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.mapmode === 'search' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_map_modes_search__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), attributes.mapmode === 'themed' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_map_modes_themed__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ComboboxControl, {
    label: "Language",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Defines the language to use for UI elements and for the display of labels on map tiles. By default, visitors will see a map in their own language."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "*Loading multiple maps with different language settings onto the same web page may cause errors."))),
    value: attributes.language,
    onChange: language => setAttributes({
      language: language !== null && language !== void 0 ? language : ''
    }),
    options: _options_languages__WEBPACK_IMPORTED_MODULE_12__["default"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ComboboxControl, {
    label: "Region",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Defines the appropriate borders and labels to display, based on geo-political sensitivities. ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://developers.google.com/maps/coverage",
      target: "_blank",
      rel: "noreferrer noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google's coverage")), " varies by region"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "*Loading multiple maps with different region settings onto the same web page may cause errors."))),
    value: attributes.region,
    onChange: region => setAttributes({
      region: region !== null && region !== void 0 ? region : ''
    }),
    options: _options_regions__WEBPACK_IMPORTED_MODULE_13__["default"]
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/images/icon.tsx":
/*!*****************************!*\
  !*** ./src/images/icon.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
})));

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _images_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/icon */ "./src/images/icon.tsx");
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
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
// @ts-ignore TypeScript fails here because it does not narrow the string enums from the block.json file
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: _images_icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/map-modes/directions.tsx":
/*!**************************************!*\
  !*** ./src/map-modes/directions.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const directions = function (_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Origin",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Defines the starting point from which to display directions. If necessary, a ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://developers.google.com/maps/documentation/places/web-service/place-id#find-id",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google Maps Place ID")), " prefixed with ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "place_id:"), " can be used to target a specific location."),
    value: attributes.origin,
    onChange: origin => setAttributes({
      origin
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Destination",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Defines the end point of the directions. If necessary, a ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://developers.google.com/maps/documentation/places/web-service/place-id#find-id",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google Maps Place ID")), " prefixed with ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "place_id:"), " can be used to target a specific location."),
    value: attributes.destination,
    onChange: destination => setAttributes({
      destination
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: "Mode",
    help: "Defines the method of travel.",
    selected: attributes.mode,
    options: [{
      label: 'Driving',
      value: 'driving'
    }, {
      label: 'Walking',
      value: 'walking'
    }, {
      label: 'Bicycling',
      value: 'bicycling'
    }, {
      label: 'Transit',
      value: 'transit'
    }, {
      label: 'Flying',
      value: 'flying'
    }],
    onChange: mode => setAttributes({
      mode
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Zoom",
    help: "Sets initial zoom level of the map.",
    value: attributes.zoom,
    onChange: zoom => setAttributes({
      zoom
    }),
    min: 1,
    max: 21
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: "Map Type",
    help: "Defines the type of map tiles to load.",
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: "Units",
    help: "Specifies measurement method when displaying distances in the results.",
    selected: attributes.units,
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: 'Metric',
      value: 'metric'
    }, {
      label: 'Imperial',
      value: 'imperial'
    }],
    onChange: units => setAttributes({
      units
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (directions);

/***/ }),

/***/ "./src/map-modes/place.tsx":
/*!*********************************!*\
  !*** ./src/map-modes/place.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const place = function (_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Query",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Defines the map marker's location. If necessary, a ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://developers.google.com/maps/documentation/places/web-service/place-id#find-id",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google Maps Place ID")), " prefixed with ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "place_id:"), " can be used to target a specific location."),
    value: attributes.q,
    onChange: q => setAttributes({
      q
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Zoom",
    help: "Sets the initial zoom level of the map.",
    value: attributes.zoom,
    onChange: zoom => setAttributes({
      zoom
    }),
    min: 1,
    max: 21
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: "Map Type",
    help: "Defines the type of map tiles to load.",
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
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (place);

/***/ }),

/***/ "./src/map-modes/search.tsx":
/*!**********************************!*\
  !*** ./src/map-modes/search.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const search = function (_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Query",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Defines the search term, which can include a geographic restriction such as ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "in Seattle"), " or ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "near 98033"), ". If no geographic restrictions are applied, the end user's location will be preferred."),
    value: attributes.q,
    onChange: q => setAttributes({
      q
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Zoom",
    help: "Sets initial zoom level of the map.",
    value: attributes.zoom,
    onChange: zoom => setAttributes({
      zoom
    }),
    min: 1,
    max: 21
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: "Map Type",
    help: "Defines the type of map tiles to load.",
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
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/map-modes/streetview.tsx":
/*!**************************************!*\
  !*** ./src/map-modes/streetview.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const streetview = function (_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const [panoramaUrl, setPanoramaUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const panoramaIdFinder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      minWidth: '320px',
      padding: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "How to find the ID of a Google Maps panorama:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Open the panorama within Google Maps in a web browser."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Copy the URL of the page and paste it into the text ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Panorama URL"), " input below."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "The panorama's ID will appear in the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Panorama ID"), " input below.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Panorama URL",
    value: panoramaUrl,
    onChange: url => setPanoramaUrl(url)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Panorama ID",
    value: panoramaUrl.includes("!1s") && panoramaUrl.includes("!2e") ? panoramaUrl.split("!1s")[1].split("!2e")[0].replace(/%2F/g, '/') : "",
    onChange: id => {}
  })));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: "Location",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "The longitude and latitude respectively of the location of the street view. Open ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://maps.google.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google Maps")), " and right click on any point to see its coordinates in decimal format."),
    id: "location-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: parseFloat(attributes.location.split(',')[0]),
    onChange: event => setAttributes({
      location: `${event.target.value},${parseFloat(attributes.location.split(',')[1])}`
    }),
    type: "number",
    step: 0.00001,
    min: -90,
    max: 90,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: '2px'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: parseFloat(attributes.location.split(',')[1]),
    onChange: event => setAttributes({
      location: `${parseFloat(attributes.location.split(',')[0])},${event.target.value}`
    }),
    type: "number",
    step: 0.00001,
    min: -180,
    max: 180,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: '2px'
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Panorama ID",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "The ID of a specific Google Maps panorama. If you specify a panorama ID you may also specify a location. The location will be only be used if the API cannot find the panorama ID."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
      renderToggle: _ref2 => {
        let {
          isOpen,
          onToggle
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen
        }, "How to Find a Panorama's Id");
      },
      renderContent: () => panoramaIdFinder
    })),
    value: attributes.pano,
    onChange: pano => setAttributes({
      pano
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Heading",
    help: "Indicates the compass heading of the camera in degrees clockwise from North.",
    value: attributes.heading,
    onChange: heading => setAttributes({
      heading
    }),
    min: -180,
    max: 360
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Pitch",
    help: "Specifies the angle, up or down, of the camera. Positive values will angle the camera up, while negative values will angle the camera down. The default pitch of 0\xB0 is set based on on the position of the camera when the image was captured. Because of this, a pitch of 0\xB0 is often, but not always, horizontal. For example, an image taken on a hill will likely exhibit a default pitch that is not horizontal.",
    value: attributes.pitch,
    onChange: pitch => setAttributes({
      pitch
    }),
    min: -90,
    max: 90
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Field of View",
    help: "Determines the horizontal field of view of the image. It defaults to 90\xB0. When dealing with a fixed-size viewport the field of view is can be considered the zoom level, with smaller numbers indicating a higher level of zoom.",
    value: attributes.fov,
    onChange: fov => setAttributes({
      fov
    }),
    min: 10,
    max: 100
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (streetview);

/***/ }),

/***/ "./src/map-modes/themed.tsx":
/*!**********************************!*\
  !*** ./src/map-modes/themed.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themes_standard_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/standard.json */ "./src/themes/standard.json");
/* harmony import */ var _themes_silver_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/silver.json */ "./src/themes/silver.json");
/* harmony import */ var _themes_retro_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/retro.json */ "./src/themes/retro.json");
/* harmony import */ var _themes_dark_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../themes/dark.json */ "./src/themes/dark.json");
/* harmony import */ var _themes_night_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themes/night.json */ "./src/themes/night.json");
/* harmony import */ var _themes_aubergine_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../themes/aubergine.json */ "./src/themes/aubergine.json");
/* harmony import */ var _images_standard_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/standard.png */ "./src/images/standard.png");
/* harmony import */ var _images_silver_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/silver.png */ "./src/images/silver.png");
/* harmony import */ var _images_retro_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/retro.png */ "./src/images/retro.png");
/* harmony import */ var _images_dark_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/dark.png */ "./src/images/dark.png");
/* harmony import */ var _images_night_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/night.png */ "./src/images/night.png");
/* harmony import */ var _images_aubergine_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/aubergine.png */ "./src/images/aubergine.png");









// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

const themes = [{
  name: "Standard",
  image: _images_standard_png__WEBPACK_IMPORTED_MODULE_8__,
  styles: _themes_standard_json__WEBPACK_IMPORTED_MODULE_2__
}, {
  name: "Silver",
  image: _images_silver_png__WEBPACK_IMPORTED_MODULE_9__,
  styles: _themes_silver_json__WEBPACK_IMPORTED_MODULE_3__
}, {
  name: "Retro",
  image: _images_retro_png__WEBPACK_IMPORTED_MODULE_10__,
  styles: _themes_retro_json__WEBPACK_IMPORTED_MODULE_4__
}, {
  name: "Dark",
  image: _images_dark_png__WEBPACK_IMPORTED_MODULE_11__,
  styles: _themes_dark_json__WEBPACK_IMPORTED_MODULE_5__
}, {
  name: "Night",
  image: _images_night_png__WEBPACK_IMPORTED_MODULE_12__,
  styles: _themes_night_json__WEBPACK_IMPORTED_MODULE_6__
}, {
  name: "Aubergine",
  image: _images_aubergine_png__WEBPACK_IMPORTED_MODULE_13__,
  styles: _themes_aubergine_json__WEBPACK_IMPORTED_MODULE_7__
}];
const readFile = async file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = event => resolve(event.target.result); // Since the file upload accepts only JSON, assume that this is a string
  reader.onerror = reject;
  reader.readAsText(file);
});
const themed = function (_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: "Center",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "The longitude and latitude respectively of the center of the map. Open ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://maps.google.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google Maps")), " and right click on any point to see its coordinates in decimal format."),
    id: "center-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: parseFloat(attributes.center.split(',')[0]),
    onChange: event => setAttributes({
      center: `${event.target.value},${parseFloat(attributes.center.split(',')[1])}`
    }),
    type: "number",
    step: 0.00001,
    min: -90,
    max: 90,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: '2px'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: parseFloat(attributes.center.split(',')[1]),
    onChange: event => setAttributes({
      center: `${parseFloat(attributes.center.split(',')[0])},${event.target.value}`
    }),
    type: "number",
    step: 0.00001,
    min: -180,
    max: 180,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: '2px'
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: "Select a Basic Theme",
    help: "Select from this list of basic map themes or create your own theme below.",
    id: "theme-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px'
    }
  }, themes.map(theme => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      border: "1px solid rgb(224, 224, 224)",
      cursor: "pointer"
    },
    onClick: () => setAttributes({
      styles: JSON.stringify(theme.styles)
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: theme.image,
    style: {
      display: 'block',
      borderBottom: "1px solid rgb(224, 224, 224)"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      padding: '4px',
      marginRight: 0
    }
  }, theme.name))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: "Use a JSON-Based Theme",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Create your own map theme with ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://mapstyle.withgoogle.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google's Map Styling Wizard")), " or choose from thousands of pre-made themes on ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://snazzymaps.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Snazzy Maps")), "."),
    value: attributes.styles,
    onChange: styles => setAttributes({
      styles
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Zoom",
    help: "Sets initial zoom level of the map.",
    value: attributes.zoom,
    onChange: zoom => setAttributes({
      zoom
    }),
    min: 1,
    max: 21
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: "UI Visibility",
    help: "Sets the visibility of the UI components in a themed map.",
    checked: attributes.uivisibility,
    onChange: uivisibility => setAttributes({
      uivisibility
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: "Marker Visibility",
    help: "Sets the visibility of the location marker in a themed map.",
    checked: attributes.markervisibility,
    onChange: markervisibility => setAttributes({
      markervisibility
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: "Themed Map Type",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Defines the type of map tiles to load. Some styles may not be applied when ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Hybrid"), " or ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Satellite"), " are selected."),
    selected: attributes.themedmaptype,
    options: [{
      label: 'Roadmap',
      value: 'roadmap'
    }, {
      label: 'Satellite',
      value: 'satellite'
    }, {
      label: 'Hybrid',
      value: 'hybrid'
    }, {
      label: 'Terrain',
      value: 'terrain'
    }],
    onChange: themedmaptype => setAttributes({
      themedmaptype
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (themed);

/***/ }),

/***/ "./src/map-modes/view.tsx":
/*!********************************!*\
  !*** ./src/map-modes/view.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const view = function (_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: "Center",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "The longitude and latitude respectively of the center of the map. Open ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://maps.google.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Google Maps")), " and right click on any point to see its coordinates in decimal format."),
    id: "center-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: parseFloat(attributes.center.split(',')[0]),
    onChange: event => setAttributes({
      center: `${event.target.value},${parseFloat(attributes.center.split(',')[1])}`
    }),
    type: "number",
    step: 0.00001,
    min: -90,
    max: 90,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: '2px'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: parseFloat(attributes.center.split(',')[1]),
    onChange: event => setAttributes({
      center: `${parseFloat(attributes.center.split(',')[0])},${event.target.value}`
    }),
    type: "number",
    step: 0.00001,
    min: -180,
    max: 180,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: '2px'
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Zoom",
    help: "Sets the initial zoom level of the map.",
    value: attributes.zoom,
    onChange: zoom => setAttributes({
      zoom
    }),
    min: 1,
    max: 21
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: "Map Type",
    help: "Defines the type of map tiles to load.",
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
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (view);

/***/ }),

/***/ "./src/options/languages.ts":
/*!**********************************!*\
  !*** ./src/options/languages.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
// Language options are pulled from this table: https://developers.google.com/maps/faq#languagesupport
{
  label: "Default",
  value: ""
}, {
  label: "Afrikaans",
  value: "af"
}, {
  label: "Albanian",
  value: "sq"
}, {
  label: "Amharic",
  value: "am"
}, {
  label: "Arabic",
  value: "ar"
}, {
  label: "Armenian",
  value: "hy"
}, {
  label: "Azerbaijani",
  value: "az"
}, {
  label: "Basque",
  value: "eu"
}, {
  label: "Belarusian",
  value: "be"
}, {
  label: "Bengali",
  value: "bn"
}, {
  label: "Bosnian",
  value: "bs"
}, {
  label: "Bulgarian",
  value: "bg"
}, {
  label: "Burmese",
  value: "my"
}, {
  label: "Catalan",
  value: "ca"
}, {
  label: "Chinese",
  value: "zh"
}, {
  label: "Chinese (Hong Kong)",
  value: "zh-HK"
}, {
  label: "Chinese (Simplified)",
  value: "zh-CN"
}, {
  label: "Chinese (Traditional)",
  value: "zh-TW"
}, {
  label: "Croatian",
  value: "hr"
}, {
  label: "Czech",
  value: "cs"
}, {
  label: "Danish",
  value: "da"
}, {
  label: "Dutch",
  value: "nl"
}, {
  label: "English",
  value: "en"
}, {
  label: "English (Australian)",
  value: "en-AU"
}, {
  label: "English (Great Britain)",
  value: "en-GB"
}, {
  label: "Estonian",
  value: "et"
}, {
  label: "Farsi",
  value: "fa"
}, {
  label: "Filipino",
  value: "fil"
}, {
  label: "Finnish",
  value: "fi"
}, {
  label: "French",
  value: "fr"
}, {
  label: "French (Canada)",
  value: "fr-CA"
}, {
  label: "Galician",
  value: "gl"
}, {
  label: "Georgian",
  value: "ka"
}, {
  label: "German",
  value: "de"
}, {
  label: "Greek",
  value: "el"
}, {
  label: "Gujarati",
  value: "gu"
}, {
  label: "Hebrew",
  value: "iw"
}, {
  label: "Hindi",
  value: "hi"
}, {
  label: "Hungarian",
  value: "hu"
}, {
  label: "Icelandic",
  value: "is"
}, {
  label: "Indonesian",
  value: "id"
}, {
  label: "Italian",
  value: "it"
}, {
  label: "Japanese",
  value: "ja"
}, {
  label: "Kannada",
  value: "kn"
}, {
  label: "Kazakh",
  value: "kk"
}, {
  label: "Khmer",
  value: "km"
}, {
  label: "Korean",
  value: "ko"
}, {
  label: "Kyrgyz",
  value: "ky"
}, {
  label: "Lao",
  value: "lo"
}, {
  label: "Latvian",
  value: "lv"
}, {
  label: "Lithuanian",
  value: "lt"
}, {
  label: "Macedonian",
  value: "mk"
}, {
  label: "Malay",
  value: "ms"
}, {
  label: "Malayalam",
  value: "ml"
}, {
  label: "Marathi",
  value: "mr"
}, {
  label: "Mongolian",
  value: "mn"
}, {
  label: "Nepali",
  value: "ne"
}, {
  label: "Norwegian",
  value: "no"
}, {
  label: "Polish",
  value: "pl"
}, {
  label: "Portuguese",
  value: "pt"
}, {
  label: "Portuguese (Brazil)",
  value: "pt-BR"
}, {
  label: "Portuguese (Portugal)",
  value: "pt-PT"
}, {
  label: "Punjabi",
  value: "pa"
}, {
  label: "Romanian",
  value: "ro"
}, {
  label: "Russian",
  value: "ru"
}, {
  label: "Serbian",
  value: "sr"
}, {
  label: "Sinhalese",
  value: "si"
}, {
  label: "Slovak",
  value: "sk"
}, {
  label: "Slovenian",
  value: "sl"
}, {
  label: "Spanish",
  value: "es"
}, {
  label: "Spanish (Latin America)",
  value: "es-419"
}, {
  label: "Swahili",
  value: "sw"
}, {
  label: "Swedish",
  value: "sv"
}, {
  label: "Tamil",
  value: "ta"
}, {
  label: "Telugu",
  value: "te"
}, {
  label: "Thai",
  value: "th"
}, {
  label: "Turkish",
  value: "tr"
}, {
  label: "Ukrainian",
  value: "uk"
}, {
  label: "Urdu",
  value: "ur"
}, {
  label: "Uzbek",
  value: "uz"
}, {
  label: "Vietnamese",
  value: "vi"
}, {
  label: "Zulu",
  value: "zu"
}]);

/***/ }),

/***/ "./src/options/regions.ts":
/*!********************************!*\
  !*** ./src/options/regions.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  label: "Default",
  value: ""
}, {
  label: "Afghanistan",
  value: "AF"
}, {
  label: "Åland Islands",
  value: "AX"
}, {
  label: "Albania",
  value: "AL"
}, {
  label: "Algeria",
  value: "DZ"
}, {
  label: "American Samoa",
  value: "AS"
}, {
  label: "Andorra",
  value: "AD"
}, {
  label: "Angola",
  value: "AO"
}, {
  label: "Anguilla",
  value: "AI"
}, {
  label: "Antarctica",
  value: "AQ"
}, {
  label: "Antigua & Barbuda",
  value: "AG"
}, {
  label: "Argentina",
  value: "AR"
}, {
  label: "Armenia",
  value: "AM"
}, {
  label: "Aruba",
  value: "AW"
}, {
  label: "Ascension Island",
  value: "AC"
}, {
  label: "Australia",
  value: "AU"
}, {
  label: "Austria",
  value: "AT"
}, {
  label: "Azerbaijan",
  value: "AZ"
}, {
  label: "Bahamas",
  value: "BS"
}, {
  label: "Bahrain",
  value: "BH"
}, {
  label: "Bangladesh",
  value: "BD"
}, {
  label: "Barbados",
  value: "BB"
}, {
  label: "Belarus",
  value: "BY"
}, {
  label: "Belgium",
  value: "BE"
}, {
  label: "Belize",
  value: "BZ"
}, {
  label: "Benin",
  value: "BJ"
}, {
  label: "Bermuda",
  value: "BM"
}, {
  label: "Bhutan",
  value: "BT"
}, {
  label: "Bolivia",
  value: "BO"
}, {
  label: "Bosnia & Herzegovina",
  value: "BA"
}, {
  label: "Botswana",
  value: "BW"
}, {
  label: "Bouvet Island",
  value: "BV"
}, {
  label: "Brazil",
  value: "BR"
}, {
  label: "British Indian Ocean Territory",
  value: "IO"
}, {
  label: "British Virgin Islands",
  value: "VG"
}, {
  label: "Brunei",
  value: "BN"
}, {
  label: "Bulgaria",
  value: "BG"
}, {
  label: "Burkina Faso",
  value: "BF"
}, {
  label: "Burundi",
  value: "BI"
}, {
  label: "Cambodia",
  value: "KH"
}, {
  label: "Cameroon",
  value: "CM"
}, {
  label: "Canada",
  value: "CA"
}, {
  label: "Canary Islands",
  value: "IC"
}, {
  label: "Cape Verde",
  value: "CV"
}, {
  label: "Caribbean Netherlands",
  value: "BQ"
}, {
  label: "Cayman Islands",
  value: "KY"
}, {
  label: "Central African Republic",
  value: "CF"
}, {
  label: "Ceuta & Melilla",
  value: "EA"
}, {
  label: "Chad",
  value: "TD"
}, {
  label: "Chile",
  value: "CL"
}, {
  label: "China",
  value: "CN"
}, {
  label: "Christmas Island",
  value: "CX"
}, {
  label: "Clipperton Island",
  value: "CP"
}, {
  label: "Cocos (Keeling) Islands",
  value: "CC"
}, {
  label: "Colombia",
  value: "CO"
}, {
  label: "Comoros",
  value: "KM"
}, {
  label: "Congo - Brazzaville",
  value: "CG"
}, {
  label: "Congo - Kinshasa",
  value: "CD"
}, {
  label: "Cook Islands",
  value: "CK"
}, {
  label: "Costa Rica",
  value: "CR"
}, {
  label: "Côte d’Ivoire",
  value: "CI"
}, {
  label: "Croatia",
  value: "HR"
}, {
  label: "Cuba",
  value: "CU"
}, {
  label: "Curaçao",
  value: "CW"
}, {
  label: "Cyprus",
  value: "CY"
}, {
  label: "Czechia",
  value: "CZ"
}, {
  label: "Denmark",
  value: "DK"
}, {
  label: "Diego Garcia",
  value: "DG"
}, {
  label: "Djibouti",
  value: "DJ"
}, {
  label: "Dominica",
  value: "DM"
}, {
  label: "Dominican Republic",
  value: "DO"
}, {
  label: "Ecuador",
  value: "EC"
}, {
  label: "Egypt",
  value: "EG"
}, {
  label: "El Salvador",
  value: "SV"
}, {
  label: "Equatorial Guinea",
  value: "GQ"
}, {
  label: "Eritrea",
  value: "ER"
}, {
  label: "Estonia",
  value: "EE"
}, {
  label: "Eswatini",
  value: "SZ"
}, {
  label: "Ethiopia",
  value: "ET"
}, {
  label: "Falkland Islands (Islas Malvinas)",
  value: "FK"
}, {
  label: "Faroe Islands",
  value: "FO"
}, {
  label: "Fiji",
  value: "FJ"
}, {
  label: "Finland",
  value: "FI"
}, {
  label: "France",
  value: "FR"
}, {
  label: "French Guiana",
  value: "GF"
}, {
  label: "French Polynesia",
  value: "PF"
}, {
  label: "French Southern Territories",
  value: "TF"
}, {
  label: "Gabon",
  value: "GA"
}, {
  label: "Gambia",
  value: "GM"
}, {
  label: "Georgia",
  value: "GE"
}, {
  label: "Germany",
  value: "DE"
}, {
  label: "Ghana",
  value: "GH"
}, {
  label: "Gibraltar",
  value: "GI"
}, {
  label: "Greece",
  value: "GR"
}, {
  label: "Greenland",
  value: "GL"
}, {
  label: "Grenada",
  value: "GD"
}, {
  label: "Guadeloupe",
  value: "GP"
}, {
  label: "Guam",
  value: "GU"
}, {
  label: "Guatemala",
  value: "GT"
}, {
  label: "Guernsey",
  value: "GG"
}, {
  label: "Guinea",
  value: "GN"
}, {
  label: "Guinea-Bissau",
  value: "GW"
}, {
  label: "Guyana",
  value: "GY"
}, {
  label: "Haiti",
  value: "HT"
}, {
  label: "Heard & McDonald Islands",
  value: "HM"
}, {
  label: "Honduras",
  value: "HN"
}, {
  label: "Hong Kong",
  value: "HK"
}, {
  label: "Hungary",
  value: "HU"
}, {
  label: "Iceland",
  value: "IS"
}, {
  label: "India",
  value: "IN"
}, {
  label: "Indonesia",
  value: "ID"
}, {
  label: "Iran",
  value: "IR"
}, {
  label: "Iraq",
  value: "IQ"
}, {
  label: "Ireland",
  value: "IE"
}, {
  label: "Isle of Man",
  value: "IM"
}, {
  label: "Israel",
  value: "IL"
}, {
  label: "Italy",
  value: "IT"
}, {
  label: "Jamaica",
  value: "JM"
}, {
  label: "Japan",
  value: "JP"
}, {
  label: "Jersey",
  value: "JE"
}, {
  label: "Jordan",
  value: "JO"
}, {
  label: "Kazakhstan",
  value: "KZ"
}, {
  label: "Kenya",
  value: "KE"
}, {
  label: "Kiribati",
  value: "KI"
}, {
  label: "Kosovo",
  value: "XK"
}, {
  label: "Kuwait",
  value: "KW"
}, {
  label: "Kyrgyzstan",
  value: "KG"
}, {
  label: "Laos",
  value: "LA"
}, {
  label: "Latvia",
  value: "LV"
}, {
  label: "Lebanon",
  value: "LB"
}, {
  label: "Lesotho",
  value: "LS"
}, {
  label: "Liberia",
  value: "LR"
}, {
  label: "Libya",
  value: "LY"
}, {
  label: "Liechtenstein",
  value: "LI"
}, {
  label: "Lithuania",
  value: "LT"
}, {
  label: "Luxembourg",
  value: "LU"
}, {
  label: "Macao",
  value: "MO"
}, {
  label: "Madagascar",
  value: "MG"
}, {
  label: "Malawi",
  value: "MW"
}, {
  label: "Malaysia",
  value: "MY"
}, {
  label: "Maldives",
  value: "MV"
}, {
  label: "Mali",
  value: "ML"
}, {
  label: "Malta",
  value: "MT"
}, {
  label: "Marshall Islands",
  value: "MH"
}, {
  label: "Martinique",
  value: "MQ"
}, {
  label: "Mauritania",
  value: "MR"
}, {
  label: "Mauritius",
  value: "MU"
}, {
  label: "Mayotte",
  value: "YT"
}, {
  label: "Mexico",
  value: "MX"
}, {
  label: "Micronesia",
  value: "FM"
}, {
  label: "Moldova",
  value: "MD"
}, {
  label: "Monaco",
  value: "MC"
}, {
  label: "Mongolia",
  value: "MN"
}, {
  label: "Montenegro",
  value: "ME"
}, {
  label: "Montserrat",
  value: "MS"
}, {
  label: "Morocco",
  value: "MA"
}, {
  label: "Mozambique",
  value: "MZ"
}, {
  label: "Myanmar (Burma)",
  value: "MM"
}, {
  label: "Namibia",
  value: "NA"
}, {
  label: "Nauru",
  value: "NR"
}, {
  label: "Nepal",
  value: "NP"
}, {
  label: "Netherlands",
  value: "NL"
}, {
  label: "New Caledonia",
  value: "NC"
}, {
  label: "New Zealand",
  value: "NZ"
}, {
  label: "Nicaragua",
  value: "NI"
}, {
  label: "Niger",
  value: "NE"
}, {
  label: "Nigeria",
  value: "NG"
}, {
  label: "Niue",
  value: "NU"
}, {
  label: "Norfolk Island",
  value: "NF"
}, {
  label: "North Korea",
  value: "KP"
}, {
  label: "North Macedonia",
  value: "MK"
}, {
  label: "Northern Mariana Islands",
  value: "MP"
}, {
  label: "Norway",
  value: "NO"
}, {
  label: "Oman",
  value: "OM"
}, {
  label: "Pakistan",
  value: "PK"
}, {
  label: "Palau",
  value: "PW"
}, {
  label: "Palestine",
  value: "PS"
}, {
  label: "Panama",
  value: "PA"
}, {
  label: "Papua New Guinea",
  value: "PG"
}, {
  label: "Paraguay",
  value: "PY"
}, {
  label: "Peru",
  value: "PE"
}, {
  label: "Philippines",
  value: "PH"
}, {
  label: "Pitcairn Islands",
  value: "PN"
}, {
  label: "Poland",
  value: "PL"
}, {
  label: "Portugal",
  value: "PT"
}, {
  label: "Puerto Rico",
  value: "PR"
}, {
  label: "Qatar",
  value: "QA"
}, {
  label: "Réunion",
  value: "RE"
}, {
  label: "Romania",
  value: "RO"
}, {
  label: "Russia",
  value: "RU"
}, {
  label: "Rwanda",
  value: "RW"
}, {
  label: "Samoa",
  value: "WS"
}, {
  label: "San Marino",
  value: "SM"
}, {
  label: "São Tomé & Príncipe",
  value: "ST"
}, {
  label: "Saudi Arabia",
  value: "SA"
}, {
  label: "Senegal",
  value: "SN"
}, {
  label: "Serbia",
  value: "RS"
}, {
  label: "Seychelles",
  value: "SC"
}, {
  label: "Sierra Leone",
  value: "SL"
}, {
  label: "Singapore",
  value: "SG"
}, {
  label: "Sint Maarten",
  value: "SX"
}, {
  label: "Slovakia",
  value: "SK"
}, {
  label: "Slovenia",
  value: "SI"
}, {
  label: "Solomon Islands",
  value: "SB"
}, {
  label: "Somalia",
  value: "SO"
}, {
  label: "South Africa",
  value: "ZA"
}, {
  label: "South Georgia & South Sandwich Islands",
  value: "GS"
}, {
  label: "South Korea",
  value: "KR"
}, {
  label: "South Sudan",
  value: "SS"
}, {
  label: "Spain",
  value: "ES"
}, {
  label: "Sri Lanka",
  value: "LK"
}, {
  label: "St. Barthélemy",
  value: "BL"
}, {
  label: "St. Helena",
  value: "SH"
}, {
  label: "St. Kitts & Nevis",
  value: "KN"
}, {
  label: "St. Lucia",
  value: "LC"
}, {
  label: "St. Martin",
  value: "MF"
}, {
  label: "St. Pierre & Miquelon",
  value: "PM"
}, {
  label: "St. Vincent & Grenadines",
  value: "VC"
}, {
  label: "Sudan",
  value: "SD"
}, {
  label: "Suriname",
  value: "SR"
}, {
  label: "Svalbard & Jan Mayen",
  value: "SJ"
}, {
  label: "Sweden",
  value: "SE"
}, {
  label: "Switzerland",
  value: "CH"
}, {
  label: "Syria",
  value: "SY"
}, {
  label: "Taiwan",
  value: "TW"
}, {
  label: "Tajikistan",
  value: "TJ"
}, {
  label: "Tanzania",
  value: "TZ"
}, {
  label: "Thailand",
  value: "TH"
}, {
  label: "Timor-Leste",
  value: "TL"
}, {
  label: "Togo",
  value: "TG"
}, {
  label: "Tokelau",
  value: "TK"
}, {
  label: "Tonga",
  value: "TO"
}, {
  label: "Trinidad & Tobago",
  value: "TT"
}, {
  label: "Tristan da Cunha",
  value: "TA"
}, {
  label: "Tunisia",
  value: "TN"
}, {
  label: "Turkey",
  value: "TR"
}, {
  label: "Turkmenistan",
  value: "TM"
}, {
  label: "Turks & Caicos Islands",
  value: "TC"
}, {
  label: "Tuvalu",
  value: "TV"
}, {
  label: "U.S. Outlying Islands",
  value: "UM"
}, {
  label: "U.S. Virgin Islands",
  value: "VI"
}, {
  label: "Uganda",
  value: "UG"
}, {
  label: "Ukraine",
  value: "UA"
}, {
  label: "United Arab Emirates",
  value: "AE"
}, {
  label: "United Kingdom",
  value: "GB"
}, {
  label: "United States",
  value: "US"
}, {
  label: "Uruguay",
  value: "UY"
}, {
  label: "Uzbekistan",
  value: "UZ"
}, {
  label: "Vanuatu",
  value: "VU"
}, {
  label: "Vatican City",
  value: "VA"
}, {
  label: "Venezuela",
  value: "VE"
}, {
  label: "Vietnam",
  value: "VN"
}, {
  label: "Wallis & Futuna",
  value: "WF"
}, {
  label: "Western Sahara",
  value: "EH"
}, {
  label: "Yemen",
  value: "YE"
}, {
  label: "Zambia",
  value: "ZM"
}, {
  label: "Zimbabwe",
  value: "ZW"
}]);

/***/ }),

/***/ "./src/save.tsx":
/*!**********************!*\
  !*** ./src/save.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/utilities.ts");

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, attributes.mapmode === 'themed' ? attributes.key === 'AIzaSyCRspsEADhOoOF4c2LhYKu_IAB0orV9ExA' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "You must set your own Google Maps API key and enable the Google Maps JavaScript API to use themed maps.")) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "google-maps-gutenberg-block",
    style: {
      width: '100%',
      height: `${attributes.height}px`
    },
    "data-attributes": JSON.stringify(attributes)
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.getMapUrl)(attributes),
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

/***/ "./src/utilities.ts":
/*!**************************!*\
  !*** ./src/utilities.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMapObject": function() { return /* binding */ getMapObject; },
/* harmony export */   "getMapUrl": function() { return /* binding */ getMapUrl; },
/* harmony export */   "initializeMap": function() { return /* binding */ initializeMap; }
/* harmony export */ });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");

;
const constructUrl = (acceptedParameters, atts) => {
  const url = new URL(`https://www.google.com/maps/embed/v1/${atts.mapmode}`);
  acceptedParameters.forEach(parameter => {
    const value = atts[parameter];
    if (value !== '') url.searchParams.append(parameter, typeof value === 'number' ? value.toString() : value);
  });
  return url.href;
};
const getMapUrl = atts => {
  switch (atts.mapmode) {
    case 'place':
      return constructUrl(['key', 'q', 'zoom', 'maptype', 'language', 'region'], atts);
    case 'view':
      return constructUrl(['key', 'center', 'zoom', 'maptype', 'language', 'region'], atts);
    case 'directions':
      return constructUrl(['key', 'origin', 'destination', 'mode', 'units', 'zoom', 'maptype', 'language', 'region'], atts);
    case 'streetview':
      return constructUrl(['key', 'location', 'pano', 'heading', 'pitch', 'fov', 'language', 'region'], atts);
    case 'search':
      return constructUrl(['key', 'q', 'zoom', 'maptype', 'language', 'region'], atts);
  }
  ;
};
const loadScript = url => new Promise((resolve, reject) => {
  // Create the script element and set its source
  const script = document.createElement('script');
  script.async = true;
  script.setAttribute('src', url);

  // Connect the load and error events to the promise
  script.onload = () => resolve(script);
  script.onerror = reject;

  // Load the script into the DOM
  document.body.appendChild(script);
});
const loadMapsScript = (0,memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(async (apiKey, language, region) => {
  var _window, _window$google;
  // Delete the Google Maps object from the window if it exists
  if ((_window = window) !== null && _window !== void 0 && (_window$google = _window.google) !== null && _window$google !== void 0 && _window$google.maps) console.warn('The google.maps window property was reset. This is normal in the editor, but it can indicate problems on a published page.');

  // Load the new script into the DOM, deleting out any existing identical scripts
  const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}${language ? '&language=' + language : ''}${region ? '&region=' + region : ''}`;
  await loadScript(scriptUrl);
});
const getMapObject = (0,memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(async (apiKey, element, language, region) => {
  // If a new script is needed, load it
  await loadMapsScript(apiKey, language, region);

  // Use the newly loaded script to create a map object
  return new window.google.maps.Map(element);
});
const initializeMap = (map, atts) => {
  // Define the position of the center of the map
  const center = {
    lat: parseFloat(atts.center.split(',')[0]),
    lng: parseFloat(atts.center.split(',')[1])
  };

  // Set the base options and styles
  map.setOptions({
    center,
    zoom: atts.zoom,
    mapTypeId: atts.themedmaptype,
    disableDefaultUI: !atts.uivisibility,
    styles: JSON.parse(atts.styles)
  });

  // Remove any existing markers
  if (Array.isArray(map.markers)) {
    map.markers.forEach(marker => marker.setMap(null));
    map.markers = undefined;
  }

  // Add a new marker to the center of the map if necessary
  if (atts.markervisibility) {
    var _map$markers;
    const marker = new google.maps.Marker({
      position: center,
      map
    });
    map.markers = [...((_map$markers = map.markers) !== null && _map$markers !== void 0 ? _map$markers : []), marker];
  }
  ;
};

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ memoizeOne; }
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this,
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}




/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/aubergine.png":
/*!**********************************!*\
  !*** ./src/images/aubergine.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/aubergine.81c1a402.png";

/***/ }),

/***/ "./src/images/dark.png":
/*!*****************************!*\
  !*** ./src/images/dark.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/dark.16e3b1fc.png";

/***/ }),

/***/ "./src/images/night.png":
/*!******************************!*\
  !*** ./src/images/night.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/night.3b28179d.png";

/***/ }),

/***/ "./src/images/retro.png":
/*!******************************!*\
  !*** ./src/images/retro.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/retro.42465251.png";

/***/ }),

/***/ "./src/images/silver.png":
/*!*******************************!*\
  !*** ./src/images/silver.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/silver.45cc337c.png";

/***/ }),

/***/ "./src/images/standard.png":
/*!*********************************!*\
  !*** ./src/images/standard.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/standard.17a8ee34.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"styled-google-maps-block/main-block","version":"0.1.0","title":"Styled Google Maps","category":"embed","description":"A highly-customizable Google Maps block. Supports custom themes, directions, and Google Street View.","supports":{"html":false},"textdomain":"styled-google-maps-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view-script.js","keywords":["google","maps","map","branded","style","styled","custom","customized","theme","embed","street view","directions"],"attributes":{"key":{"type":"string","default":"AIzaSyCRspsEADhOoOF4c2LhYKu_IAB0orV9ExA"},"height":{"type":"number","default":400},"mapmode":{"type":"string","default":"place","enum":["place","view","directions","streetview","search","themed"]},"q":{"type":"string","default":"Empire State Building"},"center":{"type":"string","default":"40.74841,-73.98570"},"zoom":{"type":"number","default":10},"maptype":{"type":"string","default":"roadmap","enum":["roadmap","satellite"]},"language":{"type":"string","default":""},"region":{"type":"string","default":""},"origin":{"type":"string","default":"Empire State Building"},"destination":{"type":"string","default":"Flatiron Building"},"waypoints":{"type":"string","default":""},"mode":{"type":"string","enum":["driving","walking","bicycling","transit","flying"],"default":"driving"},"avoid":{"type":"string","default":""},"units":{"type":"string","enum":["","metric","imperial"],"default":""},"location":{"type":"string","default":"40.74841,-73.98570"},"pano":{"type":"string","default":""},"heading":{"type":"number","default":0},"pitch":{"type":"number","default":0},"fov":{"type":"number","default":90},"styles":{"type":"string","default":"[]"},"themedmaptype":{"type":"string","enum":["roadmap","satellite","hybrid","terrain"],"default":"roadmap"},"uivisibility":{"type":"boolean","default":true},"markervisibility":{"type":"boolean","default":true}}}');

/***/ }),

/***/ "./src/themes/aubergine.json":
/*!***********************************!*\
  !*** ./src/themes/aubergine.json ***!
  \***********************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}]');

/***/ }),

/***/ "./src/themes/dark.json":
/*!******************************!*\
  !*** ./src/themes/dark.json ***!
  \******************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}]');

/***/ }),

/***/ "./src/themes/night.json":
/*!*******************************!*\
  !*** ./src/themes/night.json ***!
  \*******************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}]');

/***/ }),

/***/ "./src/themes/retro.json":
/*!*******************************!*\
  !*** ./src/themes/retro.json ***!
  \*******************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}]');

/***/ }),

/***/ "./src/themes/silver.json":
/*!********************************!*\
  !*** ./src/themes/silver.json ***!
  \********************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]');

/***/ }),

/***/ "./src/themes/standard.json":
/*!**********************************!*\
  !*** ./src/themes/standard.json ***!
  \**********************************/
/***/ (function(module) {

module.exports = [];

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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