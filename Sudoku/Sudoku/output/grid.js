"use strict";
exports.__esModule = true;
var cell_1 = require("./cell");
var Grid = /** @class */ (function () {
    function Grid() {
        this.data = new Array();
        for (var i = 0; i < 9; i++) {
            this.data[i] = new Array();
            for (var j = 0; j < 9; j++) {
                this.data[i][j] = new cell_1.Cell(0, i, j);
            }
        }
    }
    Grid.prototype.setCell = function (value, row, col) {
        this.data[row][col] = value;
    };
    Grid.prototype.getCell = function (row, col) {
        return this.data[row][col];
    };
    Grid.prototype.toString = function () {
        var cadena = "";
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                cadena += '|' + this.data[i][j].getValue() + "|";
                if (j == 8)
                    cadena += '\n';
            }
        }
        console.log(cadena);
    };
    return Grid;
}());
exports.Grid = Grid;
