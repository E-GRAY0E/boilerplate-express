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

app.get("/json", function(req, res) {
  let jsonResponse = { "message": "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase()
  } else {
    response.json(jsonResponse);
  }
});



































 module.exports = app;
