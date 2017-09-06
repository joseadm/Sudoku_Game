function ConstraintChecker() {
  this.rows = new Array();
  this.cols = new Array();
  this.squares = new Array();

  this.initialize = function (grid) {
    for (var idx = 0; idx < 9; idx++) {
      this.rows[idx] = new Array();
      this.cols[idx] = new Array();
      this.squares[idx] = new Array();
    }

    var idx = 0;
    for (var row = 0; row < 9; row++) {
      for (var col = 0; col < 9; col++) {
        this.rows[row].push(grid.getCell(row, col));
        this.cols[col].push(grid.getCell(row, col));
        idx++;
      }
    }
    for (var row = 0; row < 9; row++) {
      for (var col = 0; col < 9; col++) {
        var indexSqr = Math.floor(row / 3) + Math.floor(col / 3) + 2 * Math.floor(col / 3);
        this.squares[indexSqr].push(grid.getCell(row, col));
      }
    }
  }

  this.isValid = function (arr) {
    var valid = true;
    var elems = [];
    var cells = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].visible) {
        if (elems.indexOf(arr[i].number) === -1) {
          elems.push(arr[i].number);
          cells.push(arr[i]);
        } else {
          var cell1 = arr[i];
          var cell2 = cells[elems.indexOf(arr[i].number)];
          cell1.error = true;
          cell2.error = true;
          valid = false;
          break;
        }
      }
    }
    return valid;
  }

  this.check = function (grid) {
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
          if (grid.getCell(row, col).number < 1)
            completed = false;
        }
      }
    }
    return completed;
  }
}