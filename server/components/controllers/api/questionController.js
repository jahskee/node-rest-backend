
const settings = require('../../utils/settings');
const DataController = require('./_dataController');
const Question = require('../../models/questionModel');

const controller = new DataController(Question);

/* ---------- Default functions ----------

controller.list(req, res, {'searchKey': /searchVal/}, ['field1', 'field2'])
controller.create(req, res)
---------- Default functions ---------- */
module.exports = controller;