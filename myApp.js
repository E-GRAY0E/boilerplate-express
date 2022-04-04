var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config()

app.get("/",
    function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));


    app.get('/json', function(req, res) {
        var jsonResponse = { "message": "Hello json" };
        
        if (process.env.VAR_NAME === "allCaps") {
            response = "Hello World".toUpperCase();
          } else {
            response = "Hello World";
          });
































 module.exports = app;
