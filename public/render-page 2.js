(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/Users/gabmarr/Documents/Development/tfcp/node_modules/@reach/router/index.js"), require("/Users/gabmarr/Documents/Development/tfcp/node_modules/core-js/modules/web.dom.iterable.js"), require("crypto"), require("fs"), require("/Users/gabmarr/Documents/Development/tfcp/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/Users/gabmarr/Documents/Development/tfcp/node_modules/@reach/router/index.js", "/Users/gabmarr/Documents/Development/tfcp/node_modules/core-js/modules/web.dom.iterable.js", "crypto", "fs", "/Users/gabmarr/Documents/Development/tfcp/node_modules/lodash/lodash.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/Users/gabmarr/Documents/Development/tfcp/node_modules/@reach/router/index.js"), require("/Users/gabmarr/Documents/Development/tfcp/node_modules/core-js/modules/web.dom.iterable.js"), require("crypto"), require("fs"), require("/Users/gabmarr/Documents/Development/tfcp/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["/Users/gabmarr/Documents/Development/tfcp/node_modules/@reach/router/index.js"], root["/Users/gabmarr/Documents/Development/tfcp/node_modules/core-js/modules/web.dom.iterable.js"], root["crypto"], root["fs"], root["/Users/gabmarr/Documents/Development/tfcp/node_modules/lodash/lodash.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),options:{"plugins":[],"name":"the-fair-chance-project","short_name":"tfcp","start_url":"/","background_color":"#F5F0EB","theme_color":"#F5F0EB","display":"minimal-ui","icon":"src/images/favicon.png"}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=(api,args,defaultReturn,argTransform)=>{if(!apis[api]){console.log(`This API doesn't exist`,api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!==`undefined`);if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript",{key:"noscript",id:"gatsby-noscript"},"This app works best with JavaScript enabled."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
const emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, findPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{const pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
const trimmedPathname=Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname,"")// Remove any hashfragment
.split(`#`)[0]// Remove search query
.split(`?`)[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);for(const{matchPath,path}of matchPaths){if(Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["match"])(matchPath,trimmedPathname)){return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path);}}return null;};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);return foundPath;};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
const prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;const StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,staticQueryData=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!==`function`&&"production"===`development`){throw new Error(`You're likely using a version of React that doesn't support Hooks\n`+`Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);}const context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);if(context[query]&&context[query].data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,query:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,render:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: BaseLoader, ProdLoader, setLoader, publicLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=path=>{const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json`;};const doFetch=(url,method=`GET`)=>new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});const loadPageDataJson=loadObj=>{const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return doFetch(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error(`not a valid pageData response`);}return Object.assign(loadObj,{status:`success`,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath===`/404.html`){return Object.assign(loadObj,{status:`failure`});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return loadPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:`error`});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is a failure.
return Object.assign(loadObj,{status:`error`});});};const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator&&typeof navigator.connection!==`undefined`){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};const toPageResources=(pageData,component=null)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: `success` || `error`,
//   payload: PageResources, // undefined if `error`
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["setMatchPaths"])(matchPaths);}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}loadPageDataJson(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return loadPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findMatchPath"])(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlight=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(allData=>{const result=allData[1];if(result.status===`error`){return{status:`error`};}if(result.status===`failure`){// throw an error so error trackers can pick this up
throw new Error(`404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/`);}let pageData=result.payload;const{componentChunkName}=pageData;return this.loadComponent(componentChunkName).then(component=>{const finalResult={createdAt:new Date()};let pageResources;if(!component){finalResult.status=`error`;}else{finalResult.status=`success`;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:``});pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`,{page:pageResources,pageResources});}this.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});})// prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
.then(response=>{this.inFlightDb.delete(pagePath);return response;}).catch(err=>{this.inFlightDb.delete(pagePath);throw err;});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
loadPageSync(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}const realPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}});return true;}doPrefetch(pagePath){throw new Error(`doPrefetch not implemented`);}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}}isPageNotFound(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDb.get(pagePath);return page&&page.notFound===true;}loadAppData(retries=0){return doFetch(`${""}/page-data/app-data.json`).then(req=>{const{status,responseText}=req;let appData;if(status!==200&&retries<3){// Retry 3 times incase of failures
return this.loadAppData(retries+1);}// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid app-data response`);}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});}}const createComponentUrls=componentChunkName=>window.___chunkMapping[componentChunkName].map(chunk=>""+chunk);class ProdLoader extends BaseLoader{constructor(asyncRequires,matchPaths){const loadComponent=chunkName=>asyncRequires.components[chunkName]().then(preferDefault);super(loadComponent,matchPaths);}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return Object(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl,{crossOrigin:`anonymous`,as:`fetch`}).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath)).then(result=>{if(result.status!==`success`){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(()=>pageData);});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:rawPath=>{console.warn(`Warning: getResourcesForPathname is deprecated. Use loadPage instead`);return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:rawPath=>{console.warn(`Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`);return instance.i.loadPageSync(rawPath);},enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),loadPageSync:rawPath=>instance.loadPageSync(rawPath),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath),loadAppData:()=>instance.loadAppData()};/* harmony default export */ __webpack_exports__["default"] = (publicLoader);

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (path=>{if(path===undefined){return path;}if(path===`/`){return`/`;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1);}return path;});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url,options){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);Object.keys(options).forEach(key=>{link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url,options){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: sanitizeComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponents", function() { return sanitizeComponents; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}const React=__webpack_require__(/*! react */ "react");const fs=__webpack_require__(/*! fs */ "fs");const{join}=__webpack_require__(/*! path */ "path");const{renderToString,renderToStaticMarkup}=__webpack_require__(/*! react-dom/server */ "react-dom/server");const{ServerLocation,Router,isRedirect}=__webpack_require__(/*! @reach/router */ "@reach/router");const{get,merge,isObject,flatten,uniqBy,flattenDeep,replace}=__webpack_require__(/*! lodash */ "lodash");const apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");const syncRequires=__webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");const{version:gatsbyVersion}=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json");const stats=JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`,`utf-8`));const chunkMapping=JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`,`utf-8`));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getPageDataFile=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return join(process.cwd(),`public`,pageDataPath);};const loadPageDataSync=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=ensureArray(components);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(false){}return component;});};const ensureArray=components=>{if(Array.isArray(components)){// remove falsy items and flatten
return flattenDeep(components.filter(val=>Array.isArray(val)?val.length>0:val));}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = ((pagePath,callback)=>{var _postBodyComponents;let bodyHtml=``;let headComponents=[React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{htmlAttributes=merge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{bodyAttributes=merge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{bodyProps=merge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageDataRaw=fs.readFileSync(getPageDataFile(pagePath));const pageData=JSON.parse(pageDataRaw);const pageDataUrl=getPageDataUrl(pagePath);const{componentChunkName}=pageData;class RouteHandler extends React.Component{render(){const props={...this.props,...pageData.result,// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined};const pageElement=createElement(syncRequires.components[componentChunkName],props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=createElement(ServerLocation,{url:`${""}${pagePath}`},createElement(Router,{id:`gatsby-focus-wrapper`,baseuri:`${""}`},createElement(RouteHandler,{path:`/*`})));const bodyComponent=apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
let scriptsAndStyles=flatten([`app`,componentChunkName].map(s=>{const fetchKey=`assetsByChunkName[${s}]`;let chunks=get(stats,fetchKey);let namedChunkGroups=get(stats,`namedChunkGroups`);if(!chunks){return null;}chunks=chunks.map(chunk=>{if(chunk===`/`){return null;}return{rel:`preload`,name:chunk};});namedChunkGroups[s].assets.forEach(asset=>chunks.push({rel:`preload`,name:asset}));const childAssets=namedChunkGroups[s].childAssets;for(const rel in childAssets){chunks=merge(chunks,childAssets[rel].map(chunk=>{return{rel,name:chunk};}));}return chunks;})).filter(s=>isObject(s)).sort((s1,s2)=>s1.rel==`preload`?-1:1);// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,item=>item.name);const scripts=scriptsAndStyles.filter(script=>script.name&&script.name.endsWith(`.js`));const styles=scriptsAndStyles.filter(style=>style.name&&style.name.endsWith(`.css`));apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});scripts.slice(0).reverse().forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push(React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData){headComponents.push(React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}styles.slice(0).reverse().forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(React.createElement("style",{"data-href":`${""}/${style.name}`,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),`public`,style.name),`utf-8`)}}));}});// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";/*]]>*/`;postBodyComponents.push(React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
const bodyScripts=scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return React.createElement("script",{key:scriptPath,src:scriptPath,async:true});});(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,_toConsumableArray(bodyScripts));apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;callback(null,html);});

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["default"] = ((str,prefix=``)=>{if(!prefix){return str;}prefix+=`/`;if(str.substr(0,prefix.length)===prefix){return str.slice(prefix.length-1);}return str;});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const{hot}=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");// prefer default export if available
const preferDefault=m=>m&&m.default||m;exports.components={"component---src-pages-404-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),"component---src-pages-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")))};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;

/***/ }),

/***/ "./node_modules/React/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/React/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113;n&&Symbol.for("react.suspense_list");
var z=n?Symbol.for("react.memo"):60115,aa=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");n&&Symbol.for("react.scope");var A="function"===typeof Symbol&&Symbol.iterator;
function B(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(B(85));this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}var H=G.prototype=new F;
H.constructor=G;h(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,l=null;if(null!=b)for(e in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];d.children=k}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:l,props:d,_owner:J.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,e){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){d=a[l];var f=b+T(d,l);g+=S(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
0;!(d=a.next()).done;)d=d.value,f=b+T(d,l++),g+=S(d,f,c,e);else if("object"===d)throw c=""+a,Error(B(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,e,c,function(a){return a}):null!=a&&(N(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),e.push(a))}function V(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,e,d);U(a,da,b);R(b)}function W(){var a=I.current;if(null===a)throw Error(B(321));return a}
var X={Children:{map:function(a,b,c){if(null==a)return a;var e=[];V(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ca,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(B(143));return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(B(267,a));var e=h({},a.props),d=a.key,g=a.ref,l=a._owner;
if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(e[k]=void 0===b[k]&&void 0!==f?f[k]:b[k])}var k=arguments.length-2;if(1===k)e.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.12.0",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),

/***/ "./node_modules/React/index.js":
/*!*************************************!*\
  !*** ./node_modules/React/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */ "./node_modules/React/cjs/react.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/ci-info/index.js":
/*!***************************************!*\
  !*** ./node_modules/ci-info/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vendors = __webpack_require__(/*! ./vendors.json */ "./node_modules/ci-info/vendors.json")

var env = {}

// Used for testing only
Object.defineProperty(exports, '_vendors', {
  value: vendors.map(function (v) { return v.constant })
})

exports.name = null
exports.isPR = null

vendors.forEach(function (vendor) {
  var envs = Array.isArray(vendor.env) ? vendor.env : [vendor.env]
  var isCI = envs.every(function (obj) {
    return checkEnv(obj)
  })

  exports[vendor.constant] = isCI

  if (isCI) {
    exports.name = vendor.name

    switch (typeof vendor.pr) {
      case 'string':
        // "pr": "CIRRUS_PR"
        exports.isPR = !!env[vendor.pr]
        break
      case 'object':
        if ('env' in vendor.pr) {
          // "pr": { "env": "BUILDKITE_PULL_REQUEST", "ne": "false" }
          exports.isPR = vendor.pr.env in env && env[vendor.pr.env] !== vendor.pr.ne
        } else if ('any' in vendor.pr) {
          // "pr": { "any": ["ghprbPullId", "CHANGE_ID"] }
          exports.isPR = vendor.pr.any.some(function (key) {
            return !!env[key]
          })
        } else {
          // "pr": { "DRONE_BUILD_EVENT": "pull_request" }
          exports.isPR = checkEnv(vendor.pr)
        }
        break
      default:
        // PR detection not supported for this vendor
        exports.isPR = null
    }
  }
})

exports.isCI = !!(
  env.CI || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari
  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI
  env.BUILD_NUMBER || // Jenkins, TeamCity
  env.RUN_ID || // TaskCluster, dsari
  exports.name ||
  false
)

function checkEnv (obj) {
  if (typeof obj === 'string') return !!env[obj]
  return Object.keys(obj).every(function (k) {
    return env[k] === obj[k]
  })
}


/***/ }),

/***/ "./node_modules/ci-info/vendors.json":
/*!*******************************************!*\
  !*** ./node_modules/ci-info/vendors.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"AppVeyor\",\"constant\":\"APPVEYOR\",\"env\":\"APPVEYOR\",\"pr\":\"APPVEYOR_PULL_REQUEST_NUMBER\"},{\"name\":\"Azure Pipelines\",\"constant\":\"AZURE_PIPELINES\",\"env\":\"SYSTEM_TEAMFOUNDATIONCOLLECTIONURI\",\"pr\":\"SYSTEM_PULLREQUEST_PULLREQUESTID\"},{\"name\":\"Bamboo\",\"constant\":\"BAMBOO\",\"env\":\"bamboo_planKey\"},{\"name\":\"Bitbucket Pipelines\",\"constant\":\"BITBUCKET\",\"env\":\"BITBUCKET_COMMIT\",\"pr\":\"BITBUCKET_PR_ID\"},{\"name\":\"Bitrise\",\"constant\":\"BITRISE\",\"env\":\"BITRISE_IO\",\"pr\":\"BITRISE_PULL_REQUEST\"},{\"name\":\"Buddy\",\"constant\":\"BUDDY\",\"env\":\"BUDDY_WORKSPACE_ID\",\"pr\":\"BUDDY_EXECUTION_PULL_REQUEST_ID\"},{\"name\":\"Buildkite\",\"constant\":\"BUILDKITE\",\"env\":\"BUILDKITE\",\"pr\":{\"env\":\"BUILDKITE_PULL_REQUEST\",\"ne\":\"false\"}},{\"name\":\"CircleCI\",\"constant\":\"CIRCLE\",\"env\":\"CIRCLECI\",\"pr\":\"CIRCLE_PULL_REQUEST\"},{\"name\":\"Cirrus CI\",\"constant\":\"CIRRUS\",\"env\":\"CIRRUS_CI\",\"pr\":\"CIRRUS_PR\"},{\"name\":\"AWS CodeBuild\",\"constant\":\"CODEBUILD\",\"env\":\"CODEBUILD_BUILD_ARN\"},{\"name\":\"Codeship\",\"constant\":\"CODESHIP\",\"env\":{\"CI_NAME\":\"codeship\"}},{\"name\":\"Drone\",\"constant\":\"DRONE\",\"env\":\"DRONE\",\"pr\":{\"DRONE_BUILD_EVENT\":\"pull_request\"}},{\"name\":\"dsari\",\"constant\":\"DSARI\",\"env\":\"DSARI\"},{\"name\":\"GitLab CI\",\"constant\":\"GITLAB\",\"env\":\"GITLAB_CI\"},{\"name\":\"GoCD\",\"constant\":\"GOCD\",\"env\":\"GO_PIPELINE_LABEL\"},{\"name\":\"Hudson\",\"constant\":\"HUDSON\",\"env\":\"HUDSON_URL\"},{\"name\":\"Jenkins\",\"constant\":\"JENKINS\",\"env\":[\"JENKINS_URL\",\"BUILD_ID\"],\"pr\":{\"any\":[\"ghprbPullId\",\"CHANGE_ID\"]}},{\"name\":\"Magnum CI\",\"constant\":\"MAGNUM\",\"env\":\"MAGNUM\"},{\"name\":\"Netlify CI\",\"constant\":\"NETLIFY\",\"env\":\"NETLIFY_BUILD_BASE\",\"pr\":{\"env\":\"PULL_REQUEST\",\"ne\":\"false\"}},{\"name\":\"Sail CI\",\"constant\":\"SAIL\",\"env\":\"SAILCI\",\"pr\":\"SAIL_PULL_REQUEST_NUMBER\"},{\"name\":\"Semaphore\",\"constant\":\"SEMAPHORE\",\"env\":\"SEMAPHORE\",\"pr\":\"PULL_REQUEST_NUMBER\"},{\"name\":\"Shippable\",\"constant\":\"SHIPPABLE\",\"env\":\"SHIPPABLE\",\"pr\":{\"IS_PULL_REQUEST\":\"true\"}},{\"name\":\"Solano CI\",\"constant\":\"SOLANO\",\"env\":\"TDDIUM\",\"pr\":\"TDDIUM_PR_ID\"},{\"name\":\"Strider CD\",\"constant\":\"STRIDER\",\"env\":\"STRIDER\"},{\"name\":\"TaskCluster\",\"constant\":\"TASKCLUSTER\",\"env\":[\"TASK_ID\",\"RUN_ID\"]},{\"name\":\"TeamCity\",\"constant\":\"TEAMCITY\",\"env\":\"TEAMCITY_VERSION\"},{\"name\":\"Travis CI\",\"constant\":\"TRAVIS\",\"env\":\"TRAVIS\",\"pr\":{\"env\":\"TRAVIS_PULL_REQUEST\",\"ne\":\"false\"}}]");

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/ci.js":
/*!***************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/ci.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const ci=__webpack_require__(/*! ci-info */ "./node_modules/ci-info/index.js");const CI_DEFINITIONS=[envFromCIandCIName,getEnvDetect({key:`NOW_BUILDER_ANNOTATE`,name:`ZEIT Now`}),getEnvDetect({key:`NOW_REGION`,name:`ZEIT Now v1`}),herokuDetect,getEnvFromCIInfo,envFromCIWithNoName];function lookupCI(){for(const fn of CI_DEFINITIONS){try{const res=fn();if(res){return res;}}catch(e){// ignore
}}return null;}const CIName=lookupCI();function isCI(){return!!CIName;}function getCIName(){if(!isCI()){return null;}return CIName;}module.exports={isCI,getCIName};function getEnvFromCIInfo(){if(ci.isCI)return ci.name||`ci-info detected w/o name`;return null;}function getEnvDetect({key,name}){return function(){if({}[key]){return name;}return null;};}function herokuDetect(){return /\.heroku\/node\/bin\/node/.test({}.NODE)&&`Heroku`;}function envFromCIandCIName(){if({}.CI_NAME&&{}.CI){return {}.CI_NAME;}return null;}function envFromCIWithNoName(){if({}.CI){return`CI detected without name`;}return null;}

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/cpu-core-count.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/cpu-core-count.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @type {import('../index').cpuCoreCount}
 */const cpuCoreCount=ignoreEnvVar=>{try{let coreCount=__webpack_require__(/*! ./physical-cpu-count */ "./node_modules/gatsby-core-utils/dist/physical-cpu-count.js")||1;if(ignoreEnvVar){// Return the physical CPU count,
// or default to 1 if we can't detect
return coreCount;}if(typeof {}.GATSBY_CPU_COUNT!==`undefined`){const coreCountArg=Number({}.GATSBY_CPU_COUNT)||{}.GATSBY_CPU_COUNT;switch(typeof coreCountArg){case`string`:// Leave at Default CPU count if coreCountArg === `physical_cores`
// CPU count === logical CPU count
// throw error if we have a problem counting logical cores
if(coreCountArg===`logical_cores`){coreCount=__webpack_require__(/*! os */ "os").cpus().length;if(typeof coreCount!==`number`){throw new Error(`process.env.GATSBY_CPU_COUNT is set to 'logical_cores' but there was a problem finding the number of logical cores`);}}break;case`number`:// CPU count === passed in count
coreCount=coreCountArg;break;default:break;}}return coreCount;}catch(err){throw new Error(`There has been a problem counting the number of CPU cores`);}};module.exports=cpuCoreCount;

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/create-content-digest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/create-content-digest.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const crypto=__webpack_require__(/*! crypto */ "crypto");/**
 * @type {import('../index').createContentDigest}
 */const createContentDigest=input=>{const content=typeof input!==`string`?JSON.stringify(input):input;return crypto.createHash(`md5`).update(content).digest(`hex`);};module.exports=createContentDigest;

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.createContentDigest=__webpack_require__(/*! ./create-content-digest */ "./node_modules/gatsby-core-utils/dist/create-content-digest.js");exports.joinPath=__webpack_require__(/*! ./path */ "./node_modules/gatsby-core-utils/dist/path.js").joinPath;exports.isNodeInternalModulePath=__webpack_require__(/*! ./path */ "./node_modules/gatsby-core-utils/dist/path.js").isNodeInternalModulePath;exports.cpuCoreCount=__webpack_require__(/*! ./cpu-core-count */ "./node_modules/gatsby-core-utils/dist/cpu-core-count.js");exports.urlResolve=__webpack_require__(/*! ./url */ "./node_modules/gatsby-core-utils/dist/url.js").resolve;exports.isCI=__webpack_require__(/*! ./ci */ "./node_modules/gatsby-core-utils/dist/ci.js").isCI;exports.getCIName=__webpack_require__(/*! ./ci */ "./node_modules/gatsby-core-utils/dist/ci.js").getCIName;

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.joinPath=joinPath;exports.isNodeInternalModulePath=void 0;const path=__webpack_require__(/*! path */ "path");const os=__webpack_require__(/*! os */ "os");/**
 * @type {import('../index').joinPath}
 */function joinPath(...paths){const joinedPath=path.join.apply(path,paths);if(os.platform()===`win32`){return joinedPath.replace(/\\/g,`\\\\`);}return joinedPath;}// copied from https://runpkg.com/?pretty-error@2.1.1/lib/nodePaths.js
// and added `^internal/` test
const nodePaths=[/^_debugger.js$/,/^_http_agent.js$/,/^_http_client.js$/,/^_http_common.js$/,/^_http_incoming.js$/,/^_http_outgoing.js$/,/^_http_server.js$/,/^_linklist.js$/,/^_stream_duplex.js$/,/^_stream_passthrough.js$/,/^_stream_readable.js$/,/^_stream_transform.js$/,/^_stream_writable.js$/,/^_tls_legacy.js$/,/^_tls_wrap.js$/,/^assert.js$/,/^buffer.js$/,/^child_process.js$/,/^cluster.js$/,/^console.js$/,/^constants.js$/,/^crypto.js$/,/^dgram.js$/,/^dns.js$/,/^domain.js$/,/^events.js$/,/^freelist.js$/,/^fs.js$/,/^http.js$/,/^https.js$/,/^module.js$/,/^net.js$/,/^os.js$/,/^path.js$/,/^punycode.js$/,/^querystring.js$/,/^readline.js$/,/^repl.js$/,/^smalloc.js$/,/^stream.js$/,/^string_decoder.js$/,/^sys.js$/,/^timers.js$/,/^tls.js$/,/^tty.js$/,/^url.js$/,/^util.js$/,/^vm.js$/,/^zlib.js$/,/^node.js$/,/^internal[/\\]/];/**
 * @type {import('../index').isNodeInternalModulePath}
 */const isNodeInternalModulePath=fileName=>nodePaths.some(regTest=>regTest.test(fileName));exports.isNodeInternalModulePath=isNodeInternalModulePath;

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/physical-cpu-count.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/physical-cpu-count.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Forked from physical-cpu-count package from npm
const os=__webpack_require__(/*! os */ "os");const childProcess=__webpack_require__(/*! child_process */ "child_process");function exec(command){const output=childProcess.execSync(command,{encoding:`utf8`});return output;}/*
 * Fallback if child process fails to receive CPU count
 */function fallbackToNodeJSCheck(){const cores=os.cpus().filter(function(cpu,index){const hasHyperthreading=cpu.model.includes(`Intel`);const isOdd=index%2===1;return!hasHyperthreading||isOdd;});return cores.length;}const platform=os.platform();function getPhysicalCpuCount(){try{if(platform===`linux`){const output=exec(`lscpu -p | egrep -v "^#" | sort -u -t, -k 2,4 | wc -l`);return Number(output.trim());}if(platform===`darwin`){const output=exec(`sysctl -n hw.physicalcpu_max`);return Number(output.trim());}if(platform===`win32`){const output=exec(`WMIC CPU Get NumberOfCores`);return output.replace(/\r/g,``).split(`\n`).map(line=>Number(line)).filter(value=>!isNaN(value)).reduce((sum,number)=>sum+number,0);}}catch(err){// carry on
}return fallbackToNodeJSCheck();}module.exports=getPhysicalCpuCount();

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/url.js":
/*!****************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/url.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.resolve=resolve;const path=__webpack_require__(/*! path */ "path");const os=__webpack_require__(/*! os */ "os");/**
 * @type {import('../index').urlResolve}
 */function resolve(...segments){const joinedPath=path.join.apply(path,segments);if(os.platform()===`win32`){return joinedPath.replace(/\\/g,`/`);}return joinedPath;}

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports["default"]=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2["default"])({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string}[], fixed: {src: string}[]}} args
 * @return {string}
 */var getImageSrcKey=function getImageSrcKey(_ref){var fluid=_ref.fluid,fixed=_ref.fixed;var data=fluid&&fluid[0]||fixed&&fixed[0];return data.src;};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);return imageCache[src]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);imageCache[src]=true;};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners["delete"](entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref2){var src=_ref2.src,srcSet=_ref2.srcSet,srcSetWebp=_ref2.srcSetWebp,media=_ref2.media,sizes=_ref2.sizes;return _react["default"].createElement(_react["default"].Fragment,{key:src},srcSetWebp&&_react["default"].createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),_react["default"].createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){console.warn("We've found "+without.length+" sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,media=_ref3.media,tracedSVG=_ref3.tracedSVG;return _react["default"].createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,base64=_ref4.base64;return _react["default"].createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref5,isWebp){var srcSet=_ref5.srcSet,srcSetWebp=_ref5.srcSetWebp,media=_ref5.media,sizes=_ref5.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners["delete"](el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=function Placeholder(_ref6){var src=_ref6.src,imageVariants=_ref6.imageVariants,generateSources=_ref6.generateSources,spreadProps=_ref6.spreadProps;var baseImage=_react["default"].createElement(Img,(0,_extends2["default"])({src:src},spreadProps));return imageVariants.length>1?_react["default"].createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;};var Img=_react["default"].forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,otherProps=(0,_objectWithoutPropertiesLoose2["default"])(props,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return _react["default"].createElement("img",(0,_extends2["default"])({sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2["default"])({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes["default"].object,onError:_propTypes["default"].func,onLoad:_propTypes["default"].func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2["default"])(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn};_this.imageRef=_react["default"].createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2["default"])(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2["default"])(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){return _this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
imgCached:!!_this2.imageRef.current.currentSrc});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2["default"])({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2["default"])({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,{},imgStyle,{},placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};if(fluid){var imageVariants=fluid;var image=imageVariants[0];return _react["default"].createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2["default"])({position:"relative",overflow:"hidden"},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},_react["default"].createElement(Tag,{style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&_react["default"].createElement(Tag,{title:title,style:(0,_extends2["default"])({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&_react["default"].createElement(Placeholder,{src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&_react["default"].createElement(Placeholder,{src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&_react["default"].createElement("picture",null,generateImageSources(imageVariants),_react["default"].createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&_react["default"].createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2["default"])({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var _imageVariants=fixed;var _image=_imageVariants[0];var divStyle=(0,_extends2["default"])({position:"relative",overflow:"hidden",display:"inline-block",width:_image.width,height:_image.height},style);if(style.display==="inherit"){delete divStyle.display;}return _react["default"].createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(_image.srcSet)},bgColor&&_react["default"].createElement(Tag,{title:title,style:(0,_extends2["default"])({backgroundColor:bgColor,width:_image.width,opacity:!this.state.imgLoaded?1:0,height:_image.height},shouldFadeIn&&delayHideStyle)}),_image.base64&&_react["default"].createElement(Placeholder,{src:_image.base64,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateBase64Sources}),_image.tracedSVG&&_react["default"].createElement(Placeholder,{src:_image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&_react["default"].createElement("picture",null,generateImageSources(_imageVariants),_react["default"].createElement(Img,{alt:alt,title:title,width:_image.width,height:_image.height,sizes:_image.sizes,src:_image.src,crossOrigin:this.props.crossOrigin,srcSet:_image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&_react["default"].createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2["default"])({alt:alt,title:title,loading:loading},_image,{imageVariants:_imageVariants}))}}));}return null;};return Image;}(_react["default"].Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes["default"].shape({width:_propTypes["default"].number.isRequired,height:_propTypes["default"].number.isRequired,src:_propTypes["default"].string.isRequired,srcSet:_propTypes["default"].string.isRequired,base64:_propTypes["default"].string,tracedSVG:_propTypes["default"].string,srcWebp:_propTypes["default"].string,srcSetWebp:_propTypes["default"].string,media:_propTypes["default"].string});var fluidObject=_propTypes["default"].shape({aspectRatio:_propTypes["default"].number.isRequired,src:_propTypes["default"].string.isRequired,srcSet:_propTypes["default"].string.isRequired,sizes:_propTypes["default"].string.isRequired,base64:_propTypes["default"].string,tracedSVG:_propTypes["default"].string,srcWebp:_propTypes["default"].string,srcSetWebp:_propTypes["default"].string,media:_propTypes["default"].string});// If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props
Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:_propTypes["default"].oneOfType([fixedObject,_propTypes["default"].arrayOf(fixedObject)]),fluid:_propTypes["default"].oneOfType([fluidObject,_propTypes["default"].arrayOf(fluidObject)]),fadeIn:_propTypes["default"].bool,durationFadeIn:_propTypes["default"].number,title:_propTypes["default"].string,alt:_propTypes["default"].string,className:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].object]),// Support Glamor's css prop.
critical:_propTypes["default"].bool,crossOrigin:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].bool]),style:_propTypes["default"].object,imgStyle:_propTypes["default"].object,placeholderStyle:_propTypes["default"].object,placeholderClassName:_propTypes["default"].string,backgroundColor:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].bool]),onLoad:_propTypes["default"].func,onError:_propTypes["default"].func,onStartLoad:_propTypes["default"].func,Tag:_propTypes["default"].string,itemProp:_propTypes["default"].string,loading:_propTypes["default"].oneOf(["auto","lazy","eager"]),draggable:_propTypes["default"].bool};var _default=Image;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes["default"].string,
  activeStyle: _propTypes["default"].object,
  partiallyActive: _propTypes["default"].bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2["default"])({}, _this.props.style, {}, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react["default"].createElement(_router.Link, (0, _extends2["default"])({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react["default"].Component);

GatsbyLink.propTypes = (0, _extends2["default"])({}, NavLinkPropTypes, {
  onClick: _propTypes["default"].func,
  to: _propTypes["default"].string.isRequired,
  replace: _propTypes["default"].bool
});

var showDeprecationWarning = function showDeprecationWarning(functionName, altFunctionName, version) {
  return console.warn("The \"" + functionName + "\" method is now deprecated and will be removed in Gatsby v" + version + ". Please use \"" + altFunctionName + "\" instead.");
};

var _default = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement(GatsbyLink, (0, _extends2["default"])({
    innerRef: ref
  }, props));
});

exports["default"] = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  showDeprecationWarning("push", "navigate", 3);

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  showDeprecationWarning("replace", "navigate", 3);

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  showDeprecationWarning("navigateTo", "navigate", 3);
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _path=_interopRequireDefault(__webpack_require__(/*! path */ "path"));// default icons for generating icons
exports.defaultIcons=[{src:"icons/icon-48x48.png",sizes:"48x48",type:"image/png"},{src:"icons/icon-72x72.png",sizes:"72x72",type:"image/png"},{src:"icons/icon-96x96.png",sizes:"96x96",type:"image/png"},{src:"icons/icon-144x144.png",sizes:"144x144",type:"image/png"},{src:"icons/icon-192x192.png",sizes:"192x192",type:"image/png"},{src:"icons/icon-256x256.png",sizes:"256x256",type:"image/png"},{src:"icons/icon-384x384.png",sizes:"384x384",type:"image/png"},{src:"icons/icon-512x512.png",sizes:"512x512",type:"image/png"}];/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */exports.doesIconExist=function doesIconExist(srcIcon){try{return _fs["default"].statSync(srcIcon).isFile();}catch(e){if(e.code!=="ENOENT"){throw e;}return false;}};/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */exports.addDigestToPath=function(path,digest,method){if(method==="name"){var parsedPath=_path["default"].parse(path);return parsedPath.dir+"/"+parsedPath.name+"-"+digest+parsedPath.ext;}if(method==="query"){return path+"?v="+digest;}return path;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _gatsbyCoreUtils=__webpack_require__(/*! gatsby-core-utils */ "./node_modules/gatsby-core-utils/dist/index.js");var _common=__webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");var _getManifestPathname=_interopRequireDefault(__webpack_require__(/*! ./get-manifest-pathname */ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js"));// TODO: remove for v3
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;var iconDigest=null;exports.onRenderBody=function(_ref,_ref2){var setHeadComponents=_ref.setHeadComponents,_ref$pathname=_ref.pathname,pathname=_ref$pathname===void 0?"/":_ref$pathname;var localize=_ref2.localize,pluginOptions=(0,_objectWithoutPropertiesLoose2["default"])(_ref2,["localize"]);// We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
var headComponents=[];var srcIconExists=!!pluginOptions.icon;var icons=pluginOptions.icons||_common.defaultIcons;var legacy=typeof pluginOptions.legacy!=="undefined"?pluginOptions.legacy:true;var cacheBusting=typeof pluginOptions.cache_busting_mode!=="undefined"?pluginOptions.cache_busting_mode:"query";// If icons were generated, also add a favicon link.
if(srcIconExists){var favicon=icons&&icons.length?icons[0].src:null;if(cacheBusting!=="none"){iconDigest=(0,_gatsbyCoreUtils.createContentDigest)(_fs["default"].readFileSync(pluginOptions.icon));}var insertFaviconLinkTag=typeof pluginOptions.include_favicon!=="undefined"?pluginOptions.include_favicon:true;if(favicon&&insertFaviconLinkTag){headComponents.push(_react["default"].createElement("link",{key:"gatsby-plugin-manifest-icon-link",rel:"icon",href:withPrefix((0,_common.addDigestToPath)(favicon,iconDigest,cacheBusting))}));}}var manifestFileName=(0,_getManifestPathname["default"])(pathname,localize);// Add manifest link tag.
headComponents.push(_react["default"].createElement("link",{key:"gatsby-plugin-manifest-link",rel:"manifest",href:withPrefix("/"+manifestFileName),crossOrigin:pluginOptions.crossOrigin}));// The user has an option to opt out of the theme_color meta tag being inserted into the head.
if(pluginOptions.theme_color){var insertMetaTag=typeof pluginOptions.theme_color_in_head!=="undefined"?pluginOptions.theme_color_in_head:true;if(insertMetaTag){headComponents.push(_react["default"].createElement("meta",{key:"gatsby-plugin-manifest-meta",name:"theme-color",content:pluginOptions.theme_color}));}}if(legacy){var iconLinkTags=icons.map(function(icon){return _react["default"].createElement("link",{key:"gatsby-plugin-manifest-apple-touch-icon-"+icon.sizes,rel:"apple-touch-icon",sizes:icon.sizes,href:withPrefix((0,_common.addDigestToPath)(icon.src,iconDigest,srcIconExists?cacheBusting:"none"))});});headComponents=[].concat(headComponents,iconLinkTags);}setHeadComponents(headComponents);return true;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports["default"]=void 0;/**
 * Get a manifest filename depending on localized pathname
 *
 * @param {string} pathname
 * @param {Array<{start_url: string, lang: string}>} localizedManifests
 * @return string
 */var _default=function _default(pathname,localizedManifests){var defaultFilename="manifest.webmanifest";if(!Array.isArray(localizedManifests)){return defaultFilename;}var localizedManifest=localizedManifests.find(function(app){return pathname.startsWith(app.start_url);});if(!localizedManifest){return defaultFilename;}return"manifest_"+localizedManifest.lang+".webmanifest";};exports["default"]=_default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onRenderBody=void 0;var _reactHelmet=__webpack_require__(/*! react-helmet */ "react-helmet");var onRenderBody=function onRenderBody(_ref){var setHeadComponents=_ref.setHeadComponents,setHtmlAttributes=_ref.setHtmlAttributes,setBodyAttributes=_ref.setBodyAttributes;var helmet=_reactHelmet.Helmet.renderStatic();// These action functions were added partway through the Gatsby 1.x cycle.
if(setHtmlAttributes){setHtmlAttributes(helmet.htmlAttributes.toComponent());}if(setBodyAttributes){setBodyAttributes(helmet.bodyAttributes.toComponent());}setHeadComponents([helmet.title.toComponent(),helmet.link.toComponent(),helmet.meta.toComponent(),helmet.noscript.toComponent(),helmet.script.toComponent(),helmet.style.toComponent(),helmet.base.toComponent()]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bin, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"gatsby@^2.15.21\",\"_id\":\"gatsby@2.17.15\",\"_inBundle\":false,\"_integrity\":\"sha512-Y1brPZgrJp9Ov4sFRjI4pyQNfZP3bGWQLFzFjJK6BXe3dqwDwRO5vCDjSZCSOgO3NT0/+/cTUdO+OVU9wgitkQ==\",\"_location\":\"/gatsby\",\"_phantomChildren\":{\"@babel/code-frame\":\"7.5.5\",\"@babel/runtime\":\"7.7.2\",\"@hapi/joi\":\"15.1.1\",\"better-opn\":\"1.0.0\",\"bluebird\":\"3.7.1\",\"chalk\":\"2.4.2\",\"clipboardy\":\"2.1.0\",\"common-tags\":\"1.8.0\",\"convert-hrtime\":\"3.0.0\",\"core-js\":\"2.6.10\",\"decamelize\":\"1.2.0\",\"envinfo\":\"7.4.0\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"8.1.0\",\"gatsby-core-utils\":\"1.0.19\",\"gatsby-telemetry\":\"1.1.37\",\"get-caller-file\":\"1.0.3\",\"glob\":\"7.1.6\",\"graceful-fs\":\"4.2.3\",\"human-signals\":\"1.1.1\",\"imurmurhash\":\"0.1.4\",\"ink\":\"2.5.0\",\"ink-spinner\":\"3.0.1\",\"is-typedarray\":\"1.0.0\",\"is-valid-path\":\"0.1.1\",\"isexe\":\"2.0.0\",\"loader-fs-cache\":\"1.0.2\",\"loader-utils\":\"1.2.3\",\"lodash\":\"4.17.15\",\"map-age-cleaner\":\"0.1.3\",\"meant\":\"1.0.1\",\"merge-stream\":\"2.0.0\",\"nice-try\":\"1.0.5\",\"object-assign\":\"4.1.1\",\"object-hash\":\"1.3.1\",\"object.entries\":\"1.1.0\",\"onetime\":\"5.1.0\",\"opentracing\":\"0.14.4\",\"p-is-promise\":\"2.1.0\",\"pretty-error\":\"2.1.1\",\"progress\":\"2.0.3\",\"prompts\":\"2.3.0\",\"pump\":\"3.0.0\",\"react\":\"16.12.0\",\"redux\":\"4.0.4\",\"require-directory\":\"2.1.1\",\"require-main-filename\":\"1.0.1\",\"resolve-cwd\":\"2.0.0\",\"semver\":\"5.7.1\",\"set-blocking\":\"2.0.0\",\"signal-exit\":\"3.0.2\",\"stack-trace\":\"0.0.10\",\"string-width\":\"2.1.1\",\"strip-eof\":\"1.0.0\",\"strip-final-newline\":\"2.0.0\",\"typedarray-to-buffer\":\"3.1.5\",\"update-notifier\":\"2.5.0\",\"uuid\":\"3.3.3\",\"which-module\":\"2.0.0\",\"wrap-ansi\":\"2.1.0\",\"y18n\":\"3.2.1\",\"yurnalist\":\"1.1.1\"},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"gatsby@^2.15.21\",\"name\":\"gatsby\",\"escapedName\":\"gatsby\",\"rawSpec\":\"^2.15.21\",\"saveSpec\":null,\"fetchSpec\":\"^2.15.21\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/gatsby/-/gatsby-2.17.15.tgz\",\"_shasum\":\"731e44f4292256889f374d434d56ace29ac2cfec\",\"_spec\":\"gatsby@^2.15.21\",\"_where\":\"/Users/gabmarr/Documents/Development/tfcp\",\"author\":{\"name\":\"Kyle Mathews\",\"email\":\"mathews.kyle@gmail.com\"},\"bin\":{\"gatsby\":\"./dist/bin/gatsby.js\"},\"bugs\":{\"url\":\"https://github.com/gatsbyjs/gatsby/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"@babel/code-frame\":\"^7.5.5\",\"@babel/core\":\"^7.7.2\",\"@babel/parser\":\"^7.7.3\",\"@babel/polyfill\":\"^7.7.0\",\"@babel/runtime\":\"^7.7.2\",\"@babel/traverse\":\"^7.7.2\",\"@gatsbyjs/relay-compiler\":\"2.0.0-printer-fix.4\",\"@hapi/joi\":\"^15.1.1\",\"@mikaelkristiansson/domready\":\"^1.0.9\",\"@pieh/friendly-errors-webpack-plugin\":\"1.7.0-chalk-2\",\"@reach/router\":\"^1.2.1\",\"@typescript-eslint/eslint-plugin\":\"^2.7.0\",\"@typescript-eslint/parser\":\"^2.7.0\",\"address\":\"1.1.2\",\"autoprefixer\":\"^9.7.1\",\"axios\":\"^0.19.0\",\"babel-core\":\"7.0.0-bridge.0\",\"babel-eslint\":\"^10.0.3\",\"babel-loader\":\"^8.0.6\",\"babel-plugin-add-module-exports\":\"^0.3.3\",\"babel-plugin-dynamic-import-node\":\"^2.3.0\",\"babel-plugin-remove-graphql-queries\":\"^2.7.16\",\"babel-preset-gatsby\":\"^0.2.22\",\"better-opn\":\"1.0.0\",\"better-queue\":\"^3.8.10\",\"bluebird\":\"^3.7.1\",\"browserslist\":\"3.2.8\",\"cache-manager\":\"^2.10.1\",\"cache-manager-fs-hash\":\"^0.0.7\",\"chalk\":\"^2.4.2\",\"chokidar\":\"3.3.0\",\"common-tags\":\"^1.8.0\",\"compression\":\"^1.7.4\",\"convert-hrtime\":\"^3.0.0\",\"copyfiles\":\"^2.1.1\",\"core-js\":\"^2.6.10\",\"cors\":\"^2.8.5\",\"css-loader\":\"^1.0.1\",\"debug\":\"^3.2.6\",\"del\":\"^5.1.0\",\"detect-port\":\"^1.3.0\",\"devcert-san\":\"^0.3.3\",\"dotenv\":\"^8.2.0\",\"eslint\":\"^6.6.0\",\"eslint-config-react-app\":\"^5.0.2\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"^3.13.0\",\"eslint-plugin-graphql\":\"^3.1.0\",\"eslint-plugin-import\":\"^2.18.2\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.16.0\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"event-source-polyfill\":\"^1.0.9\",\"express\":\"^4.17.1\",\"express-graphql\":\"^0.9.0\",\"fast-levenshtein\":\"^2.0.6\",\"file-loader\":\"^1.1.11\",\"flat\":\"^4.1.0\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"^8.1.0\",\"gatsby-cli\":\"^2.8.11\",\"gatsby-core-utils\":\"^1.0.19\",\"gatsby-graphiql-explorer\":\"^0.2.28\",\"gatsby-link\":\"^2.2.24\",\"gatsby-plugin-page-creator\":\"^2.1.30\",\"gatsby-react-router-scroll\":\"^2.1.16\",\"gatsby-telemetry\":\"^1.1.37\",\"glob\":\"^7.1.6\",\"got\":\"8.3.2\",\"graphql\":\"^14.5.8\",\"graphql-compose\":\"^6.3.7\",\"graphql-playground-middleware-express\":\"^1.7.12\",\"invariant\":\"^2.2.4\",\"is-relative\":\"^1.0.0\",\"is-relative-url\":\"^3.0.0\",\"is-wsl\":\"^2.1.1\",\"jest-worker\":\"^24.9.0\",\"json-loader\":\"^0.5.7\",\"json-stringify-safe\":\"^5.0.1\",\"lodash\":\"^4.17.15\",\"lokijs\":\"^1.5.8\",\"md5\":\"^2.2.1\",\"md5-file\":\"^3.2.3\",\"micromatch\":\"^3.1.10\",\"mime\":\"^2.4.4\",\"mini-css-extract-plugin\":\"^0.8.0\",\"mitt\":\"^1.2.0\",\"mkdirp\":\"^0.5.1\",\"moment\":\"^2.24.0\",\"name-all-modules-plugin\":\"^1.0.1\",\"normalize-path\":\"^2.1.1\",\"null-loader\":\"^0.1.1\",\"opentracing\":\"^0.14.4\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"parseurl\":\"^1.3.3\",\"physical-cpu-count\":\"^2.0.0\",\"pnp-webpack-plugin\":\"^1.5.0\",\"postcss-flexbugs-fixes\":\"^3.3.1\",\"postcss-loader\":\"^2.1.6\",\"prompts\":\"^2.3.0\",\"prop-types\":\"^15.7.2\",\"raw-loader\":\"^0.5.1\",\"react-dev-utils\":\"^4.2.3\",\"react-error-overlay\":\"^3.0.0\",\"react-hot-loader\":\"^4.12.16\",\"redux\":\"^4.0.4\",\"redux-thunk\":\"^2.3.0\",\"semver\":\"^5.7.1\",\"shallow-compare\":\"^1.2.2\",\"sift\":\"^5.1.0\",\"signal-exit\":\"^3.0.2\",\"slash\":\"^3.0.0\",\"socket.io\":\"^2.3.0\",\"stack-trace\":\"^0.0.10\",\"string-similarity\":\"^1.2.2\",\"style-loader\":\"^0.23.1\",\"terser-webpack-plugin\":\"1.4.1\",\"true-case-path\":\"^2.2.1\",\"type-of\":\"^2.0.1\",\"url-loader\":\"^1.1.2\",\"util.promisify\":\"^1.0.0\",\"uuid\":\"^3.3.3\",\"v8-compile-cache\":\"^1.1.2\",\"webpack\":\"~4.41.2\",\"webpack-dev-middleware\":\"^3.7.2\",\"webpack-dev-server\":\"^3.9.0\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.2\",\"webpack-stats-plugin\":\"^0.3.0\",\"xstate\":\"^4.6.7\",\"yaml-loader\":\"^0.5.0\"},\"deprecated\":false,\"description\":\"Blazing fast modern site generator for React\",\"devDependencies\":{\"@babel/cli\":\"^7.7.0\",\"@babel/runtime\":\"^7.7.2\",\"babel-preset-gatsby-package\":\"^0.2.11\",\"cross-env\":\"^5.2.1\",\"documentation\":\"^12.1.3\",\"react\":\"^16.11.0\",\"react-dom\":\"^16.11.0\",\"rimraf\":\"^3.0.0\",\"xhr-mock\":\"^2.5.1\"},\"engines\":{\"node\":\">=8.0.0\"},\"files\":[\"apis.json\",\"ipc.json\",\"cache-dir\",\"dist\",\"graphql.js\",\"index.d.ts\",\"scripts/postinstall.js\",\"utils.js\"],\"gitHead\":\"4c80f784cb164a0c5c4d2fece2dbc543befcb8f3\",\"homepage\":\"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme\",\"keywords\":[\"blog\",\"generator\",\"jekyll\",\"markdown\",\"react\",\"ssg\",\"website\"],\"license\":\"MIT\",\"main\":\"cache-dir/commonjs/gatsby-browser-entry.js\",\"module\":\"cache-dir/gatsby-browser-entry.js\",\"name\":\"gatsby\",\"peerDependencies\":{\"react\":\"^16.4.2\",\"react-dom\":\"^16.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/gatsbyjs/gatsby.git\"},\"resolutions\":{\"graphql\":\"^14.5.8\"},\"scripts\":{\"build\":\"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs\",\"build:cjs\":\"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__\",\"build:internal-plugins\":\"copyfiles -u 1 src/internal-plugins/**/package.json dist\",\"build:rawfiles\":\"copyfiles -u 1 src/internal-plugins/**/raw_* dist\",\"build:src\":\"babel src --out-dir dist --source-maps --verbose --ignore **/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__\",\"clean-test-bundles\":\"find test/ -type f -name bundle.js* -exec rm -rf {} +\",\"postbuild\":\"node scripts/output-api-file.js\",\"postinstall\":\"node scripts/postinstall.js\",\"prebuild\":\"rimraf dist && rimraf cache-dir/commonjs\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch\"},\"types\":\"index.d.ts\",\"version\":\"2.17.15\",\"yargs\":{\"boolean-negation\":false}}");

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./public/static/d/2417117884.json":
/*!*****************************************!*\
  !*** ./public/static/d/2417117884.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"The Fair Chance Project\",\"description\":\"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.\",\"author\":\"Gaby Marraro, Kaitlin Gu, Simon Gaviria\"}}}}");

/***/ }),

/***/ "./public/static/d/4282319189.json":
/*!*****************************************!*\
  !*** ./public/static/d/4282319189.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"placeholderImage\":null}}");

/***/ }),

/***/ "./public/static/d/856328897.json":
/*!****************************************!*\
  !*** ./public/static/d/856328897.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"The Fair Chance Project\"}}}}");

/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.scss */ "./src/components/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_2__);
const Button=({text,style={}})=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"button-container",style:style},text);};/* harmony default export */ __webpack_exports__["default"] = (Button);Button.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired};

/***/ }),

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./src/components/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/button/button */ "./src/components/button/button.js");
const Footer=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"footer footer-container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column footer-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"footer-column-title"},"ATTEND"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"footer-column-title last"},"A DINNER"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"footer-text"},"Come break bread with us. We host community dinners called A Feast for Fair Chances to promote awareness of collateral consequences and open discussion into what it means to have a fair chance."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button_button__WEBPACK_IMPORTED_MODULE_2__["default"],{text:"ATTEND A DINNER",style:{width:"100%"}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column footer-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"footer-column-title"},"SPREAD"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"footer-column-title last"},"THE WORD"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"footer-text"},"Bring this issue into the light with us. From those who work in the justice system, to those convicted of crimes, to the general public\u2014few understand the true impact that these laws have."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button_button__WEBPACK_IMPORTED_MODULE_2__["default"],{text:"SHARE ON SOCIAL",style:{width:"100%"}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column footer-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"footer-column-title"},"DONATE"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"footer-column-title last"},"OR VOLUNTEER"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"footer-text"},"Work alongside us. We seek to reform the system of 47,000 laws that keep people in perpetual punishment. If you have time, money, or knowledge to spare, please consider donating today."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button_button__WEBPACK_IMPORTED_MODULE_2__["default"],{text:"DONATE",style:{width:"100%"}}))));/* harmony default export */ __webpack_exports__["default"] = (Footer);// <div className="footer footer-container">
// <div className="columns">
//   <div className="column footer-section">
//     <p className="footer-column-title">ABOUT</p>
//     <p>
//       <a className="footer-column-subtitle">OUR MISSION</a>
//     </p>
//     <p>
//       <a className="footer-column-subtitle">OUR STORY</a>
//     </p>
//     <p>
//       <a className="footer-column-subtitle">ACTION PLAN</a>
//     </p>
//   </div>
//   <div className="column footer-section">
//     <p className="footer-column-title">GET INVOLVED</p>
//     <p>
//       <a className="footer-column-subtitle">ATTEND A DINNER</a>
//     </p>
//     <p>
//       <a className="footer-column-subtitle">SPREAD THE WORD</a>
//     </p>
//     <p>
//       <a className="footer-column-subtitle">DONATE</a>
//     </p>
//   </div>
//   <div className="column footer-section">
//     <p className="footer-column-title">CONTACT</p>
//     <p>
//       <a className="footer-column-subtitle">NEWSLETTER</a>
//     </p>
//     <p>
//       <a className="footer-column-subtitle">SOCIAL</a>
//     </p>
//     <p>
//       <a className="footer-column-subtitle">GET IN TOUCH</a>
//     </p>
//   </div>
// </div>
// </div>

/***/ }),

/***/ "./src/components/footer.scss":
/*!************************************!*\
  !*** ./src/components/footer.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/getInvolved/getInvolved.js":
/*!***************************************************!*\
  !*** ./src/components/getInvolved/getInvolved.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/button/button */ "./src/components/button/button.js");
/* harmony import */ var _getInvolved_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getInvolved.scss */ "./src/components/getInvolved/getInvolved.scss");
/* harmony import */ var _getInvolved_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_getInvolved_scss__WEBPACK_IMPORTED_MODULE_2__);
const GetInvolved=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"get-involved",id:"get-in-touch"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{class:"get-involved-header is-size-4-mobile is-size-2-desktop"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"WE'D LOVE"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"TO"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"HEAR FROM YOU")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"get-in-touch-btn-mobile is-hidden-desktop"},"GET IN TOUCH"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"get-in-touch-btn-desktop is-hidden-touch"},"GET IN TOUCH"));};/* harmony default export */ __webpack_exports__["default"] = (GetInvolved);

/***/ }),

/***/ "./src/components/getInvolved/getInvolved.scss":
/*!*****************************************************!*\
  !*** ./src/components/getInvolved/getInvolved.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/getInvolvedStickyFooter/getInvolvedStickyFooter.js":
/*!***************************************************************************!*\
  !*** ./src/components/getInvolvedStickyFooter/getInvolvedStickyFooter.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getInvolvedStickyFooter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getInvolvedStickyFooter.scss */ "./src/components/getInvolvedStickyFooter/getInvolvedStickyFooter.scss");
/* harmony import */ var _getInvolvedStickyFooter_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_getInvolvedStickyFooter_scss__WEBPACK_IMPORTED_MODULE_1__);
const GetInvolvedStickyFooter=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"get-involved-sticky-footer is-hidden-desktop",onClick:()=>window.location.href="#get-in-touch"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"get-involved-text"},"GET INVOLVED"));};/* harmony default export */ __webpack_exports__["default"] = (GetInvolvedStickyFooter);

/***/ }),

/***/ "./src/components/getInvolvedStickyFooter/getInvolvedStickyFooter.scss":
/*!*****************************************************************************!*\
  !*** ./src/components/getInvolvedStickyFooter/getInvolvedStickyFooter.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);
const Header=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"header-container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"header-text is-size-2-desktop is-size-3-mobile"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"#END"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"PERPETUAL"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"PUNISHMENT")));};/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_4282319189_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/4282319189.json */ "./public/static/d/4282319189.json");
var _public_static_d_4282319189_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/4282319189.json */ "./public/static/d/4282319189.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */const Image=()=>{const data=_public_static_d_4282319189_json__WEBPACK_IMPORTED_MODULE_0__.data;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a,{fluid:data.placeholderImage.childImageSharp.fluid});};/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/information.scss":
/*!*****************************************!*\
  !*** ./src/components/information.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_856328897_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/856328897.json */ "./public/static/d/856328897.json");
var _public_static_d_856328897_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/856328897.json */ "./public/static/d/856328897.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _mission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mission */ "./src/components/mission.js");
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story */ "./src/components/story.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _splitText_splitText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./splitText/splitText */ "./src/components/splitText/splitText.js");
/* harmony import */ var _subheader_subheader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subheader/subheader */ "./src/components/subheader/subheader.js");
/* harmony import */ var _getInvolvedStickyFooter_getInvolvedStickyFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getInvolvedStickyFooter/getInvolvedStickyFooter */ "./src/components/getInvolvedStickyFooter/getInvolvedStickyFooter.js");
/* harmony import */ var components_getInvolved_getInvolved__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/getInvolved/getInvolved */ "./src/components/getInvolved/getInvolved.js");
/* harmony import */ var components_logoSmall_logoSmall__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/logoSmall/logoSmall */ "./src/components/logoSmall/logoSmall.js");
const Layout=({children})=>{const data=_public_static_d_856328897_json__WEBPACK_IMPORTED_MODULE_0__.data;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_logoSmall_logoSmall__WEBPACK_IMPORTED_MODULE_11__["default"],null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header_header__WEBPACK_IMPORTED_MODULE_6__["default"],{siteTitle:data.site.siteMetadata.title}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subheader_subheader__WEBPACK_IMPORTED_MODULE_8__["default"],null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{margin:`0 auto`,maxWidth:`100%`,paddingTop:0}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"split-text-sections"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_splitText_splitText__WEBPACK_IMPORTED_MODULE_7__["default"],{startsWithPurple:true,firstHalfTop:"A LIFETIME",firstHalfBottom:"OF PUNISHMENT",secondHalfTop:"AFTER",secondHalfBottom:"SERVING YOUR TIME"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_splitText_splitText__WEBPACK_IMPORTED_MODULE_7__["default"],{startsWithPurple:false,firstHalfTop:"ROBBED",firstHalfBottom:"OF A FAIR CHANCE",secondHalfTop:"TO",secondHalfBottom:"REBUILD YOUR LIFE"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_splitText_splitText__WEBPACK_IMPORTED_MODULE_7__["default"],{startsWithPurple:true,firstHalfTop:"DOES",firstHalfBottom:"THAT SOUND",secondHalfTop:"LIKE",secondHalfBottom:"A JUST SYSTEM?"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mission__WEBPACK_IMPORTED_MODULE_4__["default"],null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main",null,children),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_story__WEBPACK_IMPORTED_MODULE_5__["default"],null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_3__["default"],null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_getInvolved_getInvolved__WEBPACK_IMPORTED_MODULE_10__["default"],null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_getInvolvedStickyFooter_getInvolvedStickyFooter__WEBPACK_IMPORTED_MODULE_9__["default"],null)));};Layout.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired};/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/logoSmall/logoSmall.js":
/*!***********************************************!*\
  !*** ./src/components/logoSmall/logoSmall.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logoSmall_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logoSmall.scss */ "./src/components/logoSmall/logoSmall.scss");
/* harmony import */ var _logoSmall_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logoSmall_scss__WEBPACK_IMPORTED_MODULE_1__);
const LogoSmall=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"logo-small-container is-hidden-desktop"},"TFCP");};/* harmony default export */ __webpack_exports__["default"] = (LogoSmall);

/***/ }),

/***/ "./src/components/logoSmall/logoSmall.scss":
/*!*************************************************!*\
  !*** ./src/components/logoSmall/logoSmall.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/mission.js":
/*!***********************************!*\
  !*** ./src/components/mission.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _information_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information.scss */ "./src/components/information.scss");
/* harmony import */ var _information_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_information_scss__WEBPACK_IMPORTED_MODULE_1__);
const Mission=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns storyContainer"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-one-quarter"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"titleText"},"OUR MISSION")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"infoText is-size-6-mobile"},"\u2192 Today, when a person is convicted of a crime, a system of legislation takes effect, limiting that person\u2019s employment, housing, and education opportunities. This system is often referred to as \u201Ccollateral consequences.\u201D But these consequences aren\u2019t collateral or secondary. They deny people their fair chance at a good life. And they aren\u2019t consequences of a crime\u2014they are unjust punishment of people who have already served their time. We call this a system of perpetual punishment. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"infoText is-size-6-mobile"},"\u2192 47,000 laws today restrict access to employment, housing, loans, business licenses, education, and public benefits for those who have been convicted of a crime\u2014even after they have served their sentence, or even if they were never incarcerated. Being subjected to this system of laws has been called a form of civil death, stripping people of their role in civil life. And the convoluted nature of these laws means that even those who work in the system\u2014like judges and lawyers\u2014cannot adequately counsel defendants who may plead guilty before understanding the full ramifications of their actions."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"infoText is-size-6-mobile"},"\u2192 This system keeps people from rejoining society, rebuilding their lives, supporting their families. We believe in something more: a society that gives fair second chances, where everyone who seeks to work, tvo learn, and to live a good life can. We work to give everyone a fair chance at living a good life. Join us in our work to end perpetual punishment.")));/* harmony default export */ __webpack_exports__["default"] = (Mission);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/2417117884.json */ "./public/static/d/2417117884.json");
var _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/2417117884.json */ "./public/static/d/2417117884.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */function SEO({description,lang,meta,title}){const{site}=_public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_0__.data;const metaDescription=description||site.siteMetadata.description;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a,{htmlAttributes:{lang},title:title,titleTemplate:`%s | ${site.siteMetadata.title}`,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary`},{name:`twitter:creator`,content:site.siteMetadata.author},{name:`twitter:title`,content:title},{name:`twitter:description`,content:metaDescription}].concat(meta)});}SEO.defaultProps={lang:`en`,meta:[],description:``};SEO.propTypes={description:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,lang:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,meta:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),title:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired};/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./src/components/splitText/splitText.js":
/*!***********************************************!*\
  !*** ./src/components/splitText/splitText.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _splitText_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splitText.scss */ "./src/components/splitText/splitText.scss");
/* harmony import */ var _splitText_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splitText_scss__WEBPACK_IMPORTED_MODULE_1__);
const SplitText=({startsWithPurple,firstHalfTop,firstHalfBottom,secondHalfTop,secondHalfBottom})=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"split-text-container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:startsWithPurple?'base-dark':'base-light',className:"split-text-top "},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{id:"text-item-top",className:"is-size-3-mobile"}," ",firstHalfTop," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," ",firstHalfBottom)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:!startsWithPurple?'base-dark':'base-light',className:"split-text-bottom"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{id:"text-item-bottom",className:"is-size-3-mobile"}," ",secondHalfTop," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," ",secondHalfBottom," ")));};/* harmony default export */ __webpack_exports__["default"] = (SplitText);

/***/ }),

/***/ "./src/components/splitText/splitText.scss":
/*!*************************************************!*\
  !*** ./src/components/splitText/splitText.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/story.js":
/*!*********************************!*\
  !*** ./src/components/story.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _information_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information.scss */ "./src/components/information.scss");
/* harmony import */ var _information_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_information_scss__WEBPACK_IMPORTED_MODULE_1__);
const Story=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns storyContainer"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-one-quarter"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"titleText"},"OUR STORY")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"infoText is-size-6-mobile"},"\u2192 In December 2017, Michael \u201CZaki\u201D Smith got a letter from the NJ Board of Education that would change his life forever. After 15 years dedicated to mentoring young people, Zaki was barred from working at Eastside High School in Newark, NJ where he had been working for the past 4 years. This wasn\u2019t due to his performance. It was due to his record. "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"infoText is-size-6-mobile"},"\u2192 After a routine background check, Zaki\u2019s position was eliminated due to his time in prison\u201415 years earlier. Beyond Eastside High, he would legally never be able to work in a New Jersey school ever again. When trying to make sense of what had happened, Zaki discovered two words that he had never heard before\u2014but had affected his life since his first plea deal: collateral consequences."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"infoText is-size-6-mobile"},"\u2192 Collateral consequences are a legal term for the lifetime of perpetual punishment an individual continues to receive well after they have served their time\u2014or even have just been arrested."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"infoText is-size-6-mobile"},"\u2192 The moment an individual pleads guilty to a crime, collateral consequences legally limit that person\u2019s job prospects, housing options, educational options\u2014as well as their ability to support their own families. They prohibit an individual from receiving a fair chance for rehabilitation after prison. The most distressing part is that collateral consequences are never mentioned as part of the court process."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"infoText is-size-6-mobile"},"\u2192 Zaki launched The Fair Chance Project to raise awareness about the 47,000 \u201Ccollateral consequences\u201D laws affecting formerly incarcerated individuals & their families across the U.S., with the goal of dismantling them."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"infoText is-size-6-mobile"},"\u2192 The Fair Chance Project hosts the Feast for Fair Chances, community dinners where we promote both education about collateral consequences laws and discussion about what it means to have a fair chance. We encourage individuals to write to their local and state lawmakers demanding collateral consequence reform.")));/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ }),

/***/ "./src/components/subheader/subheader.js":
/*!***********************************************!*\
  !*** ./src/components/subheader/subheader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! React */ "./node_modules/React/index.js");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subheader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subheader.scss */ "./src/components/subheader/subheader.scss");
/* harmony import */ var _subheader_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subheader_scss__WEBPACK_IMPORTED_MODULE_1__);
const Subheader=()=>{return React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"subheader-container"},React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"subheader-text"},React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"is-size-4"},"THE"),React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"both-sides-border is-size-3"},"FAIR CHANCE"),React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"is-size-4"},"PROJECT")),React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"learn-more is-size-5"},React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"We work to dismantle the system of unjust limitations that keep people who have been convicted of a crime from a chance at a good life."),React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"is-hidden-desktop work-with-us"},"\x1FWork alongside us. If you have time, money, or knowledge to spare, please consider donating today."),React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"LEARN MORE")));};// todo: learn more leads to?
/* harmony default export */ __webpack_exports__["default"] = (Subheader);

/***/ }),

/***/ "./src/components/subheader/subheader.scss":
/*!*************************************************!*\
  !*** ./src/components/subheader/subheader.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
const NotFoundPage=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"],{title:"404: Not found"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"NOT FOUND"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."));/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/image */ "./src/components/image.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
const IndexPage=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"],{title:"Home"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{"width":"100%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_image__WEBPACK_IMPORTED_MODULE_2__["default"],null)));/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "@reach/router":
/*!************************************************************************************************!*\
  !*** external "/Users/gabmarr/Documents/Development/tfcp/node_modules/@reach/router/index.js" ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!*************************************************************************************************************!*\
  !*** external "/Users/gabmarr/Documents/Development/tfcp/node_modules/core-js/modules/web.dom.iterable.js" ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_crypto__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!******************************************************************************************!*\
  !*** external "/Users/gabmarr/Documents/Development/tfcp/node_modules/lodash/lodash.js" ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map