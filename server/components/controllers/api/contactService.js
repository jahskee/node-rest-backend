const Contact = require('../../models/contactModel');
const settings = require('../../utils/settings');

contactService = {};

contactService.list = async (searchObj) => {
  try {
    contacts = await Contact.find(searchObj);    
  } catch (err) {
    throw `\n${err} \n- searchObj=${JSON.stringify(searchObj)}\n`;
  }
  return contacts;
};

contactService.create = async (contact) => {
  try {
    contact = new Contact(contact);
    contact = await contact.save();
  } catch (err) {
    throw `\n${err} \n- contact=${JSON.stringify(contact)}\n`;
  }      
  return contact;
};

contactService.read = async (contact_id) => {
  let contact;
  try {
    contact = await Contact.findOne({_id: contact_id}); 
  } catch (err) {
    throw `\n${err} \n - contactId=${contact_id}\n`;
  }          
  return contact;   
};

contactService.update = async (updateContact) => {
  try {
    const _id = updateContact._id;
    contact = await Contact.findOne({_id});
    contact.set({...updateContact});
    contact = await contact.save();
  } catch (err) {
    throw `\n${err} \n- updateContact=${JSON.stringify(updateContact)}\n`;
  }  
  return contact;
};

contactService.delete = async (contact_id) => {
  let contact;
  try {
    contact = await Contact.findOne({_id: contact_id}); 
    if (!contact) throw `does not exist contactId=${contact_id}`;
    contact = await contact.remove();
  } catch (err) {
    throw `\n${err} \n- contactId=${contact_id}\n`;
  }
  return contact;
}

module.exports = contactService;