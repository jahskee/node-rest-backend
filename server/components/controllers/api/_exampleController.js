const DataController = require('./_dataController');
const Example = require('../../../models/exampleModel');

const controller = new DataController(Example);

/* ---------- Default functions ----------

1. controller.list(req, res, {'searchKey': /searchVal/}, ['field1', 'field2'])

2. controller.create(req, res) 
    // requires x-www-form-urlencoded to test in Postman

---------- Default functions ---------- */
module.exports = controller;