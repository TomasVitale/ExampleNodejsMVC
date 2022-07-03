const transactionController = require('../Controllers/transactionController');
const express = require('express');
const router = express.Router();


//GET Section
router.get('/listTransaction', transactionController.listTransaction);

router.get('/getOneTransaction/:id', transactionController.getOneTransaction);

//End Section

//POST Section
router.post('/createTransaction', transactionController.createTransaction);
//End Section

//PUT Section
router.put('/editTransaction/:id', transactionController.editTransaction);
//End Section

//DELETE Section
router.delete('/deleteTransaction/:id', transactionController.deleteTransaction);
//End Section


module.exports = router;