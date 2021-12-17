const mongoose = require('mongoose');
const {Schema} = mongoose;

const rutaSchema = new Schema({
    nombre: {
        type: String,
        maxLength: 50,
        require: true
    },
    puertoorigen: {
        type: String,
        maxLength: 40,
        require: true
    },
    puertodestino: {
        type: String,
        maxLength: 40,
        require: true
    },
    distancia: Number,
    tiempo: Number,
    frecuencia: {
        type: String,
        maxLength: 50,
        require: true
    },
    imgUrl: String
},
{timestamps: true}
);

module.exports = mongoose.model('Ruta', rutaSchema);