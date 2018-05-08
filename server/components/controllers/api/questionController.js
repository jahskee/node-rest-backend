const Question = require('../../models/questionModel');
const settings = require('../../utils/settings');
const questionService = require('./questionService');

const questionController = {};

questionController.list = async (req, res) => {
  try {
    const question = await questionService.list({});    
    if (question) {
      res.json(question);
    } else {
      throw 'contacts not found';
    }
  } catch (err) {
    console.log(`${err}`);
    res.end();
  } 
};

questionController.create = async(req, res) => { 
  try {
    let question = req.body;
    question = await questionService.create(question);
    res.json(question)
  } catch (err) {    
    console.log(`error saving contact ${err}`);
    res.end();
  } 
}

questionController.read = async (req, res) => {
  question_id = req.params.contact_id;
  console.log(question_id)
  let question;
  try {
    question = await questionService.read(question_id);
    res.json(question)
  } catch (err) {
    console.log(`no record found: ${err}`);
    res.end();
  }
  return question;
}

questionController.update = async (req, res) => { 
  let updateQuestion = req.body;
  try {
    question = await questionService.update(updateQuestion)
    res.json(question)   
  } catch(err) {
    console.log(`${err}, contactId=${question._id}`)
    res.end();
  } 
}

questionController.delete = async (req, res) => {
  const question_id = req.params.question_id

  let question;
  try {
    question = questionService.delete(question_id);
    console.log(`successfully deleted questionId=${question_id}`)
    res.json(question)
  } catch (err) {
    console.log(`${err},  unable to delete questionId=${question_id}`)
    res.end();
  }
}

module.exports = questionController;