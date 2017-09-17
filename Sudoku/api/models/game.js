'use strict'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = Schema({
    user: Object,
    grid: Object
});

module.exports = mongoose.model('Game', GameSchema);