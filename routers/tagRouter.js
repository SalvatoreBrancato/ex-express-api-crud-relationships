const express = require ('express');
const router = express.Router();
const tagsController = require('../controllers/tagsController')


router.post('/create', tagsController.create)
router.post('/update/:id', tagsController.update)
router.post('/destroy/:id', tagsController.destroy )

module.exports = router