/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const contactController = require('../../controllers/api/contactController')

router.get('/:limit', contactController.list);
router.post('/create', contactController.create);
router.get('/:contact_id',contactController.read);
router.put('/update',contactController.update);
router.delete('/delete/:contact_id',contactController.delete);

module.exports = router;