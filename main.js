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

eval("const content = document.getElementById(\"content\")\n\nconst h1 = document.createElement(\"h1\")\nh1.innerHTML = \"Steve-E's Pizzarrhea\"\ncontent.appendChild(h1)\n\nconst nav = document.createElement(\"nav\")\ncontent.appendChild(nav)\n\nlet tabs = []\n\nconst tabMaker = (name, pageBuilder) => {\n    const buildPage = () => {\n        buildTabs(name)\n        main.innerHTML = \"\"\n        pageBuilder()\n    }\n    return { name, pageBuilder, buildPage }\n}\n\ntabs.push(tabMaker(\"Home\",homePageBuilder))\ntabs.push(tabMaker(\"Menu\",menuPageBuilder))\ntabs.push(tabMaker(\"Contact\",contactPageBuilder))\n\nfunction buildTabs(current) {\n    nav.innerHTML = \"\"\n    for (let i = 0; i < tabs.length; i++) {\n        let newTab = document.createElement(\"div\")\n        newTab.innerHTML = tabs[i][\"name\"]\n        newTab.id = tabs[i][\"name\"]\n        newTab.className = \"tab\"\n        if (tabs[i][\"name\"] === current) {\n            newTab.className += \" current\"\n        }\n        newTab.addEventListener(\"click\", tabs[i].buildPage)\n        nav.appendChild(newTab)\n    }\n}\n\nconst main = document.createElement(\"main\")\ncontent.appendChild(main)\n\nfunction quickAdd(element, content, parent, htmlClass) {\n    let newElement = document.createElement(element)\n    newElement.innerHTML = content\n    if (htmlClass !== null) {\n        newElement.className = htmlClass\n    }\n    parent.appendChild(newElement)\n}\n\nfunction homePageBuilder() {\n    let img = document.createElement(\"img\")\n    img.src = \"960x0.jpg\"\n    img.style.width = \"100%\"\n    main.appendChild(img)\n\n    let p = document.createElement(\"p\")\n    p.innerHTML = \"Steve-E's Pizzarrhea has been a staple of \\\n    your local neigbhorhood since the dawn \\\n    of time. We live to serve and we serve to live! \\\n    No one can stop us from our dream of making you a bunch of pizzas \\\n    and watching you eat them, unblinking, for hours at a time. \\\n    Woo-wee, they sure do make the pizza right!\"\n    main.appendChild(p)\n}\n\nlet menu = []\n\nconst menuFactory = (name, sPrice, mPrice, lPrice) => {\n    return {name, sPrice, mPrice, lPrice}\n}\n\nconst spacer = {name: \"spacer\"}\n\nconst descriptionFactory = (description) => {\n    let name = \"description\"\n    return {name, description}\n}\n\nmenu.push(menuFactory(\"Cheese\",6,9,12.50))\nmenu.push(menuFactory(\"Pepperoni & Cheese\",7.25,10,13.75))\nmenu.push(menuFactory(\"Mushroom & Cheese\",7.25,10,13.75))\nmenu.push(menuFactory(\"Jalape\\xF1o & Cheese\",7.25,10,13.75))\nmenu.push(menuFactory(\"Anchovy & Cheese\",7.25,10,13.75))\nmenu.push(menuFactory(\"Black Olive & Cheese\",7.25,10,13.75))\nmenu.push(spacer)\nmenu.push(menuFactory(\"Deluxe\",9.25,12,15))\nmenu.push(descriptionFactory(\"Fresh mozzarella, pepperoni, sausage, bell peppers, \\\nand mushrooms.\"))\nmenu.push(spacer)\nmenu.push(menuFactory(\"Vegetarian\",9.25,12,15))\nmenu.push(descriptionFactory(\"Fresh mozzarella, bell peppers, onions, \\\nand mushrooms.\"))\nmenu.push(spacer)\nmenu.push(menuFactory(\"Romana\",9.25,12,15))\nmenu.push(descriptionFactory(\"No sauce. Mozzarella, rosemary, ham, and cheese.\"))\nmenu.push(spacer)\nmenu.push(menuFactory(\"Margherita\",9.25,12,15))\nmenu.push(descriptionFactory(\"Mozzarella and fresh basil.\"))\n\nfunction menuPageBuilder() {\n    quickAdd(\"h2\",\"Menu\",main)\n\n    let div = document.createElement(\"div\")\n    div.id = \"menu\"\n    main.appendChild(div)\n\n    quickAdd(\"div\",\"\",div)\n    quickAdd(\"div\",\"10\\\"\",div)\n    quickAdd(\"div\",\"14\\\"\",div)\n    quickAdd(\"div\",\"16\\\"\",div)\n\n    for (let i = 0; i < menu.length; i++) {\n        if (menu[i].name === \"spacer\") {\n            quickAdd(\"div\",\"\",div,\"spacer\")\n            continue\n        }\n        if (menu[i].name === \"description\") {\n            quickAdd(\"div\",menu[i][\"description\"],div,\"description\")\n            continue\n        }\n        quickAdd(\"div\",menu[i][\"name\"],div,\"item\")\n        quickAdd(\"div\",\"$\" + menu[i][\"sPrice\"].toFixed(2),div,\"price\")\n        quickAdd(\"div\",\"$\" + menu[i][\"mPrice\"].toFixed(2),div,\"price\")\n        quickAdd(\"div\",\"$\" + menu[i][\"lPrice\"].toFixed(2),div,\"price\")\n    }\n}\n\nfunction contactPageBuilder() {\n    quickAdd(\"h2\",\"Contact\",main)\n    quickAdd(\"p\", \"Orders: (555)-420-6969\", main)\n    quickAdd(\"p\", \"Email: severecase@pizzarrhea.com\", main)\n}\n\ntabs[0].buildPage()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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