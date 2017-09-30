import { User } from './user';
import { Grid } from './grid';

export class Game {
    user: User;
    grid: Grid;
    selectedCell: any;
    range: Array<any>;
    
    constructor(user: User, grid: Grid) {
        this.user = user;
        this.grid = grid;
        this.range = Array.from({length : 9}, (_, i) => i);
    }
    checkGrid() {
        return this.grid.check();
    }
    setCellValue(cell, value) {
        if (!cell.fixed && value >= 0 && value <= 10) {
          cell.setValue(value);
          this.setSelectedCell(cell);
        }
      }
    setSelectedCell(cell) {
        this.selectedCell = cell;
        this.range.forEach((row)=> {
          this.range.forEach((col)=> {
            this.grid.getCell(row, col).highlight = (this.grid.getCell(row, col).value === cell.value);
          });
        });
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
      moveSelection(direction) {
        if (this.selectedCell) {
          var row = this.selectedCell.row;
          var col = this.selectedCell.col;
          switch (direction) {
            case 0:
              // Si la direccion es UP_ARROW
              this.setSelectedCell(this.grid.getCell(Math.max(0, row - 1), col));
              break;
            case 1:
              // Si la direccion es RIGHT_ARROW
              this.setSelectedCell(this.grid.getCell(row, Math.min(8, col + 1)));
              break;
            case 2:
              // Si la direccion es LEFT_ARROW
              this.setSelectedCell(this.grid.getCell(Math.min(8, row + 1), col));
              break;
            case 3:
              // Si la direccion es BACK_ARROW
              this.setSelectedCell(this.grid.getCell(row, Math.max(0, col - 1)));
              break;
          }
        }
      }
}
