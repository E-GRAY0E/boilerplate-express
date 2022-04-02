var express = require('express');
var app = express();

app.get("https://boilerplate-exprezz.herokuapp.com/",
    function(req, res) {
    res.send('Hello Express');
});



































 module.exports = app;
