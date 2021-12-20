const express = require('express'); //Importa express
const morgan = require('morgan');
const cors = require('cors');

const app = express(); //Inicializacion de express
app.use(cors());
// Db connection
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 5000); //Toma el puerto de la nube o por defecto el 5000

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/naviera', require('./routes/cliente'));
app.use('/api/naviera', require('./routes/contacto'));
app.use('/api/naviera', require('./routes/barco'));
app.use('/api/naviera', require('./routes/ruta'));
app.use('/api/naviera', require('./routes/puerto'));
app.use('/api/naviera', require('./routes/envio'));
// app.use('/api/naviera', require('./routes/user'));

// Static Files

// Starting the server
app.listen(app.get('port'), () => {
	console.log(`Escuchando en el puerto ${app.get('port')}`);
});
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
