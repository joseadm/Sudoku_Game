import { Cell } from './cell';

export class Grid {
    data: Array<any>;
    constructor() {
        this.data = new Array();
        for(var i=0; i<9; i++) {
            this.data[i] = new Array();
            for(var j=0; j<9; j++) {
                this.data[i][j] = new Cell(0,i,j);
            }
        }
    }
    setCell(value, row, col) {
        this.data[row][col] = value;
    }
    getCell(row, col) {
        return this.data[row][col];
    }
    toString() {
        var cadena = "";
        for(var i=0; i<9; i++) {
            for(var j=0; j<9; j++) {
                cadena += '|'+this.data[i][j].getValue()+"|";
                if(j==8) cadena += '\n';
            }
        }
        console.log(cadena);
    }
}

