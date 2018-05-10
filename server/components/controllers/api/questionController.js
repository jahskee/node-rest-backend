//const DataController = require('./crud/_dataController');
const Question = require("../../models/questionModel");
const DataController = require("./crud/_dataController");

class QuestionController extends DataController {
  constructor(model) {
    super(model);

    /* ===================== custom CRUD ====================== */

    // -------- search category = 'Science' ------------
    this.searchScienceQuestions = async (req, res) => {
      //limit = req.params.limit
      let collection;
      try {
        collection = await this._search({'category': /Science/}, [], 10);
        res.json(collection);
      } catch (err) {
        console.log(err);
        res.end();
      }
    };

      // -------- search category = 'English' ------------
      this.searchEnglishQuestions = async (req, res) => {
        let collection;
        try {
          collection = await this._search({'category': /English/}, [], 10);
          res.json(collection);
        } catch (err) {
          console.log(err);
          res.end();
        }
      };
  

  } // end constructor
} // end clsss

const controller = new QuestionController(Question);

module.exports = controller;