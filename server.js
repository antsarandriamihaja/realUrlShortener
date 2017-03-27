var express = require('express');
var path = require('path');
var hbs = require('hbs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var config = require('./config');
var base58 = require('./base58');
var Url = require('./server/models/url');

var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://'+config.db.host+'/'+config.db.name);

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.render(path.join(__dirname, 'views/index.hbs'));
});

app.post('/api/shorten', function (req, res){
    var longUrl = req.body.url;
    var shortUrl = '';

    Url.findOne({
        long_url: longUrl
    }, function(err, doc){
        if (doc){
            shortUrl = config.webhost +base58.encode(doc._id);

            res.send({'shortUrl': shortUrl});
        }
        else{
            var newUrl = Url({
                long_url: longUrl
            });

            newUrl.save(function(err){
                if (err){ return console.log(err);}
                shortUrl = config.webhost + base58.encode(newUrl._id);
                res.send({'shortUrl': shortUrl});
            });
        }
    });
});

app.get('/:encoded_id', function(req, res){
    var base58Id = req.params.encoded_id;
    var id = base58.decode(base58Id);

    Url.findOne({_id: id}, function(err, doc){
        if (doc){res.redirect(doc.long_url);}
        else{
            res.redirect(config.webhost);
        }
    });
});



app.listen(port, function(){
    console.log(`Server running on port ${port}`);
});
