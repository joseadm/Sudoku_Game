'use strict'

var express = require('express');
var SudokuController = require('../controllers/sudoku');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');

api.post('/sudoku/insert-grid', SudokuController.insertGrid);
api.get('/sudoku/get-grid/:id', SudokuController.getGrid);
api.get('/sudoku/get-grids', SudokuController.getGrids);
api.get('/sudoku/get-grid-diff/:difficulty', SudokuController.getGridDifficulty);
api.post('/sudoku/insert-game', SudokuController.insertGame);
api.get('/sudoku/get-game/:id', SudokuController.getGame);
api.get('/sudoku/get-games:page?', SudokuController.getGames);
api.delete('/sudoku/deleteAll', SudokuController.deleteAllGames);
api.delete('/sudoku/deleteAllGrids', SudokuController.deleteAllGrids);
//a6r1an////////////////////////////////////////////////////////////////////////////
api.post('/sudoku/rsolve', SudokuController.rsolve_sudoku);
//a6r1an////////////////////////////////////////////////////////////////////////////
module.exports = api;