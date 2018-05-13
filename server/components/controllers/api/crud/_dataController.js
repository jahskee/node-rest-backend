// Node V 8.11
// mongoose 5.0.11
const _dataService = require("./_dataService");

class DataController {
 
  constructor(Model) {
    this.dataModel = Model;

    this.list = async (req, res) => {
      let collection;

      try {
        collection = await this._search({}, [], 200);
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
    
    this.create = async(req, res) => { 
      try {
        let dataObj = req.body;
        //console.log(dataObj)
        dataObj = await _dataService.create(this.dataModel, dataObj);
        res.json(dataObj)
      } catch (err) {    
        console.log(`error saving ${err}`);
        res.end();
      } 
    }

    this.read = async (req, res) => {
      const id = req.params.id
      let dataObj;
      try {
        dataObj = await _dataService.findOne(this.dataModel, id);
        res.json(dataObj);
      } catch (err) {
        console.log(err);
        res.end();
      }
    };

    this.update = async (req, res) => {
      let dataObj = req.body;
      console.log(dataObj)
      try {
        dataObj = dataService.update(this.dataModel, dataObj)
        res.json(dataObj) 
      } catch (err) {
        console.log(err)
        res.end()
      }     
    }

    this.delete = async (req, res) => {
      const id = req.params.id
      let dataObj
      try {
        dataObj = dataService.delete(this.dataModel, id)
        res.json(dataObj) 
      } catch (err) {
        console.error(err)
        res.end()
      }     
    }  
    
  } // end of constructor
} // end of class

module.exports = DataController;