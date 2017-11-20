'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GridSchema = Schema({
    data: Array,
    difficulty: String
});

module.exports = mongoose.model('Grid', GridSchema);