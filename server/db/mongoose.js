const {config} = require('../../config.js')
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://'+config.db.host+'/'+config.db.name);

module.exports= {mongoose};
