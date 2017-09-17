'use strict'

var express = require('express');
var SudokuController = require('../controllers/sudoku');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');

api.get('/sudoku/probando-controlador', md_auth.ensureAuth, SudokuController.pruebas);
api.post('/sudoku/insert-grid', SudokuController.insertGrid);
api.get('/sudoku/get-grid/:id', md_auth.ensureAuth, SudokuController.getGrid);
api.post('/sudoku/insert-game', SudokuController.insertGame);
api.get('/sudoku/get-game/:id', md_auth.ensureAuth, SudokuController.getGame);
api.get('/sudoku/get-games:page?', SudokuController.getGames);

module.exports = api;