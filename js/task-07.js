const inputFontSize = document.querySelector("#font-size-control");
const textSpan = document.querySelector('#text');

const newFont = (event) => { 
    const { currentTarget: { value }, } = event;
     return textSpan.style.fontSize = `${value}px`;
};

inputFontSize.addEventListener('input', newFont);