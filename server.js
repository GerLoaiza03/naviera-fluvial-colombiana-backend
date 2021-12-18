const express = require('express');//Importa express
const morgan = require('morgan');

const app = express();//Inicializacion de express

// Db connection
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 5000);//Toma el puerto de la nube o por defecto el 5000

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/naviera',require('./routes/cliente'));
app.use('/api/naviera',require('./routes/contacto'));
app.use('/api/naviera',require('./routes/barco'));
app.use('/api/naviera',require('./routes/ruta'));
app.use('/api/naviera',require('./routes/puerto'));


// Static Files

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Escuchando en el puerto ${app.get('port')}`);
  });

