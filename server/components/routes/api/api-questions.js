/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const questionController = require('../../controllers/api/questionController')


router.get('/list', questionController.list);
router.post('/create', questionController.create);
router.get('/read/:id', questionController.read);

//router.put('/update', questionController.update);
//router.delete('/delete/:id', questionController.delete);

// custom searches
router.get('/science/ids', questionController.searchScienceIds);
router.get('/english/ids', questionController.searchEnglishIds);
module.exports = router;