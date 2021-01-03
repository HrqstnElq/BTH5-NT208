//18521531 - Vo Huu Tri

var mongoose = require("mongoose");

//bang du lieu
var userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	dob: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
	},
	isMale: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model("user", userSchema, "user");
