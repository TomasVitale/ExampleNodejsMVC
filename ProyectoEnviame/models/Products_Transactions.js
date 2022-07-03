const Sequelize = require(`sequelize`);
const db = require("../database/db");

//-- Products_transactions Model
class Products_Transactions extends Sequelize.Model {}
Products_Transactions.init(
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
    transacctionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "products_transactions" }
);
module.exports = Products_Transactions;