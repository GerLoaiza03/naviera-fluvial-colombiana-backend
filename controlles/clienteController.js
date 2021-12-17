// Modelo Cliente
const Cliente = require('../models/Cliente');


//Listar clientes
module.exports.get_Clientes = async (req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
};

//Listar un cliente
module.exports.get_Cliente =  async (req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
};

//Crear cliente
module.exports.crear_Cliente = async (req, res) => {
    const {tipo, documento, nombre, apellidos, email, telefono, username, password, rol} = req.body;
    const cliente = new Cliente({tipo, documento, nombre, apellidos, email, telefono, username, password, rol});
    await cliente.save();
    res.json({Status: "La información de Cliente se ha almacenado exitosamente"});
};

//Modificar cliente 
module.exports.actualizar_Cliente = async (req, res) => {
    const {tipo, documento, nombre, apellidos, email, telefono, username, password, rol} = req.body;
    const nuevoCliente = {tipo, documento, nombre, apellidos, email, telefono, username, password, rol};
    await Cliente.findByIdAndUpdate(req.params.id, nuevoCliente);
    res.json({Status: "La información del cliente ha sido modificada"});
};

//Borrar cliente
module.exports.borrar_Cliente = async (req, res) =>{
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({Status: "El cliente ha sido borrado de la base de datos"});
};


