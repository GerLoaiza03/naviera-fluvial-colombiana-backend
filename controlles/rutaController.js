// Modelo ruta
const Ruta = require('../models/Ruta');

//Listar rutas
module.exports.get_Rutas = async (req, res) => {
    const rutas = await Ruta.find();
    res.json(rutas);
};

//Listar una ruta
module.exports.get_Ruta =  async (req, res) => {
    const ruta = await Ruta.findById(req.params.id);
    res.json(ruta);
};

//Crear ruta
module.exports.crear_Ruta = async (req, res) => {
    const {nombre, puertoorigen, puertodestino, distancia, tiempo, frecuencia, imgUrl} = req.body;
    const ruta = new Ruta({nombre, puertoorigen, puertodestino, distancia, tiempo, frecuencia, imgUrl});
    await ruta.save();
    res.json({Status: "La información de la ruta se ha almacenado exitosamente"});
};

//Modificar ruta 
module.exports.actualizar_Ruta = async (req, res) => {
    const {nombre, puertoorigen, puertodestino, distancia, tiempo, frecuencia, imgUrl} = req.body;
    const nuevoRuta = {nombre, puertoorigen, puertodestino, distancia, tiempo, frecuencia, imgUrl};
    await Ruta.findByIdAndUpdate(req.params.id, nuevoRuta);
    res.json({Status: "La información de la ruta ha sido modificada"});
};

//Borrar ruta
module.exports.borrar_Ruta = async (req, res) =>{
    await Ruta.findByIdAndDelete(req.params.id);
    res.json({Status: "la ruta ha sido borrado de la base de datos"});
};