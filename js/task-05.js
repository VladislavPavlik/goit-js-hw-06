const helloName = document.querySelector('#name-output'); 
const inputAdd = document.querySelector('#name-input');
const newString = (event) => {
    const { currentTarget: { value} } = event;
    if (value === '') { helloName.textContent = 'Anonymous'; } else { helloName.textContent = value; };
};
inputAdd.addEventListener("input", newString);



