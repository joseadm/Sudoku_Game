/*
	author: Adrian Prendas Araya
*/
class Range{
	constructor(arr){
		this.index = 0;
		this.existentes = arr;
		this.conjunto = [1,2,3,4,5,6,7,8,9];
		this.posibles = this.conjunto.filter(x => arr.indexOf(x)==-1);
	}
	next(){
		if(this.index<this.posibles.length)
			return {done: false, value: this.posibles[this.index++]}
		this.index = 0;
		return { value: undefined, done: true }
	}
	nextRandom(min, max){//floor, sin decimales//(max-min)+min
		return Math.floor(Math.random() * (max - min)) + min;
	}
	[Symbol.iterator](){
    	return this;
  	}
}

module.exports = {Range}
