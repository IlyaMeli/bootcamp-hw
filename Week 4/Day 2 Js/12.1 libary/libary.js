var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

let displayBooks = (arr) => {
  let res2= ""
  arr.forEach((book) => {
    if (book.readingStatus) {
        res2 += `Title: ${book.title}, `;
        res2 += `Author: ${book.author}, `;
    res2 += `Status: ${book.readingStatus} `;

    }
  })
  return res2
};
console.log(displayBooks(library));