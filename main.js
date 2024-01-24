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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n(0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.setupSite)();\nconsole.log(\"Site loaded\");\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSite: () => (/* binding */ setupSite)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/modules/sidebar.js\");\n/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent */ \"./src/modules/mainContent.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\n\nconst setupSite = () => {\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadData)();\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.setupSidebar)();\n    (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.setupMain)();\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/lists.js":
/*!******************************!*\
  !*** ./src/modules/lists.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   List: () => (/* binding */ List),\n/* harmony export */   currentList: () => (/* binding */ currentList),\n/* harmony export */   lists: () => (/* binding */ lists),\n/* harmony export */   removeList: () => (/* binding */ removeList)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\nconst lists = [];\nlet currentList;\nclass List {\n    constructor(name) {\n        this.name = name;\n        this.index;\n        this.selected = false;\n        // this.tasks = [];\n        this.addToLists();\n        this.assignIndex();\n    }\n\n    // addTaskToList(task) {\n    //     tasks.push(task);\n    // }\n\n    addToLists() {\n        lists.push(this);\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveData)();\n    }\n\n    assignIndex() {\n        this.index = lists.length - 1;\n    }\n\n    setAsCurrent() {\n        currentList = this;\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveData)();\n    }\n}\n\nconst removeList = (listIndex) => {\n    lists.splice(listIndex, 1);\n    for (let i = listIndex; i < listIndex.length; i++) {\n        listIndex[i].index -= 1;\n    }\n    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveData)();\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/lists.js?");

/***/ }),

/***/ "./src/modules/mainContent.js":
/*!************************************!*\
  !*** ./src/modules/mainContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   completeTasksUl: () => (/* binding */ completeTasksUl),\n/* harmony export */   setupMain: () => (/* binding */ setupMain),\n/* harmony export */   showTasks: () => (/* binding */ showTasks),\n/* harmony export */   tasksUl: () => (/* binding */ tasksUl)\n/* harmony export */ });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/modules/lists.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./src/modules/sidebar.js\");\n// NEXT TIME DO NOT NEED TO PUT ALL HTML INTO JS. JUST PUT NEEDED HTML INTO A DIV\n// ALSO NEXT TIME USE GRID TO SET UP SITE\n\n\n\nconst contentDiv = document.querySelector('#content');\nconst mainContentDiv = document.createElement('div');\nconst tasksUl = document.createElement('ul');\nconst completeTasksUl = document.createElement('ul');\n\nconst setupMain = () => {\n    contentDiv.appendChild(mainContentDiv);\n    mainContentDiv.classList.add(\"main-content\");\n\n    tasksUl.classList.add(\"to-do-list\");\n    mainContentDiv.appendChild(tasksUl);\n    showTasks(tasksUl, _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks);\n\n    const newTaskBtn = document.createElement(\"button\");\n    newTaskBtn.classList.add(\"add-new-task\");\n    newTaskBtn.textContent = \"New Task +\";\n    newTaskBtn.onclick = () => {\n        if (newTaskForm.classList.contains(\"hide\")) {\n            newTaskForm.classList.add(\"new-task-form\");\n            newTaskForm.classList.remove(\"hide\");\n        } else {\n            newTaskForm.classList.remove(\"new-task-form\");\n            newTaskForm.classList.add(\"hide\");\n        }\n    }\n    mainContentDiv.appendChild(newTaskBtn);\n\n    const newTaskForm = document.createElement(\"form\");\n    newTaskForm.action = \"#\";\n    newTaskForm.method = \"get\";\n    // newTaskForm.classList.add(\"new-task-form\");\n    newTaskForm.classList.add(\"hide\");\n    mainContentDiv.appendChild(newTaskForm);\n\n    const taskFormLabel = document.createElement(\"label\");\n    taskFormLabel.for = \"task_desc\";\n    taskFormLabel.textContent = \"Task\";\n    newTaskForm.appendChild(taskFormLabel);\n\n    const taskNameInput = document.createElement(\"input\");\n    taskNameInput.name = \"task_desc\";\n    taskNameInput.id = \"task_desc\";\n    taskNameInput.required = true;\n    newTaskForm.appendChild(taskNameInput);\n\n    const taskFormDate = document.createElement(\"label\");\n    taskFormDate.for = \"task_duedate\";\n    taskFormDate.textContent = \"Do By\";\n    newTaskForm.appendChild(taskFormDate);\n\n    const taskDateInput = document.createElement(\"input\");\n    taskDateInput.type = \"date\";\n    taskDateInput.name = \"task_duedate\";\n    taskDateInput.id = \"task_duedate\";\n    newTaskForm.appendChild(taskDateInput);\n\n    const taskPrioFieldset = document.createElement(\"fieldset\");\n    taskPrioFieldset.classList.add(\"task-prio\");\n    newTaskForm.appendChild(taskPrioFieldset);\n\n    const taskPrioLegend = document.createElement(\"legend\");\n    taskPrioLegend.textContent = \"Priority\";\n    taskPrioFieldset.appendChild(taskPrioLegend);\n\n    const highPrioDiv = document.createElement(\"div\");\n    taskPrioFieldset.appendChild(highPrioDiv);\n    \n    const highPrioLabel = document.createElement(\"label\");\n    highPrioLabel.for = \"high_prio\";\n    highPrioLabel.textContent = \"High\";\n    highPrioDiv.appendChild(highPrioLabel);\n\n    const highPrioInput = document.createElement(\"input\");\n    highPrioInput.type = \"radio\";\n    highPrioInput.name = \"task_prio\";\n    highPrioInput.id = \"high_prio\";\n    highPrioInput.value = \"high\";\n    highPrioDiv.appendChild(highPrioInput);\n\n    const medPrioDiv = document.createElement(\"div\");\n    taskPrioFieldset.appendChild(medPrioDiv);\n    \n    const medPrioLabel = document.createElement(\"label\");\n    medPrioLabel.for = \"medium_prio\";\n    medPrioLabel.textContent = \"Medium\";\n    medPrioDiv.appendChild(medPrioLabel);\n\n    const medPrioInput = document.createElement(\"input\");\n    medPrioInput.type = \"radio\";\n    medPrioInput.name = \"task_prio\";\n    medPrioInput.id = \"medium_prio\";\n    medPrioInput.value = \"medium\";\n    medPrioDiv.appendChild(medPrioInput);\n\n    const lowPrioDiv = document.createElement(\"div\");\n    taskPrioFieldset.appendChild(lowPrioDiv);\n    \n    const lowPrioLabel = document.createElement(\"label\");\n    lowPrioLabel.for = \"low_prio\";\n    lowPrioLabel.textContent = \"Low\";\n    lowPrioDiv.appendChild(lowPrioLabel);\n\n    const lowPrioInput = document.createElement(\"input\");\n    lowPrioInput.type = \"radio\";\n    lowPrioInput.name = \"task_prio\";\n    lowPrioInput.id = \"low_prio\";\n    lowPrioInput.value = \"low\";\n    lowPrioDiv.appendChild(lowPrioInput);\n\n    const taskNotesLabel = document.createElement('label');\n    taskNotesLabel.for = \"task_notes\";\n    taskNotesLabel.textContent = \"Notes\";\n    newTaskForm.appendChild(taskNotesLabel);\n\n    const taskNotesTextArea = document.createElement('textarea');\n    taskNotesTextArea.name = \"task_notes\";\n    taskNotesTextArea.id = \"task_notes\";\n    taskNotesTextArea.cols = 30;\n    taskNotesTextArea.rows = 10;\n    newTaskForm.appendChild(taskNotesTextArea);\n\n    const taskSubmitBtn = document.createElement('button');\n    taskSubmitBtn.classList.add(\"submit-task-btn\");\n    taskSubmitBtn.type = \"button\";\n    taskSubmitBtn.textContent = \"Add Task\";\n    taskSubmitBtn.onclick = () => {\n        const prioButtons = document.getElementsByName(\"task_prio\");\n        let prioValue;\n        for (let i = 0; i < prioButtons.length; i++) {\n            if (prioButtons[i].checked) {\n                prioValue = prioButtons[i].value;\n                break; // Stop iterating once a checked radio button is found\n            }\n        }\n\n        if (taskDateInput.value != ''){\n            var dateObject = new Date(taskDateInput.value);\n            var options = { year: 'numeric', month: 'long', day: 'numeric'};\n            var formatter = new Intl.DateTimeFormat('en-US', options);\n            var formattedDate = formatter.format(dateObject);\n            // var formattedDate = dateObject.toLocaleString();\n            new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(taskNameInput.value, formattedDate, prioValue, taskNotesTextArea.value, _lists__WEBPACK_IMPORTED_MODULE_0__.currentList, false);\n        } else {\n            new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(taskNameInput.value, taskDateInput.value, prioValue, taskNotesTextArea.value, _lists__WEBPACK_IMPORTED_MODULE_0__.currentList, false);\n        }\n        showTasks(tasksUl, _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks);\n\n        taskNameInput.value = \"\";\n        taskNotesTextArea.value = \"\";\n        newTaskForm.classList.remove(\"new-task-form\");\n        newTaskForm.classList.add(\"hide\");\n\n    }\n    newTaskForm.appendChild(taskSubmitBtn);\n\n    completeTasksUl.classList.add(\"completed-tasks\");\n    mainContentDiv.appendChild(completeTasksUl);\n    // new Task(\"This is complete\", \"\", \"low\", \"\", currentList, true);\n    showTasks(completeTasksUl, _tasks__WEBPACK_IMPORTED_MODULE_1__.completeTasks);\n\n    const footerDiv = document.createElement('div');\n    footerDiv.classList.add(\"footer\");\n    mainContentDiv.appendChild(footerDiv);\n\n    const trashImg = document.createElement(\"img\");\n    trashImg.src = \"images/delete.svg\";\n    trashImg.alt = \"Delete\";\n    trashImg.classList.add(\"delete-list\");\n    footerDiv.appendChild(trashImg);\n    trashImg.onclick = () => {\n        const comfirmListDel = window.confirm(\"Are you sure you want to delete this list (all tasks in list will be removed as well)?\");\n        if (comfirmListDel) {\n            (0,_lists__WEBPACK_IMPORTED_MODULE_0__.removeList)(_lists__WEBPACK_IMPORTED_MODULE_0__.currentList.index);\n            _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach(task => {\n                if (task.list == _lists__WEBPACK_IMPORTED_MODULE_0__.currentList.name) {\n                    task.removeTask(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks, task.index);\n                }\n            });\n            _tasks__WEBPACK_IMPORTED_MODULE_1__.completeTasks.forEach(task => {\n                if (task.list == _lists__WEBPACK_IMPORTED_MODULE_0__.currentList.name) {\n                    task.removeTask(_tasks__WEBPACK_IMPORTED_MODULE_1__.completeTasks, task.index);\n                }\n            });\n            // currentList = lists[0];\n            if (_lists__WEBPACK_IMPORTED_MODULE_0__.lists.length-1 > -1) {\n                _lists__WEBPACK_IMPORTED_MODULE_0__.lists[_lists__WEBPACK_IMPORTED_MODULE_0__.lists.length-1].setAsCurrent();\n            }\n            (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.showLists)();\n            showTasks(tasksUl, _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks);\n            showTasks(completeTasksUl, _tasks__WEBPACK_IMPORTED_MODULE_1__.completeTasks);\n\n        } else {\n            console.log(\"Deletion canceled\");\n        }\n    }\n\n    const notesHint = document.createElement(\"p\");\n    notesHint.classList.add(\"notes-hint\");\n    notesHint.textContent = \"To see notes click on task\";\n    footerDiv.appendChild(notesHint);\n\n    // may remove\n    // const taskViewP = document.createElement(\"p\");\n    // taskViewP.classList.add(\"task-view\");\n    // taskViewP.textContent = \"Task View: Basic\";\n    // footerDiv.appendChild(taskViewP);\n\n    // may remove\n    // const lightSwitchLabel = document.createElement(\"p\");\n    // lightSwitchLabel.classList.add(\"light-switch\");\n    // footerDiv.appendChild(lightSwitchLabel);\n\n    // const lightSwitchInput = document.createElement(\"input\");\n    // lightSwitchInput.type = \"checkbox\";\n    // lightSwitchLabel.appendChild(lightSwitchInput);\n\n    // const lightSwitchSpan = document.createElement(\"span\");\n    // lightSwitchSpan.classList.add(\"slider\");\n    // lightSwitchLabel.appendChild(lightSwitchSpan);\n\n}\n\nconst showTasks = (Ul, taskList) => {\n    while (Ul.firstChild) {\n        Ul.removeChild(Ul.firstChild);\n    }\n\n    taskList.forEach(task => {\n        // if (task.list == currentList) {\n        if (task.listIndex == _lists__WEBPACK_IMPORTED_MODULE_0__.currentList.index) {\n            const taskLi = document.createElement('li');\n            taskLi.classList.add(\"task\");\n            Ul.appendChild(taskLi);\n\n            const taskInput = document.createElement('input');\n            taskInput.type = \"checkbox\";\n            taskInput.id = \"\".concat(task.list, task.index);\n            taskInput.name = \"\".concat(task.list, task.index);\n            taskInput.classList.add(\"hidden-checkbox\");\n            taskLi.appendChild(taskInput);\n\n            if (task.complete === true) {\n                taskInput.checked = true;\n            } else {\n                taskInput.checked = false;\n            }\n\n            taskInput.addEventListener('change', () => {\n                if (taskInput.checked) {\n                    console.log(task.name + \" checked\");\n                    task.complete = true;\n                    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.removeTask) (_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks, task.index);\n                    task.addToCompleteTasks();\n                    task.assignIndex();\n                    showTasks(tasksUl, _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks);\n                    showTasks(completeTasksUl, _tasks__WEBPACK_IMPORTED_MODULE_1__.completeTasks);\n                } else {\n                    console.log(task.name + \" unchecked\");\n                    task.complete = false;\n                    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.removeTask) (_tasks__WEBPACK_IMPORTED_MODULE_1__.completeTasks, task.index);\n                    task.addToTasks();\n                    task.assignIndex();\n                    showTasks(tasksUl, _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks);\n                    showTasks(completeTasksUl, _tasks__WEBPACK_IMPORTED_MODULE_1__.completeTasks);\n                }\n            })\n\n            const taskLabel = document.createElement(\"label\");\n            taskLabel.for = \"\".concat(task.list, task.index);\n            taskLabel.classList.add(\"custom-checkbox\");\n            taskLi.appendChild(taskLabel);\n\n            const checkmarkDiv = document.createElement(\"div\");\n            checkmarkDiv.classList.add(\"checkmark\");\n            taskLabel.appendChild(checkmarkDiv);\n\n            const checkmarkImg = document.createElement(\"img\");\n            checkmarkImg.src = \"images/tick-mark-icon.svg\";\n            checkmarkImg.alt = \"Checkmark\";\n            checkmarkImg.classList.add(\"check-img\");\n            checkmarkDiv.appendChild(checkmarkImg);\n\n            const taskInfoDiv = document.createElement(\"div\");\n            taskLabel.appendChild(taskInfoDiv);\n            const taskName = document.createElement(\"p\");\n            taskName.textContent = task.name;\n            // taskLabel.appendChild(taskName);\n            taskInfoDiv.appendChild(taskName);\n\n            if (task.doBy != '') {\n                // const taskNameDateDiv = document.createElement(\"div\");\n                // taskLabel.appendChild(taskNameDateDiv);\n                // taskLabel.removeChild(taskName);\n                // taskNameDateDiv.appendChild(taskName);\n\n                const taskDoBy = document.createElement(\"p\");\n                taskDoBy.classList.add(\"do-by\");\n                if (task.priority == \"low\") {\n                    taskDoBy.style.color = 'gray';\n                } else if (task.priority == \"medium\") {\n                    taskDoBy.style.color = 'gold';\n                } else if (task.priority == \"high\") {\n                    taskDoBy.style.color = 'red';\n                } else {\n                    taskDoBy.style.color = 'gray';\n                    console.log(task.priority);\n                }\n                const formattedDate = task.doBy.toLocaleString();\n                taskDoBy.textContent = \"Do by \".concat(formattedDate);\n                // taskNameDateDiv.appendChild(taskDoBy);\n                taskInfoDiv.appendChild(taskDoBy);\n            }\n\n            const taskNotesDiv = document.createElement(\"div\");\n            const notesHeader = document.createElement(\"h1\");\n            notesHeader.classList.add('notes-header');\n            notesHeader.textContent = \"Notes:\";\n            notesHeader.style.textDecoration = \"underline\";\n            taskNotesDiv.appendChild(notesHeader);\n\n            const taskNotes = document.createElement(\"p\");\n            taskNotes.classList.add('task-notes');\n            taskNotes.textContent = task.notes;\n            taskNotesDiv.appendChild(taskNotes);\n\n            taskLabel.onclick = () => {\n                task.showNotes = !task.showNotes;\n                if (task.showNotes) {\n                    // taskLabel.appendChild(taskNotesDiv);\n                    taskInfoDiv.appendChild(taskNotesDiv);\n                } else {\n                    // taskLabel.removeChild(taskNotesDiv);\n                    taskInfoDiv.removeChild(taskNotesDiv);\n                }\n            }\n\n            // const optionDotsImg = document.createElement(\"img\");\n            // optionDotsImg.src = \"images/dots-horizontal.svg\";\n            // optionDotsImg.alt = \"Dots\";\n            // optionDotsImg.classList.add(\"option-dots\");\n            // taskLi.appendChild(optionDotsImg);\n\n            const removeTaskImg = document.createElement(\"img\");\n            removeTaskImg.src = \"images/close.svg\";\n            removeTaskImg.alt = \"Remove\";\n            removeTaskImg.classList.add(\"remove-task-img\");\n            taskLi.appendChild(removeTaskImg);\n            removeTaskImg.onclick = () => {\n                const comfirmTaskDel = window.confirm(\"Are you sure you want to delete this task?\");\n                if (comfirmTaskDel) {\n                    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.removeTask)(taskList, task.index);\n                    showTasks(Ul, taskList);\n                } else {\n                    console.log(\"Deletion canceled\");\n                }\n            }\n\n        }\n        \n    });\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/mainContent.js?");

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSidebar: () => (/* binding */ setupSidebar),\n/* harmony export */   showLists: () => (/* binding */ showLists)\n/* harmony export */ });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/modules/lists.js\");\n/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent */ \"./src/modules/mainContent.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n\n\n\nconst contentDiv = document.querySelector('#content');\nconst sidebarDiv = document.createElement('div');\nconst listsUl = document.createElement('ul');\n\nconst setupSidebar = () => {\n    contentDiv.appendChild(sidebarDiv);\n    sidebarDiv.classList.add(\"sidebar\");\n\n    // make list to display lists\n    const listsHeader = document.createElement('h1');\n    listsHeader.classList.add('lists-header');\n    listsHeader.textContent = \"Lists\";\n    sidebarDiv.appendChild(listsHeader);\n\n    sidebarDiv.appendChild(listsUl);\n\n    // new List(\"Default\");\n    // new List(\"2024 Goals\");\n    // new List(\"Basic\");\n    // new List(\"School\");\n    if (_lists__WEBPACK_IMPORTED_MODULE_0__.lists.length < 1) {\n        new _lists__WEBPACK_IMPORTED_MODULE_0__.List(\"Default\");\n    }\n    console.log(_lists__WEBPACK_IMPORTED_MODULE_0__.lists[0]);\n    _lists__WEBPACK_IMPORTED_MODULE_0__.lists[0].setAsCurrent();\n\n    showLists();\n\n    // button to show form and add a new list\n    const newListBtn = document.createElement('button');\n    newListBtn.classList.add('add-new-list');\n    newListBtn.textContent = \"New List +\";\n    newListBtn.onclick = () => {\n        if (newListForm.classList.contains('hide')) {\n            newListForm.classList.add('new-list-form');\n            newListForm.classList.remove('hide');\n        } else {\n            newListForm.classList.remove('new-list-form');\n            newListForm.classList.add('hide');\n        }\n    }\n    sidebarDiv.appendChild(newListBtn);\n\n    const newListForm = document.createElement('form');\n    // newListForm.classList.add('new-list-form');\n    newListForm.classList.add('hide');\n    newListForm.action = '#';\n    newListForm.method = 'get';\n    sidebarDiv.appendChild(newListForm);\n\n    const listNameLabel = document.createElement('label');\n    listNameLabel.htmlFor = \"new_list\";\n    listNameLabel.textContent = \"List Name\";\n    newListForm.appendChild(listNameLabel);\n\n    const listNameInput = document.createElement('input');\n    listNameInput.type = \"text\";\n    listNameInput.name = \"new_list\";\n    listNameInput.id = \"new_list\";\n    listNameInput.required = true;\n    newListForm.appendChild(listNameInput);\n\n    const addListBtn = document.createElement('button');\n    addListBtn.classList.add(\"submit-list-btn\");\n    addListBtn.type = \"button\";\n    addListBtn.textContent = \"Add List\";\n    addListBtn.onclick = () => {\n        new _lists__WEBPACK_IMPORTED_MODULE_0__.List(listNameInput.value);\n        _lists__WEBPACK_IMPORTED_MODULE_0__.lists[_lists__WEBPACK_IMPORTED_MODULE_0__.lists.length-1].setAsCurrent();\n        showLists();\n        (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.showTasks)(_mainContent__WEBPACK_IMPORTED_MODULE_1__.tasksUl, _tasks__WEBPACK_IMPORTED_MODULE_2__.tasks);\n        (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.showTasks)(_mainContent__WEBPACK_IMPORTED_MODULE_1__.completeTasksUl, _tasks__WEBPACK_IMPORTED_MODULE_2__.completeTasks);\n        listNameInput.value = \"\";\n        newListForm.classList.remove('new-list-form');\n        newListForm.classList.add('hide');\n    }\n    newListForm.appendChild(addListBtn);\n}\n\nconst showLists = () => {\n    while (listsUl.firstChild) {\n        listsUl.removeChild(listsUl.firstChild);\n    }\n\n    _lists__WEBPACK_IMPORTED_MODULE_0__.lists.forEach(list => {\n        const listLi = document.createElement('li');\n        listLi.classList.add('sidebar-list');\n        listLi.textContent = list.name;\n        listsUl.appendChild(listLi);\n\n        if (_lists__WEBPACK_IMPORTED_MODULE_0__.currentList == list) {\n            listLi.classList.add('selected-list');\n        } else {\n            listLi.classList.remove('selected-list');\n        }\n        \n        listLi.onclick = () => {\n            list.setAsCurrent();\n            (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.showTasks)(_mainContent__WEBPACK_IMPORTED_MODULE_1__.tasksUl, _tasks__WEBPACK_IMPORTED_MODULE_2__.tasks);\n            (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.showTasks)(_mainContent__WEBPACK_IMPORTED_MODULE_1__.completeTasksUl, _tasks__WEBPACK_IMPORTED_MODULE_2__.completeTasks);\n            showLists();\n        }\n    });\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/sidebar.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/modules/lists.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n\n\n\nconst saveData = () => {\n    localStorage.lists = JSON.stringify(_lists__WEBPACK_IMPORTED_MODULE_0__.lists);\n    localStorage.tasks = JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks);\n    localStorage.completeTasks = JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_1__.completeTasks);\n\n    // loadData();\n}\n\nconst loadData = () => {\n    const savedLists = JSON.parse(localStorage.getItem(\"lists\"));\n    const savedTasks = JSON.parse(localStorage.getItem(\"tasks\"));\n    const savedCompleteTasks = JSON.parse(localStorage.getItem(\"completeTasks\"));\n\n    savedLists.forEach(list => {\n        new _lists__WEBPACK_IMPORTED_MODULE_0__.List(list.name);\n    });\n    savedTasks.forEach(task => {\n        new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(task.name, task.doBy, task.priority, task.notes, task.list, task.complete);\n    });\n    savedCompleteTasks.forEach(task => {\n        console.log(task);\n        new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(task.name, task.doBy, task.priority, task.notes, task.list, task.complete);\n    });\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   completeTasks: () => (/* binding */ completeTasks),\n/* harmony export */   removeTask: () => (/* binding */ removeTask),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\nconst tasks = [];\nconst completeTasks = [];\nclass Task {\n    constructor(name, doBy, priority, notes, list, isComplete) {\n        this.name = name;\n        this.index;\n        this.doBy = doBy;\n        this.priority = priority;\n        this.notes = notes;\n        this.list = list;\n        this.listIndex = list.index;\n        this.complete = isComplete;\n        this.showNotes = false;\n        if (this.complete) {\n            this.addToCompleteTasks();\n        } else {\n            this.addToTasks();\n        }\n        this.assignIndex();\n    }\n\n    addToTasks() {\n        tasks.push(this);\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveData)();\n    }\n\n    addToCompleteTasks() {\n        completeTasks.push(this);\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveData)();\n    }\n\n    assignIndex() {\n        if (this.complete) {\n            this.index = completeTasks.length - 1;\n        } else {\n            this.index = tasks.length - 1;\n        }\n    }\n}\n\nconst removeTask = (taskList, taskIndex) => {\n    taskList.splice(taskIndex, 1);\n    for (let i = taskIndex; i < taskList.length; i++) {\n        taskList[i].index -= 1;\n    }\n    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveData)();\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/tasks.js?");

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