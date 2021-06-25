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

/***/ "./src/fakeData.js":
/*!*************************!*\
  !*** ./src/fakeData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agrees\": () => (/* binding */ agrees)\n/* harmony export */ });\nconst agrees = [{\n  agree: \"Samtykke til full innsynsrett - typisk bruk kan være kundesupport/debugging og operer på vegne av brukstilfeller\",\n  modalHeading: \"Samtykke til full in\"\n}, {\n  agree: \"Samtykke til å forenkle brukerreiser ved å automatisk gjenkjenne bruker med ansiktgjenkjenning\",\n  modalHeading: \"Samtykke til å foren\"\n}, {\n  agree: \"Samtykke til å dele preferanser og mat allergier\",\n  modalHeading: \"Samtykke til å dele\"\n}, {\n  agree: \"Samtykke til å registrere og dele brukerens lokasjonsdata\",\n  modalHeading: \"Samtykke til full in\"\n}, {\n  agree: \"Samtykke til å dele aktiv kontaktinformasjon\",\n  modalHeading: \"Samtykke til å regis\"\n}, {\n  agree: \"Samtykke til å dele all kontaktinformasjon\",\n  modalHeading: \"Samtykke til å dele\"\n}, {\n  agree: \"Styring av tilgang\",\n  modalHeading: \"Styring av tilgang\"\n}];\n\n//# sourceURL=webpack://modal-app/./src/fakeData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fakeData */ \"./src/fakeData.js\");\n\nvar htmlElement = document.getElementById('agrees-container');\nlet newHTML = \"\";\nlet newHTML2 = \"\";\n\nfor (let index = 0; index < _fakeData__WEBPACK_IMPORTED_MODULE_0__.agrees.length; index++) {\n  console.log(_fakeData__WEBPACK_IMPORTED_MODULE_0__.agrees[index].modalHeading);\n  const elements = `<div>\n                            <input type=\"checkbox\" name=\"DeepInsightConsent\" value=\"1\"></input>\n                            <input type=\"hidden\" name=\"DeepInsightConsent\" value=\"0\"></input>\n                            <label>${_fakeData__WEBPACK_IMPORTED_MODULE_0__.agrees[index].agree}\n                                <a href=\"#\" style=\"cursor: pointer\" class=\"modal-btn\" id=\"modal-btn\">Vis detaljer</a>\n                            </label>\n                            <div id=\"consent_dialog_0\" class=\"modal centered\" style=\"width:70%;background-color:#F4FFEF;border:1px dotted black;\">\n                                <p></p>\n                                <h2 class=\"title\">${_fakeData__WEBPACK_IMPORTED_MODULE_0__.agrees[index].modalHeading}</h2>\n                                <p>This Privacy Policy describes Our polici. <a href=\"http://privacy.entraos.io/\" target=\"_blank\">Vis detaljer</a></p>\n                                <p></p>\n                                <button style=\"cursor: pointer\" class=\"hide-consent\" id=\"consent_hide_0\">Close</button>\n                            </div>\n                        </div>`;\n  newHTML += elements;\n}\n\nvar modalContainer = document.getElementById('consent_dialog_0');\n\nfor (let i = 0; i < _fakeData__WEBPACK_IMPORTED_MODULE_0__.agrees.length; i++) {\n  const modal = `\n            <div id=\"consent_dialog_0\" class=\"modal centered\" style=\"width:70%;background-color:#F4FFEF;border:1px dotted black;\">\n            <p></p>\n            <h2 class=\"title\">${_fakeData__WEBPACK_IMPORTED_MODULE_0__.agrees[index].modalHeading}</h2>\n            <p>This Privacy Policy describes Our polici. <a href=\"http://privacy.entraos.io/\" target=\"_blank\">Vis detaljer</a></p>\n            <p></p>\n            <button style=\"cursor: pointer\" class=\"hide-consent\" id=\"consent_hide_0\">Close</button>\n   </div>`;\n  newHTML2 += modal;\n}\n\nhtmlElement.innerHTML = newHTML;\nmodalContainer.innerHTML = newHTML2;\nlet modalOpen = document.querySelectorAll('.modal-btn');\n\nfor (let i = 0; i < modalOpen.length; i++) {\n  modalOpen[i].onclick = function (e) {\n    let modal = document.querySelector('.modal');\n    modal.style.visibility = \"visible\";\n    modal.style.opacity = \"1\";\n    e.preventDefault();\n    let modalClose = document.querySelector('.hide-consent');\n    modalClose.addEventListener('click', e => {\n      modal.style.visibility = \"invisible\";\n      modal.style.opacity = \"0\";\n      e.preventDefault();\n    }, false);\n  };\n}\n\n//# sourceURL=webpack://modal-app/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;