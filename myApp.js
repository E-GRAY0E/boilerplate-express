var express = require('express');
const { request, response } = require('express')
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config()
//Serving an HTML file:
app.get("/",
    function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
//Serving static assets
app.use(express.static(__dirname + "/public"));
//Serving JSON on a specific route:
let message = { message: "Hello json" };
app.get("/json", (request, response) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.json({ "message": "HELLO JSON" });
  } else {
    response.json(message);
  }
});



































 module.exports = app;
