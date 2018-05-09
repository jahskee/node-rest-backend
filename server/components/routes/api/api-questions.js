/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const questionController = require('../../controllers/api/questionController')

router.get('/', questionController.list);
router.post('/create', questionController.create);


//router.get('/:id', questionController.read);
//router.put('/update', questionController.update);
//router.delete('/delete/:id', questionController.delete);

module.exports = router;