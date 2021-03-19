const content = document.getElementById('content');

const h1 = document.createElement('h1');
h1.innerHTML = "Steve-E's Pizzarrhea";
content.appendChild(h1);

const nav = document.createElement('nav');
content.appendChild(nav);

const tabs = [];

function buildTabs(current) {
  nav.innerHTML = '';
  for (let i = 0; i < tabs.length; i += 1) {
    const newTab = document.createElement('div');
    newTab.innerHTML = tabs[i].name;
    newTab.id = tabs[i].name;
    newTab.className = 'tab';
    if (tabs[i].name === current) {
      newTab.className += ' current';
    }
    newTab.addEventListener('click', tabs[i].buildPage);
    nav.appendChild(newTab);
  }
}

const main = document.createElement('main');
content.appendChild(main);

const tabMaker = (name, pageBuilder) => {
  const buildPage = () => {
    buildTabs(name);
    main.innerHTML = '';
    pageBuilder();
  };
  return { name, pageBuilder, buildPage };
};

function quickAdd(element, contents, parent, htmlClass) {
  const newElement = document.createElement(element);
  newElement.innerHTML = contents;
  if (htmlClass !== null) {
    newElement.className = htmlClass;
  }
  parent.appendChild(newElement);
}

function homePageBuilder() {
  const img = document.createElement('img');
  img.src = '960x0.jpg';
  img.style.width = '100%';
  main.appendChild(img);

  const p = document.createElement('p');
  p.innerHTML = "Steve-E's Pizzarrhea has been a staple of your local neigbhorhood since the dawn of time. We live to serve and we serve to live! No one can stop us from our dream of making you a bunch of pizzas and watching you eat them, unblinking, for hours at a time. Woo-wee, they sure do make the pizza right!";
  main.appendChild(p);
}

const menu = [];

const menuFactory = (name, sPrice, mPrice, lPrice) => ({
  name, sPrice, mPrice, lPrice,
});

const spacer = { name: 'spacer' };

const descriptionFactory = (description) => {
  const name = 'description';
  return { name, description };
};

menu.push(menuFactory('Cheese', 6, 9, 12.5));
menu.push(menuFactory('Pepperoni & Cheese', 7.25, 10, 13.75));
menu.push(menuFactory('Mushroom & Cheese', 7.25, 10, 13.75));
menu.push(menuFactory('Jalape\xF1o & Cheese', 7.25, 10, 13.75));
menu.push(menuFactory('Anchovy & Cheese', 7.25, 10, 13.75));
menu.push(menuFactory('Black Olive & Cheese', 7.25, 10, 13.75));
menu.push(spacer);
menu.push(menuFactory('Deluxe', 9.25, 12, 15));
menu.push(
  descriptionFactory(
    'Fresh mozzarella, pepperoni, sausage, bell peppers, and mushrooms.',
  ),
);
menu.push(spacer);
menu.push(menuFactory('Vegetarian', 9.25, 12, 15));
menu.push(
  descriptionFactory('Fresh mozzarella, bell peppers, onions, and mushrooms.'),
);
menu.push(spacer);
menu.push(menuFactory('Romana', 9.25, 12, 15));
menu.push(
  descriptionFactory('No sauce. Mozzarella, rosemary, ham, and cheese.'),
);
menu.push(spacer);
menu.push(menuFactory('Margherita', 9.25, 12, 15));
menu.push(descriptionFactory('Mozzarella and fresh basil.'));

function menuPageBuilder() {
  quickAdd('h2', 'Menu', main);

  const div = document.createElement('div');
  div.id = 'menu';
  main.appendChild(div);

  quickAdd('div', '', div);
  quickAdd('div', '10"', div);
  quickAdd('div', '14"', div);
  quickAdd('div', '16"', div);

  for (let i = 0; i < menu.length; i += 1) {
    if (menu[i].name === 'spacer') {
      quickAdd('div', '', div, 'spacer');
    } else if (menu[i].name === 'description') {
      quickAdd('div', menu[i].description, div, 'description');
    } else {
      quickAdd('div', menu[i].name, div, 'item');
      quickAdd('div', `$${menu[i].sPrice.toFixed(2)}`, div, 'price');
      quickAdd('div', `$${menu[i].mPrice.toFixed(2)}`, div, 'price');
      quickAdd('div', `$${menu[i].lPrice.toFixed(2)}`, div, 'price');
    }
  }
}

function contactPageBuilder() {
  quickAdd('h2', 'Contact', main);
  quickAdd('p', 'Orders: (555) 420-6969', main);
  quickAdd('p', 'Email: severecase@pizzarrhea.com', main);
}

tabs.push(tabMaker('Home', homePageBuilder));
tabs.push(tabMaker('Menu', menuPageBuilder));
tabs.push(tabMaker('Contact', contactPageBuilder));

tabs[0].buildPage();
