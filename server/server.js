//Import the mongoose module
const path = require("path");
const express = require("express");
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

const app = express();
app.use(express.static(publicPath));
//Set up default mongoose connection
const mongoDB =
	"mongodb+srv://dbUser:xSMa09CDQUUg9Tx4@cluster0-l36fj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use("/api", require("./routes"));
app.get("*", (req, res) => {
	res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
	console.log("Server is up!");
});
