function Grid(grid) {
    
      this.data = new Array();
    
      var idx = 0;
      for (var row = 0; row < 9; row++) {
        this.data[row] = new Array();
        for (var col = 0; col < 9; col++) {
          this.data[row][col] = grid ?
            new Cell(grid[idx], row, col, grid[idx] > 0) :
            new Cell(0, row, col, false);
          idx++;
        }
      }
      this.getCell = function (row, col) {
        return this.data[row][col];
      }
    
      this.draw = function (size, selectedCell, showPossiblities) {
        fill(255, 255, 255, 255);
        rect(0, 0, size * 9, size * 9);
    
        for (var row = 0; row < 9; row++) {
          for (var col = 0; col < 9; col++) {
            fill(255, 255, 255, 128);
            if (row % 3 === 0 && col % 3 === 0) {
              strokeWeight(3);
              rect(col * size, row * size, size * 3, size * 3);
              strokeWeight(1);
            } 
              // Cambia los colores
            if (this.getCell(row, col) === selectedCell) {
              fill(51, 133, 255, 255);
            } else if (this.getCell(row, col).error) {
              fill(255, 77, 77, 255);
            } else if (this.getCell(row, col).highlight) {
              fill(255, 255, 153, 255);
            } else if (this.getCell(row, col).lightError) {
              fill(255, 102, 102, 50);
            } else {
              fill(255, 255, 255, 128);
            }
            rect(col * size, row * size, size, size);
            if (this.getCell(row, col).error || this.getCell(row, col) === selectedCell) {
              fill(255, 255, 255, 255);
            } else {
              fill(0, 0, 0, 255);
            }
            if (this.getCell(row, col).visible) {
              textSize(20);
              if (this.getCell(row, col).isFixed) {
                textStyle(BOLD);
              } else {
                textStyle(NORMAL);
              }
              text(this.getCell(row, col).number, col * size + size / 4, row * size + size / 1.5);
            } else if (showPossiblities) {
              textSize(8);
              textStyle(NORMAL);
              var str = '';
              for (var p = 0; p < this.getCell(row, col).possibilities.length; p++) {
                str += this.getCell(row, col).possibilities[p];
              }
              text(str, col * size + 5, row * size + size - 10);
            }
            this.getCell(row, col).error = false;
            this.getCell(row, col).lightError = false;
          }
        }
      }
    
    
      this.computeCellPossiblities = function (constraintChecker, cell) {
        cell.possibilities = [];
        var col = constraintChecker.cols[cell.col];
        var row = constraintChecker.rows[cell.row];
        var sqr = constraintChecker.squares[Math.floor(cell.row / 3) + Math.floor(cell.col / 3) + 2 * Math.floor(cell.col / 3)];
    
        for (var n = 1; n <= 9; n++) {
          if (n != cell.number) {
            var isPossible = true;
            for (var idx = 0; idx < 9; idx++) {
              if (col[idx].number === n || row[idx].number === n || sqr[idx].number === n) {
                isPossible = false;
              }
            }
            if (isPossible) {
              cell.possibilities.push(n);
            }
          }
        }
      }
      this.computePossibilities = function (constraintChecker) {
        for (var row = 0; row < 9; row++) {
          for (var col = 0; col < 9; col++) {
            if (!this.getCell(row, col).visible)
              this.computeCellPossiblities(constraintChecker, this.getCell(row, col));
          }
        }
      }
    }
    
    