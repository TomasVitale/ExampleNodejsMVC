const Sequelize = require(`sequelize`);
const db = require("../database/db");

//-- Transaction Model
class Transactions extends Sequelize.Model {}
Transactions.init(
  {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    buyer_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true
    },
    Products: {
        type: Sequelize.TEXT,
        allowNull: false,
  },
},
  { sequelize: db, modelName: "transactions" }
);
module.exports = Transactions;