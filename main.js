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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSite: () => (/* binding */ setupSite)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/modules/sidebar.js\");\n/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent */ \"./src/modules/mainContent.js\");\n\n\n\nconst setupSite = () => {\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.setupSidebar)();\n    (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.setupMain)();\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/lists.js":
/*!******************************!*\
  !*** ./src/modules/lists.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   List: () => (/* binding */ List),\n/* harmony export */   lists: () => (/* binding */ lists)\n/* harmony export */ });\nconst lists = [];\nclass List {\n    constructor(name) {\n        this.name = name;\n        this.index;\n        this.selected = false;\n        this.tasks = [];\n        this.addToLists();\n        this.assignIndex();\n    }\n\n    addTaskToList(task) {\n        tasks.push(task);\n    }\n\n    addToLists() {\n        lists.push(this);\n    }\n\n    assignIndex() {\n        this.index = lists.length - 1;\n    }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/lists.js?");

/***/ }),

/***/ "./src/modules/mainContent.js":
/*!************************************!*\
  !*** ./src/modules/mainContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupMain: () => (/* binding */ setupMain)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n// NEXT TIME DO NOT NEED TO PUT ALL HTML INTO JS. JUST PUT NEEDED HTML INTO A DIV\n\nconst contentDiv = document.querySelector('#content');\nconst mainContentDiv = document.createElement('div');\nconst tasksUl = document.createElement('ul');\n\nconst setupMain = () => {\n    contentDiv.appendChild(mainContentDiv);\n    mainContentDiv.classList.add(\"main-content\");\n\n    tasksUl.classList.add(\"to-do-list\");\n    mainContentDiv.appendChild(tasksUl);\n    showTasks(tasksUl, _tasks__WEBPACK_IMPORTED_MODULE_0__.tasks);\n\n    const newTaskBtn = document.createElement(\"button\");\n    newTaskBtn.classList.add(\"add-new-task\");\n    newTaskBtn.textContent = \"New Task +\";\n    newTaskBtn.onclick = () => {\n        newTaskForm.classList.add(\"new-task-form\");\n        newTaskForm.classList.remove(\"hide\");\n    }\n    tasksUl.appendChild(newTaskBtn);\n\n    const newTaskForm = document.createElement(\"form\");\n    newTaskForm.action = \"#\";\n    newTaskForm.method = \"get\";\n    // newTaskForm.classList.add(\"new-task-form\");\n    newTaskForm.classList.add(\"hide\");\n    mainContentDiv.appendChild(newTaskForm);\n\n    const taskFormLabel = document.createElement(\"label\");\n    taskFormLabel.for = \"task_desc\";\n    taskFormLabel.textContent = \"Task\";\n    newTaskForm.appendChild(taskFormLabel);\n\n    const taskNameInput = document.createElement(\"input\");\n    taskNameInput.name = \"task_desc\";\n    taskNameInput.id = \"task_desc\";\n    taskNameInput.required = true;\n    newTaskForm.appendChild(taskNameInput);\n\n    const taskFormDate = document.createElement(\"label\");\n    taskFormDate.for = \"task_duedate\";\n    taskFormDate.textContent = \"Do By\";\n    newTaskForm.appendChild(taskFormDate);\n\n    const taskDateInput = document.createElement(\"input\");\n    taskDateInput.type = \"date\";\n    taskDateInput.name = \"task_duedate\";\n    taskDateInput.id = \"task_duedate\";\n    newTaskForm.appendChild(taskDateInput);\n\n    const taskPrioFieldset = document.createElement(\"fieldset\");\n    taskPrioFieldset.classList.add(\"task-prio\");\n    newTaskForm.appendChild(taskPrioFieldset);\n\n    const taskPrioLegend = document.createElement(\"legend\");\n    taskPrioLegend.textContent = \"Priority\";\n    taskPrioFieldset.appendChild(taskPrioLegend);\n\n    const highPrioDiv = document.createElement(\"div\");\n    taskPrioFieldset.appendChild(highPrioDiv);\n    \n    const highPrioLabel = document.createElement(\"label\");\n    highPrioLabel.for = \"high_prio\";\n    highPrioLabel.textContent = \"High\";\n    highPrioDiv.appendChild(highPrioLabel);\n\n    const highPrioInput = document.createElement(\"input\");\n    highPrioInput.type = \"radio\";\n    highPrioInput.name = \"task_prio\";\n    highPrioInput.id = \"high_prio\";\n    highPrioInput.value = \"high\";\n    highPrioDiv.appendChild(highPrioInput);\n\n    const medPrioDiv = document.createElement(\"div\");\n    taskPrioFieldset.appendChild(medPrioDiv);\n    \n    const medPrioLabel = document.createElement(\"label\");\n    medPrioLabel.for = \"medium_prio\";\n    medPrioLabel.textContent = \"Medium\";\n    medPrioDiv.appendChild(medPrioLabel);\n\n    const medPrioInput = document.createElement(\"input\");\n    medPrioInput.type = \"radio\";\n    medPrioInput.name = \"task_prio\";\n    medPrioInput.id = \"medium_prio\";\n    medPrioInput.value = \"medium\";\n    medPrioDiv.appendChild(medPrioInput);\n\n    const lowPrioDiv = document.createElement(\"div\");\n    taskPrioFieldset.appendChild(lowPrioDiv);\n    \n    const lowPrioLabel = document.createElement(\"label\");\n    lowPrioLabel.for = \"low_prio\";\n    lowPrioLabel.textContent = \"Low\";\n    lowPrioDiv.appendChild(lowPrioLabel);\n\n    const lowPrioInput = document.createElement(\"input\");\n    lowPrioInput.type = \"radio\";\n    lowPrioInput.name = \"task_prio\";\n    lowPrioInput.id = \"low_prio\";\n    lowPrioInput.value = \"low\";\n    lowPrioDiv.appendChild(lowPrioInput);\n\n    const taskNotesLabel = document.createElement('label');\n    taskNotesLabel.for = \"task_notes\";\n    taskNotesLabel.textContent = \"Notes\";\n    newTaskForm.appendChild(taskNotesLabel);\n\n    const taskNotesTextArea = document.createElement('textarea');\n    taskNotesTextArea.name = \"task_notes\";\n    taskNotesTextArea.id = \"task_notes\";\n    taskNotesTextArea.cols = 30;\n    taskNotesTextArea.rows = 10;\n    newTaskForm.appendChild(taskNotesTextArea);\n\n    const taskSubmitBtn = document.createElement('button');\n    taskSubmitBtn.classList.add(\"submit-task-btn\");\n    taskSubmitBtn.type = \"button\";\n    taskSubmitBtn.textContent = \"Add Task\";\n    taskSubmitBtn.onclick = () => {\n        // new Task(taskNameInput.value, taskDateInput.value, \"Low\", taskNotesTextArea.value, currentList);\n        const prioButtons = document.getElementsByName(\"task_prio\");\n        let prioValue;\n        for (let i = 0; i < prioButtons.length; i++) {\n            if (prioButtons[i].checked) {\n                prioValue = prioButtons[i].value;\n                break; // Stop iterating once a checked radio button is found\n            }\n        }\n        new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task(taskNameInput.value, taskDateInput.value, prioValue, taskNotesTextArea.value);\n        showTasks(tasksUl, _tasks__WEBPACK_IMPORTED_MODULE_0__.tasks);\n    }\n    newTaskForm.appendChild(taskSubmitBtn);\n\n    const completeTasksUl = document.createElement('ul');\n    completeTasksUl.classList.add(\"completed-tasks\");\n    mainContentDiv.appendChild(completeTasksUl);\n    let completeTasks = [new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task(\"This is complete\", \"\", \"low\", \"\")];\n    showTasks(completeTasksUl, completeTasks);\n\n    const footerDiv = document.createElement('div');\n    footerDiv.classList.add(\"footer\");\n    mainContentDiv.appendChild(footerDiv);\n\n    const trashImg = document.createElement(\"img\");\n    trashImg.src = \"images/delete.svg\";\n    trashImg.alt = \"Delete\";\n    trashImg.classList.add(\"delete-list\");\n    footerDiv.appendChild(trashImg);\n\n    // may remove\n    const taskViewP = document.createElement(\"p\");\n    taskViewP.classList.add(\"task-view\");\n    taskViewP.textContent = \"Task View: Basic\";\n    footerDiv.appendChild(taskViewP);\n\n    // may remove\n    const lightSwitchLabel = document.createElement(\"p\");\n    lightSwitchLabel.classList.add(\"light-switch\");\n    footerDiv.appendChild(lightSwitchLabel);\n\n    const lightSwitchInput = document.createElement(\"input\");\n    lightSwitchInput.type = \"checkbox\";\n    lightSwitchLabel.appendChild(lightSwitchInput);\n\n    const lightSwitchSpan = document.createElement(\"span\");\n    lightSwitchSpan.classList.add(\"slider\");\n    lightSwitchLabel.appendChild(lightSwitchSpan);\n\n}\n\n// START COMPLETED TASKS HERE\n\nconst showTasks = (Ul, taskList) => {\n    while (Ul.firstChild) {\n        Ul.removeChild(Ul.firstChild);\n    }\n\n    taskList.forEach(task => {\n        // if (task.list == currentList)\n        const taskLi = document.createElement('li');\n        taskLi.classList.add(\"task\");\n        Ul.appendChild(taskLi);\n\n        const taskInput = document.createElement('input');\n        taskInput.type = \"checkbox\";\n        // const listName = task.list;\n        // taskInput.id = listName.concat(task.index);\n        taskInput.id = \"\".concat(task.list, task.index);\n        taskInput.name = \"\".concat(task.list, task.index);\n        taskInput.classList.add(\"hidden-checkbox\");\n        taskLi.appendChild(taskInput);\n\n        const taskLabel = document.createElement(\"label\");\n        taskLabel.for = \"\".concat(task.list, task.index);\n        taskLabel.classList.add(\"custom-checkbox\");\n        taskLi.appendChild(taskLabel);\n\n        const checkmarkDiv = document.createElement(\"div\");\n        checkmarkDiv.classList.add(\"checkmark\");\n        taskLabel.appendChild(checkmarkDiv);\n\n        const checkmarkImg = document.createElement(\"img\");\n        checkmarkImg.src = \"images/tick-mark-icon.svg\";\n        checkmarkImg.alt = \"Checkmark\";\n        checkmarkImg.classList.add(\"check-img\");\n        checkmarkDiv.appendChild(checkmarkImg);\n\n        const taskName = document.createElement(\"p\");\n        taskName.textContent = task.name;\n        taskLabel.appendChild(taskName);\n\n        if (task.doBy != null) {\n            const taskNameDateDiv = document.createElement(\"div\");\n            taskLabel.appendChild(taskNameDateDiv);\n            taskLabel.removeChild(taskName);\n            taskNameDateDiv.appendChild(taskName);\n\n            const taskDoBy = document.createElement(\"p\");\n            taskDoBy.classList.add(\"do-by\");\n            taskDoBy.textContent = \"Do by \".concat(task.doBy);\n            taskNameDateDiv.appendChild(taskDoBy);\n        }\n\n        const optionDotsImg = document.createElement(\"img\");\n        optionDotsImg.src = \"images/dots-horizontal.svg\";\n        optionDotsImg.alt = \"Dots\";\n        optionDotsImg.classList.add(\"option-dots\");\n        taskLi.appendChild(optionDotsImg);\n    });\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/mainContent.js?");

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSidebar: () => (/* binding */ setupSidebar)\n/* harmony export */ });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/modules/lists.js\");\n// Fix or change the addList logic so that I can add and remove from specific items\n\nconst contentDiv = document.querySelector('#content');\nconst sidebarDiv = document.createElement('div');\nconst listsUl = document.createElement('ul');\n\nconst setupSidebar = () => {\n    contentDiv.appendChild(sidebarDiv);\n    sidebarDiv.classList.add(\"sidebar\");\n\n    // make list to display lists\n    const listsHeader = document.createElement('h1');\n    listsHeader.classList.add('lists-header');\n    listsHeader.textContent = \"Lists\";\n    sidebarDiv.appendChild(listsHeader);\n\n    sidebarDiv.appendChild(listsUl);\n\n    // newList('2024 Goals');\n    // newList('Basic');\n    // newList('School');\n\n    new _lists__WEBPACK_IMPORTED_MODULE_0__.List(\"2024 Goals\");\n    new _lists__WEBPACK_IMPORTED_MODULE_0__.List(\"Basic\");\n    new _lists__WEBPACK_IMPORTED_MODULE_0__.List(\"School\");\n\n    showLists();\n\n    // button to show form and add a new list\n    const newListBtn = document.createElement('button');\n    newListBtn.classList.add('add-new-list');\n    newListBtn.textContent = \"New List +\";\n    newListBtn.onclick = () => {\n        newListForm.classList.add('new-list-form');\n        newListForm.classList.remove('hide');\n    }\n    sidebarDiv.appendChild(newListBtn);\n\n    const newListForm = document.createElement('form');\n    // newListForm.classList.add('new-list-form');\n    newListForm.classList.add('hide');\n    newListForm.action = '#';\n    newListForm.method = 'get';\n    sidebarDiv.appendChild(newListForm);\n\n    const listNameLabel = document.createElement('label');\n    listNameLabel.htmlFor = \"new_list\";\n    listNameLabel.textContent = \"List Name\";\n    newListForm.appendChild(listNameLabel);\n\n    const listNameInput = document.createElement('input');\n    listNameInput.type = \"text\";\n    listNameInput.name = \"new_list\";\n    listNameInput.id = \"new_list\";\n    listNameInput.required = true;\n    newListForm.appendChild(listNameInput);\n\n    const addListBtn = document.createElement('button');\n    addListBtn.classList.add(\"submit-list-btn\");\n    addListBtn.type = \"button\";\n    addListBtn.textContent = \"Add List\";\n    addListBtn.onclick = () => {\n        // array.forEach(element => {\n            \n        // });\n        console.log(listNameInput.value);\n        // newList(listNameInput.textContent);\n        new _lists__WEBPACK_IMPORTED_MODULE_0__.List(listNameInput.value);\n        showLists();\n        listNameInput.value = \"\";\n        newListForm.classList.remove('new-list-form');\n        newListForm.classList.add('hide');\n    }\n    newListForm.appendChild(addListBtn);\n}\n\n// const newList = (name) => {\n//     const listLi = document.createElement('li');\n//     listLi.classList.add('sidebar-list');\n//     listLi.textContent = name;\n//     listsUl.appendChild(listLi);\n//     listLi.onclick = () => {\n//         listLi.classList.add('selected-list');\n//     }\n// }\n\nconst showLists = () => {\n    while (listsUl.firstChild) {\n        listsUl.removeChild(listsUl.firstChild);\n    }\n    _lists__WEBPACK_IMPORTED_MODULE_0__.lists.forEach(list => {\n        const listLi = document.createElement('li');\n        listLi.classList.add('sidebar-list');\n        listLi.textContent = list.name;\n        listsUl.appendChild(listLi);\n        \n        listLi.onclick = () => {\n            // currentList = list;\n            // assignCurrentList(list.index, listLi);\n            console.log(list.index);\n            list.selected = true;\n            if (list.selected) {\n                listLi.classList.add('selected-list');\n            } else {\n                listLi.classList.remove('selected-list');\n            }\n        }\n    });\n}\n\n// const assignCurrentList = (indexSelected, liElement) => {\n//     lists.forEach(list => {\n//         if (list.index === indexSelected) {\n//             list.selected = true;\n//             liElement.classList.add('selected-list');\n//         } else {\n//             list.selected = false;\n//             liElement.classList.remove('selected-list');\n//         }\n//     });\n// }\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/sidebar.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\nconst tasks = [];\nclass Task {\n    constructor(name, doBy, priority, notes) {\n        this.name = name;\n        this.index;\n        this.doBy = doBy;\n        this.priority = priority;\n        this.notes = notes;\n        this.list;\n        this.complete = false;\n        this.addToTasks();\n        this.assignIndex();\n    }\n\n    addToTasks() {\n        tasks.push(this);\n    }\n\n    assignIndex() {\n        this.index = tasks.length - 1;\n    }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/tasks.js?");

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