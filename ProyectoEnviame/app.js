//Requerimos el modulo de express
const express = require ('express');

//
const db = require('./database/db');

//Requerimos el archivo de config del servicio keycloak para iniciarlo cuando se ejecute la app.
const keycloak = require('./config/keycloak-config').initKeycloak();

// Declaramos una constante y almacenamos la ejecucion de express en ella.
const app = express();

// Requiero el modulo de rutas.
const userRoutes = require('./Routes/userRoutes')
const productRoutes = require('./Routes/productRoutes')
const categoryRoutes = require('./Routes/categoryRoutes')
const transactionRoutes = require('./Routes/transactionRoutes')

//Requiero paquete para admin de variables de Entorno.
const dotenv = require('dotenv');
dotenv.config();

//Middlewares. ( lo que llegue del post se obtiene en forma de objeto literal, tmb en caso de necesitar lo podemos transformar en formato JSON)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(keycloak.middleware());

//Utilizo las constantes que tiene almacenada las rutas.
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/transactions', transactionRoutes);

db.sync({ force: `${process.env.force}`})
  .then(() => {
    app.listen(`${process.env.PORT}`, () =>
      console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));
