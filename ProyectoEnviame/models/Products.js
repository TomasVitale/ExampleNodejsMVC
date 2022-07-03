const Sequelize = require(`sequelize`);
const db = require("../database/db");

//-- Product Model
class Products extends Sequelize.Model {}
Products.init(
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
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    transaction: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    category: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true,
    },
    seller_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true
    },
  },
  { sequelize: db, modelName: "products" }
);
module.exports = Products;