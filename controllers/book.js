const { bookService } = require("../services");

const createBook = async (req, res) => {
  try {
    const Book = await bookService.createBook(req.body);
    res.status(201).json(Book);
  } catch (err) {
    res.status(400).json({ action: "createBook", error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const Book = await bookService.getBook(req.params.bookId);
    res.status(200).json(Book);
  } catch (err) {
   res.json({ action: "getBook", error: err.message });
  }
};

const getAllBook = async (req, res) => {
   try {
     const Book = await bookService.getAllBook();
     res.status(200).json(Book);
  } catch (err) {
   res.json({ action: "getAllBook", error: err.message });
  }
};

const modifyBook = async (req, res) => {
 try {
    const {id,isbn ,titulo, autor, year,library} = req.body; 
    const Book = await bookService.modifyBook(req.params.bookId ,{id,isbn ,titulo, autor, year,library} );
    res.status(200).json(Book);
  } catch (err) {
   res.json({ action: "modifyBook", error: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const Book = await bookService.deleteBook(req.params.bookId);
    res.status(200).json(Book);
  } catch (err) {
   res.json({ action: "deleteBook", error: err.message });
  }
};

module.exports = { createBook,getBook, getAllBook, modifyBook,deleteBook };