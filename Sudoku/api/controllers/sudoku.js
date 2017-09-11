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

module.exports = {
    pruebas
};