var express = require('express');
var app = express();

app.get("/",
    function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json",
    (req, res) => {
        res.json(
            var response = "Hello World".toUpperCase();
            if (process.env.VAR_NAME === "allCaps") {
                response = "Hello World".toUpperCase();
              } else {
                response = "Hello World";
              }
        );
    });

/*Then, in the /json GET route handler you created in the last 
challenge, transform the response object's message to 
uppercase if process.env.MESSAGE_STYLE equals uppercase. 
The response object should either 
be {"message": "Hello json"} or 
{"message": "HELLO JSON"}, 
depending on the MESSAGE_STYLE value.
Note: If you are using Replit, 
you cannot create a .env file. 
Instead, use the built-in SECRETS tab to add the variable.
If you are working locally, 
you will need the dotenv package. 
It loads environment variables from your .env 
file into process.env. 
Install it with npm install dotenv. 
Then, at the top of your myApp.js file, import and 
load the variables with require('dotenv').config().*/
































 module.exports = app;
