/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nhtml {\n  background-color: rgb(20, 20, 20);\n  position: relative;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 200px 2fr;\n  grid-template-columns: 1fr;\n  place-items: center;\n  padding: 0 10%;\n  position: relative;\n}\n\n.header {\n  font-family: smooch sans;\n  display: grid;\n  background-color: antiquewhite;\n  border-radius: 10px;\n  place-items: center;\n  padding: 20px 40px;\n  border: 5px solid rgb(143, 0, 0);\n  width: 100%;\n  grid-template-columns: 1fr 1fr;\n}\n\n.header h1 {\n  font-size: 70px;\n  text-align: center;\n  text-decoration: solid underline 1px;\n  text-underline-offset: 5px;\n  place-self: start;\n}\n\n.header img {\n  width: 180px;\n  place-self: end;\n}\n\n.boardCont {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n#playerBoard,\n#opponentBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  width: 500px;\n  height: auto;\n  box-sizing: content-box;\n  border-radius: 5px;\n  background-color: antiquewhite;\n}\n\n#playerBoard {\n  border: 5px solid rgb(143, 0, 0);\n}\n\n#opponentBoard {\n  border: 5px solid rgb(143, 0, 0);\n}\n\n.gridLabelDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.gridLabelDiv p {\n  font-size: 30px;\n  color: antiquewhite;\n  font-family: smooch sans;\n  letter-spacing: 2px;\n  font-weight: 400;\n}\n\np.you {\n  font-weight: 800;\n}\n\n.cell {\n  border: 1px solid black;\n  display: grid;\n  place-items: center;\n}\n\n#opponentBoard .cell:hover {\n  background-color: rgba(143, 0, 0, 0.459);\n  cursor: pointer;\n}\n\n.cell.ship0 {\n  background-color: rgb(199, 248, 23);\n}\n.cell.ship1 {\n  background-color: rgb(248, 23, 192);\n}\n.cell.ship2 {\n  background-color: rgb(49, 248, 23);\n}\n.cell.ship3 {\n  background-color: rgb(139, 23, 248);\n}\n.cell.ship4 {\n  background-color: rgb(248, 151, 23);\n}\n\n.cell.hit {\n  background-color: red !important;\n}\n\n.cell.miss {\n  text-align: center;\n  font-size: 40px;\n}\n\n.bullet {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: black;\n}\n\n#opponentBoard.disabled,\n#playerBoard.disabled {\n  pointer-events: none;\n  background: rgb(80, 74, 74);\n}\n\n#overlay {\n  display: none;\n  position: absolute;\n  width: 100vw;\n  height: 100vw;\n  background-color: rgba(0, 0, 0, 0.521);\n  z-index: 10;\n}\n\n.modal {\n  z-index: 11;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  padding: 30px;\n  box-shadow: 0 4px 10px black;\n  background-color: white;\n  gap: 20px;\n  border: 4px solid rgb(143, 0, 0);\n  font-family: smooch sans;\n  font-weight: 600;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.modalMessage {\n  text-align: center;\n  font-size: 60px;\n  letter-spacing: 2px;\n}\n\n.modal button {\n  width: 100px;\n  border: 2px solid rgb(143, 0, 0);\n  outline: none;\n  border-radius: 5px;\n  padding: 8px;\n  place-self: center;\n  cursor: pointer;\n  background-color: white;\n  padding: 10px;\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.modal button:hover {\n  background-color: rgb(223, 223, 223);\n}\n\n@media (width > 1650px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 60px);\n    grid-template-rows: repeat(10, 60px);\n    width: 600px;\n  }\n}\n\n@media (width > 1500px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 55px);\n    grid-template-rows: repeat(10, 55px);\n    width: 550px;\n  }\n  .bullet {\n    width: 14px;\n    height: 14px;\n  }\n}\n\n@media (width < 1310px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 45px);\n    grid-template-rows: repeat(10, 45px);\n    width: 450px;\n  }\n}\n\n@media (width < 1180px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 42px);\n    grid-template-rows: repeat(10, 42px);\n    width: 420px;\n  }\n}\n\n@media (width < 1090px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 40px);\n    width: 400px;\n  }\n}\n\n@media (width < 1032px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 36px);\n    grid-template-rows: repeat(10, 36px);\n    width: 360px;\n  }\n}\n\n@media (width < 934px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 32px);\n    grid-template-rows: repeat(10, 32px);\n    width: 320px;\n  }\n\n  .bullet {\n    width: 10px;\n    height: 10px;\n  }\n}\n\n@media (width < 836px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    width: 300px;\n  }\n}\n\n@media (width < 786px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    width: 350px;\n  }\n\n  .header {\n    padding: 10px 20px;\n  }\n\n  .boardCont {\n    justify-content: center;\n    gap: 20px;\n  }\n\n  #content {\n    grid-template-rows: 175px 2fr;\n  }\n\n  .header h1 {\n    font-size: 60px;\n  }\n\n  .header img {\n    width: 160px;\n  }\n}\n\n@media (width < 576px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    width: 350px;\n  }\n\n  #content {\n    grid-template-rows: 150px 2fr;\n  }\n\n  .header h1 {\n    font-size: 50px;\n  }\n\n  .header img {\n    width: 140px;\n  }\n}\n\n@media (width < 500px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    width: 350px;\n  }\n\n  #content {\n    grid-template-rows: 125px 2fr;\n  }\n\n  .header h1 {\n    font-size: 40px;\n  }\n\n  .header img {\n    width: 120px;\n  }\n}\n\n@media (width < 450px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    width: 300px;\n  }\n  .bullet {\n    width: 8px;\n    height: 8px;\n  }\n}\n\n@media (width < 406px) {\n  #playerBoard,\n  #opponentBoard {\n    grid-template-columns: repeat(10, 27px);\n    grid-template-rows: repeat(10, 27px);\n    width: 270px;\n  }\n\n  #content {\n    grid-template-rows: 110px 2fr;\n  }\n\n  .header h1 {\n    font-size: 34px;\n  }\n\n  .header img {\n    width: 100px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayShips.js":
/*!*****************************!*\
  !*** ./src/displayShips.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayShips: () => (/* binding */ displayShips)\n/* harmony export */ });\nfunction displayShips(gameboard, boardId) {\n  gameboard.ships.forEach((ship, index) => {\n    ship.coordinates.forEach((coord) => {\n      const row = coord[0];\n      const col = coord[1];\n\n      const cell = document.querySelector(\n        `#${boardId} .cell[data-row='${row}'][data-col='${col}']`\n      );\n\n      console.log(cell);\n\n      if (cell) {\n        cell.classList.add(`ship${index}`);\n        console.log(index);\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://battleship/./src/displayShips.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateHome: () => (/* binding */ populateHome)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _displayShips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayShips */ \"./src/displayShips.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\n\n\n\nfunction populateHome() {\n  function createGrid(playerBoardId, isOpponent = false) {\n    const board = document.getElementById(playerBoardId);\n\n    for (let row = 0; row < 10; row++) {\n      for (let col = 0; col < 10; col++) {\n        const cell = document.createElement(\"div\");\n        cell.classList.add(\"cell\");\n        cell.dataset.row = row;\n        cell.dataset.col = col;\n\n        if (isOpponent) {\n          cell.addEventListener(\"click\", handleCellClick);\n        }\n\n        board.appendChild(cell);\n      }\n    }\n  }\n\n  const pc = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(\"computer\", \"Computer\");\n  const human = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(\"real\", \"Human\");\n\n  function handleCellClick(event) {\n    const cell = event.target;\n    const row = parseInt(cell.dataset.row);\n    const col = parseInt(cell.dataset.col);\n\n    const attackResult = pc.gameboard.receiveAttack([row, col]);\n\n    if (attackResult === \"hit\" || attackResult === \"game over\") {\n      cell.classList.add(\"hit\");\n    } else if (attackResult === \"miss\") {\n      cell.classList.add(\"miss\");\n      const bullet = document.createElement(\"div\");\n      bullet.classList.add(\"bullet\");\n      cell.appendChild(bullet);\n    }\n\n    if (attackResult === \"game over\") {\n      setTimeout(() => {\n        (0,_modal__WEBPACK_IMPORTED_MODULE_3__.gameOver)(\"You won! Game over.\");\n      }, 1000);\n    } else {\n      const opponentBoard = document.getElementById(\"opponentBoard\");\n      opponentBoard.classList.add(\"disabled\");\n      const playerBoard = document.getElementById(\"playerBoard\");\n      playerBoard.classList.remove(\"disabled\");\n\n      if (!cell.classList.contains(\"hit\") && !cell.classList.contains(\"miss\")) {\n        cell.removeEventListener(\"click\", handleCellClick);\n      }\n\n      setTimeout(pcMove, 1000);\n    }\n  }\n  const pcAttacks = new Set();\n\n  function pcMove() {\n    let col;\n    let row;\n\n    do {\n      row = Math.floor(Math.random() * 10);\n      col = Math.floor(Math.random() * 10);\n    } while (pcAttacks.has(`${row},${col}`));\n\n    pcAttacks.add(`${row},${col}`);\n\n    const cell = document.querySelector(\n      `[data-row=\"${row}\"][data-col=\"${col}\"]`\n    );\n    const attackResult = human.gameboard.receiveAttack([row, col]);\n\n    if (cell) {\n      if (attackResult === \"hit\" || attackResult === \"game over\") {\n        cell.classList.add(\"hit\");\n      } else if (attackResult === \"miss\") {\n        cell.classList.add(\"miss\");\n        const bullet = document.createElement(\"div\");\n        bullet.classList.add(\"bullet\");\n        cell.appendChild(bullet);\n      }\n    }\n    if (attackResult === \"game over\") {\n      setTimeout(() => {\n        (0,_modal__WEBPACK_IMPORTED_MODULE_3__.gameOver)(\"You Lost! Game Over.\");\n      }, 1000);\n    } else {\n      setTimeout(() => {\n        const opponentBoard = document.getElementById(\"opponentBoard\");\n        opponentBoard.classList.remove(\"disabled\");\n        const playerBoard = document.getElementById(\"playerBoard\");\n        playerBoard.classList.add(\"disabled\");\n      }, 1000);\n    }\n  }\n\n  function initializeGame() {\n    document.getElementById(\"playerBoard\").innerHTML = \"\";\n    document.getElementById(\"opponentBoard\").innerHTML = \"\";\n    createGrid(\"playerBoard\", false);\n    createGrid(\"opponentBoard\", true);\n\n    pc.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n    human.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n\n    pc.gameboard.placeRandomShips();\n    human.gameboard.placeRandomShips();\n\n    (0,_displayShips__WEBPACK_IMPORTED_MODULE_2__.displayShips)(human.gameboard, \"playerBoard\");\n  }\n\n  initializeGame();\n}\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n  constructor() {\n    this.ships = [];\n    this.missedAttacks = [];\n  }\n\n  placeShip(coords, direction, length) {\n    const newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\n    let shipCoordinates = [];\n    let x = coords[0];\n    let y = coords[1];\n\n    if (direction === \"horizontal\" && x + (length - 1) <= 9) {\n      for (let i = 0; i < length; i++) {\n        shipCoordinates.push([x + i, y]);\n      }\n    } else if (direction === \"vertical\" && y + (length - 1) <= 9) {\n      for (let i = 0; i < length; i++) {\n        shipCoordinates.push([x, y + i]);\n      }\n    } else {\n      return false;\n    }\n\n    for (let ship of this.ships) {\n      for (let coord of ship.coordinates) {\n        if (\n          shipCoordinates.some((c) => c[0] === coord[0] && c[1] === coord[1])\n        ) {\n          return false;\n        }\n      }\n    }\n\n    newShip.coordinates = shipCoordinates;\n    this.ships.push(newShip);\n    return true;\n  }\n\n  placeRandomShips() {\n    const shipLengths = [5, 4, 3, 3, 2];\n\n    shipLengths.forEach((length) => {\n      let placed = false;\n\n      while (!placed) {\n        const x = Math.floor(Math.random() * 10);\n        const y = Math.floor(Math.random() * 10);\n\n        const direction = Math.random() > 0.5 ? \"horizontal\" : \"vertical\";\n\n        placed = this.placeShip([x, y], direction, length);\n      }\n    });\n  }\n\n  receiveAttack(coordinates) {\n    let hit = false;\n\n    for (let ship of this.ships) {\n      for (let coord of ship.coordinates) {\n        if (coord[0] === coordinates[0] && coord[1] === coordinates[1]) {\n          ship.hit();\n          console.log(ship)\n          ship.hitCoordinates.push(coordinates);\n          hit = true;\n          break;\n        }\n      }\n      if (hit) break;\n    }\n\n    if (hit) {\n      if (this.isGameOver()) {\n        return \"game over\";\n      }\n      return \"hit\";\n    }\n\n    this.missedAttacks.push(coordinates);\n    return \"miss\";\n  }\n\n  isGameOver() {\n    return this.ships.every((ship) => ship.sunk);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateHome)();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameOver: () => (/* binding */ gameOver)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\nfunction gameOver(message) {\n  const content = document.getElementById(\"content\");\n  const overlay = document.getElementById(\"overlay\");\n  overlay.style.display = \"block\";\n\n  let modal = document.getElementById(\"modal\");\n  if (!modal) {\n    modal = document.createElement(\"div\");\n    modal.classList.add(\"modal\");\n    modal.id = \"modal\";\n\n    const modalMessage = document.createElement(\"p\");\n    modalMessage.classList.add(\"modalMessage\");\n    modal.appendChild(modalMessage);\n\n    const playButton = document.createElement(\"button\");\n    playButton.textContent = \"Play again\";\n    playButton.addEventListener(\"click\", () => {\n      modal.removeChild(modalMessage);\n      modal.removeChild(playButton);\n      content.removeChild(modal);\n      overlay.style.display = \"none\";\n      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.populateHome)();\n    });\n    modal.appendChild(playButton);\n    content.appendChild(modal);\n  }\n  const modalMessage = modal.querySelector(\".modalMessage\");\n  modalMessage.textContent = message;\n}\n\n\n//# sourceURL=webpack://battleship/./src/modal.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nclass Player {\n  constructor() {\n    // this.type = type;\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hitCount = 0;\n    this.hitCoordinates = [];\n    this.sunk = false;\n    this.coordinates = [];\n  }\n\n  hit() {\n    this.hitCount++;\n    this.isSunk();\n  }\n\n  isSunk() {\n    if (this.hitCount === this.length) {\n      this.sunk = true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;