// Node V 8.11
// mongoose 5.0.11
const _dataService = require('./_dataService');

class DataController {  

  constructor(Model) {     
    this.dataModel = Model;

    this._list = async (req, res, searchObj={}, selectFields=[]) => {         
            try {           
              const collection = await _dataService.list(this.dataModel, searchObj, selectFields);    
              if (collection) {
                res.json(collection);
              } else {
                throw 'collection not found';
              }
            } catch (err) {
              console.log(`${err}`);
              res.end();
            }    
        }
    }

}
  
   
module.exports = DataController