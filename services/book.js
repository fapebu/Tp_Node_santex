const { bookProvider } = require("../providers");


const createBook = async (book) => {
  return await bookProvider.createBook(book);
};

const getBook = async (bookId) => {
  return book = await bookProvider.getBook(bookId);
  
};

const getAllBook = async (bookId) => {
  const book = await bookProvider.getAllBook(bookId);
  return book;
};

const modifyBook = async (bookId,data) => {
  const book = await bookProvider.modifyBook(bookId,data);
  return book;
};


const deleteBook = async (bookId) => {
  const book = await bookProvider.deleteBook(bookId);
  if (book) {
    // L�gica de negocio
    console.log(book.firstName);
  }
  return book;
};


module.exports = {createBook,getBook, getAllBook, modifyBook,deleteBook };