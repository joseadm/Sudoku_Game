function GridGenerator() {
  this.generateNewGrid = function (nbHoles) {
    var grid = this.generateNewFullGrid();
    this.createHoles(grid, nbHoles);
    return grid;
  }
  this.generateNewFullGrid = function () {
    var success = true;
    var constraintChecker = new ConstraintChecker();
    do {
      grid = new Grid();
      constraintChecker.initialize(grid);

      var nbVisible = 0;
      var nItt = 0;
      var success = true;
      do {
        nItt++;
        nbVisible = 0;
        for (var row = 0; row < 9; row++) {
          for (var col = 0; col < 9; col++) {
            if (!grid.getCell(row, col).visible) {
              grid.computeCellPossiblities(constraintChecker, grid.getCell(row, col));
            } else {
              nbVisible++;
            }
          }
        }
        //On parcourt la grille
        var selectedCases = [];
        var minPossibilities = 10;
        for (var row = 0; row < 9; row++) {
          for (var col = 0; col < 9; col++) {
            //On cherche les cases ayant le moins d'options
            var cell = grid.getCell(row, col);
            if (!cell.visible) {
              if (cell.possibilities.length < minPossibilities) {
                selectedCases = [];
                minPossibilities = cell.possibilities.length;
                selectedCases.push(cell);
              } else if (cell.possibilities.length = minPossibilities) {
                selectedCases.push(cell);
              }
            }
          }
        }
        //On selectionne la premiere case
        var cell = selectedCases[0];
        //On prend un chiffre aléatoire
        cell.setNumber(cell.possibilities[Math.floor(random(cell.possibilities.length))])
        //Si une case n'a plus de probabilité, on choisit un autre chiffre et on supprime l'ancien des probas
        var blank = false;
        for (var row = 0; row < 9; row++) {
          for (var col = 0; col < 9; col++) {
            if (!grid.getCell(row, col).visible) {
              grid.computeCellPossiblities(constraintChecker, grid.getCell(row, col));
              if (grid.getCell(row, col).possibilities.length === 0) {
                blank = true;
              }
            }
          }
        }
        //Si une case n'a plus de probabilité, on annule l'opération
        if (blank) {
          cell.setNumber(0);
        }
        //Si on a fait plus de 10000 ittérations, on abandonne
        if (nItt > 10000) {
          success = false;
          console.log("Can't solve grid, generating a new one...")
          break;
        }
      } while (nbVisible < 80);

    } while (!success);
    return grid;
  }

  this.createHoles = function (grid, nbHoles) {
    for (var n = 0; n < nbHoles; n++) {
      var row = Math.floor(random(9));
      var col = Math.floor(random(9));
      grid.getCell(row, col).setNumber(0);
    }
    for (var row = 0; row < 9; row++) {
      for (var col = 0; col < 9; col++) {
        grid.getCell(row, col).isFixed = grid.getCell(row, col).number != 0;
      }
    }
  }
} 