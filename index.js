'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jose:macros98@ds159344.mlab.com:59344/sudoku', { useMongoClient: true})
    .then(() => {
        console.log('La conexion a la base de datos se realizo correctamente...');
        app.listen(port, () => {
            console.log("El servidor local estan corriendo...");
        });
    })
    .catch(err => console.log(err));
