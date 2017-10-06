'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean', { useMongoClient: true})
    .then(() => {
        console.log('La conexion a la base de datos se realizo correctamente...');
        app.listen(port, () => {
            console.log("El servidor local estan corriendo en localhost "+port);
        });
    })
    .catch(err => console.log(err));
