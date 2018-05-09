//const DataController = require('./crud/_dataController');
const Question = require('../../models/questionModel');
const _dataService = require('./crud/_dataService');
const DataController = require('./crud/_dataController');

class QuestionController extends DataController {
    constructor(model) {
        super(model)
    }

}

const controller = new QuestionController(Question);

module.exports = controller;