const { libraryService } = require("../services");

const getLibrary = (req, res) => {
  try {
    const newlibrary = libraryService.getLibrary(req.params.libraryId);
    res.json(newlibrary);
  } catch (err) {
    res.status(400).json({ action: "createBook", error: err.message });
  }
};

/*const getBook = (req, res) => {
  console.log(`Book found with id ${req.params.bookId}`);
  res.json({ id: req.params.bookId, name: "Lord of the rings" });
};*/

module.exports = {getLibrary };