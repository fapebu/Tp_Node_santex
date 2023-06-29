const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
  try {
    const library = await libraryService.createLibrary(req.body);
    res.status(201).json(library);
  } catch (err) {
    res.status(400).json({ action: "createLibrary", error: err.message });
  }
};

const getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.libraryId);
    res.json(library);
  } catch (err) {
    res.status(400).json({ action: "getLibrary", error: err.message });
  }
};

const getAllLibrary = async (req, res) => {
   try {
     const library = await libraryService.getAllLibrary();
    res.json(library);
  } catch (err) {
    res.status(400).json({ action: "getAllLibrary", error: err.message });
  }
};

const modifyLibrary = async (req, res) => {
 try {
    const {id,nombre, location, telefono} = req.body; 
    const library = await libraryService.modifyLibrary(req.params.libraryId ,{id,nombre, location, telefono} );
    res.json(library);
  } catch (err) {
    res.status(400).json({ action: "modifyLibrary", error: err.message });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    const library = await libraryService.deleteLibrary(req.params.libraryId);
    res.json(library);
  } catch (err) {
    res.status(400).json({ action: "deleteLibrary", error: err.message });
  }
};

module.exports = { createLibrary,getLibrary, getAllLibrary, modifyLibrary,deleteLibrary };