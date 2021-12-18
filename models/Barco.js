const mongoose = require('mongoose');
const {Schema} = mongoose;

const barcoSchema = new Schema(
    
    {
    nombre: {
        type: String,
        maxLength: 50,
        require: true
    },
    fecha: {
        type: String,
        maxLength: 30,
        require: true
    },
    capacidad: {
        type: Number,
        require: true
    },
    rutas: {
        type: Array,
        default: []
    },
    capitan: {
        type: String,
        maxLength: 50,
        require: true
    },
    imgUrl: String
}

,
{timestamps: true}
);

module.exports = mongoose.model('Barco', barcoSchema);