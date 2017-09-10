"use strict";
exports.__esModule = true;
var Cell = /** @class */ (function () {
    function Cell(value, row, col) {
        this.value = value;
        this.row = row;
        this.col = col;
    }
    Cell.prototype.setValue = function (value) {
        this.value = value;
    };
    Cell.prototype.getValue = function () {
        return this.value;
    };
    return Cell;
}());
exports.Cell = Cell;
