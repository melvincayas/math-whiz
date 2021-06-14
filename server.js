const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.use("*", (req, res) => {
	res.redirect("/");
});

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}!`);
});
