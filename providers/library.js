const { libraryModel } = require("../models");


const createLibrary = async (library) => {
    const newLibrary = await libraryModel.create(library);
    return newLibrary;
};

const getLibrary = async (libraryId) => {
  const library = await libraryModel.findByPk(libraryId,{include: { all:true}});
  if(library){
    return library;
}else{
  throw new Error('Library no encontrada');
}
};

const getAllLibrary = async () => {
  const library = await libraryModel.findAll({include: { all:true}});
  return library;
};

const modifyLibrary = async (libraryId, data) => {
  const library = await libraryModel.update(data, {
    where :  {id : libraryId}
    },);
  return libraryModel.findByPk(libraryId);
};


const deleteLibrary = async (libraryId) => {
  const library = await libraryModel.destroy({
    where: {
      id : libraryId
    },
    force: false
  });
  return library;
};


module.exports = {createLibrary,getLibrary, getAllLibrary, modifyLibrary,deleteLibrary };