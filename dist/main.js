/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var htmlElement = document.getElementById('agrees-container');\nlet modalBtn = document.getElementById('modal-btn');\nvar modal = document.querySelector('.modal');\nlet newHTML = \"\";\n\nfor (let index = 0; index < 7; index++) {\n  const elements = `<div>\n                        <input type=\"checkbox\" name=\"DeepInsightConsent\" value=\"1\"></input>\n                        <input type=\"hidden\" name=\"DeepInsightConsent\" value=\"0\"></input>\n                        <label>Samtykke til full innsynsrett - typisk bruk kan være kundesupport/debugging og operer på vegne av brukstilfeller \n                            <a href=\"#\" style=\"cursor: pointer\" class=\"modal-btn\" id=\"modal-btn\">Vis detaljer</a>\n                        </label>\n                        <div id=\"consent_dialog_0\" class=\"modal centered\" style=\"width:70%;background-color:#F4FFEF;border:1px dotted black;\">\n                                <p>\n                                    </p><h2>Samtykke til full in</h2>\n                                    <h4>Sist oppdatert: 27. November 2020</h4>\n                                    <h4>Valid from: 2021-06-21T13:27:20.661224Z - to: 2021-07-28T14:20:40.661225Z</h4>\n                                    <p>We use Your Personal data to provide acc</p>\n                                    <p>This Privacy Policy describes Our polici. <a href=\"http://privacy.entraos.io/\" target=\"_blank\">Vis detaljer</a></p>\n                                <p></p>\n                                <button style=\"cursor: pointer\" class=\"hide-consent\" id=\"consent_hide_0\">Close</button>\n                        </div>\n                    </div>`;\n  newHTML += elements;\n}\n\nhtmlElement.innerHTML = newHTML;\n\nif (modalBtn) {\n  modalBtn.addEventListener('click', function (e) {\n    console.log(\"hello world\");\n    modal.classList.add('modal-active');\n  }, false);\n}\n\n//# sourceURL=webpack://modal-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;