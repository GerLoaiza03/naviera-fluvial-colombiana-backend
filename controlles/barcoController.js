// Modelo barco
const Barco = require('../models/Barco');

//Listar barcos
module.exports.get_Barcos = async (req, res) => {
    const barcos = await Barco.find();
    res.json(barcos);
};

//Listar un barco
module.exports.get_Barco =  async (req, res) => {
    const barco = await Barco.findById(req.params.id);
    res.json(barco);
};

//Crear barco
module.exports.crear_Barco = async (req, res) => {
    const {nombre, fecha, capacidad, rutas, capitan, imgUrl} = req.body;
    const barco = new Barco({nombre, fecha, capacidad, rutas, capitan, imgUrl});
    await barco.save();
    res.json({Status: "La información de barco se ha almacenado exitosamente"});
};

//Modificar barco 
module.exports.actualizar_Barco = async (req, res) => {
    const {nombre, fecha, capacidad, rutas, capitan, imgUrl} = req.body;
    const nuevoBarco = {nombre, fecha, capacidad, rutas, capitan, imgUrl};
    await Barco.findByIdAndUpdate(req.params.id, nuevoBarco);
    res.json({Status: "La información del barco ha sido modificada"});
};

//Borrar barco
module.exports.borrar_Barco = async (req, res) =>{
    await Barco.findByIdAndDelete(req.params.id);
    res.json({Status: "El barco ha sido borrado de la base de datos"});
};