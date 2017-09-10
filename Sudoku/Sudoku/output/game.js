"use strict";
exports.__esModule = true;
var user_1 = require("./user");
var grid_1 = require("./grid");
var Game = /** @class */ (function () {
    function Game(user, grid) {
        this.user = user;
        this.grid = grid;
    }
    Game.prototype.toString = function () {
        console.log(this.user.getName() + "\n");
        console.log(this.grid.toString());
    };
    return Game;
}());
var user = new user_1.User('Jose', 'jdelgado', 'macros98');
var grid = new grid_1.Grid();
var game = new Game(user, grid);
game.toString();
