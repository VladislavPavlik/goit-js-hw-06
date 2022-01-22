function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputValue = document.querySelector('#controls input');
const box = document.querySelector('#boxes');

const howMuchToCreate = (event) => {
  const { currentTarget: { value } } = event;
  console.log(value);
  return returnedValue = value;
};
inputValue.addEventListener('blur', howMuchToCreate);
// значення input
let returnedValue = 0;
// function to create div
const newCreateElementFunc = (event) => { 
let startValueHeigth = 30;
let startValueWidth = 30;
  for (let i = 0; i < returnedValue; i += 1) {
   const wrapper = document.createElement('div');
   wrapper.style.width = `${startValueWidth}px`;
   wrapper.style.height = `${startValueHeigth}px`;
   wrapper.style.backgroundColor = getRandomHexColor();
    startValueHeigth += 10;
    startValueWidth += 10;
   box.append(wrapper);
   }
};
// function to deleate all element :C
const deleteAllEl = () => { 
  box.innerHTML = '';
};
createButton.addEventListener('click', newCreateElementFunc);
destroyButton.addEventListener('click', deleteAllEl);