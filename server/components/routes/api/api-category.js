/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const categoryController = require('../../controllers/api/categoryController')


router.get('/', categoryController.list);
router.post('/create', categoryController.create);
router.get('/read/:id', categoryController.read);

//router.put('/update', categoryController.update);
//router.delete('/delete/:id', categoryController.delete);

// custom searches
module.exports = router;