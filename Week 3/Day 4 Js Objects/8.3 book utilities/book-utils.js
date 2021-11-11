const book1 = {
  name: "Can't Hurt Me",
  author: "David Goggigs",
  year: 2017,
};
const book2 = {
  name: "Atomic Habits",
  author: "James Clear",
  year: 2018,
};

const bookUtils = {
  getFirstPublished(b1, b2) {
    return b1.year > b2.year ? book2 : book1;
  },
  setNewEdition(b, edition) {
    b.latestEdition = edition;
  },
  setLanguage(b, language) {
    b.language = language;
  },
  setTranslation(b, language, translator) {
    b.translation = { translator, language };
  },
  setPublisher(b, name, location) {
    b.publisher = {
      name,
      location,
    };
  },
  isSamePublisher(b1, b2) {
    return b1.publisher.name === b2.publisher.name &&
      b1.publisher.location === b2.publisher.location
      ? true
      : false;
  },
};

// console.log(bookUtils.getFirstPublished(book1, book2));
bookUtils.setNewEdition(book1, 2021);
bookUtils.setLanguage(book1, "English");
bookUtils.setTranslation(book1, "Hebrew", "Tal Museri");
bookUtils.setPublisher(book1, "Rony", "Tel-Aviv");
bookUtils.setPublisher(book2, "Tal", "Tel-Aviv");
console.log(book1);
// console.log("Expected False got: ", bookUtils.isSamePublisher(book1, book2));
