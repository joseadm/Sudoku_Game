/*
	author: Adrian Prendas Araya
*/
export class Range implements IterableIterator<number>{
	index: number;
	conjunto: Array<number>;
	posibles: Array<number>;
	existentes: Array<number>;
	constructor(arr:any){
		this.index = 0;
		this.existentes = arr;
		this.conjunto = [1,2,3,4,5,6,7,8,9];
		this.posibles = this.conjunto.filter(x => arr.indexOf(x)==-1);
	}

	[Symbol.iterator](): IterableIterator<number> {
    	return this;
  	}
	public next(): IteratorResult<number> {
		if(this.index<this.posibles.length)
			return {done: false, value: this.posibles[this.index++]}
		this.index = 0;
		return { value: undefined, done: true }
	}

	nextRandom(min:number, max:number){//floor, sin decimales//(max-min)+min
		return Math.floor(Math.random() * (max - min)) + min;
	}
}
