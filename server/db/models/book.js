//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	author: [String],
	description: String,
	imageURL: String,
	title: String,
	bookURL: String,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
