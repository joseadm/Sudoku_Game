'use strict'

var fs = require('fs');
var path = require('path');
var bcrypt = require('bcrypt-nodejs'); // Encriptar nuestra contraseña
var User = require('../models/user');
var jwt = require('../services/jwt');

function save_user(req, res) {
    var user = new User();

    var params = req.body;

    user.name = params.name;
    user.username = params.username;

    if(params.password) {
        // Encriptar contraseña y guardar datos 
        bcrypt.hash(params.password, null, null, function(err, hash) {
            user.password = hash;
            if(user.name != null && user.username != null) {
                // Guardar el usuario
                user.save((err, userStored) => {
                    if(err) {
                        res.status(500).send({message:'Error al guardar el usuario'});                        
                    } else {
                        if(!userStored) {
                            res.status(404).send({message:'No se ha registrado el usuario'});
                        } else {
                            res.status(200).send({user: userStored});
                        }
                    }
                });
            } else {
                res.status(200).send({message:'Rellena todos los campos'});                
            }
        });
    } else {
        res.status(200).send({message:'Introduce la contraseña'});
    }
}

function login_user(req, res) {
    var params = req.body;

    var username = params.username;
    var password = params.password;

    User.findOne({username: username.toLowerCase()}, (err, user) => {
        if(err) res.status(500).send({message: 'Error en la peticion'});
        else {
            if(!user) res.status(404).send({message: 'El usuario no existe'});
            else {
                // Comprobar la contraseña
                bcrypt.compare(password, user.password, (err, check) => {
                    if(check) {
                        if(params.gethash) {
                            // Devolver un token de jwt
                            res.status(200).send({
                                token: jwt.createToken(user)
                            });
                        } else {
                            res.status(200).send({user});
                        }
                    } else {
                        res.status(404).send({message:'El usuario no ha podido loguearse'});
                    }
                });
            }
        }
    });
}

function updateUser(req, res){
    var userId = req.params.id;
    var update = req.body;

    if(userId != req.user.sub) {
        return res.status(500).send({message: 'No tienes permiso'});
    }

    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if(err) {
            res.status(500).send({message: 'Error al actualizar'});
        } else {
            if(!userUpdated) {
                res.status(404).send({message: 'No se ha podido actualizar'});
            } else {
                res.status(200).send({user: userUpdated});
            }
        }
    });
}

function findUser(req, res) {
    var userId = req.params.id;

    User.findById(userId, (err, user) => {
        if(err) {
            res.status(500).send({message: 'Error al econtrar'});
        } else {
            if(!user) {
                res.status(404).send({message: 'No se ha podido encontrar'});
            } else {
                res.status(200).send({user});
            }
        }
    });
}

module.exports = {
    save_user,
    login_user,
    updateUser,
    findUser
};