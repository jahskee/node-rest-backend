const DataController = require('./crud/_dataController');
const Question = require('../../models/questionModel');

const controller = new DataController(Question);


module.exports = controller;