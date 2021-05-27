// Refactored Code
document.addEventListener('DOMContentLoaded', function() {
  "The DOM had loaded"
  jsonResponse();
});

function jsonResponse() {
  const functionArray = [renderBooks, renderBook, renderBookPages] 
  fetch('https://anapioficeandfire.com/api/books')  
  .then(resp => resp.json())  
  .then(books => { functionArray.forEach(array => {
    array(books)})})
  specificCharacter();
  };

// Render all books in the series
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name + ' has a total of ' + book.numberOfPages;
    main.appendChild(h2);
  });
}

// 1.	The 5th book in the series
function renderBook(books) {
  const book = books[4]
  const br = document.createElement('br');
  const main = document.querySelector('main');
  main.append(br);
  const div = document.createElement('div');
  main.appendChild(div);
  const h3 = document.createElement('h3');
  h3.innerText = "5th Book in the Series:"
  div.appendChild(h3);
  const p = document.createElement('p');
  p.innerHTML = book.name + ' is the 5th book in the series.';
  h3.appendChild(p);
}

// 2.	The total number of pages of all the books
function renderBookPages(books) {
  totalPages = 0;

  books.forEach(book => {
    totalPages += book.numberOfPages
  })

  const br = document.createElement('br');
  const div = document.querySelector('div');
  div.append(br);
  const h3 = document.createElement('h3');
  h3.innerText = "The total amount of pages in all the books in the series is:"
  div.appendChild(h3);
  const p = document.createElement('p');
  p.innerHTML = totalPages + ' pages.';
  h3.appendChild(p);
}

// 3.	The 1031st character in the series
function specificCharacter() {
  fetch("https://anapioficeandfire.com/api/characters/1031")
  .then(resp => resp.json())
  .then(character => renderCharacter(character));
}

function renderCharacter(character) {
  const br = document.createElement('br');
  const div = document.querySelector('div');
  div.append(br);
  const h3 = document.createElement('h3');
  h3.innerText = "1031st Character in the Series:"
  div.appendChild(h3);
  const p = document.createElement('p');
  p.innerHTML = character.name + ' is the 1031st character in the series.';
  h3.appendChild(p);
}

// Code for passing tests for lab
// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
//   fifthBook();
//   specificCharacter();
//   pagesInEachBook();
// });

// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   return fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(books => { renderBooks(books)})
// }

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name + ' has a total of ' + book.numberOfPages;
//     main.appendChild(h2);
//   });
// }

// // 1.	The 5th book in the series
// function fifthBook() {
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(books => renderBook(books[4]));
// }

// function renderBook(book) {
//   const br = document.createElement('br');
//   const main = document.querySelector('main');
//   main.append(br);
//   const div = document.createElement('div');
//   main.appendChild(div);
//   const h3 = document.createElement('h3');
//   h3.innerText = "5th Book in the Series:"
//   div.appendChild(h3);
//   const p = document.createElement('p');
//   p.innerHTML = book.name + ' is the 5th book in the series.';
//   h3.appendChild(p);
// }

// // 2.	The 1031st character in the series
// function specificCharacter() {
//   fetch("https://anapioficeandfire.com/api/characters/1031")
//   .then(resp => resp.json())
//   .then(character => renderCharacter(character));
// }

// function renderCharacter(character) {
//   const br = document.createElement('br');
//   const div = document.querySelector('div');
//   div.append(br);
//   const h3 = document.createElement('h3');
//   h3.innerText = "1031st Character in the Series:"
//   div.appendChild(h3);
//   const p = document.createElement('p');
//   p.innerHTML = character.name + ' is the 1031st character in the series.';
//   h3.appendChild(p);
// }

// // 3.	The total number of pages of all the books
// function pagesInEachBook() {
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(books => renderBookPages(books));
// }

// function renderBookPages(books) {
//   totalPages = 0;

//   books.forEach(book => {
//     totalPages += book.numberOfPages
//   })

//   const br = document.createElement('br');
//   const div = document.querySelector('div');
//   div.append(br);
//   const h3 = document.createElement('h3');
//   h3.innerText = "The total amount of pages in all the books in the series is:"
//   div.appendChild(h3);
//   const p = document.createElement('p');
//   p.innerHTML = totalPages + ' pages.';
//   h3.appendChild(p);
// }
