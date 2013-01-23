var config = require('./config');
var mongoose = require('mongoose');

function connect() {
    mongoose.connect(   'mongodb://' + 
                        config.params.dbuser + ':' +
                        config.params.dbpass + '@' +
                        config.params.dbhost + '/' +
                        config.params.dbname);
}

exports.connect = connect;