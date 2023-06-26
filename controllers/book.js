const { bookService } = require("../services");

const getBook = (req, res) => {
  try {
    const newBook = bookService.getBook(req.params.bookId);
    res.json(newBook);
  } catch (err) {
    res.status(400).json({ action: "createBook", error: err.message });
  }
};

/*const getBook = (req, res) => {
  console.log(`Book found with id ${req.params.bookId}`);
  res.json({ id: req.params.bookId, name: "Lord of the rings" });
};*/

module.exports = {getBook };