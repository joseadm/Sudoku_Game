'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CellSchema = Schema({
    value: Number,
    row: Number,
    col: Number,
    error: Boolean,
    lightError: Boolean,
    visible: Boolean,
    fixed: Boolean
});

module.exports = mongoose.model('Cell', CellSchema);
