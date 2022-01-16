function getRandomHexColor() {return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
const buttonNewColor = document.querySelector('.change-color');
const bodyValue = document.querySelector('body');
const spanValue = document.querySelector('.color');

const newColorFunc = (event) => { 
  const newColorValue = getRandomHexColor();
  bodyValue.style.backgroundColor = newColorValue;
  spanValue.textContent = newColorValue;
};
buttonNewColor.addEventListener('click', newColorFunc);