function Sudoku(size) {
    this.size = size;
    this.grid = new Grid();
    this.constraintChecker = new ConstraintChecker();
    this.selectedCell = null;
    this.showPossiblities = false;

    this.initGrid = function (grid) {
      this.constraintChecker.initialize(grid);
      this.setSelectedCell(this.grid.getCell(4, 4));
    }
  
    this.generateGrid = function (difficulty) {
      var gridGenerator = new GridGenerator();
      this.grid = gridGenerator.generateNewGrid(difficulty);
      this.initGrid(this.grid);
    }
  
    this.checkGrid = function () {
      if (this.constraintChecker.check(this.grid)) {
        fill(50, 255, 50, 128);
        rect(0, 0, 9 * this.size, 9 * this.size);
      }
    }
  
    this.drawGrid = function () {
      this.grid.draw(this.size, this.selectedCell, this.showPossiblities);
    }
  
    this.getCellAt = function (x, y) {
      var row = Math.floor(y / this.size);
      var col = Math.floor(x / this.size);
      if (row < 0 || row > 8 || col < 0 || col > 8) {
        return undefined;
      } else {
        return this.grid.getCell(row, col);
      }
  
    }
    this.moveSelection = function (direction) {
      if (this.selectedCell) {
        var row = this.selectedCell.row;
        var col = this.selectedCell.col;
        switch (direction) {
          case 0:
            this.setSelectedCell(this.grid.getCell(Math.max(0, row - 1), col));
            break;
          case 1:
            this.setSelectedCell(this.grid.getCell(row, Math.min(8, col + 1)));
            break;
          case 2:
            this.setSelectedCell(this.grid.getCell(Math.min(8, row + 1), col));
            break;
          case 3:
            this.setSelectedCell(this.grid.getCell(row, Math.max(0, col - 1)));
            break;
        }
      }
    }
    this.setSelectedCell = function (cell) {
      this.selectedCell = cell;
      for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
          this.grid.getCell(row, col).highlight = cell.visible ? (this.grid.getCell(row, col).number === cell.number) : false;
        }
      }
    }
    this.setCellValue = function (cell, value) {
      if (!cell.isFixed && value >= 0 && value <= 10) {
        cell.setNumber(value);
        this.setSelectedCell(cell);
        this.grid.computePossibilities(this.constraintChecker);
      }
    }
  
    this.setShowPossiblities = function (value) {
      this.grid.computePossibilities(this.constraintChecker);
      this.showPossiblities = value;
    }
  }