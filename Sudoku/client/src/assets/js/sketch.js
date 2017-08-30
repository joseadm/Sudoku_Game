
// Variables iniciales
var sudoku;
var nbHoles = 60;


// Crea un nuevo grid
function newGrid() {
    setup();
    draw();
}

// Controla la configuracion del grid
function setup() {
  var csv = createCanvas(451, 451);
  background(240);
  sudoku = new Sudoku(50);
  sudoku.generateGrid(nbHoles);
  csv.position(400, 145);
}

// Dibuja el grid
function draw() {
  frameRate(15);
  sudoku.drawGrid();
  sudoku.checkGrid();
}

// Maneja los clicks

function mousePressed() {
  var x = mouseX;
  var y = mouseY;

  var cell = sudoku.getCellAt(x, y);
  if (cell !== undefined) {
    if (cell === sudoku.selectedCell) {
      sudoku.setCellValue(cell, ((sudoku.selectedCell.number + 1) % 10));
    } else {
      sudoku.setSelectedCell(cell);
    }
  }
}

// Maneja el teclado

function keyPressed() {
  if (keyCode === UP_ARROW) {
    sudoku.moveSelection(0)
  } else if (keyCode === RIGHT_ARROW) {
    sudoku.moveSelection(1);
  } else if (keyCode === DOWN_ARROW) {
    sudoku.moveSelection(2);
  } else if (keyCode === LEFT_ARROW) {
    sudoku.moveSelection(3);
  } else if (keyCode === 96 || keyCode === 48 || keyCode === BACKSPACE || keyCode === DELETE || keyCode === RETURN || keyCode === ESCAPE) {
    sudoku.setCellValue(sudoku.selectedCell, 0);
  } else if (keyCode >= 49 && keyCode <= 57) {
    sudoku.setCellValue(sudoku.selectedCell, keyCode - 48);
  } else if (keyCode >= 97 && keyCode <= 105) {
    sudoku.setCellValue(sudoku.selectedCell, keyCode - 96);
  } else {
    sudoku.setShowPossiblities(!sudoku.showPossiblities);
  }
}