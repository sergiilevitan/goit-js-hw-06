const elemNumbers = document.querySelectorAll('li.item');
console.log(`Number of categories: ${elemNumbers.length}`);

elemNumbers.forEach(element => { 
    const elemTitle = element.querySelector('h2');
    console.log('Category:', elemTitle.textContent);
    const elemNumbersByTitle = element.querySelectorAll('li');
    console.log('Elements:', elemNumbersByTitle.length)
})