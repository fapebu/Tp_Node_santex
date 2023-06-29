
const { libraryProvider } = require("../providers");


const createLibrary = async (library) => {
  return await libraryProvider.createLibrary(library);
};

const getLibrary = async (libraryId) => {
  return library = await libraryProvider.getLibrary(libraryId);
  
};

const getAllLibrary = async () => {
  const library = await libraryProvider.getAllLibrary();
  return library;
};

const modifyLibrary = async (libraryId,data) => {
  const library = await libraryProvider.modifyLibrary(libraryId,data);
  return library;
};


const deleteLibrary = async (libraryId) => {
  const library = await libraryProvider.deleteLibrary(libraryId);
  return library;
};


module.exports = {createLibrary,getLibrary, getAllLibrary, modifyLibrary,deleteLibrary };