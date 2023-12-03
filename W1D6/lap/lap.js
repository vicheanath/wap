
let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3257,
  },
];

function addBook(title, author, libraryID) {
  let newBook = {
    title,
    author,
    libraryID,
  };
  libraryBooks.push(newBook);
  return newBook;
}
console.log("Add book", addBook("The Road Ahead", "Bill Gates", 1235));


function getTitles() {
  let titles = [];
  for (let book of libraryBooks) {
    titles.push(book.title);
  }
  return titles.sort();
}
console.log("Get titles", getTitles());

function findBooks(keyword) {
  let books = [];
  for (let book of libraryBooks) {
    if (book.title.includes(keyword)) {
      books.push(book);
    }
  }
  return books.sort((a, b) => {
    if (a.author > b.author) return 1;
    else if (a.author < b.author) return -1;
    else return 0;
  });
}

console.log("Find books", findBooks("Mockingjay"));

// 2. Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and a function as
// arguments and returns a new array that is formed by applying the function to each element of the array and saving
// the result in the new array. Do not use the Array.map method in your code.
// Please push your solution to your GitHub repository and submit the GitHub link to Sakai.

function myMap(arr, fun) {
  let newArr = [];
  for (let e of arr) {
    newArr.push(fun(e));
  }
  return newArr;
}

console.log(
  "My Map",
  myMap([1, 2, 3, 4, 5], (e) => e * 2)
);
