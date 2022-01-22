const numOfCategory = document.querySelectorAll('ul#categories li.item')
console.log(`Number of categories: ${numOfCategory.length}`);
numOfCategory.forEach((element) => { 
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})
