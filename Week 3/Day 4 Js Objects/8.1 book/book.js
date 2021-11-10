const harryPotter = {
  title: "Harry-Potter",
  author: "J.K Rowling",
  year: 1997,
  genre: "Fantasy",
};

let createDescription = (book) => {
  return `The Book ${book.title} was written by ${book.author} in the year ${book.year}`;
};

console.log(createDescription(harryPotter));
