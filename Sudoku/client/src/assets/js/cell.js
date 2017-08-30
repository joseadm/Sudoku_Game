function Cell(value, row, col, fixed) {
      this.setNumber = function (value) {
        this.number = value % 10;
        this.visible = this.number > 0;
      }
      this.row = row;
      this.col = col;
      this.setNumber(value);
      this.error = false;
      this.lightError = false;
      this.isFixed = fixed;
      this.highlight = false;
      this.possibilities = [];
    }