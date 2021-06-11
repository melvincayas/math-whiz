const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.listen(5000, () => {
	console.log("Listening on Port 5000!");
});
