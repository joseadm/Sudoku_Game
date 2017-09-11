'use strict'

var express = require('express');
var SudokuController = require('../controllers/sudoku');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');

api.get('/sudoku/probando-controlador', md_auth.ensureAuth, SudokuController.pruebas);

module.exports = api;