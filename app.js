var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.send('<h1 style="text-align: center;">Hello Guys</h1>');
});

app.listen(process.env.PORT || 4000);
