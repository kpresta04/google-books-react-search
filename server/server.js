//Import the mongoose module
const path = require("path");
const express = require("express");
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const Book = require("./db/models/book");
const app = express();
app.use(express.static(publicPath));
//Set up default mongoose connection
// const mongoDB =
// 	"mongodb+srv://main:rsHmhNs8bib_ni4@cluster0-l36fj.mongodb.net/test?retryWrites=true&w=majority";
const mongoDB =
	"mongodb://main:rsHmhNs8bib_ni4@ds141611.mlab.com:41611/heroku_d0f84p7s";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
	console.log(
		`You have successfully connected to your mongo database: ${mongoDB}`
	);
});

app.use(express.json());

app.post("/save", (req, res) => {
	const obj = req.body;
	console.log(obj);
	const newBook = new Book(obj);
	newBook.save((err, savedBook) => {
		if (err) return res.json(err);
		return res.json(savedBook);
	});
});
app.get("/books", async (req, res) => {
	try {
		const results = await Book.find({});
		res.send(results);
	} catch (error) {
		res.send(error);
	}
});

app.delete("/books/:id", (req, res) => {
	Book.deleteOne({ _id: req.params.id }, function (err) {
		if (err) return res.send(err);
		// deleted at most one tank document
	});
});
app.get("*", (req, res) => {
	res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
	console.log("Server is up!");
});
