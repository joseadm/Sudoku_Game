'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GridSchema = Schema({
    data: Array
});

module.exports = mongoose.model('Grid', GridSchema);