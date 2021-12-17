const mongoose = require('mongoose');
const URI = 'mongodb://localhost/navierafluvial';

mongoose.connect(URI)
  .then(db => console.log('Base de datos conectada exitosamente'))
  .catch(error => console.error(error));

module.exports = mongoose;