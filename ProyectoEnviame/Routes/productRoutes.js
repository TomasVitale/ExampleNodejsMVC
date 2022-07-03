const productController = require('../Controllers/productController');
const express = require('express');
const router = express.Router();


//GET Section
router.get('/listProduct', productController.listProduct);

router.get('/getOneProduct/:id', productController.getOneProduct);
//End Section

//POST Section
router.post('/createProduct', productController.createProduct);
//End Section

//PUT Section
router.put('/editProduct/:id', productController.editProduct);
//End Section

//DELETE Section
router.delete('/deleteProduct/:id', productController.deleteProduct);
//End Section


module.exports = router;