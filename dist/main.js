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

eval("const content = document.getElementById('content');\n\nconst h1 = document.createElement('h1');\nh1.innerHTML = \"Steve-E's Pizzarrhea\";\ncontent.appendChild(h1);\n\nconst nav = document.createElement('nav');\ncontent.appendChild(nav);\n\nconst tabs = [];\n\nfunction buildTabs(current) {\n  nav.innerHTML = '';\n  for (let i = 0; i < tabs.length; i += 1) {\n    const newTab = document.createElement('div');\n    newTab.innerHTML = tabs[i].name;\n    newTab.id = tabs[i].name;\n    newTab.className = 'tab';\n    if (tabs[i].name === current) {\n      newTab.className += ' current';\n    }\n    newTab.addEventListener('click', tabs[i].buildPage);\n    nav.appendChild(newTab);\n  }\n}\n\nconst main = document.createElement('main');\ncontent.appendChild(main);\n\nconst tabMaker = (name, pageBuilder) => {\n  const buildPage = () => {\n    buildTabs(name);\n    main.innerHTML = '';\n    pageBuilder();\n  };\n  return { name, pageBuilder, buildPage };\n};\n\nfunction quickAdd(element, contents, parent, htmlClass) {\n  const newElement = document.createElement(element);\n  newElement.innerHTML = contents;\n  if (htmlClass !== null) {\n    newElement.className = htmlClass;\n  }\n  parent.appendChild(newElement);\n}\n\nfunction homePageBuilder() {\n  const img = document.createElement('img');\n  img.src = '960x0.jpg';\n  img.style.width = '100%';\n  main.appendChild(img);\n\n  const p = document.createElement('p');\n  p.innerHTML = \"Steve-E's Pizzarrhea has been a staple of your local neigbhorhood since the dawn of time. We live to serve and we serve to live! No one can stop us from our dream of making you a bunch of pizzas and watching you eat them, unblinking, for hours at a time. Woo-wee, they sure do make the pizza right!\";\n  main.appendChild(p);\n}\n\nconst menu = [];\n\nconst menuFactory = (name, sPrice, mPrice, lPrice) => ({\n  name, sPrice, mPrice, lPrice,\n});\n\nconst spacer = { name: 'spacer' };\n\nconst descriptionFactory = (description) => {\n  const name = 'description';\n  return { name, description };\n};\n\nmenu.push(menuFactory('Cheese', 6, 9, 12.5));\nmenu.push(menuFactory('Pepperoni & Cheese', 7.25, 10, 13.75));\nmenu.push(menuFactory('Mushroom & Cheese', 7.25, 10, 13.75));\nmenu.push(menuFactory('Jalape\\xF1o & Cheese', 7.25, 10, 13.75));\nmenu.push(menuFactory('Anchovy & Cheese', 7.25, 10, 13.75));\nmenu.push(menuFactory('Black Olive & Cheese', 7.25, 10, 13.75));\nmenu.push(spacer);\nmenu.push(menuFactory('Deluxe', 9.25, 12, 15));\nmenu.push(\n  descriptionFactory(\n    'Fresh mozzarella, pepperoni, sausage, bell peppers, and mushrooms.',\n  ),\n);\nmenu.push(spacer);\nmenu.push(menuFactory('Vegetarian', 9.25, 12, 15));\nmenu.push(\n  descriptionFactory('Fresh mozzarella, bell peppers, onions, and mushrooms.'),\n);\nmenu.push(spacer);\nmenu.push(menuFactory('Romana', 9.25, 12, 15));\nmenu.push(\n  descriptionFactory('No sauce. Mozzarella, rosemary, ham, and cheese.'),\n);\nmenu.push(spacer);\nmenu.push(menuFactory('Margherita', 9.25, 12, 15));\nmenu.push(descriptionFactory('Mozzarella and fresh basil.'));\n\nfunction menuPageBuilder() {\n  quickAdd('h2', 'Menu', main);\n\n  const div = document.createElement('div');\n  div.id = 'menu';\n  main.appendChild(div);\n\n  quickAdd('div', '', div);\n  quickAdd('div', '10\"', div);\n  quickAdd('div', '14\"', div);\n  quickAdd('div', '16\"', div);\n\n  for (let i = 0; i < menu.length; i += 1) {\n    if (menu[i].name === 'spacer') {\n      quickAdd('div', '', div, 'spacer');\n    } else if (menu[i].name === 'description') {\n      quickAdd('div', menu[i].description, div, 'description');\n    } else {\n      quickAdd('div', menu[i].name, div, 'item');\n      quickAdd('div', `$${menu[i].sPrice.toFixed(2)}`, div, 'price');\n      quickAdd('div', `$${menu[i].mPrice.toFixed(2)}`, div, 'price');\n      quickAdd('div', `$${menu[i].lPrice.toFixed(2)}`, div, 'price');\n    }\n  }\n}\n\nfunction contactPageBuilder() {\n  quickAdd('h2', 'Contact', main);\n  quickAdd('p', 'Orders: (555) 420-6969', main);\n  quickAdd('p', 'Email: severecase@pizzarrhea.com', main);\n}\n\ntabs.push(tabMaker('Home', homePageBuilder));\ntabs.push(tabMaker('Menu', menuPageBuilder));\ntabs.push(tabMaker('Contact', contactPageBuilder));\n\ntabs[0].buildPage();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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