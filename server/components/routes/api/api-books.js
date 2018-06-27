/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const bookController = require('../../controllers/api/bookController')

router.get('/', bookController.list);
router.post('/create', bookController.create);
router.get('/:id', bookController.read);

router.put('/update', bookController.update);
router.delete('/delete/:id', bookController.delete);

// custom searches
module.exports = router;