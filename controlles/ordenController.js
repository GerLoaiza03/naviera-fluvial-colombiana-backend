// Modelo orden
const Orden = require('../models/ordenDespacho');

//Listar ordenes
module.exports.get_Ordenes = async (req, res) => {
    const ordenes = await Orden.find();
    res.json(ordenes);
};

//Listar una orden
module.exports.get_Orden =  async (req, res) => {
    const orden = await Orden.findById(req.params.id);
    res.json(orden);
};

// module.exports.get_Orden =  async (req, res) => {
//     const orden = await Orden.findById(req.params.id);
//     res.json(orden);
// };


//Crear orden
module.exports.crear_Orden = async (req, res) => {
    const {puertoorigen, puertodestino, date, contenedores, peso, declarado, valorapagar, tiporemitente, documentoremitente, telefonoremitente, nombreremitente, apellidosremitente, emailremitente, direccionremitente, tipodestinatario, documentodestinatario, telefonodestinatario, nombredestinatario, apellidosdestinatario, emaildestinatario, direcciondestinatario, imgUrl} = req.body;
    const orden = new Orden({puertoorigen, puertodestino, date, contenedores, peso, declarado, valorapagar, tiporemitente, documentoremitente, telefonoremitente, nombreremitente, apellidosremitente, emailremitente, direccionremitente, tipodestinatario, documentodestinatario, telefonodestinatario, nombredestinatario, apellidosdestinatario, emaildestinatario, direcciondestinatario, imgUrl});
    await orden.save();
    res.json(orden);
};

//Modificar orden 
module.exports.actualizar_Orden = async (req, res) => {
    const {puertoorigen, puertodestino, date, contenedores, peso, declarado, valorapagar, tiporemitente, documentoremitente, telefonoremitente, nombreremitente, apellidosremitente, emailremitente, direccionremitente, tipodestinatario, documentodestinatario, telefonodestinatario, nombredestinatario, apellidosdestinatario, emaildestinatario, direcciondestinatario, imgUrl} = req.body;
    const nuevoOrden = {puertoorigen, puertodestino, date, contenedores, peso, declarado, valorapagar, tiporemitente, documentoremitente, telefonoremitente, nombreremitente, apellidosremitente, emailremitente, direccionremitente, tipodestinatario, documentodestinatario, telefonodestinatario, nombredestinatario, apellidosdestinatario, emaildestinatario, direcciondestinatario, imgUrl};
    await Orden.findByIdAndUpdate(req.params.id, nuevoOrden);
    res.json({Status: "La información de la orden ha sido modificada"});
};

//Borrar orden
module.exports.borrar_Orden = async (req, res) =>{
    await Orden.findByIdAndDelete(req.params.id);
    res.json({Status: "la orden ha sido borrado de la base de datos"});
};