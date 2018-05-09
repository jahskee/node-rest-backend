const settings = require('../../utils/settings');

dataService = {};

dataService.list = async (Model, searchObj, selectFields) => {
  let dataObjs;
  try {
    dataObjs = await Model.find(searchObj, selectFields);    
  } catch (err) {
    throw `\n${err} \n- searchObj=${JSON.stringify(searchObj)}\n`;
  }
  return dataObjs;
};

dataService.create = async (Model, paramObj) => {
  let dataObj;
  try {
    dataObj = new Model(paramObj);
    dataObj = await dataObj.save();   
  } catch (err) {
    throw `\n${err} \n- dataObj=${JSON.stringify(paramObj)}\n`;
  }      
  return dataObj;
};

dataService.read = async (Model, id) => {
  let dataObj;
  try {
    dataObj = await Model.findOne({_id: id}); 
  } catch (err) {
    throw `\n${err} \n - Id=${id}\n`;
  }          
  return dataObj;   
};

dataService.update = async (Model, paramObj) => {
  try {
    const _id = paramObj._id;
    dataObj = await Model.findOne({_id});
    dataObj.set({...paramObj});
    dataObj = await dataObj.save();
  } catch (err) {
    throw `\n${err} \n- updateQuestion=${JSON.stringify(updateQuestion)}\n`;
  }  
  return question;
};

dataService.delete = async (id) => {
  let dataObj;
  try {
    dataObj = await Model.findOne({_id: id}); 
    if (!dataObj) throw `does not exist questionId=${id}`;
    dataObj = await dataObj.remove();
  } catch (err) {
    throw `\n${err} \n- contactId=${id}\n`;
  }
  return dataObj;
}

module.exports = dataService;