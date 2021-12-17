// Modelo Contacto
const Contacto = require('../models/Contacto');

//Listar contactos
module.exports.get_Contactos = async (req, res) => {
    const contactos = await Contacto.find();
    res.json(contactos);
};

//Listar un contacto
module.exports.get_Contacto =  async (req, res) => {
    const contacto = await Contacto.findById(req.params.id);
    res.json(contacto);
};

//Crear contacto
module.exports.crear_Contacto = async (req, res) => {
    const {tipo, documento, nombre, apellidos, email, telefono, asunto} = req.body;
    const contacto = new Contacto({tipo, documento, nombre, apellidos, email, telefono, asunto});
    await contacto.save();
    res.json({Status: "La información de contacto se ha almacenado exitosamente"});
};

//Modificar contacto 
module.exports.actualizar_Contacto = async (req, res) => {
    const {tipo, documento, nombre, apellidos, email, telefono, asunto} = req.body;
    const nuevoContacto = {tipo, documento, nombre, apellidos, email, telefono, asunto};
    await Contacto.findByIdAndUpdate(req.params.id, nuevoContacto);
    res.json({Status: "La información del contacto ha sido modificada"});
};

//Borrar contacto
module.exports.borrar_Contacto = async (req, res) =>{
    await Contacto.findByIdAndDelete(req.params.id);
    res.json({Status: "El contacto ha sido borrado de la base de datos"});
};


