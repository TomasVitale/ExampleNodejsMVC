const db = require('../models');
const { Categories } = require(`../models`);

categoryController = {

// Crea Categoria.
    createCategory: async (req, res, next) => {
    const body = req.body;
    try {
      const categorie = await Categories.create(body);
      return res.status(200).json(categorie);
    } catch (err)  {
      res.json(err);
    }
    } ,
// Devuelve lista total de categorias + info de la misma.
    listCategory: async (req, res, next) => {
        try {
          const categories = await Categories.findAll();
          return res.status(200).send(categories);
        } catch (err) {
          next(err);
        }
    },
//Busca una categoria segun id.
getOneCategory: async (req, res, next) => {
    const id = req.params.id;
    try {
      const category = await Categories.findOne({
        where: { id: id },
      });
      return res.status(200).send(category);
    } catch (err) {
      res.json(err);
    }
  },

// Edita una categoria segun id.
    editCategory: async (req, res)=> {

        await db.Categories.update({
           name: req.body.name,
           description: req.body.description,
           products: req.body.products,
       },
         {
           where: {
             id: req.params.id
           }
          })
          res.send('Edicion completada').status(200);
    },
// Elimina una categoria segun id.
    deleteCategory: async (req, res, next) => {
        const id = req.params.id;
        try {
          const Category = await Categories.findByPk(id);
          Category.destroy();
          res.send('Se elimino correctamente').status(200)
        } catch (err) {
          next(err);
        }
    }
};

module.exports = categoryController;