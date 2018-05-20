var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.send("Hello Huhu");
});

app.listen(process.env.PORT || 4000);
