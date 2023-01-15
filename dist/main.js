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

/***/ "./src/createDOM.js":
/*!**************************!*\
  !*** ./src/createDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createHome\": () => (/* binding */ createHome),\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu),\n/* harmony export */   \"createTabs\": () => (/* binding */ createTabs)\n/* harmony export */ });\nfunction createHeader(container) {\n    // Create header logo\n    const logo = document.createElement('h1');\n    logo.innerHTML = \"Heaven's Kitchen\";\n    logo.id = \"logo\";\n\n    container.append(logo);\n}\n// Tabs\nfunction createTabs(container) {\n    const tabsDiv = document.createElement('div');\n    tabsDiv.id = \"tabs\";\n\n    const homeBtn = document.createElement('button');\n    const menuBtn = document.createElement('button');\n    const contactBtn = document.createElement('button');\n\n    homeBtn.innerHTML = \"Home\";\n    menuBtn.innerHTML = \"Menu\";\n    contactBtn.innerHTML = \"Contact\";\n\n    homeBtn.classList.add(\"tab\");\n    menuBtn.classList.add(\"tab\");\n    contactBtn.classList.add(\"tab\");\n    homeBtn.id = \"home-tab\";\n    menuBtn.id = \"menu-tab\";\n    contactBtn.id = \"contact-tab\";\n\n    homeBtn.addEventListener('click', () => {\n        createHome(container);\n    })\n    menuBtn.addEventListener('click', () => {\n        createMenu(container);\n    })\n    contactBtn.addEventListener('click', () => {\n        createContact(container);\n    })\n\n    tabsDiv.appendChild(homeBtn);\n    tabsDiv.appendChild(menuBtn);\n    tabsDiv.appendChild(contactBtn);\n\n    container.append(tabsDiv);\n}\n\nfunction createHome(container) {\n    deleteContent();\n    const homeDiv = document.createElement('div');\n    homeDiv.id = \"home\";\n    homeDiv.classList.add('tab-div');\n\n    toggleActive(document.getElementById('home-tab'));\n\n    const image = document.createElement('img');\n    image.src = \"../src/image.jpeg\";\n\n    const desc = document.createElement('p');\n    desc.innerHTML = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\n\n\n    homeDiv.append(image);\n    homeDiv.append(desc);\n\n    container.append(homeDiv);\n}\n\nfunction createMenu(container) {\n    deleteContent();\n    const menuDiv = document.createElement('div');\n    menuDiv.id = \"menu\";\n    menuDiv.classList.add('tab-div');\n\n    toggleActive(document.getElementById('menu-tab'));\n\n    for (let j = 0; j < 4; j++) {\n        for (let i = 0; i < menuItems.length; i++) {\n            const item = createMenuItem(menuDiv, menuItems[i]);\n        }\n    }\n\n    container.append(menuDiv);\n}\n\nfunction createContact(container) {\n    deleteContent();\n    const contactDiv = document.createElement('div');\n    contactDiv.id = \"contact\";\n    contactDiv.classList.add('tab-div');\n\n    toggleActive(document.getElementById('contact-tab'));\n\n    const form = document.createElement('form');\n    const name = document.createElement('input');\n    const phone = document.createElement('input');\n    const email = document.createElement('input');\n    const submitBtn = document.createElement('button');\n    name.placeholder = \"Name\";\n    phone.placeholder = \"Phone number\";\n    email.placeholder = \"E-mail\";\n    submitBtn.innerHTML = \"Submit\";\n    name.type = \"text\";\n    phone.type = \"number\";\n    email.type = \"email\";\n    submitBtn.type = \"submit\";\n\n\n    form.appendChild(name);\n    form.appendChild(phone);\n    form.appendChild(email);\n    form.appendChild(submitBtn);\n\n    contactDiv.appendChild(form);\n\n    container.append(contactDiv);\n}\n\nfunction deleteContent() {\n    const tabs = document.getElementsByClassName('tab-div');\n    for (let i = 0; i < tabs.length; i++) {\n        tabs[i].remove();\n      }\n}\n\nfunction toggleActive(button) {\n    const btns = document.getElementsByClassName('tab');\n    for (let i = 0; i < btns.length; i++) {\n        btns[i].classList.remove('active');\n    }\n    button.classList.toggle('active');\n}\n\n\nfunction createMenuItem(menu, item) {\n    const container = document.createElement('div');\n    container.classList.add('menu-item');\n\n    const img = document.createElement('img');\n    img.classList.add('menu-img');\n    img.src = item.src;\n\n    const title = document.createElement('h1');\n    title.classList.add('menu-title');\n    title.innerHTML = item.title;\n\n    const desc = document.createElement('p');\n    desc.classList.add('menu-desc');\n    desc.innerHTML = item.desc;\n\n    container.appendChild(img);\n    container.appendChild(title);\n    container.appendChild(desc);\n    menu.appendChild(container);\n}\nconst menuItems = [\n    {\n        src: \"https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg\",\n        title: \"Pancake\",\n        desc: \"Pancakes are a great food to eat, make gluten free if you a bitch bitch\"\n    },\n    {\n        src: \"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg\",\n        title: \"Burgers\",\n        desc: \"Burgers are a great food to eat, make gluten free if you a bitch bitch\"\n    }\n]\n// // HOME\n// // MENU\n// // CONTACT\n\n//# sourceURL=webpack://restaurant-page/./src/createDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n\n\nconst content = document.getElementById('content');\n\n(0,_createDOM__WEBPACK_IMPORTED_MODULE_0__.createHeader)(content);\n(0,_createDOM__WEBPACK_IMPORTED_MODULE_0__.createTabs)(content);\n(0,_createDOM__WEBPACK_IMPORTED_MODULE_0__.createHome)(content);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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