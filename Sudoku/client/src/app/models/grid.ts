import { Cell } from './cell';

export class Grid {
    data: Array<any>;
    rows: Array<any>;
    cols: Array<any>;
    squares: Array<any>;

    constructor() {
        this.data = new Array();
        this.rows = new Array();
        this.cols = new Array();
        this.squares = new Array();
        for(var i=0; i<9; i++) {
            this.data[i] = new Array();
            for(var j=0; j<9; j++) {
                this.data[i][j] = new Cell(0,i,j);
            }
        }
        this.checker();
    }
    createSpaces() {
      for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
          this.getCell(row, col).fixed = this.getCell(row, col).value != 0;
          this.getCell(row, col).visible = this.getCell(row, col).value != 0;
        }
      }
    }

    showSpaces() {
      for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
          this.getCell(row, col).visible = this.getCell(row, col).value != 0;
        }
      }
    }

    setCell(value, row, col) {
        this.data[row][col].value = value;
    }
    getCell(row: any, col: any) {
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
    checker() {
        for (var idx = 0; idx < 9; idx++) {
            this.rows[idx] = new Array();
            this.cols[idx] = new Array();
            this.squares[idx] = new Array();
          }
          var idx = 0;
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              this.rows[row].push(this.getCell(row, col));
              this.cols[col].push(this.getCell(row, col));
              idx++;
            }
          }
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              var indexSqr = Math.floor(row / 3) + Math.floor(col / 3) + 2 * Math.floor(col / 3);
              this.squares[indexSqr].push(this.getCell(row, col));
            }
          }
    }
    isValid(array: any) {
        var valid = true;
        var elems = [];
        var cells = [];
        for (var i = 0; i < array.length; i++) {
          if (array[i].visible) {
            if (elems.indexOf(array[i].value) === -1) {
              elems.push(array[i].value);
              cells.push(array[i]);
            } else {
              var cell1 = array[i];
              var cell2 = cells[elems.indexOf(array[i].value)];
              cell1.error = true;
              cell2.error = true;
              valid = false;
              break;
            }
          }
        }
        return valid;
      }
      check() {
        var error = false;
        for (var i = 0; i < 9; i++) {
          //Check squares
          if (!this.isValid(this.squares[i])) {
            error = true;
            var x = Math.floor(i / 3) * 3;
            var y = i % 3 * 3;
            for (var j = 0; j < this.squares[i].length; j++) {
              this.squares[i][j].lightError = true;
            }
          }
          //Check rows
          if (!this.isValid(this.rows[i])) {
            error = true;
            for (var j = 0; j < this.rows[i].length; j++) {
              this.rows[i][j].lightError = true;
            }
          }
          //Check cols
          if (!this.isValid(this.cols[i])) {
            error = true;
            for (var j = 0; j < this.cols[i].length; j++) {
              this.cols[i][j].lightError = true;
            }
          }
        }
    
        if (!error) {
          var completed = true;
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              if (this.getCell(row, col).value < 1)
                completed = false;
            }
          }
        }
        return completed;
      }
}

