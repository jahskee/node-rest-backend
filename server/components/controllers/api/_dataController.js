const _dataService = require('./_dataService');

class DataController {  

  constructor() {     
   
    this.list = async (req, res, Model, searchObj={}, selectFields=[]) => {         
            try {           
              const collection = await _dataService.list(Model, searchObj, selectFields);    
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