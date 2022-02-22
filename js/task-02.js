const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

const elements = [];
ingredients.map((elem) => {
  const li = document.createElement('li');
  li.textContent = elem;
  li.classList.add('item');

  elements.push(li);
});

ul.append(...elements);
console.log(ul);
