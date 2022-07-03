const userController = require('../Controllers/userController');
const express = require('express');
const router = express.Router();

//GET Section
router.get('/listUser', userController.listUser);

router.get('/getOneUser/:id', userController.getOneUser);

router.get('/getSellerUsers', userController.listSellerUser);

router.get('/getBuyerUsers', userController.listBuyerUser);


//End Section

//POST Section
router.post('/createUser', userController.createUser);
//End Section

//PUT Section
router.put('/editUser/:id', userController.editUser);
//End Section

//DELETE
router.delete('/deleteUser/:id', userController.deleteUser);
//End Section


module.exports = router;