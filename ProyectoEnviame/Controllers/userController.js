const db = require('../models/');
const { Users, Transactions, Products } = require(`../models`);

userController = {

//Creacion de nuevos Usuarios.
createUser: async (req, res, next) => {
    const body = req.body;
    try {
      const user = await Users.create(body);
      return res.status(200).json(user);
    } catch (err) {
      res.json(err);
    }
},
// Busca un usuario segun id.
getOneUser: async (req, res, next) => {
    const id = req.params.id;
    try {
      const user = await Users.findOne({
        where: { id: id },
      });
      return res.status(200).send(user);
    } catch (err) {
      res.json(err);
    }
  },

// Lista de Usuarios totales en la base + la informacion de cada uno.
listUser: async (req, res, next) => {
    try {
      const users = await Users.findAll();
      return res.status(200).send(users);
    } catch (err) {
      next(err);
    }
},

//Trae lista de usuarios que tienen productos asignados.
listSellerUser: async (req, res, next) => {
    try {
      const User = await Products.findAll({
        attributes:['seller_user']
    });
    return res.status(200).send(User);
  } catch (err) {
    next(err);
  }
},
//Trae lista de usuarios que tienen transacciones asignadas.
listBuyerUser: async (req, res, next) => {
  try {
    const User = await Transactions.findAll({
      attributes:['buyer_user']
  });
  return res.status(200).send(User);
} catch (err) {
  next(err);
}
},


//Edita el usuario segun id.
editUser: async (req, res)=> {

    await db.Users.update({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
       is_admin: req.body.is_admin
   },
     {
       where: {
         id: req.params.id
       }
      })
      res.send('Edicion exitosa').status(200)
       },

//Elimina usuario por id.
deleteUser: async (req, res, next) => {
    const id = req.params.id;
    try {
      const user = await Users.findByPk(id);
      user.destroy();
      res.send('Se elimino correctamente').status(200)
    } catch (err) {
      next(err);
    }
}

}
module.exports = userController;