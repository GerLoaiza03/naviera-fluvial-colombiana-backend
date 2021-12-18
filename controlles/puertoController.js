// Modelo puerto
const Puerto = require('../models/Puerto');

//Listar puertos
module.exports.get_Puertos = async (req, res) => {
    const puertos = await Puerto.find();
    res.json(puertos);
};

//Listar una puerto
module.exports.get_Puerto =  async (req, res) => {
    const puerto = await Puerto.findById(req.params.id);
    res.json(puerto);
};

//Crear puerto
module.exports.crear_Puerto = async (req, res) => {
    const {nombre, pais, ciudad, direccion, telefono, capacidad, tarifa, imgUrl} = req.body;
    const puerto = new Puerto({nombre, pais, ciudad, direccion, telefono, capacidad, tarifa, imgUrl});
    await puerto.save();
    res.json({Status: "La información de la puerto se ha almacenado exitosamente"});
};

//Modificar puerto 
module.exports.actualizar_Puerto = async (req, res) => {
    const {nombre, pais, ciudad, direccion, telefono, capacidad, tarifa, imgUrl} = req.body;
    const nuevoPuerto = {nombre, pais, ciudad, direccion, telefono, capacidad, tarifa, imgUrl};
    await Puerto.findByIdAndUpdate(req.params.id, nuevoPuerto);
    res.json({Status: "La información de la puerto ha sido modificada"});
};

//Borrar puerto
module.exports.borrar_Puerto = async (req, res) =>{
    await Puerto.findByIdAndDelete(req.params.id);
    res.json({Status: "la puerto ha sido borrado de la base de datos"});
};