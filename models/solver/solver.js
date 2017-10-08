/*
	author: Adrian Prendas Araya
*/
let {Range} = require('./range');

class SudokuSolver {
	constructor(s){
		this.rows = s;
		this.solution = undefined;
	}
	row(sudoku,x){
		return sudoku[x];
	}
	col(sudoku,y){
		let colum = [];
		sudoku.forEach(x => colum.push(x[y]));
		return colum;
	}
	square3x3(sudoku,x,y){
		let s = 0;
		let square = new Array();
		for(let i = 0; i < 3; i++){
			square.push(new Array());
		}
		let dx = Math.floor(x/3);
		let dy = Math.floor(y/3);
		for(let i = 0; i < sudoku.length; i++){
			for(let j = 0; j < sudoku[0].length; j++){
				if(dx == Math.floor(i/3) && dy == Math.floor(j/3)){
					if(square[s].length == 3) s++;
					square[s].push(sudoku[i][j]);
				}
			}
		}
		let arr = [];
		for(let l of square)
			arr = arr.concat(l);
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
		for(let i = 0; i < this.rows.length; i++){
			for(let j = 0; j < this.rows[0].length; j++){
				if(this.rows[i][j]==0){
					for(;;){
						let r = rand.nextRandom(0,100);
						if(!obj[r]){
							obj[r] = {position:[i,j]};
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
	completed(sudoku){
		for(let i = 0; i < sudoku.length; i++){
			for(let j = 0; j < sudoku[0].length; j++){
				if(sudoku[i][j]<1) return false;
			}
		}
		return true;
	}
	copy(sudoku){
		let s = new Array();
		for(let i = 0; i < sudoku.length; i++){
			s.push(new Array());
			for(let j = 0; j < sudoku[0].length; j++){
				s[i].push(sudoku[i][j]);
			}
		}
		return s;
	}
	solve(){
		let emptySpaces = this.emptySpaces();
		let rsolve = (sudoku,spaces,i)=>{
			if(i==Object.keys(spaces).length)return;
			let [x,y] = spaces[Object.keys(spaces)[i]].position;
			let contains = this.contains(x,y,sudoku);
			let range = new Range(contains);
			for(let n of range){
				if(!this.solution){
					sudoku[x][y] = n;
					if(this.completed(sudoku))this.solution = sudoku;
					let s = this.copy(sudoku);
					rsolve(s,spaces,i+1);	
				}
			}
		}
		rsolve(this.rows,emptySpaces,0);
	}
	resolver(){
		let count = 0;
		let emptySpaces = this.emptySpaces();
		console.log('length: '+Object.keys(emptySpaces).length);
		console.log(emptySpaces);
		let rsolve = (sudoku,spaces,i)=>{
			if(i==Object.keys(spaces).length)return;
			let [x,y] = spaces[Object.keys(spaces)[i]].position;
			let contains = this.contains(x,y,sudoku);
			let range = new Range(contains);
			console.log(`{contenidos: ${contains}}`);
			console.log(`{posibles: ${[...range]}}`);
			for(let n of range){
				if(!this.solution){
					setTimeout(()=>{
						sudoku[x][y] = n;
						if(this.completed(sudoku))this.solution = sudoku;
						let c = this.countEmptySpaces(sudoku);
						console.log(`{x:${x}, y:${y}, n:${n}, i:${i}, c:${c}}`);
						let s = this.copy(sudoku);
						console.log(s);
						rsolve(s,spaces,i+1);	
					},10*count++);
				}
			}
		}
		setTimeout(()=>{
			rsolve(this.rows,emptySpaces,0);
		},5000);
	}
}

module.exports = { SudokuSolver }