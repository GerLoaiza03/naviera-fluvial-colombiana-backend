const mongoose = require('mongoose');
// const URI = 'mongodb://frank:hola@127.0.0.1/NavieraFluvial';
const URI = 'mongodb://127.0.0.1/NavieraFluvial';

mongoose
	.connect(URI)
	.then((db) => console.log('Base de datos conectada exitosamente'))
	.catch((error) => console.error(error));

module.exports = mongoose;
