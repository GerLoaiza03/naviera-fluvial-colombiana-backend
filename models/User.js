const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		email: {
			type: String,
			maxLength: 50,
			require: true,
		},
		password: {
			type: String,
			maxLength: 30,
			require: true,
		},
		role: {
			type: Number,
			maxLength: 1,
			require: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
