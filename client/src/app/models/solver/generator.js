/*
  erick?? o interne!???
*/
const {Range} = require('./range');
let {nextRandom} = require('./test_sudoku');

class Generator{
  constructor(){
    this.board = new Board();  
  }
  newSudoku(){
    this.board.start();
  }
  validate(){
    this.board.validate();
  }
  getSudoku(){
    return this.board.sudoku;
  }
  dispertion(difficulty){
    var emptySpaces = 0;
    switch(difficulty){
      case 'easy':emptySpaces = 42; break;
      case 'medium':emptySpaces = 47; break;
      case 'hard':emptySpaces = 52; break;
      default: return this.dispertion('medium');
    }
    return this.board.dispertion(emptySpaces);
  }
}


class Board{
  constructor(){
    this.grid   = new Grid();
    this.sudoku = new Array();  
  }
  start(){
    this.generateSudoku();
  }
  solucion(){
    var i = 0;
    var j = 0;
    for ( i=0; i<9; i++){
      for( j=0; j<9; j++){
        console.log(this.sudoku[i][j]+". ");
      }
    }
  }
  generateSudoku(){
    this.initSudoku();
    this.generateCell(0);
  }
  initSudoku(){
    for (var row = 0; row < this.grid.rows; ++ row)
      this.sudoku[row] = new Array(this.grid.cols);
  }
  generateCell(id){
    if (id == this.grid.rows * this.grid.cols) 
      return(true);
    
    var row  = Math.floor(id / this.grid.rows);
    var col  = id - (row * this.grid.rows)
    var suit = this.shuffle(this.grid.suit);
    
    for (var index in suit) {
      this.sudoku[row][col] = suit[index];

      if ( this.isValidCell(row, col) )
        if ( this.generateCell(id + 1) )
          return(true);
    }

    this.sudoku[row][col] = null;
    return(false);
  }
  isValidCell(row, col){
    return( this.isValidRow(row, col) &&
            this.isValidColumn(row, col) &&
            this.isValidRegion(row, col) );
  }
  isValidRow(row, col){
    var count = new Array();
    for (var c = 0; c <= col; ++ c) {
      if (count[ this.sudoku[row][c] ] != null)
        return(false);
      count[ this.sudoku[row][c] ] = 1;
    }
    return(true);
  }
  isValidColumn(row, col){
    var count = new Array();
    for (var r = 0; r <= row; ++ r) {
      if (count[ this.sudoku[r][col] ] != null)
        return(false);
      count[ this.sudoku[r][col] ] = 1;
    }
    return(true);
  }
  isValidRegion(row, col){
    var count = new Array();
    var rowi  = this.grid.region * Math.floor(row / this.grid.region);
    var coli  = this.grid.region * Math.floor(col / this.grid.region);

    for (var r = rowi; r <= row; ++ r)
      for (var c = coli; c <= col; ++ c) {
        if ( count[ this.sudoku[r][c] ] != null)
          return(false);
        count[ this.sudoku[r][c] ] = 1;
      }

    return(true);
  }
  isValidSudoku(){
    var cells = this.grid.getCellValues();

    var valid = true;
    for (var row in this.sudoku)
      for (var col in this.sudoku[row])
        if (cells[row][col] != this.sudoku[row][col]) {
          valid = false;
          break;
        }
        
    return(valid);
  }
  shuffle(suit){
    for (var i in suit)
      suit = swap(suit, i, Math.floor( Math.random() * suit.length ) );
    return(suit);
  }
  copy(sudoku){
    let s = new Array();
    for(let i = 0; i < sudoku.length; i++){
      s.push(new Array());
      for(let j = 0; j < sudoku[0].length; j++){
        s[i].push(sudoku[i][j]);
      }
    }
    return s;
  }
  dispertion(emptySpaces){
    let sudoku = this.copy(this.sudoku);
    for(;emptySpaces!=0;){
        let x = nextRandom(0,8)
        let y = nextRandom(0,8)
        if(sudoku[x][y]!=0){
          sudoku[x][y]=0;
          emptySpaces--;
        }
    }
    return sudoku;
  }
}


class Grid{
  constructor(){
    this.rows   = 9;
    this.cols   = 9;
    this.region = 3;
    this.spans  = new Array(4, 4, 4, 3, 3, 3, 2, 2, 2);
    this.tips   = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8);
    this.suit   = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  return(array);
}

module.exports ={
  Generator
}