
const settings = require('../../utils/settings');
const DataController = require('./_dataController');
const Question = require('../../models/questionModel');

const controller = new DataController(Question);

controller.list = (req, res) => {
  controller._list(req, res);
}



/* ---------- Default functions ----------

defaultController.list(req, res, {'searchKey': /searchVal/}, ['field1', 'field2'])

---------- Default functions ---------- */

module.exports = controller;