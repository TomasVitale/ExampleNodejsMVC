const Categories= require(`./Categories`);
const Products = require(`./Products`);
const Transactions = require(`./Transactions`);
const Users = require(`./Users`);
const Products_Categories = require(`./Products_Categories`);
const Products_Transactions = require(`./Products_Transactions`);

//Tablas intermedias.
Products.belongsToMany(Categories, { through: "products_categories" });
Categories.belongsToMany(Products, { through: "products_categories" });

Products.belongsToMany(Transactions, { through: "products_transactions" });
Transactions.belongsToMany(Products, { through: "products_transactions" });
//End Region.

//Relaciones entre tablas.
Products.hasMany(Transactions);
Transactions.belongsTo(Products);

Users.hasMany(Products);
Products.belongsTo(Users, {foreignKey: 'seller_user', targetKey: 'id'});

Users.hasMany(Transactions);
Transactions.belongsTo(Users, {foreignKey: "buyer_user", targetKey: 'id'});
//End Region.



module.exports = {
    Categories: Categories,
    Products: Products,
    Users: Users,
    Transactions: Transactions,
    Products_Categories: Products_Categories,
    Products_Transactions: Products_Transactions
};