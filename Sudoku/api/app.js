'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar las rutas

var user_routes = require('./routes/user');
var sudoku_routes = require('./routes/sudoku');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar las cabeceras http

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONES, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Carga de rutas base 
app.use('/api', user_routes);
app.use('/api', sudoku_routes);


module.exports = app;