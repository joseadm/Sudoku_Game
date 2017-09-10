import { User } from './user';
import { Grid } from './grid';

export class Game {
    user: User;
    grid: Grid;
    selectedCell: any;
    constructor(user: User, grid: Grid) {
        this.user = user;
        this.grid = grid;
    }
    toString() {
        console.log(this.user.name+"\n");
        console.log(this.grid.toString());
    }
    checkGrid() {
        return this.grid.check();
    }
    setCellValue(cell, value) {
        if (!cell.fixed && value >= 0 && value <= 10) {
          cell.setValue(value);
          this.setSelectedCell(cell);
          this.grid.toString();
        }
      }
    setSelectedCell(cell) {
        this.selectedCell = cell;
        for (var row = 0; row < 9; row++) {
          for (var col = 0; col < 9; col++) {
            this.grid.getCell(row, col).highlight = (this.grid.getCell(row, col).value === cell.value);
          }
        }
      }
      getCellAt(x, y) {
        var row = Math.floor(y / 50);
        var col = Math.floor(x / 50);
        if (row < 0 || row > 8 || col < 0 || col > 8) {
          return undefined;
        } else {
          return this.grid.getCell(row, col);
        }
    
      }
}
