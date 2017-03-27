var express = require('express');
var path = require('path');
var hbs = require('hbs');
var mongoose = require('mongoose');


var app = express();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
    res.render(path.join(__dirname, 'views/index.hbs'));
});



app.listen(3000, function(){
    console.log('Server running on port 3000');
});
