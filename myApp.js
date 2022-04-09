var express = require('express');
const { request, response } = require('express')
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

app.use(function(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next()
});
//Serving an HTML file:
app.get("/",
    function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
//Serving static assets
app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));
//Serving JSON on a specific route:
app.get("/json", function(req, res) {
  if(process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({"message": "HELLO JSON"});
  } else {
    return res.json({"message": "Hello json"});
  }
});



































 module.exports = app;
