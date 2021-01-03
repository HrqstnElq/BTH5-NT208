//18521531 - Vo Huu Tri

var mongoose = require("mongoose");

//bang du lieu
var bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	number: {
		type: Number,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("book", bookSchema, "book");
