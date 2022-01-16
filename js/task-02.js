const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const wrapper = document.querySelector('#ingredients')
const test = [];
const ingredItem = ingredients.map((element) => {
  const createdLi = document.createElement('li');
  createdLi.textContent = element;
  createdLi.classList.add('item')
  test.push(createdLi);
});
console.log(test);
wrapper.append(...test)