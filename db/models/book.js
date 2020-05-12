//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	author: [String],
	desc: { type: String, required: true, max: 10000 },
	image: { type: String, required: true, max: 10000 },
	link: { type: String, required: true, max: 10000 },
	title: { type: String, required: true, max: 10000 },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
