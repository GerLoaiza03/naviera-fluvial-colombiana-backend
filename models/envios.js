const mongoose = require('mongoose');
const { Schema } = mongoose;

const envioSchema = new Schema(
	{
		cliente: {
			type: String,
			maxLength: 50,
			require: true,
		},
		puerto_salida: {
			type: String,
			maxLength: 30,
			require: true,
		},
		puerto_destino: {
			type: String,
			maxLength: 30,
			require: true,
		},
		barco: {
			type: String,
			maxLength: 30,
			require: true,
		},
		contenedor: {
			nombre: String,
		},
		imgUrl: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Envio', envioSchema);
