(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react/addons"));
	else if(typeof define === 'function' && define.amd)
		define(["react/addons"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react/addons")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var convertStringToClassSetObject = __webpack_require__(3);
	var mergeClassSetObjects = __webpack_require__(4);
	var classNames = __webpack_require__(5);

	var ClassNameMixin = {
	  propTypes: {
	    'className': React.PropTypes.oneOfType([
	      React.PropTypes.string,
	      React.PropTypes.object
	    ])
	  },

	  getDefaultProps: function() {
	    return {
	      'className': {}
	    };
	  },

	  getClassName: function(className) {
	    if (className === undefined) {
	      className = {};
	    }

	    if (typeof className === 'string') {
	      className = convertStringToClassSetObject(className)
	    }

	    var propClassName = this.props.className;
	    if (typeof propClassName === 'string') {
	      propClassName = convertStringToClassSetObject(propClassName)
	    }

	    var componentClassName = {};
	    if (typeof this.getComponentClassName === 'function') {
	      componentClassName = this.getComponentClassName();

	      if (typeof componentClassName === 'string') {
	        componentClassName = convertStringToClassSetObject(componentClassName)
	      }
	    }

	    var mergedClassName = mergeClassSetObjects(componentClassName, className);
	    mergedClassName = mergeClassSetObjects(mergedClassName, propClassName);

	    return classNames(mergedClassName);
	  }
	};

	module.exports = ClassNameMixin;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(classNames) {
	  var classSetObject = {};

	  classNames.split(' ').forEach(function(className) {
	    classSetObject[className] = true;
	  });

	  return classSetObject;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(baseObject, objectToMerge) {
	  var clonedObject = JSON.parse(JSON.stringify(baseObject));

	  for (className in objectToMerge ) {
	    if (objectToMerge.hasOwnProperty(className)) {
	      clonedObject[className] = objectToMerge[className];
	    }
	  }

	  return clonedObject;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}

	}());


/***/ }
/******/ ])
});
;