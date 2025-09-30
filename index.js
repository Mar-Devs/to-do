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

/***/ "./to-do-class.js":
/*!************************!*\
  !*** ./to-do-class.js ***!
  \************************/
/***/ (() => {

eval("{class Task{\r\n    constructor(title,discription,dueDate,priority,group,key){\r\n        this.title = title\r\n        this.discription = discription\r\n        this.dueDate = dueDate\r\n        this.priority = priority\r\n        this.group = group\r\n        this.key = key\r\n    }\r\n}\r\n\r\n    let arrayed = []\r\nfunction createTask(title,discription,dueDate,priority,group,key){\r\n    let task = new Task(title,discription,dueDate,priority,group,key)\r\n    localStorage.setItem(key, JSON.stringify(task))\r\n    arrayed.push(key)\r\n}\r\n\r\n\r\n\r\ncreateTask(\"Read\",\"Read at least 20 pages\",\"Today\",\"High\",\"main\",1)\r\ncreateTask(\"Workout\",\"Workout for an hour\",\"Today\",\"High\",\"main\",2)\r\ncreateTask(\"Sleep\",\"Get atleast 8 hours of sleep\",\"Today\",\"High\",\"second\",3)\r\n\r\n\r\nfor(let i = 1; i < arrayed.length+1 ; i++){\r\n    let firstIteration = localStorage.getItem(JSON.parse(i))\r\n    let secondIteration = JSON.parse(firstIteration)\r\n    if(secondIteration.group === \"main\"){\r\n        console.log(secondIteration)\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do/./to-do-class.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./to-do-class.js"]();
/******/ 	
/******/ })()
;