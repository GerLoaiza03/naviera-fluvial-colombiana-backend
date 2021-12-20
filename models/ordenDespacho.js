const mongoose = require('mongoose');
const { Schema } = mongoose;

const ordenSchema = new Schema(
	{
		puertoorigen: {
			type: String,
			maxLength: 50,
			require: true,
		},
		puertodestino: {
			type: String,
			maxLength: 30,
			require: true,
		},
		date: {
			type: Date,
			maxLength: 30,
			require: true,
		},
		contenedores: {
			type: Number,
			maxLength: 30,
			require: true,
		},
		peso: {
			type: Number,
			require: true,
		},
		declarado: {
			type: Number,
			require: true,
		},
		valorapagar: {
			type: Number,
			require: true,
		},
		tiporemitente: {
			type: String,
			require: true,
		},
		documentoremitente: {
			type: Number,
			maxlength: 10,
			require: true,
		},
		telefonoremitente: {
			type: Number,
			maxLength: 12,
			require: true
		},
		nombreremitente: {
			type: String,
			maxLength: 30,
			require: true,
		},
		apellidosremitente: {
			type: String,
			maxLength: 30,
			require: true,
		},
		emailremitente: {
			type: String,
			maxLength: 50,
			require: true,
		},
		direccionremitente: {
			type: String,
			maxLength: 50,
			require: true
		},
		tipodestinatario: {
			type: String,
			require: true
		},
		documentodestinatario: {
			type: Number,
			maxlength: 10,
			require: true,
		},
		telefonodestinatario: {
			type: Number,
			maxLength: 12,
			require: true
		},
		nombredestinatario: {
			type: String,
			maxLength: 30,
			require: true,
		},
		apellidosdestinatario: {
			type: String,
			maxLength: 30,
			require: true,
		},
		emaildestinatario: {
			type: String,
			maxLength: 50,
			require: true,
		},
		direcciondestinatario: {
			type: String,
			maxLength: 50,
			require: true
		},
		imgUrl: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Orden', ordenSchema);
