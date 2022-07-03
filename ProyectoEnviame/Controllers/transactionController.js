const db = require('../models');
const { Transactions } = require(`../models`);

transactionController = {

// Crea Transaccion.
 createTransaction: async (req, res, next) => {
    const body = req.body;
    try {
      const transaction = await Transactions.create(body);
      return res.status(200).json(transaction);
    } catch (err) {
      res.json(err);
    }
    },
//Busca una Transaccion segun id.
getOneTransaction: async (req, res, next) => {
    const id = req.params.id;
    try {
      const transaction = await Transactions.findOne({
        where: { id: id },
      });
      return res.status(200).send(transaction);
    } catch (err) {
      res.json(err);
    }
  },

//Devuelve lista total de transacciones + info.
 listTransaction: async (req, res, next) => {
    try {
      const transactions = await Transactions.findAll();
      return res.status(200).send(transactions);
    } catch (err) {
      next(err);
    }
    },

// Edita una transaccion segun id.
 editTransaction: async (req, res)=> {

    await db.Transactions.update({
       buyer_user: req.body.buyer_user,
       Products: req.body.Products,
   },
     {
       where: {
         id: req.params.id
       }
      })
      res.send('Edicion exitosa').status(200)
       },

// Elimina una transaccion segun id.
 deleteTransaction: async (req, res, next) => {
    const id = req.params.id;
    try {
      const transaction = await Transactions.findByPk(id);
      transaction.destroy();
      res.send('Se elimino correctamente').status(200)
    } catch (err) {
      next(err);
    }
}


};

module.exports  = transactionController;