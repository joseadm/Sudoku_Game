import { Cell } from './cell';
import { Range } from './range';

export class Grid {
    data: Array<any>;
    rows: Array<any>;
    cols: Array<any>;
    squares: Array<any>;
    range: Array<any>;

    constructor() {
        this.data = new Array();
        this.rows = new Array();
        this.cols = new Array();
        this.squares = new Array();
        this.range = Array.from({length : 9}, (_, i) => i);

        this.range.forEach((i)=> {
            this.data[i] = new Array();
            this.range.forEach((j)=> {
                this.data[i][j] = new Cell(0,i,j);
            });
          });
        this.checker();
    }
    createSpaces() {
      this.range.forEach((row)=> {
        this.range.forEach((col)=> {
          this.getCell(row, col).fixed = this.getCell(row, col).value != 0;
          this.getCell(row, col).visible = this.getCell(row, col).value != 0;
        });
      });
    }

    showSpaces() {
      this.range.forEach((row)=> {
        this.range.forEach((col)=> {
          this.getCell(row, col).visible = this.getCell(row, col).value != 0;
        });
      });
    }

    setCell(value, row, col) {
        this.data[row][col].value = value;
    }
    getCell(row: any, col: any) {
        return this.data[row][col];
    }

    checker() {
      this.range.forEach((idx)=> {
            this.rows[idx] = new Array();
            this.cols[idx] = new Array();
            this.squares[idx] = new Array();
          });
          var idx = 0;
          this.range.forEach((row)=> {
            this.range.forEach((col)=> {
              this.rows[row].push(this.getCell(row, col));
              this.cols[col].push(this.getCell(row, col));
              idx++;
            });
          });
          this.range.forEach((row)=> {
            this.range.forEach((col)=> {
              var indexSqr = Math.floor(row / 3) + Math.floor(col / 3) + 2 * Math.floor(col / 3);
              this.squares[indexSqr].push(this.getCell(row, col));
            });
          });
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
        this.range.forEach((i)=> {
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
        });
    
        if (!error) {
          var completed = true;
          this.range.forEach((row)=> {
            this.range.forEach((col)=> {
              if (this.getCell(row, col).value < 1)
                completed = false;
            });
          });
        }
        return completed;
      }
      emptySpaces(){
        let obj = {};
        let rand = new Range([]);
        for(let row=0;row<9;row++){
          for(let col=0;col<9;col++){
            if (this.getCell(row, col).value ==0)
              for(;;){
                let r = rand.nextRandom(0,100)
                if(!obj[r]){
                  obj[r] = [row,col];
                  break;
                }
              }
            }  
          }
          //console.log("empty Spaces: ");
          //console.log(obj);
          return obj;
        }
        gridToMatriz(grid){
          grid = grid.grid;
          var arr = []
          for(let k of grid.data){
              k.forEach(cell=>{arr.push(cell.value)})
          }
          
          let sudoku = new Array();
          for(let i = 0; i < 9; i++){
              sudoku.push(new Array());
              for(let j = 0; j < 9; j++){
                  sudoku[i].push(arr.shift());
              }
          }
          return sudoku;
        }
        matrizToGrid(sudoku){
          let grid = new Grid();
          grid.data = new Array();
          for(var i=0; i<9; i++) {
            grid.data[i] = new Array();
            for(var j=0; j<9; j++) {              
              var cell = new Cell(sudoku[i][j],i,j);
              cell.error = false;
              cell.lightError = false;
              cell.visible = false;
              cell.fixed = false;
              grid.data[i][j] = cell;
            }
          }
          return grid;
        }
}

