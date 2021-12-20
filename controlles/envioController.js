// Modelo barco
const Envio = require('../models/envios');

//Listar envios
module.exports.get_Envios = async (req, res) => {
	const envios = await Envio.find();
	res.json(envios);
};

//Listar un envio
module.exports.get_Envio = async (req, res) => {
	const envio = await Envio.findById(req.params.id);
	res.json(envio);
};

// //Crear barco
// module.exports.crear_Envio = async (req, res) => {
//     const {nombre, fecha, capacidad, rutas, capitan, imgUrl} = req.body;
//     const barco = new Barco({nombre, fecha, capacidad, rutas, capitan, imgUrl});
//     await barco.save();
//     res.json({Status: "La información de barco se ha almacenado exitosamente"});
// };

// //Modificar barco
// module.exports.actualizar_Barco = async (req, res) => {
//     const {nombre, fecha, capacidad, rutas, capitan, imgUrl} = req.body;
//     const nuevoBarco = {nombre, fecha, capacidad, rutas, capitan, imgUrl};
//     await Barco.findByIdAndUpdate(req.params.id, nuevoBarco);
//     res.json({Status: "La información del barco ha sido modificada"});
// };

// //Borrar barco
// module.exports.borrar_Barco = async (req, res) =>{
//     await Barco.findByIdAndDelete(req.params.id);
//     res.json({Status: "El barco ha sido borrado de la base de datos"});
// };
