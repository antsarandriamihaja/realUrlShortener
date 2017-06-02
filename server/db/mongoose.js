const {config} = require('../../config.js')
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var MONGOLAB_URI =  'mongodb://'+config.db.mLab+'@ds163181.mlab.com:63181/url_shortener_antsa';
mongoose.connect(process.env.MONGOLAB_URI|| 'mongodb://'+config.db.host+'/'+config.db.name);

module.exports= {mongoose};
