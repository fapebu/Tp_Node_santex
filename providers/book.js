const { bookModel } = require("../models");


const createBook = async (book) => {
    const newBook = await bookModel.create(book);
    return newBook;
};

const getBook = async (bookId) => {
  const book = await bookModel.findByPk(bookId);
  if(book){
    return book;
}else{
  throw new Error('Libro no encontrado');
}
};

const getAllBook = async () => {
  const book = await bookModel.findAll();
  return book;
};

const modifyBook = async (bookId, data) => {
  const book = await bookModel.update(data, {
    where :  {id : bookId}
    },);
  return bookModel.findByPk(bookId);
};


const deleteBook = async (bookId) => {
  const book = await bookModel.destroy({
    where: {
      id : bookId
    }
  });
  return book;
};


module.exports = {createBook,getBook, getAllBook, modifyBook,deleteBook };