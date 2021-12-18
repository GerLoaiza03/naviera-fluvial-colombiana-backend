const mongoose = require('mongoose');
const {Schema} = mongoose;

const contactoSchema = new Schema(
    
{
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
    asunto: {
        type: String,
        require: true
    }
}


,
{timestamps: true}
);
module.exports = mongoose.model('Contacto', contactoSchema);