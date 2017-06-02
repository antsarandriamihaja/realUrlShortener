var config = {}
config.db = {};
   config.db.host= 'localhost';
   config.db.mLab= 'arandriamihaja:cTGagabJft'
   //'mongodb://arandriamihaja:cTGagabJft@ds163181.mlab.com:63181/url_shortener_antsa'
    config.db.name= 'url_shortener';
config.webhost = 'http://localhost:3000/';
config.secret_key = 'sk_test_b9Y1InUSB94t9sivG7qan5bL';
module.exports = { config };
var heroku_host = 'https://shrouded-stream-93491.herokuapp.com'