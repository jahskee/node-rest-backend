const Contact = require('../../models/contactModel');
const settings = require('../../utils/settings');
const contactService = require('./contactService');

const contactController = {};

contactController.list = async (req, res) => {
  try {
    const contacts = await contactService.list({});    
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
    contact = await contactService.create(contact);
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
    contact = await contactService.read(contact_id);
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
    contact = await contactService.update(updateContact)
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
    contact = contactService.delete(contact_id);
    console.log(`successfully deleted contactId=${contact_id}`)
    res.json(contact)
  } catch (err) {
    console.log(`${err},  unable to delete contactId=${contact_id}`)
    res.end();
  }
}

module.exports = contactController;