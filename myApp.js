var express = require('express');
const { request, response } = require('express')
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();
var bodyParser = require('body-parser')

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
app.get('/now', function(req, res, next){
  req.time = new Date().toString()
  next();
},
(req, res) => {
  res.send( {time: req.time} );
});
app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.json({echo: word});
});
app.get('/name', (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});
app.use(bodyParser.urlencoded({extended: false}));
































 module.exports = app;
