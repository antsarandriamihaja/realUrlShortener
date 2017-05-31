var express = require('express');
var path = require('path');
var hbs = require('hbs');
const {mongoose} = require('./server/db/mongoose');
var bodyParser = require('body-parser');
var {config} = require('./config');
var base58 = require('./base58');
var Url = require('./server/models/url');
const stripe = require('stripe')(config.secret_key);

var port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.render(path.join(__dirname, 'views/government.hbs'));
});

app.post('/getUserInfo', (req,res)=>{
     res.render(path.join(__dirname, 'views/stripe.hbs'));
})

app.post('/getCardToken', (req, res)=>{
    var response = req.body;
    console.log(response)
    stripe.customers.create({
        source: response.stripeToken 
        
    })
    .then((customer)=>{
        stripe.charges.create({
            amount:250.99*100,
            currency: 'cad',
            customer: customer.id,
            description: 'URL-shortening service provided by the government of Canada.'

        })
    })
    .catch((error)=>{
        console.log(`There was an error: ${error}`);
    })
     res.render(path.join(__dirname, './views/index.hbs'));
})

app.post('/api/shorten', function (req, res){
    console.log('post request started executing')
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
