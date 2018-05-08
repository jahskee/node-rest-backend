const Question = require('../../models/questionModel');
const settings = require('../../utils/settings');
const _dataService = require('./_dataService');


const dataController = {};

dataController.list = async (req, res) => {
  try {
    const questions = await _dataService.list(Question);    
    if (questions) {
      res.json(questions);
    } else {
      throw 'contacts not found';
    }
  } catch (err) {
    console.log(`${err}`);
    res.end();
  } 
};

dataController.create = async(req, res) => { 
  try {
    let question = req.body;
    question = await _dataService.create(Question, question);
    res.json(question)
  } catch (err) {    
    console.log(`error saving contact ${err}`);
    res.end();
  } 
}

dataController.read = async (req, res) => {
  id = req.params.id;
  console.log(id)
  let dataObj;
  try {
    dataObj = await _dataService.read(Question, id);
    res.json(question)
  } catch (err) {
    console.log(`no record found: ${err}`);
    res.end();
  }
  return dataObj;
}

dataController.update = async (req, res) => { 
  let updateQuestion = req.body;
  try {
    question = await _dataService.update(Question, updateQuestion)
    res.json(question)   
  } catch(err) {
    console.log(`${err}, contactId=${question._id}`)
    res.end();
  } 
}

dataController.delete = async (req, res) => {
  const question_id = req.params.question_id

  let question;
  try {
    question = _dataService.delete(Question, question_id);
    console.log(`successfully deleted questionId=${question_id}`)
    res.json(question)
  } catch (err) {
    console.log(`${err},  unable to delete questionId=${question_id}`)
    res.end();
  }
}

module.exports = dataController;