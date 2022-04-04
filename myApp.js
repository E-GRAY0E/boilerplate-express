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


    app.get('/json', function(req, res){
        var jsonResponse = { "message": "Hello json" };
        
        if(process.env.MESSAGE_STYLE === 'uppercase'){
            return jsonResponse.message = jsonResponse.message.toUpperCase();
        }
            return res.json(jsonResponse);
        });
































 module.exports = app;
