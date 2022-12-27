/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./src/view-script.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.ts");

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('div.styled-google-maps-block').forEach(element => {
    const attributes = JSON.parse(element.dataset.attributes);
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.getMapObject)(attributes.key, element, attributes.language, attributes.region).then(map => (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.initializeMap)(map, attributes));
  });
});
}();
/******/ })()
;
//# sourceMappingURL=view-script.js.map