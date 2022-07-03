const db = require('../models');
const { Products } = require(`../models`);

productController = {

//Crea productos.
 createProduct: async (req, res, next) => {
    const body = req.body;
    try {
      const product = await Products.create(body);
      return res.status(200).json(product);
    } catch (err) {
      res.json(err);
    }
    },
//Busca un Producto segun id.
 getOneProduct: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Products.findOne({
        where: { id: id },
      });
      return res.status(200).send(product);
    } catch (err) {
      res.json(err);
    }
  },



//Te devuelve lista de productos.
 listProduct: async (req, res, next) => {
    try {
      const products = await Products.findAll();
      return res.status(200).send(products);
    } catch (err) {
      next(err);
    }
    },

//Edita productos segun id.
 editProduct: async (req, res)=> {

    await db.Products.update({
       name: req.body.name,
       description: req.body.description,
       quantity: req.body.products,
       status: req.body.status,
       seller_user: req.body.seller_user,
       transaction: req.body.transaction,
       category: req.body.category
   },
     {
       where: {
         id: req.params.id
       }
      })
      res.send('Edicion exitosa').status(200)
    },

//Elimina productos por id.
 deleteProduct: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Products.findByPk(id);
      product.destroy();
      res.send('Se elimino correctamente').status(200)
    } catch (err) {
      next(err);
    }
}
};



module.exports = productController