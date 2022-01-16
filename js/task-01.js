const numOfCategory = document.querySelectorAll('ul#categories li.item')
console.log(`Number of categories: ${numOfCategory.length}`);
const category = document.querySelectorAll('.item h2');
const elements = document.querySelectorAll('.item ul');
category.forEach((item, number) => {
console.log(item.textContent)
console.log(`Elements: ${elements[number].querySelectorAll('li').length}`)})
