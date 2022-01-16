const inputValue = document.querySelector('#validation-input');
const lowWords = inputValue.getAttribute('data-length');
console.log(lowWords);
const checkTrueValue = (event) => {
    const { currentTarget: { value }, } = event;
     if (value.length >= lowWords) { 
         inputValue.classList.add('valid')
             inputValue.classList.remove('invalid');  
    }
       if (value.length < lowWords) { 
        inputValue.classList.add('invalid');  
        inputValue.classList.remove('valid');  
    }
     if (value.length === 0) { 
        inputValue.classList.remove('invalid');  
        inputValue.classList.remove('valid');  
    }
    
 };
inputValue.addEventListener('blur', checkTrueValue);