let validValue = document.querySelector('span#value');
let value = 0;

const minusOne = document.querySelector('[data-action="decrement"]');
const  plusOne = document.querySelector('[data-action="increment"]');



const incrementFunction = () => {; 
    value += 1;
     console.log(`your value: ${value}`);
   return validValue.textContent = value;
 }
const decrementFunction = () => {; 
    value -= 1;
    console.log(`your value: ${value}`);
   return validValue.textContent = value;
    
 }
plusOne.addEventListener("click",pOne );
minusOne.addEventListener("click", mOne);
// plusOne.addEventListener("click",);

