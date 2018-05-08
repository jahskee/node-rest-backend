const Question = require('../../models/questionModel');
const settings = require('../../utils/settings');

questionService = {};

questionService.list = async (searchObj) => {
  try {
    question = await Question.find(searchObj);    
  } catch (err) {
    throw `\n${err} \n- searchObj=${JSON.stringify(searchObj)}\n`;
  }
  return questions;
};

questionService.create = async (question) => {
  try {
    question = new Contact(question);
    question = await question.save();
  } catch (err) {
    throw `\n${err} \n- question=${JSON.stringify(question)}\n`;
  }      
  return question;
};

questionService.read = async (question_id) => {
  let question;
  try {
    question = await Question.findOne({_id: question_id}); 
  } catch (err) {
    throw `\n${err} \n - questionId=${question_id}\n`;
  }          
  return question;   
};

questionService.update = async (updateQuestion) => {
  try {
    const _id = updateQuestion._id;
    question = await Question.findOne({_id});
    question.set({...updateQuestion});
    question = await question.save();
  } catch (err) {
    throw `\n${err} \n- updateQuestion=${JSON.stringify(updateQuestion)}\n`;
  }  
  return question;
};

questionService.delete = async (question_id) => {
  let question;
  try {
    question = await Question.findOne({_id: question_id}); 
    if (!question) throw `does not exist questionId=${question_id}`;
    question = await question.remove();
  } catch (err) {
    throw `\n${err} \n- contactId=${question_id}\n`;
  }
  return question;
}

module.exports = questionService;