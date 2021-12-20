const mongoose = require('mongoose');
const { Schema } = mongoose;

const puertoSchema = new Schema(
	{
		nombre: {
			type: String,
			maxLength: 50,
			require: true,
		},
		pais: {
			type: String,
			maxLength: 40,
			require: true,
		},
		ciudad: {
			type: String,
			maxLength: 40,
			require: true,
		},
		direccion: {
			type: String,
			maxLength: 40,
			require: true,
		},
		telefono: {
			type: Number,
			maxLength: 50,
			require: true,
		},
		capacidad: {
			type: Number,
			maxLength: 10,
			require: true,
		},
		tarifa: {
			type: Number,
			maxLength: 50,
			require: true,
		},
		imgUrl: String,
	},

	{ timestamps: true }
);

module.exports = mongoose.model('Puerto', puertoSchema);
