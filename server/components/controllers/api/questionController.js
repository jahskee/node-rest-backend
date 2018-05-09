
const settings = require('../../utils/settings');
const DataController = require('./_dataController');
const Question = require('../../models/questionModel');

const controller = new DataController();

controller.list = (req, res) => {
  controller.list2(req, res, Question);
}




/* ---------- Default functions ----------

defaultController.list(req, res, {'searchKey': /searchVal/}, ['field1', 'field2'])

---------- Default functions ---------- */

module.exports = controller;