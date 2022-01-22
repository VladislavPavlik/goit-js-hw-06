const helloName = document.querySelector('#name-output'); 
const inputAdd = document.querySelector('#name-input');
const newString = (event) => {
    const { currentTarget: { value} } = event;
   value === '' ?  helloName.textContent = 'Anonymous' :  helloName.textContent = value;
};
inputAdd.addEventListener("input", newString);



