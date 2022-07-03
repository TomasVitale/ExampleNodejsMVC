const categoryController = require('../Controllers/categoryController');
const express = require('express');
const router = express.Router();


//GET Section
router.get('/listCategory', categoryController.listCategory);

router.get('/getOneCategory/:id', categoryController.getOneCategory);

//End Section

//POST Section
router.post('/createCategory', categoryController.createCategory);
//End Section

//PUT Section
router.put('/editCategory/:id', categoryController.editCategory);
//End Section

//DELETE Section
router.delete('/deleteCategory/:id', categoryController.deleteCategory);
//End Section


module.exports = router;