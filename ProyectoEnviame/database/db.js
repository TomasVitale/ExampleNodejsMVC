const Sequelize = require("sequelize");

const db = new Sequelize("Enviame", "postgres", "Saraza01!", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;