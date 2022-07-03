const Sequelize = require(`sequelize`);
const db = require("../database/db");

//-- Category Model
class Categories extends Sequelize.Model {}
Categories.init(
  { 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    product: {
        type: Sequelize.TEXT,
        allowNull: false
  },
},
  { sequelize: db, modelName: "categories" }
);
module.exports = Categories;