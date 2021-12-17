const mongoose = require('mongoose');
const {Schema} = mongoose;

const clienteSchema = new Schema({
    tipo: String,
    documento: {
        type: String,
        trim: true,
        maxLength: 15,
        require: true
    },
    nombre: {
        type: String,
        maxLength: 30,
        require: true
    },
    apellidos: {
        type: String,
        maxLength: 30,
        require: true
    },
    email: {
        type: String,
        trim: true,
        require: true
      },
    telefono: {
        type: String,
        maxLength: 11
    },
    username: {
        type: String,
        trim: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    rol: {
        type: Number,
        default: 1
    }
},
{timestamps: true}
);
module.exports = mongoose.model('Cliente', clienteSchema);
