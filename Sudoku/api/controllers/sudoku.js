'use strict'

var fs = require('fs');
var path = require('path');
var bcrypt = require('bcrypt-nodejs'); // Encriptar nuestra contraseña
var mongoosePaginate = require('mongoose-pagination');
var Cell = require('../models/cell');
var Grid = require('../models/grid');
var Game = require('../models/game');
var User = require('../models/user');
var jwt = require('../services/jwt');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una accion del controlador de usuarios del API Rest'
    });
}

let sudoku1 = [[0,0,0,2,6,0,7,0,1],
               [6,8,0,0,7,0,0,9,0],
               [1,9,0,8,3,4,5,6,0],
               [8,2,0,1,0,0,0,4,0],
               [0,0,4,6,0,2,9,0,0],
               [0,5,0,0,0,3,0,2,8],
               [0,0,9,3,0,0,0,7,4],
               [0,4,0,0,5,0,0,3,6],
               [7,0,3,0,1,8,0,0,0]]; // Este es el primer sudoku

let sudoku2 = [[0,0,0,2,6,0,7,0,1],
               [6,8,0,0,7,0,0,9,0],
               [0,9,0,0,3,4,5,6,0],
               [8,2,0,1,0,0,0,4,0],
               [0,0,4,6,0,2,9,0,0],
               [0,5,0,0,0,3,0,2,8],
               [0,0,0,3,0,0,0,7,0],
               [0,4,0,0,5,0,0,3,6],
               [7,0,0,0,1,8,0,0,0]]; // Este es el primer sudoku
            
let sudoku3 = [[0,0,0,2,6,0,0,0,1],
               [0,8,0,0,7,0,0,9,0],
               [1,9,0,8,0,4,5,0,0],
               [0,2,0,1,0,0,0,4,0],
               [0,0,4,6,0,2,9,0,0],
               [0,0,0,0,0,3,0,2,8],
               [0,0,9,3,0,0,0,7,4],
               [0,4,0,0,5,0,0,3,0],
               [7,0,0,0,1,8,0,0,0]]; // Este es el primer sudoku

function insertGrid(req, res) {
    var grid = new Grid();
    grid.data = new Array();

    for(var i=0; i<9; i++) {
        grid.data[i] = new Array();
        for(var j=0; j<9; j++) {
            var cell = new Cell();
            cell.value = sudoku1[i][j];
            cell.row = i;
            cell.col = j;
            cell.error = false;
            cell.lightError = false;
            cell.visible = false;
            cell.fixed = false;
            grid.data[i][j] = cell;
        }
    }
        grid.save((err, gridStored) => {
            if(err) {
                res.status(500).send({message:'Error al guardar el grid'});                        
            } else {
                if(!gridStored) {
                    res.status(404).send({message:'No se ha registrado el grid'});
                } else {
                    res.status(200).send({grid: gridStored});
                }
            }
        });
}

// 59bb188b831ba28a64fd9d4d FACIL
// 59bf0729a0be6dc70f0f8dfa MEDIO
// 59bf0752f8ebcdc737d021bb DIFICIL

function getGrid(req, res) {
    var gridId = req.params.id;
    
        Grid.findById(gridId).populate({path: 'grid'}).exec((err, grid) => {
         if(err) {
             res.status(500).send({message: 'Error en la peticion'});
         } else {
             if(!grid) {
                 res.status(404).send({message: 'El grid no existe'});
             } else {
                 res.status(200).send({grid});
             }
         }
       });
}

function insertGame(req, res) {


    var user = new User();
    var grid = new Grid();
    var game = new Game();

    var params = req.body;
    user.name = params.user.name;
    user.username = params.user.username;
    user.password = params.user.password;
    
    grid.data = params.grid.data;

    game.user = user;
    game.grid = grid;


    // Primero se elimina el juego antiguo
    var userName = user.name;
    Game.findOneAndRemove({'user.name' : userName}, (err, game) => {
        if(!game) {
            console.log('El juego no existe')
        }
     });

                    // Guardar game
                    game.save((err, gameStored) => {
                        if(err) {
                            res.status(500).send({message:'Error al guardar el juego'});                        
                        } else {
                            if(!gameStored) {
                                res.status(404).send({message:'No se ha registrado el juego'});
                            } else {
                                res.status(200).send({game: gameStored});
                            }
                        }
                    });

}

// 59befdd23d513cc0d5b6f542 ID USUARIO

// 59befdd23d513cc0d5b6f543 ID GRID

function getGame(req, res) {
    var userName = req.params.id;
    
        Game.findOne({'user.name': userName}).populate({path: 'game'}).exec((err, game) => {
         if(err) {
             res.status(500).send({message: 'Error en la peticion'});
         } else {
             if(!game) {
                 res.status(404).send({message: 'El game no existe'});
             } else {
                 res.status(200).send({game});
             }
         }
       });
}

// 59bec863507ffd9fb103a873

function getGames(req, res) {
        if(req.params.page) {
            var page = req.params.page;
        } else {
            var page = 1;
        }
    
        var itemsPerPage = 15;
    
        Game.find().paginate(page, itemsPerPage, function (err, games, total){
            if(err){
                res.status(500).send({message: 'Error en la peticion'});
            }else{
                if(!games){
                    res.status(404).send({message: 'No hay games!!!'});
                }else{
                    return res.status(200).send({
                        page: total,
                        games: games
                    });
                }
            }
     });
}

function deleteAllGames(req, res) {
    Game.find().remove( function (err){
        if(err){
            res.status(500).send({message: 'Error en la peticion'});
        }else{
                res.status(404).send({message: 'Juegos eliminados'});
        }
    });
}

module.exports = {
    pruebas,
    insertGrid,
    getGrid,
    insertGame,
    getGame,
    getGames,
    deleteAllGames
};