const DataController = require('./crud/_dataController');
const Question = require('../../models/questionModel');

const controller = new DataController(Question);


controller.list2 = async (req, res) => {
    console.log('executed')
    let collection;
     
    try {
      collection = await this._search()     
      res.json(collection)
    } catch (err) {
      console.log(err)
      res.end()
    }
}

module.exports = controller;