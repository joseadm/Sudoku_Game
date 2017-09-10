'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GridSchema = Schema({
    data: Array,
    rows: Array,
    cols: Array,
    squares: Array
});

module.exports = mongoose.model('Grid', GridSchema);