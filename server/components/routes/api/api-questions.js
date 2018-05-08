/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const questionController = require('../../controllers/api/questionController')

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

router.get('/', questionController.list);
router.post('/create', questionController.create);
router.get('/:contact_id', questionController.read);
router.put('/update', questionController.update);
router.delete('/delete/:contact_id', questionController.delete);

module.exports = router;