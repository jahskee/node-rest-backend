const DataController = require('./crud/_dataController');
const Example = require('../../models/exampleModel');

const controller = new DataController(Example);

/* ---------- Available or built-in functions ----------
   
1. controller.list(req, res)

2. controller.create(req, res) 
   - requires x-www-form-urlencoded to test in Postman


---private function2
3. this._search(queryObj={}, fields=[], limit = null)

---------- Default functions ---------- */
module.exports = controller;