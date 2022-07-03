const Sequelize = require(`sequelize`);
const db = require("../database/db");

//-- Products_categories Model
class Products_Categories extends Sequelize.Model {}
Products_Categories.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    categoriesId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "products_categories" }
);
module.exports = Products_Categories;