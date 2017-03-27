var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var long_urlSchema = new Schema ({
    url: {
        type: String,
        required: true,
        unique: true
    }
});

var long_url = mongoose.model('long_url'. long_urlSchema);
module.exports = {long_url};
