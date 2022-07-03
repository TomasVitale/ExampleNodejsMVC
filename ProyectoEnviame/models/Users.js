const Sequelize = require(`sequelize`);
const db = require("../database/db");

//-- User Model
class Users extends Sequelize.Model {}
Users.init(
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
    email: {
      type: Sequelize.TEXT,
      allowNull: false,

    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    is_admin: {
      type: Sequelize. BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "users" }
);
module.exports = Users;