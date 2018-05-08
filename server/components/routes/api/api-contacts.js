/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const contactController = require('../../controllers/api/contactController')

// set the request headers to allow cross origin resource sharing
router.use(function(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Content-type': 'application/json',
  });
 
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

router.get('/', contactController.list);
router.post('/create', contactController.create);
router.get('/:contact_id',contactController.read);
router.put('/update',contactController.update);
router.delete('/delete/:contact_id',contactController.delete);

module.exports = router;