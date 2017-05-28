var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var counter = require('./counter');

var UrlSchema = new Schema({
    long_url: String,
    _id: {
        type: Number,
        index: true
    },
    created_at: Date
});

//updating counter schema before saving long url into url collection.
UrlSchema.pre('save', function(next) {
    var doc = this;

    counter.findByIdAndUpdate(
        { _id: 'url_count' },
        { $inc: { seq: 1 } },
        function (err, counter) {
            if (err) return next(err);
            //updating fields in url collection
            doc._id = counter.seq;
            doc.created_at = new Date();
            next();
        });
});

var Url = mongoose.model('Url', UrlSchema);
module.exports = Url;
