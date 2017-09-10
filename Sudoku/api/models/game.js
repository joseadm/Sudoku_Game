'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    grid: {type: Schema.ObjectId, ref: 'Grid'}
});

module.exports = mongoose.model('Game', GameSchema);