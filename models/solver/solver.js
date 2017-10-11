let {Range} = require('./range');

class SudokuSolver {
	constructor(sudoku){
		this.initialSudoku = sudoku;
		this.solutions = [];
		this.endOfCalculation = false;
	}
	row(sudoku,x){
		return sudoku[x];
	}
	col(sudoku,y){
		let colum = [];
		sudoku.forEach(x => colum.push(x[y]));
		return colum;
	}
	square3x3(sudoku,x,y){//O(9)
		let arr = [];
		let dx = Math.floor(x/3);
		let dy = Math.floor(y/3);
		let lenI = (dx*3)+3;
		let lenJ = (dy*3)+3;
		for(let i = dx*3; i < lenI ; i++){
			for(let j = dy*3; j <lenJ; j++){
				arr.push(sudoku[i][j]);
			}
		}
		return arr;
	}
	contains(x,y,sudoku){
		let row = this.row(sudoku,x);
		let col = this.col(sudoku,y);
		let square3x3 = this.square3x3(sudoku,x,y);
		let contains = square3x3.concat(row.concat(col));
		contains = contains.filter(x=>x!=0);//quitando 0
		contains = contains.filter((a,b)=>contains.indexOf(a)==b);//quitar repetidos
		return contains;
	}
	emptySpaces(){
		let rand = new Range([]);
		let obj = {};
		for(let i = 0; i < this.initialSudoku.length; i++){
			for(let j = 0; j < this.initialSudoku[0].length; j++){
				if(this.initialSudoku[i][j]==0){
					for(;;){
						let r = rand.nextRandom(0,100);
						if(!obj[r]){
							obj[r] = [i,j];
							break;
						}
					}
				}
			}
		}
		return obj;//[random]=[x,y] //para recorrer los espacios en 0 aleatoriamente
	}
	countEmptySpaces(sudoku){//solo para cuestiones graficas, en realidad el algoritmo no lo usa
		let c = 0;
		for(let i = 0; i < sudoku.length; i++){
			for(let j = 0; j < sudoku[0].length; j++){
				if(sudoku[i][j]<1) c++;
			}
		}
		return c;
	}
	getHash(sudoku){
		if(!sudoku)sudoku = this.initialSudoku;
		let str = "";
		for(let i = 0; i < 9; i++){
			for(let j = 0; j < 9; j++){
				str += sudoku[i][j];
			}
		}
		return str;
	}
	copy(sudoku){//O(81)
		let s = new Array();
		for(let i = 0; i < sudoku.length; i++){
			s.push(new Array());
			for(let j = 0; j < sudoku[0].length; j++){
				s[i].push(sudoku[i][j]);
			}
		}
		return s;
	}
	solvePrint(){
		let count = 0;
		let emptySpaces = this.emptySpaces();
		console.log('length: '+Object.keys(emptySpaces).length);
		console.log(emptySpaces);
		let rsolve = (sudoku,spaces,i)=>{
			if(i==Object.keys(spaces).length)
				return this.solutions.push(sudoku);
			let [x,y] = spaces[Object.keys(spaces)[i]];
			let contains = this.contains(x,y,sudoku);
			let range = new Range(contains);
			console.log(`{contenidos: ${contains}}`);
			console.log(`{posibles: ${[...range]}}`);
			for(let n of range){
				if(this.solutions.length==0){
					setTimeout(()=>{
						sudoku[x][y] = n;
						let c = this.countEmptySpaces(sudoku);
						console.log(`{x:${x}, y:${y}, n:${n}, i:${i}, c:${c}}`);
						let s = this.copy(sudoku);
						console.log(s);
						rsolve(s,spaces,i+1);	
					},1000*count++);
				}
			}
		}
		rsolve(this.initialSudoku,emptySpaces,0);
	}
	solve(){
		let emptySpaces = this.emptySpaces();//n=9, O~(n^2)
		console.log(`espacios en blanco: ${Object.keys(emptySpaces).length}`);
		let rsolve = (sudoku,spaces,i)=>{
			if(i==Object.keys(spaces).length)
				return this.solutions.push(sudoku);
			let [x,y] = spaces[Object.keys(spaces)[i]];
			let contains = this.contains(x,y,sudoku);
			let range = new Range(contains);
			for(let n of range){
				if(this.solutions.length==0){
					sudoku[x][y] = n;
					let s = this.copy(sudoku);//n=9, O~(n^2)
					//console.log(s);
					rsolve(s,spaces,i+1);	
				}
			}
		}
		rsolve(this.initialSudoku,emptySpaces,0);
		this.endOfCalculation = true;
	}
	findSolutions(){
		let emptySpaces = this.emptySpaces();//n=9, O~(n^2)
		console.log(`espacios en blanco: ${Object.keys(emptySpaces).length}`);
		let rsolve = (sudoku,spaces,i)=>{
			if(i==Object.keys(spaces).length)
				return this.solutions.push(sudoku);
			let [x,y] = spaces[Object.keys(spaces)[i]];
			let contains = this.contains(x,y,sudoku);
			let range = new Range(contains);
			for(let n of range){
				sudoku[x][y] = n;
				let s = this.copy(sudoku);//n=9, O~(n^2)
				//console.log(s);
				rsolve(s,spaces,i+1);	
			}
		}
		rsolve(this.initialSudoku,emptySpaces,0);
		this.endOfCalculation = true;
	}
}

console.reset = function () {
  return process.stdout.write('\033c');
}

module.exports = { SudokuSolver }