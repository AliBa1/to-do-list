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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n(0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.setupSite)();\nconsole.log(\"It's working\");\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSite: () => (/* binding */ setupSite)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/modules/sidebar.js\");\n\n\nconst setupSite = () => {\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.setupSidebar)();\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/lists.js":
/*!******************************!*\
  !*** ./src/modules/lists.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   List: () => (/* binding */ List),\n/* harmony export */   lists: () => (/* binding */ lists)\n/* harmony export */ });\nconst lists = [];\nclass List {\n    constructor(name) {\n        this.name = name;\n        this.index;\n        this.selected = false;\n        this.tasks = [];\n        this.addToLists();\n        this.assignIndex();\n    }\n\n    addTaskToList(task) {\n        tasks.push(task);\n    }\n\n    addToLists() {\n        lists.push(this);\n    }\n\n    assignIndex() {\n        this.index = lists.length - 1;\n    }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/lists.js?");

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSidebar: () => (/* binding */ setupSidebar)\n/* harmony export */ });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/modules/lists.js\");\n// Fix or change the addList logic so that I can add and remove from specific items\n\nconst contentDiv = document.querySelector('#content');\nconst sidebarDiv = document.createElement('div');\nconst listsUl = document.createElement('ul');\n\nconst setupSidebar = () => {\n    contentDiv.appendChild(sidebarDiv);\n    sidebarDiv.classList.add(\"sidebar\");\n\n    // make list to display lists\n    const listsHeader = document.createElement('h1');\n    listsHeader.classList.add('lists-header');\n    listsHeader.textContent = \"Lists\";\n    sidebarDiv.appendChild(listsHeader);\n\n    sidebarDiv.appendChild(listsUl);\n\n    // newList('2024 Goals');\n    // newList('Basic');\n    // newList('School');\n\n    new _lists__WEBPACK_IMPORTED_MODULE_0__.List(\"2024 Goals\");\n    new _lists__WEBPACK_IMPORTED_MODULE_0__.List(\"Basic\");\n    new _lists__WEBPACK_IMPORTED_MODULE_0__.List(\"School\");\n\n    showLists();\n\n    // button to show form and add a new list\n    const newListBtn = document.createElement('button');\n    newListBtn.classList.add('add-new-list');\n    newListBtn.textContent = \"New List +\";\n    newListBtn.onclick = () => {\n        newListForm.classList.add('new-list-form');\n        newListForm.classList.remove('hide');\n    }\n    sidebarDiv.appendChild(newListBtn);\n\n    const newListForm = document.createElement('form');\n    // newListForm.classList.add('new-list-form');\n    newListForm.classList.add('hide');\n    newListForm.action = '#';\n    newListForm.method = 'get';\n    sidebarDiv.appendChild(newListForm);\n\n    const listNameLabel = document.createElement('label');\n    listNameLabel.htmlFor = \"new_list\";\n    listNameLabel.textContent = \"List Name\";\n    newListForm.appendChild(listNameLabel);\n\n    const listNameInput = document.createElement('input');\n    listNameInput.type = \"text\";\n    listNameInput.name = \"new_list\";\n    listNameInput.id = \"new_list\";\n    listNameInput.required = true;\n    newListForm.appendChild(listNameInput);\n\n    const addListBtn = document.createElement('button');\n    addListBtn.classList.add(\"submit-list-btn\");\n    addListBtn.type = \"button\";\n    addListBtn.textContent = \"Add List\";\n    addListBtn.onclick = () => {\n        console.log(listNameInput.value);\n        // newList(listNameInput.textContent);\n        new _lists__WEBPACK_IMPORTED_MODULE_0__.List(listNameInput.value);\n        showLists();\n        listNameInput.value = \"\";\n        newListForm.classList.remove('new-list-form');\n        newListForm.classList.add('hide');\n    }\n    newListForm.appendChild(addListBtn);\n}\n\n// const newList = (name) => {\n//     const listLi = document.createElement('li');\n//     listLi.classList.add('sidebar-list');\n//     listLi.textContent = name;\n//     listsUl.appendChild(listLi);\n//     listLi.onclick = () => {\n//         listLi.classList.add('selected-list');\n//     }\n// }\n\nconst showLists = () => {\n    while (listsUl.firstChild) {\n        listsUl.removeChild(listsUl.firstChild);\n    }\n    _lists__WEBPACK_IMPORTED_MODULE_0__.lists.forEach(list => {\n        const listLi = document.createElement('li');\n        listLi.classList.add('sidebar-list');\n        listLi.textContent = list.name;\n        listsUl.appendChild(listLi);\n        \n        listLi.onclick = () => {\n            // currentList = list;\n            // assignCurrentList(list.index, listLi);\n            console.log(list.index);\n            list.selected = true;\n            if (list.selected) {\n                listLi.classList.add('selected-list');\n            } else {\n                listLi.classList.remove('selected-list');\n            }\n        }\n    });\n}\n\n// const assignCurrentList = (indexSelected, liElement) => {\n//     lists.forEach(list => {\n//         if (list.index === indexSelected) {\n//             list.selected = true;\n//             liElement.classList.add('selected-list');\n//         } else {\n//             list.selected = false;\n//             liElement.classList.remove('selected-list');\n//         }\n//     });\n// }\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/sidebar.js?");

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