const express = require ('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');


router.post('/create', categoriesController.create)
router.post('/update/:id', categoriesController.update)
router.post('/destroy/:id', categoriesController.destroy )



module.exports = router