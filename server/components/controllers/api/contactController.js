const Contact = require('../../models/contactModel');
const _dataService = require('./_dataService');

const contactController = {};

contactController.list = async (req, res) => {
  try {
    const contacts = await _dataService.list(Contact);       
    if (contacts) {
      res.json(contacts);
    } else {
      throw 'contacts not found';
    }
  } catch (err) {
    console.log(`${err}`);
    res.end();
  } 
};

contactController.create = async(req, res) => { 
  try {
    let contact = req.body;
    contact = await _dataService.create(Contact, contact);
    res.json(contact)
  } catch (err) {    
    console.log(`error saving contact ${err}`);
    res.end();
  } 
}

contactController.read = async (req, res) => {
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

contactController.update = async (req, res) => { 
  let updateContact = req.body;
  try {
    contact = await _dataService.update(Contact, updateContact)
    res.json(contact)   
  } catch(err) {
    console.log(`${err}, contactId=${contact._id}`)
    res.end();
  } 
}

contactController.delete = async (req, res) => {
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

module.exports = contactController;