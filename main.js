var Library = function () {

  var shelves = {};
  
  var addBook = function (book) {
    if (!shelves[book.getAttribute('title')]) {
      shelves[book.getAttribute('title')] = book;
    }
  };
  
  var checkOutBook = function (book) {
    if (shelves[book.getAttribute('title')]) {
      shelves[book.getAttribute('title')].setAttribute('checkedOut', true);
    }
  };

  var returnBook = function (book) {
    if (shelves[book.getAttribute('title')]) {
      book.setAttribute('checkedOut', false);
    }
  };

  return {
    returnBook: returnBook,
    addBook: addBook,
    checkOutBook: checkOutBook
  }
};

var Book = function (title, author) {

  var bookObj = {
    title: title,
    author: author,
    checkedOut: false
  };

  var getAttribute = function (attribute) {
    return bookObj[attribute];
  };

  var setAttribute = function (attribute, value) {
    if (bookObj[attribute] !== undefined) {
      bookObj[attribute] = value;
    } else {
      return 'Not a valid book attribute!';
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};