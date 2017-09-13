'use strict'

var fs = require('fs');
var path = require('path');
var bcrypt = require('bcrypt-nodejs'); // Encriptar nuestra contraseña
var Cell = require('../models/cell');
var Grid = require('../models/grid');
var Game = require('../models/game');
var jwt = require('../services/jwt');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una accion del controlador de usuarios del API Rest'
    });
}

let sudoku1 = [[4,3,5,2,6,9,7,8,1],
               [6,8,2,5,7,1,4,9,3],
               [1,9,7,8,3,4,5,6,2],
               [8,2,6,1,9,5,3,4,7],
               [3,7,4,6,8,2,9,1,5],
               [9,5,1,7,4,3,6,2,8],
               [5,1,9,3,2,6,8,7,4],
               [2,4,8,9,5,7,1,3,6],
               [7,6,3,4,1,8,2,5,9]]; // Este es el primer sudoku

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
                    res.status(200).send({user: gridStored});
                }
            }
        });
}
// 59b959d1c1baa84decf8fe74
// 59b960d968e1cf51bcc561bf
// 59b975b4cfda725d6aa16179
// 59b976e815cd525e06ea9f92

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

module.exports = {
    pruebas,
    insertGrid,
    getGrid
};