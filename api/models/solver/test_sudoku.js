const {ArrayOfSudokus} = require('./sudokus');
const {SudokuSolver} = require('./solver');
const {Range} = require('./range');

console.reset = function () {
  return process.stdout.write('\033c');
}

function clock(start) {
    if ( !start ) return process.hrtime();
    var end = process.hrtime(start);
    return Math.round((end[0]*1000) + (end[1]/1000000));
}


function test(sudoku_name){//[sudoku0, sudoku1, sudoku2, sudoku_easy, sudoku_medium, sudoku_hard]
	
	if(!sudoku_name){
		console.log(`el sudoku '${sudoku_name}' no existe`);
		console.log(`pruebe los siguientes sudokus:`);
		console.log(`${ArrayOfSudokus().map(x=>console.log(`'${Object.keys(x)[0]}'`))}`);
		console.log(`\nejecute:\ntest('sudoku_name')`);
		return;
	}

	let sudoku = ArrayOfSudokus().find(x=>x[sudoku_name])

	console.log('************Sudoku Inicial************');
	console.log(sudoku);
	console.log('**************************************');
	let board = new SudokuSolver(sudoku[sudoku_name]);
	
	let start = clock();
	board.solve();
	let duration = clock(start);	
	
	
	console.log(`solucion`);
	console.log(board.solutions[0]);	
	console.log(`tiempo de resolucion: 	${duration}ms,	${duration/1000}seg,	${(duration/1000)/60}min`);


	start = clock();
	board.findSolutions();
	duration = clock(start);	
	
	
	console.log(`soluciones`);
	console.log(board.solutions);	
	console.log(`tiempo de resolucion: 	${duration}ms,	${duration/1000}seg,	${(duration/1000)/60}min`);

}

module.exports={
	test,
	clock
};