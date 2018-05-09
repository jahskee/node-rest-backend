const _dataService = require('./crud/_dataService');
const DataController = require('./crud/_dataController');
const Contact = require('../../models/contactModel');

const controller = new DataController(Contact);

controller.read = async (req, res) => {
  contact_id = req.params.contact_id;
  console.log(contact_id)
  let contact;
  try {
    contact = await _dataService.read(Contact, contact_id);
    res.json(contact)
  } catch (err) {
    console.log(`no record found: ${err}`);
    res.end();
  }
  return contact;
}

controller.update = async (req, res) => { 
  let updateContact = req.body;Error: Route.get() 
  try {
    contact = await _dataService.update(Contact, updateContact)
    res.json(contact)   
  } catch(err) {
    console.log(`${err}, contactId=${contact._id}`)
    res.end();
  } 
}

controller.delete = async (req, res) => {
  const contact_id = req.params.contact_id

  let contact;
  try {
    contact = _dataService.delete(Contact, contact_id);
    console.log(`successfully deleted contactId=${contact_id}`)
    res.json(contact)
  } catch (err) {
    console.log(`${err},  unable to delete contactId=${contact_id}`)
    res.end();
  }
}

module.exports = controller;