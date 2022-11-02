/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ID": function() { return /* binding */ DEFAULT_ID; },
/* harmony export */   "Loader": function() { return /* binding */ Loader; },
/* harmony export */   "LoaderStatus": function() { return /* binding */ LoaderStatus; }
/* harmony export */ });
// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    createUrl() {
        let url = this.url;
        url += `?callback=${this.CALLBACK}`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const url = this.createUrl();
        const script = document.createElement("script");
        script.id = this.id;
        script.type = "text/javascript";
        script.src = url;
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        if (this.nonce) {
            script.nonce = this.nonce;
        }
        document.head.appendChild(script);
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    setCallback() {
        window.__googleMapsCallback = this.callback.bind(this);
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setCallback();
                this.setScript();
            }
        }
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

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
  const apiKeyHelp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Please create your own API key before publishing a map. This is a Google requirement, and themed maps won't work without it."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Here's how to create your own API key:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Go to the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "restrict your API keys")), " to improve security. Google strongly recommends this.")));
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (containerRef.current) (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.getMapObject)(attributes.key, containerRef.current).then(map => (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.initializeMap)(map, attributes));
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, attributes.mapmode === 'themed' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Language",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Defines the language to use for UI elements and for the display of labels on map tiles. By default, visitors will se a map in their own language. This parameter is only supported for some country tiles; if the specific language requested is not supported for the tile set, then the default language for that tileset will be used. Choose from ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://developers.google.com/maps/faq#languagesupport",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "the language codes here")), "."),
    value: attributes.language,
    onChange: language => setAttributes({
      language
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Region",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Defines the appropriate borders and labels to display, based on geo-political sensitivities. Choose from ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://developers.google.com/maps/coverage",
      target: "_blank",
      rel: "noreferrer noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "the region codes here")), "."),
    value: attributes.region,
    onChange: region => setAttributes({
      region
    })
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

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


const streetview = function (_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
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
    help: "A specific panorama ID. If you specify a panorama ID you may also specify a location. The location will be only be used if the API cannot find the panorama ID." // TODO: Improve the documentation here
    ,
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
    label: "Select a Theme",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Select from a list of map themes or ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "http://flagstaffintegrations.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "download additional themes")), "."),
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
  }, theme.name))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    style: {
      width: '100%',
      marginTop: '8px',
      justifyContent: 'center',
      fontWeight: 700
    },
    onClick: () => window.open("http://flagstaffintegrations.com/", "_blank", "noopener noreferrer")
  }, "Get Additional Themes"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: "Upload Additional Themes",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Additional theme files can be downloaded from our ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "http://flagstaffintegrations.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "theme directory")), ". Click the button above to upload a theme and apply it to the map embed."),
    id: "theme-file-upload"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormFileUpload, {
    accept: ".json",
    style: {
      width: '100%',
      justifyContent: 'center',
      fontWeight: 700
    },
    variant: "primary",
    onChange: event => readFile(event.target.files.item(0)).then(contents => setAttributes({
      styles: contents
    }))
  }, "Upload A Theme File"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: "Theme JSON",
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Advanced users can further customize their themes using JSON. Documentation can be found ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://developers.google.com/maps/documentation/javascript/style-reference",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "here")), ". Note that misconfiguring theme JSON will cause errors."),
    value: attributes.styles,
    onChange: styles => setAttributes({
      styles
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, attributes.mapmode === 'themed' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");


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
const getMapObject = (0,memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])((apiKey, element) => new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.Loader({
  apiKey
}).load().then(() => new google.maps.Map(element)));
const initializeMap = (map, atts) => {
  // TEMPORARY
  console.log(atts);

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

/***/ "./node_modules/primeflex/primeflex.css":
/*!**********************************************!*\
  !*** ./node_modules/primeflex/primeflex.css ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/primeicons/primeicons.css":
/*!************************************************!*\
  !*** ./node_modules/primeicons/primeicons.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/primereact/resources/primereact.min.css":
/*!**************************************************************!*\
  !*** ./node_modules/primereact/resources/primereact.min.css ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/primereact/resources/themes/lara-light-indigo/theme.css":
/*!******************************************************************************!*\
  !*** ./node_modules/primereact/resources/themes/lara-light-indigo/theme.css ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/google-maps-gutenberg-block","version":"0.1.0","title":"Styled Google Maps","category":"widgets","description":"A highly-customizable Google Maps embed.","supports":{"html":false},"textdomain":"google-maps-gutenberg-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view-script.js","keywords":["google","maps","map","branded","styled","customized","embed"],"attributes":{"key":{"type":"string","default":"AIzaSyCRspsEADhOoOF4c2LhYKu_IAB0orV9ExA"},"height":{"type":"number","default":400},"mapmode":{"type":"string","default":"place","enum":["place","view","directions","streetview","search","themed"]},"q":{"type":"string","default":"Empire State Building"},"center":{"type":"string","default":"40.74841,-73.98570"},"zoom":{"type":"number","default":10},"maptype":{"type":"string","default":"roadmap","enum":["roadmap","satellite"]},"language":{"type":"string","default":""},"region":{"type":"string","default":""},"origin":{"type":"string","default":"Empire State Building"},"destination":{"type":"string","default":"Flatiron Building"},"waypoints":{"type":"string","default":""},"mode":{"type":"string","enum":["driving","walking","bicycling","transit","flying"],"default":"driving"},"avoid":{"type":"string","default":""},"units":{"type":"string","enum":["","metric","imperial"],"default":""},"location":{"type":"string","default":"40.74841,-73.98570"},"pano":{"type":"string","default":""},"heading":{"type":"number","default":0},"pitch":{"type":"number","default":0},"fov":{"type":"number","default":90},"styles":{"type":"string","default":"[]"},"themedmaptype":{"type":"string","enum":["roadmap","satellite","hybrid","terrain"],"default":"roadmap"},"uivisibility":{"type":"boolean","default":true},"markervisibility":{"type":"boolean","default":true}}}');

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