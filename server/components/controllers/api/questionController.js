//const DataController = require('./crud/_dataController');
const Question = require("../../models/questionModel");
const DataController = require("./crud/_dataController");

class QuestionController extends DataController {
  constructor(model) {
    super(model);

    this.searchScienceIds = async (req, res) => {
      let collection;

      try {
        collection = await this._search({'category': /Science/}, ['_id'], 10);
        res.json(collection);
      } catch (err) {
        console.log(err);
        res.end();
      }
    };
  }

  searchScienceIds() {
      
  }
}

const controller = new QuestionController(Question);

module.exports = controller;
