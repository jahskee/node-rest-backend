// Node V 8.11
// mongoose 5.0.11
const _dataService = require("./_dataService");

class DataController {
 
  constructor(Model) {
    this.dataModel = Model;

    this.list = async (req, res) => {
      let collection;

      try {
        collection = await this._search({}, [], 5);
        res.json(collection);
      } catch (err) {
        console.log(err);
        res.end();
      }
    };

    this._search = async (searchObj = {}, selectFields = [], limit = null) => {
      let collection = await _dataService.list(
        this.dataModel,
        searchObj,
        selectFields,
        limit
      );
      return collection;
    };
    /*
    this.create = async(req, res) => { 
      try {
        let dataObj = req.body;
        console.log(dataObj)
        dataObj = await _dataService.create(this.dataModel, dataObj);
        res.json(dataObj)
      } catch (err) {    
        console.log(`error saving ${err}`);
        res.end();
      } 
    }
    */
  } // end of constructor
} // end of class

module.exports = DataController;
